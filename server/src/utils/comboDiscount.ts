import { comboLists } from "../controllers/combo";

export const checkDiscount = (arr): number => {
  const res = {};
  arr.forEach((obj) => {
    const key = `${obj.id}${obj["name"]}`;
    if (!res[key]) {
      res[key] = { ...obj, count: 0 };
    }
    res[key].count += 1;
  });
  return checkOfferValid(Object.values(res));
};

const checkOfferValid = (val) => {
  let data = val;
  data.forEach((obj) => {
    if (obj.count > 1 && obj.count % 2 !== 0) {
      obj.offerValid = (obj.count - 1) / 2;
    } else if (obj.count % 2 === 0) {
      if (obj.count > 1) {
        obj.offerValid = obj.count / 2;
      } else {
        obj.offerValid = obj.count;
      }
    } else {
      obj.offerValid = 0;
    }
  });
  return discountData(data);
};

const discountData = (val) => {
  let totalDiscount = 0;
  comboLists.forEach((obj) => {
    val.forEach((data) => {
      if (obj.comboId === data.id) {
        // console.log(obj.discount * data.offerValid)
        totalDiscount +=
          obj.discount * (data.offerValid !== 0 ? data.offerValid : 1);
      }
    });
  });
  return totalDiscount;
};
