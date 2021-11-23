import supertest from "supertest";
import Server from "../models/Server.js";

const server = new Server();
const requestWithSupertest = supertest(server.app);

describe("POST text ", () => {
  const payload = {
    token: "dHJmd78hdj",
    textContent:
      "fgsfiasfasdfasdvbsakjdvbkjsadbvkjsdbvsdbvjksdbvkjsdbvklsadbvkjsdab hdbsduvbsdbsjb",
  };
  const badPayload = {
    token: "",
    textContent: "",
  };
  it("POST /api/text text statusCode 200 and JSON header", async () => {
    const res = await requestWithSupertest.post("/api/text").send(payload);
    expect(res.status).toBe(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
  });

  it("POST /api/text body data should object", async () => {
    const res = await requestWithSupertest.post("/api/text").send(payload);
    expect(typeof res.body).toBe("object");
  });

  it("POST /api/text should have property (status, message, token, textContent)", async () => {
    const res = await requestWithSupertest.post("/api/text").send(payload);
    expect(res.body).toHaveProperty("status");
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("token");
    expect(res.body).toHaveProperty("textContent");
  });

  it("POST /api/text badPayload should have statusCode 400", async () => {
    const res = await requestWithSupertest.post("/api/text").send(badPayload);
    expect(res.status).toBe(400);
    expect(res.type).toEqual(expect.stringContaining("json"));
  });

  it("POST /api/text badPayload reponse body should object", async () => {
    const res = await requestWithSupertest.post("/api/text").send(badPayload);
    expect(typeof res.body).toBe("object");
  });

  it("POST /api/text badPayload should have property (status, message, token, textContent)", async () => {
    const res = await requestWithSupertest.post("/api/text").send(badPayload);
    expect(res.body).toHaveProperty("status");
    expect(res.body).toHaveProperty("message");
  });
});
