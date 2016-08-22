import globalLibraries from '../../../../helpers/sl/synchronous/global-libraries';
import InputElement from 'ember-forge-ui/mixins/form/input/common';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('form/input/ef-checkbox', 'Unit | Component | form/input/ef checkbox', {
  unit: true
});

test('Expected Mixins are present', function(assert) {
  assert.ok(
    InputElement.detect(this.subject()),
    'InputElement Mixin is present'
  );
});

test('Default property values', function(assert) {
  const component = this.subject();

  assert.strictEqual(
    component.get('checked'),
    false,
    '"checked" property is false by default'
  );

  assert.strictEqual(
    component.get('indeterminate'),
    false,
    '"indeterminate" property is false by default'
  );

  assert.strictEqual(
    component.get('internalChange'),
    null,
    '"internalChange" property is false by default'
  );

  assert.strictEqual(
    component.get('isInitializing'),
    true,
    '"isInitializing" property is false by default'
  );

  assert.strictEqual(
    component.get('required'),
    null,
    '"required" property is false by default'
  );

  assert.strictEqual(
    component.get('type'),
    'checkbox',
    '"type" property is "checkbox" by default'
  );
});

test('didInsertElement - initializing: `checked` is `true`, no `value`', function(assert) {
  const component = this.subject({
    data: {
      theProperty: null
    },
    property: 'theProperty',
    checked: true
  });

  this.render();

  assert.strictEqual(
    component.get('indeterminate'),
    false,
    '"indeterminate" property is false'
  );

  assert.strictEqual(
    component.get('data.theProperty'),
    'on',
    'data property was updated'
  );
});

test('didInsertElement - initializing: `checked` is `true`, has `value`, data property is null', function(assert) {
  // assert.expect( 1 );

  // const done = assert.async();

  const component = this.subject({
    data: {
      theProperty: null
    },
    property: 'theProperty',
    value: 'newValue',
    checked: true
  });

//  this.render();

  assert.strictEqual(
    component.get('indeterminate'),
    false,
    '"indeterminate" property is false'
  );

  assert.strictEqual(
    component.get('data.theProperty'),
    'newValue',
    'data property was updated'
  );
});

test('didInsertElement - initializing: `checked` is `true`, has `value`, data property has value', function(assert) {
  const component = this.subject({
    data: {
      theProperty: 'differentValue'
    },
    property: 'theProperty',
    value: 'newValue',
    checked: true
  });

  this.render();

  assert.strictEqual(
    component.get('indeterminate'),
    false,
    '"indeterminate" property is false'
  );

  assert.strictEqual(
    component.get('data.theProperty'),
    'newValue',
    'data property was updated'
  );
});



// test('didInsertElement - re-render: `checked` is `true`', function(assert) {

// });

// test('didInsertElement - initializing: `checked` is `false`', function(assert) {

// });

// test('didInsertElement - re-render: `checked` is `true`', function(assert) {

// });

// test('onUpdate()', function(assert) {

      // if (!Ember.isEmpty(get(this, 'onUpdate')) && typeof get(this, 'onUpdate') === 'function') {
      //   this.get('onUpdate')(value);


// });

test('There are no references to Ember.$, $ or jQuery', function(assert) {
  globalLibraries.setupSpies();

  const component = this.subject({
    data: {
      theProperty: null
    },
    property: 'theProperty'
  });

  this.render();

  globalLibraries.triggerEvents(component);

  assert.notOk(
    globalLibraries.called(),
    'Global libraries are not referenced in component'
  );

  globalLibraries.restoreSpies();
});
