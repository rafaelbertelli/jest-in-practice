import sum from './sum'
import { expect } from 'chai'


describe("# sum.js", () => {
  it("Should be a function", () => {
    expect(sum).to.be.a('function')
  })

  it("Should be a sum", () => {
    expect(sum(2, 3)).to.be.equal(5)
  })
})