/* global describe it document */
let formatter = require('../../../src/helpers/formatter')
// const assert = require('assert')
const expect = require('chai').expect

let sample = {
  alerts: require('../samples/alerts.json'),
  invasions: require('../samples/invasions.json'),
  fissures: require('../samples/fissures.json'),
  sortie: require('../samples/sortie.json'),
  baro: require('../samples/baro.json')
}

let sampleFormatted = {
  alerts: require('../samples/alertsFormatted.json'),
  invasions: require('../samples/invasionsFormatted.json'),
  fissures: require('../samples/fissuresFormatted.json'),
  sortie: require('../samples/sortieFormatted.json'),
  baro: require('../samples/baroFormatted.json')
}

// Remove time notions
sampleFormatted.alerts = sampleFormatted.alerts.map((alert) => {
  delete alert.remaining
  return alert
})
sampleFormatted.fissures = sampleFormatted.fissures.map((fissure) => {
  delete fissure.remaining
  return fissure
})
delete sampleFormatted.sortie.remaining
delete sampleFormatted.baro.remainingComeHumanized
delete sampleFormatted.baro.remainingLeftHumanized

describe('formatter file', () => {
  describe('check type', () => {
    it('should be an object', () => {
      expect(formatter).to.be.an('object')
    })
    it('should have a method formatAlert', () => {
      expect(formatter.formatAlert).to.be.a('function')
    })
    it('should have a method formatInvasion', () => {
      expect(formatter.formatInvasion).to.be.a('function')
    })
    it('should have a method formatVoidFissure', () => {
      expect(formatter.formatVoidFissure).to.be.a('function')
    })
    it('should have a method formatSortie', () => {
      expect(formatter.formatSortie).to.be.a('function')
    })
    it('should have a method formatBaro', () => {
      expect(formatter.formatBaro).to.be.a('function')
    })
  })
  describe('check values', () => {
    it('should format the alerts', () => {
      let sampleAlert = formatter.formatAlert(sample.alerts)

      sampleAlert = sampleAlert.map((alert) => {
        delete alert.remaining
        return alert
      })

      expect(JSON.stringify(sampleAlert)).to.be.equal(JSON.stringify(sampleFormatted.alerts))
    })
    it('should format the invasions', () => {
      let sampleInvasions = formatter.formatInvasion(sample.invasions)

      expect(JSON.stringify(sampleInvasions)).to.be.equal(JSON.stringify(sampleFormatted.invasions))
    })
    it('should format the fissures', () => {
      let sampleFissure = formatter.formatVoidFissure(sample.fissures)

      sampleFissure = sampleFissure.map((fissure) => {
        delete fissure.remaining
        return fissure
      })
      expect(JSON.stringify(sampleFissure)).to.be.equal(JSON.stringify(sampleFormatted.fissures))
    })
    it('should format the sortie', () => {
      let sampleSortie = formatter.formatSortie(sample.sortie)
      delete sampleSortie.remaining
      expect(JSON.stringify(sampleSortie)).to.be.equal(JSON.stringify(sampleFormatted.sortie))
    })
    it('should format the baro', () => {
      let sampleBaro = formatter.formatBaro(sample.baro)
      delete sampleBaro.remainingComeHumanized
      delete sampleBaro.remainingLeftHumanized
      expect(JSON.stringify(sampleBaro)).to.be.equal(JSON.stringify(sampleFormatted.baro))
    })
  })
})
