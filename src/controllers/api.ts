"use strict";

import { Response, Request, NextFunction } from "express";

import { Product } from "../entity/product.entity"
import { CartItems } from "../entity/cart-items.entity";
import { appDataSource } from "../datasource/app-data-source"

// establish database connection
appDataSource
    .initialize()
    .then(() => {
        // tslint:disable-next-line:no-console
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        // tslint:disable-next-line:no-console
        console.error("Error during Data Source initialization:", err)
    })

/**
 * List of API examples.
 * @route GET /api
 */

 export const getHome = (req: Request, res: Response) => {
    res.json({
        "name" : "Admiral Home Assignment - NodeJs Backend",
        "author": "Ramesh Kolamala"
    });
};

export const getProducts = async (req: Request, res: Response) => {
    const products = await appDataSource.getRepository(Product).find()
    res.json(products);
};

export const addToCart = async (req: Request, res: Response) => {
    const reqBody = req.body

    const cartItem = new CartItems()
    cartItem.productId = reqBody.productId
    cartItem.quantity = reqBody.quantity
    cartItem.price = reqBody.price
    cartItem.sessionId = reqBody.sessionId
    await appDataSource.manager.save(cartItem)

    res.json({"id": cartItem.id});
};


