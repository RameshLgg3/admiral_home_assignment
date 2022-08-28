import { DataSource } from "typeorm"
import { Product } from "./entity/product.entity"
import { ProductType } from "./entity/product-type.entity"

export const appDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "admiral",
    password: "india",
    database: "admiralindia",
    entities: [Product, ProductType],
    logging: false,
    synchronize: false,
})
