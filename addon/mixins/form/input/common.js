import AriaAttributes from 'ember-forge-ui/mixins/html/attributes/aria';
import ComponentData from 'ember-forge-ui/mixins/component/data';
import DataAttributes from 'ember-forge-ui/mixins/html/attributes/data';
import ElementEvents from 'ember-forge-ui/mixins/html/events/element';
import Ember from 'ember';
import GlobalAttributes from 'ember-forge-ui/mixins/html/attributes/global';
import InputSelection from 'ember-forge-ui/mixins/form/input/event/selection';
import InputChange from 'ember-forge-ui/mixins/form/input/event/input';

const {
  computed,
  get,
  Mixin,
  set
} = Ember;

/**
 * Shared data and functionality across all <input> elements
 *
 * @module
 * @augments ember/Mixin
 * @augments ember-forge-ui/mixins/component/data
 * @augments ember-forge-ui/mixins/form/input/event/input
 * @augments ember-forge-ui/mixins/form/input/event/selection
 * @augments ember-forge-ui/mixins/html/attributes/aria
 * @augments ember-forge-ui/mixins/html/attributes/data
 * @augments ember-forge-ui/mixins/html/attributes/global
 * @augments ember-forge-ui/mixins/html/events/element
 */
export default Mixin.create(
  AriaAttributes,
  ComponentData,
  DataAttributes,
  ElementEvents,
  GlobalAttributes,
  InputSelection,
  InputChange,
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

  /**
   * HTML event: change
   *
   * Handle element value change
   *
   * @returns {undefined}
   */
  change() {
    this._super(...arguments);

    this.handleChangeEvent();
  },

  /**
   * HTML event: input
   *
   * Handle element value change
   *
   * @returns {undefined}
   */
  input() {
    this._super(...arguments);

    this.handleChangeEvent();
  },

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
  ),

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * If `onUpdate` contextual action is defined then call it with element's value.
   * If not then update the `data.<property>` path with the element's value.
   *
   * @returns {undefined}
   */
  handleChangeEvent() {
    let value = this.$().val();

    if (!Ember.isEmpty(get(this, 'onUpdate')) && typeof get(this, 'onUpdate') === 'function') {
      this.get('onUpdate')(value);

    } else {
      set(get(this, 'data'), get(this, 'property'), value);
    }
  }

});
