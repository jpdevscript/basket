const request = require("supertest");
const express = require("express");
const router = require("./apiRoutes");

const app = express();
app.use(router);

describe("GET /list", () => {
  it("It should respond with /list api", async () => {
    const response = await request(app).get("/list");
    expect(response.statusCode).toBe(200);
  });
});
