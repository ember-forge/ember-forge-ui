import AriaAttributes from 'ember-forge-ui/mixins/html/attributes/aria';
import ComponentData from 'ember-forge-ui/mixins/component/data';
import DataAttributes from 'ember-forge-ui/mixins/html/attributes/data';
import ElementEvents from 'ember-forge-ui/mixins/html/events/element';
import Ember from 'ember';
import ErrorState from 'ember-forge-ui/mixins/form/error-state';
import GlobalAttributes from 'ember-forge-ui/mixins/html/attributes/global';
import InputSelection from 'ember-forge-ui/mixins/form/input/event/selection';
import InputChange from 'ember-forge-ui/mixins/form/input/event/input';

const {
  computed,
  get,
  isEmpty,
  Mixin,
  set
} = Ember;

/**
 * Shared data and functionality across all <input> elements
 *
 * @module
 * @augments ember/Mixin
 * @augments ember-forge-ui/mixins/component/data
 * @augments ember-forge-ui/mixins/form/error-state
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
  ErrorState,
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
    'autofocus',
    'disabled',
    'form',
    'name',
    'type',
    'value'
  ],

  /** @type {String[]} */
  classNameBindings: [
    'errorState:ef-error'
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
   * Create dynamic computed properties
   *
   * @returns {undefined}
   */
  init() {
    this._super(...arguments);

    this.createComputedProperties();
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
   * Indicate that a control is to be focused as soon as the page is loaded
   * or as soon as the dialog within which it finds itself is shown.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fe-autofocus}
   * @type {?Boolean}
   */
  autofocus: null,

  /**
   * Holds the properties the form fields should edit
   *
   * @type {?Object}
   */
  data: null,

  /**
   * Whether is disabled
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fe-disabled}
   * @type {?Boolean}
   */
  disabled: null,

  /**
   * Form associated with
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fae-form}
   * @type {?String}
   */
  form: null,

  /**
   * Name of the form control
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-fe-name}
   * @type {?String}
   */
  name: null,

  /**
   * Property to access on `data` object
   *
   * @type
   */
  property: null,

  /**
   * Tracked value of element to debounce the handling of `change` and `input` event firings
   *
   * @private
   * @type {?Number|String}
   */
  trackedValue: null,

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Define and assign dynamic computed properties
   *
   * - `errorState` is the error state of the specific element
   * - `value` is a bound property between the element's value and the property on the data object
   *
   * @returns {undefined}
   */
  createComputedProperties() {
    let property = get(this, 'property');

    if (!isEmpty(property) && !Array.isArray(get(this, `data.${property}`))) {
      this.value = computed(
        `data.${property}`,
        {
          get() {
            let value = get(this, `data.${property}`);

            set(this, 'trackedValue', value);

            return value;
          }
        }
      );
    }
  },

  /**
   * If `onUpdate` contextual action is defined then call it with element's value.
   * If not then update the `data.<property>` path with the element's value.
   *
   * @returns {undefined}
   */
  handleChangeEvent() {
    let value = this.$().val();

    if (value !== get(this, 'trackedValue')) {
      if (!isEmpty(get(this, 'onUpdate')) && typeof get(this, 'onUpdate') === 'function') {
        this.get('onUpdate')(value);

      } else {
        set(get(this, 'data'), get(this, 'property'), value);
      }

      set(this, 'trackedValue', value);
    }
  }

});
