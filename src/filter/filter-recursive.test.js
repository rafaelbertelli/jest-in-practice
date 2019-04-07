import myFilter from "./filter-recursive";
import { expect } from "chai";

describe("filter.js", () => {
  it("Should be a function", () => {
    expect(myFilter).to.be.a("function");
  });

  it("myFilter(arr, arr => arr) should return arr", () => {
    expect(myFilter([1, 2, 3], arr => arr)).to.be.deep.equal([1, 2, 3]);
  });

  it("myFilter([0, 1, 2], item => item), should return [1, 2]", () => {
    expect(myFilter([0, 1, 2], item => item)).to.be.deep.equal([1, 2]);
  });

  it("myFilter([1, 2, 3], item => item < 2), should return [1]", () => {
    expect(myFilter([1, 2, 3], item => item < 2)).to.be.deep.equal([1]);
  });

  it("myFilter([1, 2, 3, 5], (item, index) => item === index + 1), should return [1, 2, 3]", () => {
    expect(
      myFilter([1, 2, 3, 5], (item, index) => item === index + 1)
    ).to.be.deep.equal([1, 2, 3]);
  });

  it("myFilter([1, 2, 3 ,2, 1, 5], (item, index, arr) => index === arr.indexof(item)), should return [1, 2, 3, 5]", () => {
    expect(
      myFilter(
        [1, 2, 3, 2, 1, 5],
        (item, index, arr) => index === arr.indexOf(item)
      )
    ).to.be.deep.equal([1, 2, 3, 5]);
  });
});
