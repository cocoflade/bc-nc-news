const { expect } = require("chai");
const {
  formatDates,
  makeRefObj,
  formatComments,
} = require("../db/utils/utils");

describe("formatDates", () => {
  it("will return an empty array when given an empty array", () => {
    expect(formatDates([])).to.eql([]);
  });
  it("returns a new array with the correctly formatted timestamp", () => {
    const input = [
      {
        title: "title-one",
        topic: "mitch",
        author: "james",
        body: "This article",
        created_at: 1542284514171,
        votes: 100,
      },
    ];
    const expected = [
      {
        title: "title-one",
        topic: "mitch",
        author: "james",
        body: "This article",
        created_at: new Date(1542284514171),
        votes: 100,
      },
    ];
    expect(formatDates(input)).to.eql(expected);
  });
  it("does not mutate the original array", () => {
    const input = [
      {
        title: "title-one",
        topic: "mitch",
        author: "james",
        body: "This article",
        created_at: 1542284514171,
        votes: 100,
      },
    ];
    const expected = [
      {
        title: "title-one",
        topic: "mitch",
        author: "james",
        body: "This article",
        created_at: new Date(1542284514171),
        votes: 100,
      },
    ];
    expect(formatDates(input)).to.not.equal(expected);
  });
  it("returns a new array with the correctly formatted timestamp on multiple objects", () => {
    const input = [
      {
        title: "title-one",
        topic: "mitch",
        author: "james",
        body: "This article",
        created_at: 1416140514171,
        votes: 100,
      },
      {
        title: "title-two",
        topic: "webb",
        author: "john",
        body: "This article",
        created_at: 1416140514171,
        votes: 90,
      },
    ];
    const expected = [
      {
        title: "title-one",
        topic: "mitch",
        author: "james",
        body: "This article",
        created_at: new Date(1416140514171),
        votes: 100,
      },
      {
        title: "title-two",
        topic: "webb",
        author: "john",
        body: "This article",
        created_at: new Date(1416140514171),
        votes: 90,
      },
    ];
    expect(formatDates(input)).to.eql(expected);
  });
});

describe("makeRefObj", () => {
  it("returns an empty object when passed an empty array", () => {
    expect(makeRefObj([])).to.eql({});
  });
  it("returns a reference keyed by each item's title, with the values being each item's corresponding id", () => {
    const input = [{ article_id: 1, title: "A" }];
    const expected = { A: 1 };
    expect(makeRefObj(input)).to.eql(expected);
  });
  it("returns the same, with multiple objects within an array", () => {
    const input = [
      { article_id: 1, title: "A" },
      { article_id: 2, title: "B" },
    ];
    const expected = { A: 1, B: 2 };
    expect(makeRefObj(input)).to.eql(expected);
  });
});

describe("formatComments", () => {
  it("retuns an object within an array with the created_by and belongs_to keys changed correctly", () => {
    const ref = { John: 1 };
    const input = [
      {
        body: "Storyline",
        belongs_to: "John",
        created_by: "butter_bridge",
        votes: 16,
        created_at: 1511354163389,
      },
    ];
    const expected = [
      {
        body: "Storyline",
        article_id: 1,
        author: "butter_bridge",
        votes: 16,
        created_at: new Date(1511354163389),
      },
    ];
    expect(formatComments(input, ref)).to.eql(expected);
  });
  it("returns the value of article_id corresponding to the original title value provided, and returns a correctly formatted date", () => {
    const ref = { John: 1 };
    const input = [
      {
        body: "Storyline",
        belongs_to: "John",
        created_by: "butter_bridge",
        votes: 16,
        created_at: 1511354163389,
      },
    ];
    const expected = [
      {
        body: "Storyline",
        article_id: 1,
        author: "butter_bridge",
        votes: 16,
        created_at: new Date(1511354163389),
      },
    ];
    expect(formatComments(input, ref)).to.eql(expected);
  });
  it("returns the value of article_id corresponding to the original title value provided, multiple times", () => {
    const ref = { John: 1, Tom: 2 };
    const input = [
      {
        body: "Storyline",
        belongs_to: "John",
        created_by: "butter_bridge",
        votes: 16,
        created_at: 1511354163389,
      },
      {
        body: "Storyline2",
        belongs_to: "Tom",
        created_by: "new",
        votes: 16,
        created_at: 1511354163389,
      },
    ];
    const expected = [
      {
        body: "Storyline",
        article_id: 1,
        author: "butter_bridge",
        votes: 16,
        created_at: new Date(1511354163389),
      },
      {
        body: "Storyline2",
        article_id: 2,
        author: "new",
        votes: 16,
        created_at: new Date(1511354163389),
      },
    ];
    expect(formatComments(input, ref)).to.eql(expected);
  });
});
