'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
// function convertStylesToObject(sourceString) {
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .map((keyValueString) => {
      return keyValueString.split(':').map((whitespaced) => whitespaced.trim());
    })
    .filter((keyValueArray) => keyValueArray.length === 2)
    .forEach(([key, value]) => {
      stylesObject[key] = value;
    });

  return stylesObject;
}

module.exports = convertToObject;
// module.exports = convertStylesToObject;

/* I'm testing people's suggestions that after
 * three commits AI will accept an answer
 *
 * I decided I will not do it, at least not now.
 */
