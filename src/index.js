let WFRequest = require('./WFRequest')
let WFRequestInstance = null

/** @module wfConsumation/index */

module.exports = {
  /**
   * Get the instance of WFRequest and call the API
   * @param {Object} request The request module
   * @module wfConsumation/index
   */
  getData () {
    if (!WFRequestInstance) {
      WFRequestInstance = new WFRequest()
    }
    return new Promise((resolve, reject) => {
      WFRequestInstance.getData().then((instance) => {
        resolve(instance.infos)
      })
    })
  }
}
