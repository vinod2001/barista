import express, { Express, Request, Response } from "express";
import { getComboOffers } from "../controllers/comboOffer.js";

const comboRouters = express.Router();

comboRouters.get("/combo", getComboOffers)

export default comboRouters;