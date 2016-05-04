import Ember from 'ember';
import ComponentClassNameBindingsMixin from 'ember-forge-ui/mixins/component/class-name-bindings';
import { module, test } from 'qunit';

module('Unit | Mixin | component/class name bindings');

// Replace this with your real tests.
test('it works', function(assert) {
  let ComponentClassNameBindingsObject = Ember.Object.extend(ComponentClassNameBindingsMixin);
  let subject = ComponentClassNameBindingsObject.create();
  assert.ok(subject);
});
