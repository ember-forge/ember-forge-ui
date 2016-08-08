import Ember from 'ember';

const {
  Mixin
} = Ember;

/**
 * Add bindings for ARIA attributes
 *
 * @module
 * @augments ember/Mixin
 * @see {@link https://html.spec.whatwg.org/multipage/infrastructure.html#attr-aria-*}
 */
export default Mixin.create({

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  attributeBindings: [
    'aria-checked',
    'aria-describedby',
    'aria-disabled',
    'aria-expanded',
    'aria-hidden',
    'aria-invalid',
    'aria-label',
    'aria-level',
    'aria-multiline',
    'aria-multiselectable',
    'aria-owns',
    'aria-readonly',
    'aria-required',
    'aria-selected',
    'aria-sort',
    'aria-valuemax',
    'aria-valuemin',
    'aria-valuenow',
    'role'
  ]

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
