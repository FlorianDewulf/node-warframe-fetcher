/* global describe it document */
let WFRequest = require('../../src/WFRequest')
const assert = require('assert')
const expect = require('chai').expect

describe('WFRequest file', () => {
  describe('check type', () => {
    let myWFRequest = null

    it('should be an object', () => {
      expect(WFRequest).to.be.an('function')
    })
    it('should be instanciable', () => {
      try {
        myWFRequest = new WFRequest()
        expect(myWFRequest).to.be.an('object')
      } catch (e) {
        expect(myWFRequest, 'The class WFRequest is not instanciable').to.not.be.equal(null)
      }
    })
    if (myWFRequest) {
      it('should have a method getData', () => {
        expect(myWFRequest.getData).to.be.a('function')
      })
      it('should have a method concurrentFormatter', () => {
        expect(myWFRequest.concurrentFormatter).to.be.a('function')
      })
      it('getData should return a promise', () => {
        // expect is not used before it converts the data to {} and is not considered as an object
        assert(typeof myWFRequest.getData(), 'object')
        assert(myWFRequest.getData() instanceof Promise, true)
      })
      it('concurrentFormatter should return a promise', () => {
        // expect is not used before it converts the data to {} and is not considered as an object
        assert(typeof myWFRequest.concurrentFormatter(), 'object')
        assert(myWFRequest.concurrentFormatter() instanceof Promise, true)
      })
    }
  })
})
