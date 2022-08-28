"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
var typeorm_1 = require("typeorm");
exports.myDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "admiral",
    password: "india",
    database: "admiralindia",
    entities: ["src/entity/*.js"],
    logging: false,
    synchronize: false,
});
//# sourceMappingURL=app-data-source.js.map