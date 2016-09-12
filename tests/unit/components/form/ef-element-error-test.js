import Ember from 'ember';
import globalLibraries from '../../../helpers/sl/synchronous/global-libraries';
import sinon from 'sinon';
import { moduleForComponent, test } from 'ember-qunit';
import { skip } from 'qunit';

const {
  run
} = Ember;

moduleForComponent('form/ef-element-error', 'Unit | Component | form/ef element error', {
  unit: true
});

test('Default property values', function(assert) {
  const component = this.subject();

  assert.strictEqual(
    component.get('hasMessage'),
    false,
    '"hasMessage" property is false by default'
  );

  assert.strictEqual(
    component.get('message'),
    null,
    '"message" property is null by default'
  );

  assert.strictEqual(
    component.get('pattern'),
    null,
    '"pattern" property is null by default'
  );

  assert.strictEqual(
    component.get('patternMatches'),
    null,
    '"patternMatches" property is null by default'
  );
});

test('init() calls expected methods', function(assert) {
  run.begin();

  assert.expect(3);

  const done = assert.async();
  const errorSpy = sinon.spy();
  const observerSpy = sinon.spy();

  this.subject({
    addDynamicObservers: observerSpy,
    property: 'something',
    registerError: errorSpy,
    updateMessage() {
      assert.ok(
        true,
        'registerError() is called once during init'
      );

      done();
    }
  });

  assert.ok(
    errorSpy.calledOnce,
    'registerError() is called once'
  );

  assert.ok(
    observerSpy.calledOnce,
    'addDynamicObservers() is called once'
  );

  run.end();
});

test('willClearRender() calls expected methods', function(assert) {
  const component = this.subject();
  const observerSpy = sinon.spy(component, 'removeDynamicObservers');

  component.trigger('willClearRender');

  assert.ok(
    observerSpy.called,
    'removeDynamicObservers() is called once during willClearRender'
  );
});

test('registerError() calls closure action when validation of `property` and `onRegisterError` passes', function(assert) {
  run.begin();

  const spy = sinon.spy();

  const component = this.subject({
    onRegisterError: spy,
    property: ''
  });

  component.registerError();

  assert.strictEqual(
    spy.calledOnce,
    false,
    'Closure action not called when `property` is empty string'
  );

  component.set('property', []);

  component.registerError();

  assert.strictEqual(
    spy.calledOnce,
    false,
    'Closure action not called when `property` is an array'
  );

  component.set('property', 'testProperty');
  component.set('onRegisterError', '');

  component.registerError();

  assert.strictEqual(
    spy.calledOnce,
    false,
    'Closure action not called when `onRegisterError` is an empty string'
  );

  component.set('onRegisterError', []);

  component.registerError();

  assert.strictEqual(
    spy.calledWith(),
    false,
    'Closure action not called when `onRegisterError` is not function'
  );

  component.set('onRegisterError', spy);

  component.registerError();

  assert.ok(
    spy.calledWith('testProperty'),
    'Closure action is called'
  );

  run.end();
});

test('registerErrorPatternMatch() calls closure action when validation of `onRegisterErrorPatternMatch` passes', function(assert) {
  run.begin();

  const spy = sinon.spy();

  const component = this.subject({
    onRegisterErrorPatternMatch: '',
    property: 'testProperty'
  });

  component.registerErrorPatternMatch();

  assert.strictEqual(
    spy.calledOnce,
    false,
    'Closure action not called when `onRegisterErrorPatternMatch` is an empty string'
  );

  component.set('onRegisterErrorPatternMatch', []);

  component.registerErrorPatternMatch();

  assert.strictEqual(
    spy.calledWith(),
    false,
    'Closure action not called when `onRegisterErrorPatternMatch` is not function'
  );

  component.set('onRegisterErrorPatternMatch', spy);

  component.registerErrorPatternMatch();

  assert.ok(
    spy.calledWith('testProperty'),
    'Closure action is called'
  );

  run.end();
});

test('`hasMessage` is `true` when there is a message', function(assert) {
  run.begin();

  const component = this.subject({
    message: '',
    property: 'testProperty'
  });

  assert.strictEqual(
    component.get('hasMessage'),
    false,
    '"hasMessage" property is false'
  );

  component.set('message', 'something');

  assert.strictEqual(
    component.get('hasMessage'),
    true,
    '"hasMessage" property is true'
  );

  run.end();
});

test('updateMessage(): null pattern and pattern match true', function(assert) {
  run.begin();

  const messageSpy = sinon.spy();
  const registerSpy = sinon.spy();
  const component = this.subject({
    pattern: null,
    patternMatches: {
      testProperty: true
    },
    property: 'testProperty',
    registerErrorPatternMatch: registerSpy,
    scheduleMessageUpdate: messageSpy
  });

  component.updateMessage();

  assert.ok(
    registerSpy.calledWith(false),
    'registerErrorPatternMatch() called with false'
  );

  assert.ok(
    messageSpy.calledWith(null),
    'scheduleMessageUpdate() called with null'
  );

  run.end();
});

