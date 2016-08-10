import AriaAttributes from 'ember-forge-ui/mixins/ef-html-aria-attributes';
import ComponentData from 'ember-forge-ui/mixins/ef-component-data';
import DataAttributes from 'ember-forge-ui/mixins/ef-html-data-attributes';
import ElementEvents from 'ember-forge-ui/mixins/ef-html-element-events';
import Ember from 'ember';
import GlobalAttributes from 'ember-forge-ui/mixins/ef-html-global-attributes';
import InputSelection from 'ember-forge-ui/mixins/ef-html-input-selection';
import KeyPress from 'ember-forge-ui/mixins/ef-html-input-keypress';

const {
  computed,
  get,
  Mixin
} = Ember;

/**
 * Shared data and functionality across all <input> elements
 *
 * @module
 * @augments ember/Mixin
 * @augments ember-forge-ui/mixins/ef-html-aria-attributes
 * @augments ember-forge-ui/mixins/ef-component-data
 * @augments ember-forge-ui/mixins/ef-html-data-attributes
 * @augments ember-forge-ui/mixins/ef-html-element-events
 * @augments ember-forge-ui/mixins/ef-html-global-attributes
 * @augments ember-forge-ui/mixins/ef-html-input-keypress
 * @augments ember-forge-ui/mixins/ef-html-input-selection
 */
export default Mixin.create(
  AriaAttributes,
  ComponentData,
  DataAttributes,
  ElementEvents,
  GlobalAttributes,
  InputSelection,
  KeyPress,
  {

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  attributeBindings: [
    'type',
    'value'
  ],

  /** @type {String} */
  tagName: 'input',

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
   * Property to access on `data` object
   *
   * @type
   */
  property: null,

  /**
   * Element value
   *
   * @type {?String|Number}
   */
  value: computed(
    'property',
    function() {
      return get(this, 'data.' + get(this, 'property'));
    }
  )

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
