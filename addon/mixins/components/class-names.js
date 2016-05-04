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
     * Whether to clear the classNames array
     *
     * @type {Boolean}
     */
    clearClassNames: false,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Sets each attribute binding into the classNames array
     *
     * @function
     * @param {Array} bindings
     * @returns {undefined}
     */
    addClassNames( bindings ) {
        bindings.forEach( ( element ) => {
            this.classNames.push( element );
        });
    }
});
