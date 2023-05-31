import express, {Express, Request, Response} from "express";
import { getProducts } from "../controllers/products.js"
import { getCart } from "../controllers/cart.js";

const router = express.Router();

router.get("/products", getProducts)

export default router;