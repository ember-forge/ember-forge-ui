//import Ember from 'ember';
import globalLibraries from '../../../helpers/sl/synchronous/global-libraries';
//import sinon from 'sinon';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('form/ef-form-text', 'Unit | Component | form/ef form text', {
  unit: true
});

test('Default property values', function(assert) {
  const component = this.subject();

  assert.strictEqual(
    component.get('tagName'),
    'p',
    '"tagName" property is `p` by default'
  );

  assert.strictEqual(
    component.get('text'),
    null,
    '"text" property is null by default'
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
