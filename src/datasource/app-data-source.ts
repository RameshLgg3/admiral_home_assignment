import { DataSource } from "typeorm"
import { Product } from "../entity/product.entity"
import { ProductType } from "../entity/product-type.entity"
import { CartItems } from "../entity/cart-items.entity";
import dotenv from "dotenv"
dotenv.config()

export const appDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST_DEV,
    port: 3306,
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_DATABASE_DEV,
    entities: [Product, ProductType, CartItems],
    logging: false,
    synchronize: false,
})
