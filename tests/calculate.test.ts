import { calculate } from "../src/index";

test("calculate adds two numbers", () => {
  expect(calculate(1, 2)).toBe(3);
});
