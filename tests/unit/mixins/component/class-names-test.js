import Ember from 'ember';
import ComponentClassNamesMixin from 'ember-forge-ui/mixins/component/class-names';
import { module, test } from 'qunit';

module('Unit | Mixin | component/class names');

// Replace this with your real tests.
test('it works', function(assert) {
  let ComponentClassNamesObject = Ember.Object.extend(ComponentClassNamesMixin);
  let subject = ComponentClassNamesObject.create();
  assert.ok(subject);
});
