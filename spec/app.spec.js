const chai = require("chai");
const { expect } = require("chai");
const request = require("supertest");
const app = require("../app");
const connection = require("../db/connection");

process.env.NODE_ENV = "test";
// chai.use(require("chai-sorted"));

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
  describe("/users", () => {
    it("GET: Status 200 - responds with a user object when passed their username", () => {
      return request(app)
        .get("/api/users?username=butter_bridge")
        .expect(200)
        .then((res) => {
          expect(res.body.users).to.be.an("array");
          expect(res.body.users[0]).to.contain.keys(
            "username",
            "avatar_url",
            "name"
          );
          expect(res.body.users).to.have.lengthOf(1);
        });
    });
    it("GET: 404 - responds with an error when username does not exist", () => {
      return request(app)
        .get("/api/users?username=incorrect")
        .expect(404)
        .then((res) => {
          expect(res.body.msg).to.equal("username does not exist");
        });
    });
  });
  describe("/articles", () => {
    it("GET: Status 200 - responds with an array of article objects containing the correct keys and a comment count", () => {
      return request(app)
        .get("/api/articles")
        .expect(200)
        .then((res) => {
          expect(res.body.articles).to.be.an("array");
          expect(res.body.articles[0]).to.contain.keys(
            "article_id",
            "title",
            "topic",
            "author",
            "body",
            "votes",
            "created_at",
            "comment_count"
          );
        });
    });
    it("GET: Status 200 - responds with an article object when passed an ID", () => {
      return request(app)
        .get("/api/articles/1")
        .expect(200)
        .then((res) => {
          expect(res.body.articles).to.be.an("object");
          expect(res.body.articles).to.include.keys(
            "article_id",
            "title",
            "body",
            "votes",
            "topic",
            "author",
            "created_at",
            "comment_count"
          );
        });
    });

    it.only("GET: 404 - responds with an error when article does not exist", () => {
      return request(app)
        .get("/api/articles/112345")
        .expect(404)
        .then((res) => {
          expect(res.body.msg).to.equal("article_id does not exist");
        });
    });
  });
});
