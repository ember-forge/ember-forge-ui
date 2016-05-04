import Ember from 'ember';
import layout from '../templates/components/ef-button';
import AttributeBindings from '../mixins/components/attribute-bindings';
import ClassNames from '../mixins/components/class-names';
import ClassNameBindings from '../mixins/components/class-name-bindings';

const {
  Component
} = Ember;

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/components/attribute-bindings
 * @augments module:mixins/components/class-names
 * @augments module:mixins/components/class-name-bindings
 */
export default Component.extend( AttributeBindings, ClassNames, ClassNameBindings, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {Object} */
    layout,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * init event hook
     *
     * @function
     * @returns {undefined}
     */
    init() {
        this._super( ...arguments );
        this.componentInit();
    }

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
   * Initializes the state of the attributeBindings, classNameBindings and classNames arrays
   *
   * @function
   * @returns {undefined}
   */
    componentInit() {
        if ( !this.get ( 'clearAttributeBindings' ) ) {
            this.addAttributeBindings([
                'visible'
            ]);
        }

        if ( !this.get( 'clearClassNames' ) ) {
            this.addClassNames([
                'className1',
                'className2'
            ]);
        }

        if ( !this.get( 'clearClassNameBindings' ) ) {
            this.addClassNameBindings([
                'classNameBinding1',
                'classNameBinding2'
            ]);
        }
    }
});
