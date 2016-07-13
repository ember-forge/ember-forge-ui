/* jshint node: true */
'use strict';

module.exports = {

  /**
   * Name of addon
   *
   * @type {String}
   */
  name: 'ember-forge-ui',

  // This allows auto-reloading in host apps when they have been
  // npm linked against this project.
  isDevelopingAddon: function() {
    return true;
  }
};
