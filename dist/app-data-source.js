"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./entity/product.entity");
const product_type_entity_1 = require("./entity/product-type.entity");
exports.myDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "admiral",
    password: "india",
    database: "admiralindia",
    entities: [product_entity_1.Product, product_type_entity_1.ProductType],
    logging: false,
    synchronize: false,
});
//# sourceMappingURL=app-data-source.js.map