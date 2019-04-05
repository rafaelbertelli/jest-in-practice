import sum from "./recursion";
import { expect } from "chai";

describe("Test recursion", () => {
  it("sum([1, 2, 3]) should return 6", () => {
    expect(sum([1, 2, 3])).to.be.deep.equal(6);
  });
});
