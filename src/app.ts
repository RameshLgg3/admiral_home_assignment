import express from "express";
import cors from "cors";
import path from "path";
// import compression from "compression";  // compresses requests
import dotenv from "dotenv"

// Controllers (route handlers)
import * as apiController from "./controllers/api";

dotenv.config()
// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3001);

// app.use(compression());
app.use(express.json());

app.use(
    express.static(path.join(__dirname, "public"))
);

app.use(cors({
    origin: ['http://localhost:3000', 'https://hometestadmiral.herokuapp.com']
}));

/**
 * API routes
 */
/**
 * Home
 */
app.get("/", apiController.getHome);

/**
 * Add new product
 */
app.post("/add-product", apiController.addProduct);

/**
 * List all products
 */
app.get("/products", apiController.getProducts);

/**
 * Add item to cart
 */
app.post("/add-to-cart", apiController.addToCart);

/**
 * Get cart summary
 */
app.get("/cart-summary", apiController.getCartSummary);

export default app;
