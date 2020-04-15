const chai = require("chai");
const { expect } = require("chai");
const request = require("supertest");
const app = require("../app");
const connection = require("../db/connection");

process.env.NODE_ENV = "test";

beforeEach(() => {
  return connection.seed.run();
});
after(() => connection.destroy());

describe("/api", () => {
  describe("/topics", () => {
    it("GET: Status 200 - responds with an array of topic objects containing the correct keys", () => {
      return request(app)
        .get("/api/topics")
        .expect(200)
        .then((res) => {
          expect(res.body.topics).to.be.an("array");
          expect(res.body.topics[0]).to.contain.keys("description", "slug");
        });
    });
  });
});
