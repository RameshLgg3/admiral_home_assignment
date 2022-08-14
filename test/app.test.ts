import app from "../src/app";
import request from "supertest";

describe("GET /random-url", () => {
    it("should return 404", (done) => {
        request(app).get("/reset")
            .expect(404, done);
    });
});