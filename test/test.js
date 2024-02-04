const request = require("supertest");
const app = require("../src/app");

describe("Test the root path", () => {
  it("should respond with 200", () => {
    return request(app).get("/").expect(200);
  });
});

describe("Test the /api/:number path", () => {
  it("should respond with 200 and the number 123", () => {
    return request(app).get("/api/123").expect(200, { number: "123" });
  });
  it("should respond with 404", () => {
    return request(app).get("/api/abc").expect(404);
  });
});
