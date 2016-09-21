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

  assert.strictEqual(
    component.get('validationHasOccurred'),
    false,
    '"validationHasOccurred" property is false by default'
  );
});

test('init() calls expected methods', function(assert) {
  const errorSpy = sinon.spy();
  const messageSpy = sinon.spy();
  const observerSpy = sinon.spy();

  this.subject({
    addDynamicObservers: observerSpy,
    property: 'something',
    registerError: errorSpy,
    updateMessage: messageSpy
  });

  assert.ok(
    errorSpy.calledOnce,
    'registerError() is called once'
  );

  assert.ok(
    messageSpy.calledOnce,
    'updateMessage() is called once'
  );

  assert.ok(
    observerSpy.calledOnce,
    'addDynamicObservers() is called once'
  );
});

test('willClearRender() calls expected methods', function(assert) {
  const component = this.subject();
  const deregisterSpy = sinon.spy(component, 'deregisterError');
  const observerSpy = sinon.spy(component, 'removeDynamicObservers');

  component.trigger('willClearRender');

  assert.ok(
    deregisterSpy.calledOnce,
    'deregisterError() is called once during willClearRender'
  );

  assert.ok(
    observerSpy.calledOnce,
    'removeDynamicObservers() is called once during willClearRender'
  );
});

test('deregisterError() calls closure action when validation of `property` and `onDeregisterError` passes', function(assert) {
  const spy = sinon.spy();

  const component = this.subject({
    onDeregisterError: spy,
    property: ''
  });

  component.deregisterError();

  assert.strictEqual(
    spy.calledOnce,
    false,
    'Closure action not called when `property` is empty string'
  );

  component.set('property', []);

  component.deregisterError();

  assert.strictEqual(
    spy.calledOnce,
    false,
    'Closure action not called when `property` is an array'
  );

  component.set('property', 'testProperty');
  component.set('onDeregisterError', '');

  component.deregisterError();

  assert.strictEqual(
    spy.calledOnce,
    false,
    'Closure action not called when `onDeregisterError` is an empty string'
  );

  component.set('onDeregisterError', []);

  component.deregisterError();

  assert.strictEqual(
    spy.calledWith(),
    false,
    'Closure action not called when `onDeregisterError` is not function'
  );

  component.set('onDeregisterError', spy);

  component.deregisterError();

  assert.ok(
    spy.calledWith('testProperty'),
    'Closure action is called'
  );
});

test('registerError() calls closure action when validation of `property` and `onRegisterError` passes', function(assert) {
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

test('updateMessage(): message not updated when validation has not occurred', function(assert) {
  const messageSpy = sinon.spy();
  const component = this.subject({
    scheduleMessageUpdate: messageSpy
  });

  component.updateMessage();

  assert.strictEqual(
    messageSpy.callCount,
    0,
    'Message not updated'
  );
});

test('updateMessage(): null pattern and pattern match true', function(assert) {
  const messageSpy = sinon.spy();
  const registerSpy = sinon.spy();
  const component = this.subject({
    pattern: null,
    patternMatches: {
      testProperty: true
    },
    property: 'testProperty',
    registerErrorPatternMatch: registerSpy,
    scheduleMessageUpdate: messageSpy,
    validationHasOccurred: true
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
});

test('updateMessage(): null pattern and pattern match false', function(assert) {
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
    scheduleMessageUpdate: messageSpy,
    validationHasOccurred: true
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
});

test('updateMessage(): non-null pattern, in error state and regex match', function(assert) {
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
    scheduleMessageUpdate: messageSpy,
    validationHasOccurred: true
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
});

test('updateMessage(): non-null pattern, not in error state', function(assert) {
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
    scheduleMessageUpdate: messageSpy,
    validationHasOccurred: true
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
});

test('updateMessage(): non-null pattern, in error state, no regex match', function(assert) {
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
    scheduleMessageUpdate: messageSpy,
    validationHasOccurred: true
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
});

test('updateMessage(): non-null pattern, invalid regex', function(assert) {
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
    scheduleMessageUpdate: messageSpy,
    validationHasOccurred: true
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

  assert.ok(
    component.__ember_meta__._listeners.includes('validationHasOccurred:change'),
    'validationHasOccurred is being observed'
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
