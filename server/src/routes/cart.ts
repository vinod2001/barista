import express, {Express, Request, Response} from "express";
import { createCart, getCart } from "../controllers/cart.js";

const cartRouter = express.Router();

cartRouter.get("/cart", getCart)
cartRouter.post("/cart", createCart)

export default cartRouter;
