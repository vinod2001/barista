import { v4 as uuid } from "uuid";
import express, { Request, Response } from "express";
import { products } from "./productLists";
import { comboLists } from "./combo";

export let cartItems = [];
export let combosAddedToCart = [];
export const getCart = (req: Request, res: Response) => {
  res.send(cartItems);
};
export const createCart = (req: Request, res: Response) => {
  const cart: any = req.body;
  try {
    if (cart.length > 0) {
      for (const s in cart) {
        // extracting the related product from product list using the ID received
        // and creating cart lists
        for (const obj in products) {
          const items = products[obj];
          for (const b in items.lists) {
            // This is to handle individual product to check that its part of
            // combo offer list. if its part then add the related comboId to the cart List
            for (const i in comboLists) {
              const comboData = comboLists[i].combo;
              for (const c in comboData) {
                if (
                  comboData[c].item === items.lists[b].name &&
                  items.lists[b].id === cart[s].id
                ) {
                  items.lists[b].comboId = comboLists[i].comboId;

                  // combosAddedToCart.push({ [`${items.lists[b].comboId}`]: comboData[c].item });
                  // combosAddedToCart[`${items.lists[b].comboId}`] += 1
                  combosAddedToCart.push({
                    name: comboData[c].item,
                    id: items.lists[b].comboId,
                  });
                }
              }
            }
            // creating cart list
            if (items.lists[b].id === cart[s].id) {
              cartItems.push(items.lists[b]);
            }
          }
        }
      }
    } else {
      cartItems = [];
      combosAddedToCart = [];
    }
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }

  res
    .status(200)
    .send({
      totalCartItems: cartItems.length,
      combosAddedToCart: combosAddedToCart,
      message: "Added to cart succesfully",
    });
};
