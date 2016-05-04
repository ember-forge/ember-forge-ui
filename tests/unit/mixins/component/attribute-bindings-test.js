import Ember from 'ember';
import ComponentAttributeBindingsMixin from 'ember-forge-ui/mixins/component/attribute-bindings';
import { module, test } from 'qunit';

module('Unit | Mixin | component/attribute bindings');

// Replace this with your real tests.
test('it works', function(assert) {
  let ComponentAttributeBindingsObject = Ember.Object.extend(ComponentAttributeBindingsMixin);
  let subject = ComponentAttributeBindingsObject.create();
  assert.ok(subject);
});
