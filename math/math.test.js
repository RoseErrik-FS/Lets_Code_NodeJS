const { add, subtract, multiply, divide, squareRoot, max } = require("./math");

describe("Testing the Math Functions", () => {
  test("Should Check the Add Function", () => {
    expect(add(16, 43)).toBe(59);
  });

  test("Should Check the Sub Function", () => {
    expect(subtract(16, 43)).toBe(-27);
  });

  test("Should Check the Sub Function", () => {
    expect(multiply(16, 43)).toBe(688);
  });

  test("Should Check the Sub Function", () => {
    expect(divide(200, 5)).toBe(40);
  });
});

describe("Testing the advanced Math Functions", () => {
  test("Should Check the Math.sqrt Function", () => {
    expect(squareRoot(256)).toBe(16);
  });

  test("Should Check the Math.max Function", () => {
    expect(max(20, 40)).toBe(40);
  });
});
