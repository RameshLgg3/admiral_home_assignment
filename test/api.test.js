"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../src/app");
var supertest_1 = require("supertest");
describe("GET /api", function () {
    it("should return 200 OK", function () {
        return (0, supertest_1.default)(app_1.default).get("/api")
            .expect(200);
    });
});
//# sourceMappingURL=api.test.js.map