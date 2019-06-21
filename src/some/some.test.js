"use strict";

import { expect } from "chai";
import some from "./some";

describe("some.js", () => {
  it("Should be a function", () => {
    expect(some).to.be.a("function");
  });

  it("some([], (item) => item) should return false", () => {
    expect(some([], item => item)).to.not.be.ok;
  });

  it("some([1,2,3], item => item) should return true", () => {
    expect(some([1, 2, 3], item => item)).to.be.ok;
  });

  it("some(1) should throw a TypeError", () => {
    let error;

    try {
      some(1);
    } catch (e) {
      error = e;
    }

    expect(error.name).to.be.equal("TypeError");
  });

  it("some(1) should throw a TypeError with message 'The first parameter must be an array'", () => {
    let error;

    try {
      some(1);
    } catch (e) {
      error = e;
    }

    expect(error.message).to.be.equal("The first parameter must be an array");
  });
});
