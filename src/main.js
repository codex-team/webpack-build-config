'use strict';

module.exports = function () {
  /**
   * Load module package info
   */
  let pkg = require('../package');

  /** EXAMPLE: Load methods.js file */
  let methods = require('./js/methods');

  return methods;
};
