import '../components/<%= componentName %>';

/**
 * @module
 */

/**
 * To load the extending code for <%= componentName %>
 *
 * @function
 * @returns {undefined}
 */
export function initialize() {
}

/**
 * Export the addon <%= componentName %> extensions initializer
 *
 * @type {Object}
 */
export default {
    name: '<%= addonName %>-<%= componentName %>',
    initialize
}
