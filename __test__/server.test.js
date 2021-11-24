import supertest from "supertest";
import Server from "../models/Server.js";

const server = new Server();
const requestWithSupertest = supertest(server.app);

describe("/ Homepage ", () => {
  it("GET root statusCode 200 and html header", async () => {
    const res = await requestWithSupertest.get("/");
    expect(res.status).toBe(200);
    expect(res.type).toEqual(expect.stringContaining("html"));
  });
  it("POST root statusCode 404 and html header", async () => {
    const res = await requestWithSupertest.get("/");
    expect(res.status).toBe(200);
    expect(res.type).toEqual(expect.stringContaining("html"));
  });
});
