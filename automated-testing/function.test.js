const calculator = require("./function");

test("check if 1+2 equals to 3", () => {
  expect(calculator.sum(1, 2)).toBe(3);
});
test("check if 2 + 5  equals to 7", () => {
  expect(calculator.sum(2, 5)).toBe(7);
});
test("check if 2 - 1 is equals to 1", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});
test("check if 5 - 2 is equals to 3", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});
test("check if 2 times 4 is equals to 8", () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});
test("check if 2 times 5 is equals to 10", () => {
  expect(calculator.multiply(9, 10)).toBe(90);
});
test("check if 10 / 5 is equals to 10", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});
test("check if 5 / 2 is equals to 10", () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});
