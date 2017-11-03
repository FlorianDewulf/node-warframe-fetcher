/* global describe it document */
let cleaner = require('../../../src/helpers/cleaner')
const expect = require('chai').expect

let sample = {
  Events: '',
  BuildLabel: '',
  Date: '',
  LibraryInfo: '',
  MobileVersion: '',
  PVPActiveTournaments: '',
  PVPAlternativeModes: '',
  ProjectPct: '',
  Time: '',
  Version: '',
  WorldSeed: ''
}

describe('cleaner file', () => {
  describe('check type', () => {
    it('should be an object', () => {
      expect(cleaner).to.be.an('object')
    })
    it('should have a method getData', () => {
      expect(cleaner.cleanPayload).to.be.a('function')
    })
  })
  it('cleanPayload should remove keys', () => {
    expect(JSON.stringify(cleaner.cleanPayload(sample))).to.be.equal(JSON.stringify({}))
  })
})
