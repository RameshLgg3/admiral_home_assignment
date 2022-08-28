"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.getApi = void 0;
const product_entity_1 = require("../entity/product.entity");
const app_data_source_1 = require("../app-data-source");
// establish database connection
app_data_source_1.appDataSource
    .initialize()
    .then(() => {
    // tslint:disable-next-line:no-console
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    // tslint:disable-next-line:no-console
    console.error("Error during Data Source initialization:", err);
});
/**
 * List of API examples.
 * @route GET /api
 */
const getApi = (req, res) => {
    res.json({
        "name": "Admiral Home Assignment - NodeJs Backend",
        "author": "Ramesh Kolamala"
    });
};
exports.getApi = getApi;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield app_data_source_1.appDataSource.getRepository(product_entity_1.Product).find();
    res.json(products);
});
exports.getProducts = getProducts;
//# sourceMappingURL=api.js.map