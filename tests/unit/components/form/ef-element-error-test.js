import globalLibraries from '../../../helpers/sl/synchronous/global-libraries';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('form/ef-element-error', 'Unit | Component | form/ef element error', {
  unit: true
});

test('Default property values', function(assert) {
  const component = this.subject();

  assert.strictEqual(
    component.get('hasBlock'),
    false,
    '"hasBlock" property is false by default'
  );

  assert.strictEqual(
    component.get('pattern'),
    null,
    '"pattern" property is null by default'
  );
});

test('setHasBlock() sets `hasBlock` to true', function(assert) {
  const component = this.subject();

  assert.strictEqual(
    component.get('hasBlock'),
    false,
    '"hasBlock" property is false'
  );

  component.get('setHasBlock');

  assert.strictEqual(
    component.get('hasBlock'),
    true,
    '"hasBlock" property is true'
  );
});

test('isError() returns false with no argument passed', function(assert) {
  const component = this.subject();

  assert.strictEqual(
    component.isError(),
    false,
    'returns false'
  );
});

test('isError() returns false when passed Boolean false', function(assert) {
  const component = this.subject();

  assert.strictEqual(
    component.isError(false),
    false,
    'returns false'
  );
});

test('isError() returns false when passed null', function(assert) {
  const component = this.subject();

  assert.strictEqual(
    component.isError(),
    false,
    'returns false'
  );
});

test('isError() returns false when passed empty string', function(assert) {
  const component = this.subject();

  assert.strictEqual(
    component.isError(''),
    false,
    'returns false'
  );
});

test('isError() returns false when `hasBlock` is false and passed Boolean true', function(assert) {
  const component = this.subject();

  component.set('hasBlock', false);

  assert.strictEqual(
    component.isError(true),
    false,
    'returns false'
  );
});

test('isError() returns true when passed a string', function(assert) {
  const component = this.subject();

  assert.strictEqual(
    component.isError('error message'),
    true,
    'returns true'
  );
});

test('isError() returns true when passed a matching `pattern` value', function(assert) {
  const component = this.subject({
    pattern: '^c'
  });

  assert.strictEqual(
    component.isError('cat'),
    true,
    'returns true'
  );
});

test('isError() returns false when passed a non-matching `pattern` value', function(assert) {
  const component = this.subject({
    pattern: 'r$'
  });

  assert.strictEqual(
    component.isError('cat'),
    false,
    'returns false'
  );
});

test('isError() continues to react to `pattern` changes when set to an invalid RegEx pattern', function(assert) {
  const component = this.subject({
    pattern: '*'
  });

  component.isError('cat');

  component.set('pattern', 'cat');

  assert.strictEqual(
    component.isError('cat'),
    true,
    'returns true'
  );
});

test('Dependent keys are correct', function(assert) {
  const component = this.subject({
    errors: {
      theProperty: null
    },
    property: "theProperty"
  });

  const messageDependentKeys = [
    'errors.theProperty',
    'pattern'
  ];

  assert.deepEqual(
    component.message._dependentKeys,
    messageDependentKeys,
    'Dependent keys are correct for message()'
  );
});

test('There are no references to Ember.$, $ or jQuery', function(assert) {
  globalLibraries.setupSpies();

  const component = this.subject({
    errors: {
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
