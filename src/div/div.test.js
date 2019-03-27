import div from './div'
import { expect } from 'chai'

describe("# div.js", () => {
  it("Should be a function", () => {
    expect(div).to.be.a("function")
  })

  it("5/2 should be 2.5", () => {
    expect(div(5, 2)).to.be.equal(2.5)
  })
})