import AriaAttributes from 'ember-forge-ui/mixins/html/attributes/aria';
import ComponentData from 'ember-forge-ui/mixins/component/data';
import DataAttributes from 'ember-forge-ui/mixins/html/attributes/data';
import ElementEvents from 'ember-forge-ui/mixins/html/events/element';
import Ember from 'ember';
import GlobalAttributes from 'ember-forge-ui/mixins/html/attributes/global';

const {
  Component
} = Ember;

/**
 * @module
 * @augments ember/Component
 * @augments ember-forge-ui/mixins/component/data
 * @augments ember-forge-ui/mixins/html/attributes/aria
 * @augments ember-forge-ui/mixins/html/attributes/data
 * @augments ember-forge-ui/mixins/html/attributes/global
 * @augments ember-forge-ui/mixins/html/events/element
 * @see {@link https://html.spec.whatwg.org/multipage/forms.html#the-legend-element}
 */
export default Component.extend(AriaAttributes, ComponentData, DataAttributes, ElementEvents, GlobalAttributes, {

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
