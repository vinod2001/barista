import { v4 as uuid } from "uuid";
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;
const url = `http://localhost:${port}`

export let products = [{
    categoryName: "Coffee Companion",
    lists: [{
        name: "Brownie Fondente",
        price: 180,
        id: uuid(),
        discount: null,
        url: `${url}/images/Brownie_Fondente.webp`,
        numAdded: 0,
        comboId: 0
    }, {
        name: "Choco Chip Muffin",
        price: 155,
        id: uuid(),
        discount: null,
        url: `${url}/images/Choco_Chip_Muffin.webp`,
        numAdded: 0,
        comboId: 0
    }, {
        name: "Blueberry Muffin",
        price: 50,
        id: uuid(),
        discount: null,
        url: `${url}/images/Blueberry_Muffin.webp`,
        numAdded: 0,
        comboId: 0
    }, {
        name: "Lemon Layer Cake",
        price: 155,
        id: uuid(),
        discount: null,
        url: `${url}/images/Lemon_Layer_Cake.webp`,
        numAdded: 0,
        comboId: 0
    }]
},
{
    categoryName: "Quick Bites",
    lists: [{
        name: "Plain Croissant",
        price: 130,
        id: uuid(),
        discount: null,
        url: `${url}/images/Plain_Croissant.webp`,
        numAdded: 0,
        comboId: 0
    }, {
        name: "Veg Puff",
        price: 105,
        id: uuid(),
        discount: null,
        url: `${url}/images/Veg_Puff.webp`,
        numAdded: 0,
    }, {
        name: "Corn Garlic Toastie",
        price: 95,
        id: uuid(),
        discount: null,
        url: `${url}/images/Corn_Garlic_Toastie.webp`,
        numAdded: 0,
        comboId: 0
    }]
},
{
    categoryName: "Rolls",
    lists: [{
        name: "Acharee Paneer",
        price: 210,
        id: uuid(),
        discount: null,
        url: `${url}/images/Acharee_Paneer.webp`,
        numAdded: 0,
        comboId: 0
    }, {
        name: "Acharee Chicken",
        price: 235,
        id: uuid(),
        discount: null,
        url: `${url}/images/Acharee_Chicken.webp`,
        numAdded: 0,
        comboId: 0
    }]
},
{
    categoryName: "Sandwiches",
    lists: [{
        name: "Smocked Chicken Sandwich",
        price: 260,
        id: uuid(),
        discount: null,
        url: `${url}/images/Smocked_Chicken_Sandwich.webp`,
        numAdded: 0,
    }, {
        name: "Tomatto Basil Foccaccia",
        price: 240,
        id: uuid(),
        discount: null,
        url: `${url}/images/Tomatto_Basil_Foccaccia.webp`,
        numAdded: 0,
    }]
},
{
    categoryName: "Light Meals",
    lists: [{
        name: "Veg Momos",
        price: 125,
        id: uuid(),
        discount: null,
        url: `${url}/images/Veg_Momos.webp`,
        numAdded: 0,
        comboId: 0
    }, {
        name: "Chicken Momos",
        price: 135,
        id: uuid(),
        discount: null,
        url: `${url}/images/Chicken_Momos.webp`,
        numAdded: 0,
        comboId: 0
    }]
},
{
    categoryName: "Hot Classics",
    lists: [{
        name: "Espresso",
        price: 140,
        id: uuid(),
        discount: null,
        url: `${url}/images/Espresso.webp`,
        numAdded: 0,
        comboId: 0
    }, {
        name: "Affogato",
        price: 140,
        id: uuid(),
        discount: null,
        url: `${url}/images/Affogato.webp`,
        numAdded: 0,
        comboId: 0
    }, {
        name: "Espresso Con Panna",
        price: 140,
        id: uuid(),
        discount: null,
        url: `${url}/images/Espresso_Con_Panna.webp`,
        numAdded: 0,
        comboId: 0
    }, {
        name: "Caffe Americano",
        price: 155,
        id: uuid(),
        discount: null,
        url: `${url}/images/Caffe_Americano.webp`,
        numAdded: 0,
        comboId: 0
    }, {
        name: "Cappuccino",
        price: 175,
        id: uuid(),
        discount: null,
        url: `${url}/images/Cappuccino.webp`,
        numAdded: 0,
        comboId: 0
    }]
},
{
    categoryName: "Tea",
    lists: [{
        name: "Assam Tea",
        price: 120,
        id: uuid(),
        discount: null,
        url: `${url}/images/Assam_Tea.webp`,
        numAdded: 0,
        comboId: 0
    }, {
        name: "Green Tea",
        price: 140,
        id: uuid(),
        discount: null,
        url: `${url}/images/Green_Tea.webp`,
        numAdded: 0,
        comboId: 0
    }]
},
{
    categoryName: "Signature Special",
    lists: [{
        name: "Brownie Frappe",
        price: 400,
        id: uuid(),
        discount: null,
        url: `${url}/images/Brownie_Frappe.webp`,
        numAdded: 0,
        comboId: 0
    }, {
        name: "Brrrista Blast",
        price: 345,
        id: uuid(),
        discount: null,
        url: `${url}/images/Brrrista_Blast.webp`,
        numAdded: 0,
        comboId: 0
    }]
}];