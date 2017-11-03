const { factions, fissureModifiers, missionTypes, sortie } = require('warframe-worldstate-data')

module.exports = {
  /** @type {Array} */
  /** @see module:warframe-worldstate-data/factions */
  factions: factions,
  /** @type {Array} */
  /** @see module:warframe-worldstate-data/fissures */
  fissures: fissureModifiers,
  /** @type {Array} */
  /** @see module:warframe-worldstate-data/missions */
  missions: missionTypes,
  /** @type {Array} */
  /** @see module:warframe-worldstate-data/sorties */
  sorties: {
    malus: sortie.modifierTypes,
    bosses: sortie.bosses
  }
}
