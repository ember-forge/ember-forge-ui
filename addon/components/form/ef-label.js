import Ember from 'ember';
import GlobalAttributes from 'ember-forge-ui/mixins/ef-html-global-attributes';

const {
  Component
} = Ember;

/**
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/ef-html-global-attributes
 * @see {@link https://html.spec.whatwg.org/multipage/forms.html#the-label-element}
 */
export default Component.extend(GlobalAttributes, {

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  attributeBindings: [
    'for'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-label'
  ],

  /** @type {String} */
  tagName: 'label',

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Form control with which the caption is to be associated
   *
   * @type {?String}
   */
  for: null,

  /**
   * Text to display when used in non-block form
   *
   * @type {?String}
   */
  text: null

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
