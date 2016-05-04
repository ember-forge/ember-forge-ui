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
     * Whether to clear the classNameBindings array
     *
     * @type {Boolean}
     */
    clearClassNameBindings: false,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Sets each attribute binding into the classNameBindings array
     *
     * @function
     * @param {Array} bindings
     * @returns {undefined}
     */
    addClassNameBindings( bindings ) {
        bindings.forEach( ( element ) => {
            this.classNameBindings.push( element );
        });
    }
});
