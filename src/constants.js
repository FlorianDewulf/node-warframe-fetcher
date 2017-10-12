const { factions, fissureModifiers, missionTypes, sortie } = require('warframe-worldstate-data')

module.exports = {
  factions: factions,
  fissures: fissureModifiers,
  missions: missionTypes,
  sorties: {
    malus: sortie.modifierTypes,
    bosses: sortie.bosses
  }
}
