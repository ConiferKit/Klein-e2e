import test from "node:test";
import assert from "node:assert/strict";
import { add } from "../src/math.mjs";

test("adds positive, negative, zero, and fractional values", () => {
  for (const [a, b, expected] of [[2, 3, 5], [-2, 3, 1], [0, 0, 0], [0.5, 0.25, 0.75]]) assert.equal(add(a, b), expected);
});
