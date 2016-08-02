import Ember from 'ember';
import GlobalAttributes from 'ember-forge-ui/mixins/ef-html-global-attributes';

const {
  Component
} = Ember;

/**
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/ef-html-global-attributes
 */
export default Component.extend(GlobalAttributes, {

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  attributeBindings: [
    'autocomplete',
    'novalidate'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-form'
  ],

  /** @type {String} */
  tagName: 'form',

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Holds the properties the form fields should edit
   *
   * @type {?Object}
   */
  data: null,

  /**
   * Whether the form is being edited
   *
   * @type {Boolean}
   */
  isEditing: false

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
