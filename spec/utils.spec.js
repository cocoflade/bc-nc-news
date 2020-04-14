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

describe("makeRefObj", () => {});

describe("formatComments", () => {});
