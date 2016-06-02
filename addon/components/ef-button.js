import Ember from 'ember';
import layout from '../templates/components/ef-button';
// import AttributeBindings from '../mixins/components/attribute-bindings';
// import ClassNames from '../mixins/components/class-names';
// import ClassNameBindings from '../mixins/components/class-name-bindings';

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
export default Component.extend( /* AttributeBindings, ClassNames, ClassNameBindings, */ {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    attributeBindings: [
        'title'
    ],

    classNames: [
        'className1',
        'className2'
    ],

    classNameBindings: [
        'classNameBinding1',
        'classNameBinding2'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'button',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * didInsertElement event hook
     *
     * @function
     * @returns {undefined}
     */
    didInsertElement() {
        console.log( 'didInsertElement() from ember-forge-ui ef-button' );
    },

    /**
     * didReceiveAttrs event hook
     *
     * @function
     * @returns {undefined}
     */
    didReceiveAttrs() {
        console.log( 'didReceiveAttrs() from ember-forge-ui ef-button' );
    },

    /**
     * didRender event hook
     *
     * @function
     * @returns {undefined}
     */
    didRender() {
        console.log( 'didRender() from ember-forge-ui ef-button' );
    },

    /**
     * didUpdate event hook
     *
     * @function
     * @returns {undefined}
     */
    didUpdate() {
        console.log( 'didUpdate() from ember-forge-ui ef-button' );
    },

    /**
     * didUpdateAttrs event hook
     *
     * @function
     * @returns {undefined}
     */
    didUpdateAttrs() {
        console.log( 'didUpdateAttrs() from ember-forge-ui ef-button' );
    },

    /**
     * willClearRender event hook
     *
     * @function
     * @returns {undefined}
     */
    willClearRender() {
        console.log( 'willClearRender() from ember-forge-ui ef-button' );
    },

    /**
     * willDestroyElement event hook
     *
     * @function
     * @returns {undefined}
     */
    willDestroyElement() {
        console.log( 'willDestroyElement() from ember-forge-ui ef-button' );
    },

    /**
     * willInsertElement event hook
     *
     * @function
     * @returns {undefined}
     */
    willInsertElement() {
        console.log( 'willInsertElement() from ember-forge-ui ef-button' );
    },

    /**
     * willRender event hook
     *
     * @function
     * @returns {undefined}
     */
    willRender() {
        console.log( 'willRender() from ember-forge-ui ef-button' );
    },

    /**
     * willUpdate event hook
     *
     * @function
     * @returns {undefined}
     */
    willUpdate() {
        console.log( 'willUpdate() from ember-forge-ui ef-button' );
    },

    /**
     * init event hook
     *
     * @function
     * @returns {undefined}
     */
    init() {
        this._super( ...arguments );
//        this.componentInit();

        console.log( 'init() from ember-forge-ui ef-button' );
    },

    // -------------------------------------------------------------------------
    // Properties

    classNameBinding1: true,

    classNameBinding2: true,

    title: 'Bound attribute value',

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
        if ( !this.get( 'clearAttributeBindings' ) ) {
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
