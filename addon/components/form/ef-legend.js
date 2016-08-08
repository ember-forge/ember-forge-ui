import AriaAttributes from 'ember-forge-ui/mixins/ef-html-aria-attributes';
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
 * @augments ember-forge-ui/mixins/ef-html-aria-attributes
 * @augments ember-forge-ui/mixins/ef-html-data-attributes
 * @augments ember-forge-ui/mixins/ef-html-element-events
 * @augments ember-forge-ui/mixins/ef-html-global-attributes
 * @see {@link https://html.spec.whatwg.org/multipage/forms.html#the-legend-element}
 */
export default Component.extend(AriaAttributes, DataAttributes, ElementEvents, GlobalAttributes, {

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  classNames: [
    'ef-legend'
  ],

  /** @type {String} */
  tagName: 'legend',

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

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
