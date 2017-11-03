/* global describe it document */
let nodeWarframeFetcher = require('../../src/index')
const assert = require('assert')
const expect = require('chai').expect

describe('index file', () => {
  describe('check type', () => {
    it('should be an object', () => {
      expect(nodeWarframeFetcher).to.be.an('object')
    })
    it('should have a method getData', () => {
      expect(nodeWarframeFetcher.getData).to.be.a('function')
    })
    it('getData should return a promise', () => {
      // expect is not used before it converts the data to {} and is not considered as an object
      assert(typeof nodeWarframeFetcher.getData(), 'object')
      assert(nodeWarframeFetcher.getData() instanceof Promise, true)
    })
  })
})
