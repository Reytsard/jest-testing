const myFunction = require("./function");

test("check if 1+2 equals to 3", () => {
  expect(myFunction.sum(1, 2)).toBe(3);
});
test("if My object is complete", () => {
  expect(myFunction.myObj).toEqual({
    firstName: "Ronald",
    lastName: "De Mesa",
  });
});
