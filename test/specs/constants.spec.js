/* global describe it document */
let constants = require('../../src/constants')
const expect = require('chai').expect

describe('constants file', () => {
  it('should be an object', () => {
    expect(constants).to.be.an('object')
  })

  describe('check type', () => {
    it('factions should be an object', () => {
      expect(constants.factions).to.be.an('object')
    })
    it('fissures should be an object', () => {
      expect(constants.fissures).to.be.an('object')
    })
    it('missions should be an object', () => {
      expect(constants.missions).to.be.an('object')
    })
    it('sorties should be an object', () => {
      expect(constants.sorties).to.be.an('object')
      expect(typeof constants.sorties.malus).to.not.be.equal('undefined')
      expect(typeof constants.sorties.bosses).to.not.be.equal('undefined')
    })
  })
})
