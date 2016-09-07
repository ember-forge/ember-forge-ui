import Ember from 'ember';
import InputElement from 'ember-forge-ui/mixins/form/input/common';

const {
  addObserver,
  Component,
  get,
  isEmpty,
  observer,
  removeObserver,
  run,
  set
} = Ember;

/**
 * input[type="checkbox"] HTML element
 *
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/form/input/common
 * @see {@link https://html.spec.whatwg.org/multipage/forms.html#checkbox-state-(type=checkbox)}
 */
export default Component.extend(InputElement, {

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  attributeBindings: [
    'checked',
    'indeterminate',
    'required'
  ],

  /** @type {String[]} */
  classNames: [
    'ef-input-checkbox'
  ],

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  /**
   * Initialize state management
   *
   * @returns {undefined}
   */
  didInsertElement() {
    this._super(...arguments);

    this.initializeState();
  },

  /**
   * Add observers for dynamic properties
   *
   * @returns {undefined}
   */
  init() {
    this._super(...arguments);

    this.addObservers();
  },

  /**
   * Remove observers for dynamic properties
   *
   * @returns {undefined}
   */
  willDestroyElement() {
    this._super(...arguments);

    this.removeObservers();
  },

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Gives the default checkedness of the input element
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-input-checked}
   * @type {?Boolean}
   */
  checked: false,

  /**
   * If set to true the control's selection should be obscured as if the control was in a third, indeterminate, state.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#dom-input-indeterminate}
   * @type {Boolean}
   */
  indeterminate: false,

  /**
   * Track whether change event was initiated via component logic or UI interaction
   *
   * @type {?Boolean}
   */
  internalChange: null,

  /**
   * Indicates whether the component is being initialized for the first time
   *
   * @private
   * @type {Boolean}
   */
  isInitializing: true,

  /**
   * Whether the control is required for form submission
   *
   * @see {@link https://html.spec.whatwg.org/multipage/forms.html#attr-textarea-required}
   * @type {?Boolean}
   */
  required: null,

  /**
   * Input type: checkbox
   *
   * @type {String}
   */
  type: 'checkbox',

  // -------------------------------------------------------------------------
  // Observers

  /**
   * Sets `checked` value to `false` when `indeterminate` is `true`
   *
   * @function
   * @returns {undefined}
   */
  manageCheckedState: observer(
    'indeterminate',
    function() {
      if(get(this, 'indeterminate')) {
        set(this, 'checked', false);

        this.$().trigger('change');
      }
    }
  ),

  /**
   * Manages `indeterminate` value based on value of `checked`
   *
   * @function
   * @returns {undefined}
   */
  manageIndeterminateState: observer(
    'checked',
    function() {
      set(this, 'internalChange', true);

      let indeterminateValue = false;

      if (get(this, 'isInitializing')) {
        this.toggleProperty('isInitializing');

        indeterminateValue = get(this, 'checked') ? false : get(this, 'indeterminate');
      }

      set(this, 'indeterminate', indeterminateValue);
      this.$().prop('indeterminate', indeterminateValue);

      this.$().trigger('change');
    }
  ),

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Add observers to dynamic properties
   *
   * @returns {undefined}
   */
  addObservers() {
    let property = get(this, 'property');

    if (!isEmpty(property) && !Array.isArray(get(this, `data.${property}`)) && !isEmpty(this.getAttr('value'))) {
      addObserver(this, `data.${property}`, this, 'initializeState');
    }
  },

  /**
   * Set data property value dependent on checked state
   *
   * @override
   * @returns {undefined}
   */
  handleChangeEvent() {
    if (get(this, 'checked') !== this.readDOMAttr('checked')) {
      if (get(this, 'internalChange')) {
        this.$().prop('checked', get(this, 'checked'));

      } else {
        set(this, 'checked', this.readDOMAttr('checked'));
      }
    }

    set(this, 'internalChange', false);

    let value = get(this, 'checked') ?
      isEmpty(this.getAttr('value')) ?
        'on' :
        this.$().val() :
      null;

    if (value !== get(this, 'trackedValue')) {
      if (!isEmpty(get(this, 'onUpdate')) && typeof get(this, 'onUpdate') === 'function') {
        this.get('onUpdate')(value);

      } else {
        set(get(this, 'data'), get(this, 'property'), value);
      }

      set(this, 'trackedValue', value);
    }
  },

  /**
   * Place component into checked state if the value of the `property` value equals the value of the `value` property
   * Update data property with value if the value of the `checked` property is `true`
   *
   * @returns {undefined}
   */
  initializeState() {
    let property = get(this, 'property');
    let valueEqualsProperty = this.getAttr('value') === get(this, `data.${property}`);

    if(!get(this, 'checked')) {
      if (get(this, 'isInitializing')) {
        if (valueEqualsProperty) {
          run.scheduleOnce('afterRender', () => {
            set(this, 'checked', true);
          });
        }

      } else {
        run.scheduleOnce('afterRender', () => {
          set(this, 'checked', valueEqualsProperty);
        });
      }

    } else {
      if (get(this, 'isInitializing')) {
        if (!isEmpty(property) && !Array.isArray(get(this, `data.${property}`))) {
          run.scheduleOnce('afterRender', () => {
            set(this, 'internalChange', true);
            this.manageIndeterminateState();
            this.$().trigger('change');
          });
        }

        this.toggleProperty('isInitializing');

      } else {
        run.scheduleOnce('afterRender', () => {
          set(this, 'checked', valueEqualsProperty);
        });
      }
    }
  },

  /**
   * Remove observers to dynamic properties
   *
   * @returns {undefined}
   */
  removeObservers() {
    let property = get(this, 'property');

    removeObserver(this, `data.${property}`, this, 'initializeState');
  }
});
