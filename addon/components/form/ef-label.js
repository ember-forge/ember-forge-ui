import AriaAttributes from 'ember-forge-ui/mixins/ef-html-aria-attributes';
import ComponentData from 'ember-forge-ui/mixins/ef-component-data';
import DataAttributes from 'ember-forge-ui/mixins/ef-html-data-attributes';
import ElementEvents from 'ember-forge-ui/mixins/ef-html-element-events';
import Ember from 'ember';
import GlobalAttributes from 'ember-forge-ui/mixins/ef-html-global-attributes';

const {
  Component
} = Ember;

/**
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/ef-component-data
 * @augments ember-forge-ui/mixins/ef-html-aria-attributes
 * @augments ember-forge-ui/mixins/ef-html-data-attributes
 * @augments ember-forge-ui/mixins/ef-html-global-attributes
 * @augments ember-forge-ui/mixins/ef-html-element-events
 * @see {@link https://html.spec.whatwg.org/multipage/forms.html#the-label-element}
 */
export default Component.extend(AriaAttributes, ComponentData, DataAttributes, ElementEvents, GlobalAttributes, {

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
