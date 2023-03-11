const divide = require("./divide");

test("divides 2 / 1 to equal 2", () => {
  expect(divide(2, 1)).toBe(2);
});