import { DataSource } from "typeorm"
import { Product } from "./entity/product.entity"
import { ProductType } from "./entity/product-type.entity"

export const appDataSource = new DataSource({
    type: "mysql",
    host: "sql6.freemysqlhosting.net",
    port: 3306,
    username: "sql6515530",
    password: "Xwk35P2vTJ",
    database: "sql6515530",
    entities: [Product, ProductType],
    logging: false,
    synchronize: false,
})