test('updateMessage(): null pattern and pattern match false', function(assert) {
  run.begin();

  const messageSpy = sinon.spy();
  const registerSpy = sinon.spy();
  const component = this.subject({
    errors: {
      testProperty: 'error message'
    },
    pattern: null,
    patternMatches: {
      testProperty: false
    },
    property: 'testProperty',
    registerErrorPatternMatch: registerSpy,
    scheduleMessageUpdate: messageSpy
  });

  component.updateMessage();

  assert.ok(
    registerSpy.calledWith(false),
    'registerErrorPatternMatch() called with false'
  );

  assert.ok(
    messageSpy.calledWith('error message'),
    'scheduleMessageUpdate() called with expected value'
  );

  run.end();
});

test('updateMessage(): non-null pattern, in error state and regex match', function(assert) {
  run.begin();

  const messageSpy = sinon.spy();
  const registerSpy = sinon.spy();
  const component = this.subject({
    errors: {
      testProperty: 'error message'
    },
    errorStates: {
      testProperty: true
    },
    pattern: 'mess',
    patternMatches: {
      testProperty: true
    },
    property: 'testProperty',
    registerErrorPatternMatch: registerSpy,
    scheduleMessageUpdate: messageSpy
  });

  component.updateMessage();

  assert.ok(
    registerSpy.calledWith(true),
    'registerErrorPatternMatch() called with true'
  );

  assert.ok(
    messageSpy.calledWith('error message'),
    'scheduleMessageUpdate() called with expected value'
  );

  run.end();
});

test('updateMessage(): non-null pattern, not in error state', function(assert) {
  run.begin();

  const messageSpy = sinon.spy();
  const registerSpy = sinon.spy();
  const component = this.subject({
    errors: {
      testProperty: 'error message'
    },
    errorStates: {
      testProperty: false
    },
    pattern: 'mess',
    patternMatches: {
      testProperty: true
    },
    property: 'testProperty',
    registerErrorPatternMatch: registerSpy,
    scheduleMessageUpdate: messageSpy
  });

  component.updateMessage();

  assert.ok(
    registerSpy.calledWith(false),
    'registerErrorPatternMatch() called with false'
  );

  assert.ok(
    messageSpy.calledWith(null),
    'scheduleMessageUpdate() called with null'
  );

  run.end();
});

test('updateMessage(): non-null pattern, in error state, no regex match', function(assert) {
  run.begin();

  const messageSpy = sinon.spy();
  const registerSpy = sinon.spy();
  const component = this.subject({
    errors: {
      testProperty: 'error message'
    },
    errorStates: {
      testProperty: false
    },
    pattern: 'car',
    patternMatches: {
      testProperty: true
    },
    property: 'testProperty',
    registerErrorPatternMatch: registerSpy,
    scheduleMessageUpdate: messageSpy
  });

  component.updateMessage();

  assert.ok(
    registerSpy.calledWith(false),
    'registerErrorPatternMatch() called with false'
  );

  assert.ok(
    messageSpy.calledWith(null),
    'scheduleMessageUpdate() called with null'
  );

  run.end();
});

test('updateMessage(): non-null pattern, invalid regex', function(assert) {
  run.begin();

  const messageSpy = sinon.spy();
  const registerSpy = sinon.spy();
  const component = this.subject({
    errors: {
      testProperty: 'error message'
    },
    errorStates: {
      testProperty: false
    },
    pattern: '*',
    patternMatches: {
      testProperty: true
    },
    property: 'testProperty',
    registerErrorPatternMatch: registerSpy,
    scheduleMessageUpdate: messageSpy
  });

  component.updateMessage();

  assert.ok(
    registerSpy.calledWith(false),
    'registerErrorPatternMatch() called with false'
  );

  assert.ok(
    messageSpy.calledWith(null),
    'scheduleMessageUpdate() called with null'
  );

  run.end();
});

skip('scheduleMessageUpdate() sets message in afterRender', function() {
});

test( 'Observer keys are correct', function( assert ) {
  run.begin();

  const component = this.subject({
    property: 'testProperty'
  });

  assert.ok(
    component.__ember_meta__._listeners.includes('errors.testProperty:change'),
    'errors.testProperty is being observed'
  );

  assert.ok(
    component.__ember_meta__._listeners.includes('pattern:change'),
    'pattern is being observed'
  );

  assert.ok(
    component.__ember_meta__._listeners.includes('patternMatches.testProperty:change'),
    'patternMatches.testProperty is being observed'
  );

  run.end();
});

test('There are no references to Ember.$, $ or jQuery', function(assert) {
  run.begin();

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

  run.end();
});
