import express, { Express, Request, Response } from "express";
import { getSubTotal } from "../controllers/subTotal.js";

const subTotalRouters = express.Router();

subTotalRouters.get("/subTotal", getSubTotal)

export default subTotalRouters;