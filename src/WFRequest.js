const cleaner = require('./helpers/cleaner')
const formatter = require('./helpers/formatter')
const http = require('http')

/** @module wfConsumation/WFRequest */

class WFRequest {
  /**
   * The constructor of the WFRequest
   * @constructor
   */
  constructor () {
    /** @member {Object} content The result of the ajax request */
    this.content = null
    /** @member {Object} cleanContent The clean result */
    this.cleanContent = {
    }
  }

  /**
   * Request the API to get the datas
   */
  getData () {
    return new Promise((resolve, reject) => {
      let request = http.request({
        port: 80,
        hostname: 'content.warframe.com',
        method: 'GET',
        path: '/dynamic/worldState.php'
      }, (response) => {
        let totalChunks = ''
        response.setEncoding('utf8')
        // On request response
        response.on('data', (payload) => {
          totalChunks += payload
        })
        response.on('end', (payload) => {
          let response = JSON.parse(totalChunks)
          this.content = cleaner.cleanPayload(response)
          this.concurrentFormatter().then(() => {
            resolve(this)
          })
        })
      })

      request.on('error', (e) => {
        reject(e)
      })

      request.end()
    })
  }

  /**
   * Transform the data with the formatter. Performed with the concurrency of the promises
   */
  concurrentFormatter () {
    return new Promise((resolve, reject) => {
      const formats = [
        { action: formatter.formatAlert, data: 'Alerts', target: 'alerts' },
        { action: formatter.formatInvasion, data: 'Invasions', target: 'invasions' },
        { action: formatter.formatVoidFissure, data: 'ActiveMissions', target: 'fissures' },
        { action: formatter.formatSortie, data: 'Sorties', target: 'sorties' },
        { action: formatter.formatBaro, data: 'VoidTraders', target: 'baro' }
      ]
      let promises = []

      formats.map((format) => {
        promises.push(new Promise((_promiseResolve) => {
          try {
            _promiseResolve({
              value: format.action(this.content[format.data]),
              target: format.target
            })
          } catch (e) {
            console.log(e)
            _promiseResolve({
              value: this.content[format.data],
              target: format.target
            })
          }
        }))
      })
      Promise.all(promises).then((promiseValues) => {
        promiseValues.map((promiseValue) => {
          this.cleanContent[promiseValue.target] = promiseValue.value
        })
        resolve(this)
      })
    })
  }

  /**
   * The getter of the informations fetched
   */
  get infos () {
    return this.cleanContent
  }
}

module.exports = WFRequest
