import { v4 as uuid } from "uuid";
import express, { Request, Response } from "express";
import { cartItems, combosAddedToCart } from "./cart";
import { checkDiscount } from "../utils/comboDiscount";

export const getSubTotal = (req: Request, res: Response) => {
  try {
    let total = 0;
    let tax = 0;
    let grandTotal = 0;
    let discount = checkDiscount(combosAddedToCart) / 2;
    let totalDiscountAmout = 0;

    cartItems.forEach((item) => {
      total += item.price;
    });
    tax = Math.round((total * 18) / 100);
    totalDiscountAmout = Math.round(((total + tax) * discount) / 100);
    grandTotal = Math.round(total + tax - totalDiscountAmout);
    res.send({
      subTotal: total,
      salesTax: tax,
      discountPercentage: discount,
      discount: totalDiscountAmout,
      grandTotal: grandTotal,
    });
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
};
