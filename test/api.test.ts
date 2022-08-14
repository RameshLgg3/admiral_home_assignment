import app from "../src/app";
import request from "supertest";

describe("GET /api", () => {
    it("should return 200 OK", () => {
        return request(app).get("/api")
            .expect(200);
    });
});