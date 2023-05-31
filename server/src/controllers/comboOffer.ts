import { v4 as uuid } from "uuid";
import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import { comboLists } from './combo'


export const getComboOffers = (req: Request, res: Response) => {
    res.send(comboLists);
}