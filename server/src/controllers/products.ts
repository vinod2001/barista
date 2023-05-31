import {v4 as uuid} from "uuid";
import express, {Request, Response} from "express";
import dotenv from 'dotenv';
import {products} from './productLists'


export const getProducts = (req:Request, res:Response) => {
    res.send(products);
}