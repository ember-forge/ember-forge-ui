import Ember from 'ember';

const {
  Mixin
} = Ember;

/**
 * @module
 * @augments ember/Mixin
 */
export default Mixin.create({

// -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether to clear the attributeBindings array
     *
     * @type {Boolean}
     */
    clearAttributeBindings: false,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Sets each attribute binding into the attributeBindings array
     *
     * @function
     * @param {Array} bindings
     * @returns {undefined}
     */
    addAttributeBindings( bindings ) {
        bindings.forEach( ( element ) => {
            this.attributeBindings.push( element );
        });
    }
});
