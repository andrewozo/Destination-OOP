const Bag = require("../../classes/Bag");
const Person = require("../../classes/Person");
const { describe, it, expect, beforeEach } = require("@jest/globals");

let b1;
let p1;
beforeEach(() => {
  b1 = new Bag(50, 1234);
  p1 = new Person("Mary", "NY");
});

describe("Testing Bag", function () {
  it("Create instance of a bag ", () => {
    expect(b1 instanceof Bag).toBe(true);
  });

  it("Test Weight", () => {
    expect(b1.weight).toBe(50);
  });

  it("Test id ", () => {
    expect(b1.id).toBe(1234);
  });

  it("Test Owner is null ", () => {
    expect(b1.owner).toBe(null);
  });

  it("Update owner with Person name ", () => {
    b1.owner = p1.name;
    expect(b1.owner).toBe("Mary");
  });
});
