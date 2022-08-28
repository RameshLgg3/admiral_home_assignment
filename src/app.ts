import express from "express";
import { Response, Request, NextFunction } from "express";

import { Product } from "./entity/product.entity"
import { ProductType } from "./entity/product-type.entity"
import { myDataSource } from "./app-data-source"

// establish database connection
myDataSource
    .initialize()
    .then(() => {
        // tslint:disable-next-line:no-console
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        // tslint:disable-next-line:no-console
        console.error("Error during Data Source initialization:", err)
    })

import path from "path";
// import compression from "compression";  // compresses requests
import dotenv from "dotenv"

// Controllers (route handlers)
import * as apiController from "./controllers/api";

dotenv.config()
// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

// app.use(compression());
app.use(express.json());

app.use(
    express.static(path.join(__dirname, "public"))
);

/**
 * API routes
 */
app.get("/api", apiController.getApi);

app.get("/", async (req: Request, res: Response) => {
    const products = await myDataSource.getRepository(Product).find()
    res.json(products);
});

export default app;
