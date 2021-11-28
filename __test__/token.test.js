import supertest from "supertest";
import Server from "../models/Server.js";

const server = new Server();
const requestWithSupertest = supertest(server.app);

describe("GET Token Endpoints", () => {
  it("GET /api/token statusCode should return 200 and JSON Header", async () => {
    const res = await requestWithSupertest.get("/api/token");
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.status).toBe(200);
  });
  it("GET /api/token should have property (status, message, token)", async () => {
    const res = await requestWithSupertest.get("/api/token");
    expect(res.body).toHaveProperty("status");
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("token");
  });
  it("GET /api/token status should return success", async () => {
    const res = await requestWithSupertest.get("/api/token");
    expect(res.body.status).toEqual("success");
  });
  it("GET /api/token typ token should string", async () => {
    const res = await requestWithSupertest.get("/api/token");
    expect(typeof res.body.token).toEqual("string");
  });
  it("GET /api/token message should return connected", async () => {
    const res = await requestWithSupertest.get("/api/token");
    expect(res.body.message).toEqual("connected");
  });
});
describe("POST Token Endpoints", () => {
  it("POST /api/token statusCode should return 404", async () => {
    const res = await requestWithSupertest.post("/api/token");
    expect(res.status).toBe(404);
  });
});
describe("PUT Token Endpoints", () => {
  it("PUT /api/token statusCode should return 404", async () => {
    const res = await requestWithSupertest.put("/api/token");
    expect(res.status).toBe(404);
  });
});

describe("DELETE Token Endpoints", () => {
  it("DELETE /api/token statusCode should return 404", async () => {
    const res = await requestWithSupertest.delete("/api/token");
    expect(res.status).toBe(404);
  });
});
