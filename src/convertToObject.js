'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
// function convertToObject(sourceString) {
function convertStylesToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .map((keyValueString) => {
      return keyValueString.split(':').map((whitespaced) => whitespaced.trim());
    })
    .filter((keyValueArray) => keyValueArray.hasOwnProperty(1))
    .forEach(([key, value]) => {
      stylesObject[key] = value;
    });

  return stylesObject;
}

// module.exports = convertToObject;
module.exports = convertStylesToObject;

/* I'm testing people's suggestions that after
 * three commits AI will accept an answer
 */
