import express from "express";

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
app.get("/", apiController.getHome);

app.get("/products", apiController.getProducts);

app.post("/add-to-cart", apiController.addToCart);

app.get("/cart-summary", apiController.getCartSummary);

export default app;
