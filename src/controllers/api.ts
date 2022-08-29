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

export const addProduct = async (req: Request, res: Response) => {
    const reqBody = req.body

    const product = new Product()
    product.name = reqBody.name
    product.shortDescription = reqBody.shortDescription
    product.productTypeId = reqBody.productTypeId
    product.price = reqBody.price
    product.minimumQuantity = reqBody.minimumQuantity

    await appDataSource.manager.save(product)

    res.json({"id": product.id});
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
    cartItem.wrappingType = reqBody.wrappingType
    cartItem.sessionId = reqBody.sessionId

    await appDataSource.manager.save(cartItem)

    res.json({"id": cartItem.id});
};

export const getCartSummary = async (req: Request, res: Response) => {
    const cartItems = await appDataSource.manager.query("SELECT `cart_items`.*, `products`.`name` as productName FROM `cart_items` `cart_items` JOIN `products` `products` ON `cart_items`.`product_id` = `products`.`id`");

    const summary: object[] = [];
    const itemTotal: number[] = [];

    cartItems.forEach((item: any) => {
        let wrappingCost = 0

        if (item.wrapping_type === 'Standard') {
            wrappingCost = 5
        }

        if (item.wrapping_type === 'Premium') {
            wrappingCost = 20
        }

        const totalCost = (item.price * item.quantity) + wrappingCost

        summary.push({
            productName: item.productName,
            price: item.price,
            quantity: item.quantity,
            wrappingCost,
            totalCost
        })

        itemTotal.push(totalCost)
    });

    const grossTotal = itemTotal.reduce((a, b) => a + b , 0);

    const tax = (grossTotal * 5/100)

    summary.push({
        grossTotal,
        tax,
        grandTotal: grossTotal + tax
    })

    res.json(summary);
};


