const Person = require("../../classes/Person");
const Bag = require("../../classes/Bag");
const { describe, test, expect, beforeEach } = require("@jest/globals");

let p1;
let b1;

beforeEach(() => {
  p1 = new Person("andrew", "NYC");
  b1 = new Bag(50, 3);
});

describe("persons class", () => {
  test("can create instance of person", () => {
    expect(p1 instanceof Person).toBe(true);
  });

  test("name and destination have been assigned correctly", () => {
    expect(p1.name).toBe("andrew");
    expect(p1.destination).toBe("NYC");
  });

  test("bag initializes as an empty array", () => {
    expect(p1.bags).toEqual([]);
  });

  test("addBags method adds a bag to the array", () => {
    p1.addBag(b1);
    expect(p1.bags).toContain(b1);
  });
});
