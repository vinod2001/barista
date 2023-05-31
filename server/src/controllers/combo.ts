import { v4 as uuid } from "uuid";
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;
const url = `http://localhost:${port}`

export let comboLists = [{
    discount: 10,
    comboId: uuid(),
    combo: [{
        item: "Corn Garlic Toastie",
        url: `${url}/images/Corn_Garlic_Toastie.webp`,
    }, {
        item: "Caffe Americano",
        url: `${url}/images/Caffe_Americano.webp`,
    }]
}, {
    discount: 8,
    comboId: uuid(),
    combo: [{
        item: "Choco Chip Muffin",
        url: `${url}/images/Choco_Chip_Muffin.webp`,
    }, {
        item: "Espresso",
        url: `${url}/images/Espresso.webp`,
    }]
}, {
    discount: 5,
    comboId: uuid(),
    combo: [{
        item: "Veg Puff",
        url: `${url}/images/Veg_Puff.webp`,
    }, {
        item: "Brownie Fondente",
        url: `${url}/images/Brownie_Fondente.webp`,
    }]
}, {
    discount: 10,
    comboId: uuid(),
    combo: [{
        item: "Plain Croissant",
        url: `${url}/images/Plain_Croissant.webp`,
    }, {
        item: "Brownie Frappe",
        url: `${url}/images/Brownie_Frappe.webp`,
    }]
}];