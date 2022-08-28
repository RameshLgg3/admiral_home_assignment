"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../src/app");
var supertest_1 = require("supertest");
describe("GET /random-url", function () {
    it("should return 404", function (done) {
        (0, supertest_1.default)(app_1.default).get("/reset")
            .expect(404, done);
    });
});
//# sourceMappingURL=app.test.js.map