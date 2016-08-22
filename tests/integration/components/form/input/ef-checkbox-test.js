import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form/input/ef-checkbox', 'Integration | Component | form/input/ef checkbox', {
  integration: true
});

test('Default rendered state', function( assert ) {
  this.set('data', {
    testValue: null
  });

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
    }}
  `);

  assert.ok(
    this.$('>:first-child').hasClass('ef-input-checkbox'),
    'Has class "ef-input-checkbox"'
  );

  assert.strictEqual(
    this.$('>:first-child').prop('checked'),
    false,
    'Element is unchecked'
  );
});

test('`property` is bound to a `null` data property, no `value` or `checked` properties', function(assert) {
  this.set('data', {
    testValue: null
  });

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
    }}
  `);

  this.$('>:first-child').trigger('click');

  assert.strictEqual(
    this.get('data.testValue'),
    'on',
    'Data value is equal to "on" when checked when the data value was originally `null`'
  );

  this.$('>:first-child').trigger('click');

  assert.strictEqual(
    this.get('data.testValue'),
    null,
    'Data value is equal to `null` when unchecked when the data value was originally `null`'
  );
});

test('`property` is bound to a value, no `value` or `checked` properties', function(assert) {
  this.set('data', {
    testValue: 'hasOriginalValue'
  });

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
    }}
  `);

  this.$('>:first-child').trigger('click');

  assert.strictEqual(
    this.get('data.testValue'),
    'on',
    'Data value is equal to "on" when checked when the data value originally had a value'
  );

  this.$('>:first-child').trigger('click');

  assert.strictEqual(
    this.get('data.testValue'),
    null,
    'Data value is equal to `null` when unchecked when the data value originally had a value'
  );
});

test('`property` is bound to a null value, `value` is set, no `checked` property', function(assert) {
  this.set('data', {
    testValue: null
  });

  const newValue = 'newValue';

  this.set('newValue', newValue);

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
      value=newValue
    }}
  `);

  this.$('>:first-child').trigger('click');

  assert.strictEqual(
    this.get('data.testValue'),
    newValue,
    'Data value is equal to the `value` property when checked when the data value was originally `null`'
  );

  this.$('>:first-child').trigger('click');

  assert.strictEqual(
    this.get('data.testValue'),
    null,
    'Data value is equal to `null` when unchecked when the data value originally had a value'
  );
});

test('`property` is bound to a value, `value` is set, no `checked` property', function(assert) {
  this.set('data', {
    testValue: 'hasOriginalValue'
  });

  const newValue = 'newValue';

  this.set('newValue', newValue);

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
      value=newValue
    }}
  `);

  this.$('>:first-child').trigger('click');

  assert.strictEqual(
    this.get('data.testValue'),
    newValue,
    'Data value is equal to the `value` property when checked when the data value was originally `null`'
  );

  this.$('>:first-child').trigger('click');

  assert.strictEqual(
    this.get('data.testValue'),
    null,
    'Data value is equal to `null` when unchecked when the data value originally had a value'
  );
});

test('`property` is bound to a null value, `value` is set to a value, no `checked` property - unchecked by default', function(assert) {
  this.set('data', {
    testValue: null
  });

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
      value="aValue"
    }}
  `);

  assert.strictEqual(
    this.$('>:first-child').prop('checked'),
    false,
    'Element is unchecked'
  );
});

test('`property` is bound to a value, `value` is set to same value, no `checked` property - checked by default', function(assert) {
  const theValue = 'theValue';

  this.set('theValue', theValue);

  this.set('data', {
    testValue: theValue
  });

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
      value=theValue
    }}
  `);

  assert.strictEqual(
    this.$('>:first-child').prop('checked'),
    true,
    'Element is checked'
  );
});

test('`property` is bound to a value, `value` is set to a value, no `checked` property - becomes checked when data value is set to same as `value`', function(assert) {
  const theValue = 'theValue';

  this.set('theValue', theValue);

  this.set('data', {
    testValue: 'initialValue'
  });

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
      value=theValue
    }}
  `);

  assert.strictEqual(
    this.$('>:first-child').prop('checked'),
    false,
    'Element is unchecked'
  );

  this.set('data.testValue', theValue);

  assert.strictEqual(
    this.$('>:first-child').prop('checked'),
    true,
    'Element is checked'
  );
});

test('`property` is bound to a value, `value` is set to a value, no `checked` property - `value` is not bound and does not respect changes to its value', function(assert) {
  const theValue = 'theValue';
  const testValue = 'initialValue';

  this.set('theValue', theValue);

  this.set('data', {
    testValue: testValue
  });

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
      value=theValue
    }}
  `);

  assert.strictEqual(
    this.$('>:first-child').prop('checked'),
    false,
    'Element is unchecked'
  );

  this.set('theValue', 'initialValue');

  assert.strictEqual(
    this.get('data.testValue'),
    testValue,
    'Data value was not changed when `value` property was'
  );

  assert.strictEqual(
    this.$('>:first-child').prop('checked'),
    false,
    'Element is checked'
  );
});

test('`checked` property toggles checked state', function(assert) {
  this.set('checked', false);

  this.set('data', {
    testValue: 'initialValue'
  });

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
      checked=checked
    }}
  `);

  assert.strictEqual(
    this.$('>:first-child').prop('checked'),
    false,
    'Element is not checked'
  );

  this.set('checked', true);

  assert.strictEqual(
    this.$('>:first-child').prop('checked'),
    true,
    'Element is checked'
  );
});

test('Set `indeterminate` to true puts checkbox into indeterminate state', function(assert) {
  this.set('indeterminate', false);

  this.set('data', {
    testValue: 'initialValue'
  });

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
      indeterminate=indeterminate
    }}
  `);

  assert.strictEqual(
    this.$('>:first-child').prop('indeterminate'),
    false,
    'Element is not in indeterminate state'
  );

  this.set('indeterminate', true);

  assert.strictEqual(
    this.$('>:first-child').prop('indeterminate'),
    true,
    'Element is in indeterminate state'
  );
});

test('`indeterminate` value only respected if checked state is not true - derived checked state', function(assert) {
  const theValue = 'initialValue';

  this.set('theValue', theValue);

  this.set('data', {
    testValue: theValue
  });

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
      value=theValue
      indeterminate=true
    }}
  `);

  assert.strictEqual(
    this.$('>:first-child').prop('checked'),
    true,
    'Element is checked'
  );

  assert.strictEqual(
    this.$('>:first-child').prop('indeterminate'),
    false,
    'Element is not in indeterminate state'
  );
});

// this one is failing

test('`indeterminate` value only respected if checked state is not true - set checked state', function(assert) {
  this.set('data', {
    testValue: 'initialValue'
  });

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
      checked=true
      indeterminate=true
    }}
  `);

  assert.strictEqual(
    this.$('>:first-child').prop('checked'),
    true,
    'Element is checked'
  );

  assert.strictEqual(
    this.$('>:first-child').prop('indeterminate'),
    false,
    'Element is not in indeterminate state'
  );
});

test('same value, data property equals `value`, null when unchecked', function(assert) {
  const theValue = 'theValue';

  this.set('theValue', theValue);

  this.set('data', {
    testValue: theValue
  });

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
      value=theValue
    }}
  `);

  assert.strictEqual(
    this.$('>:first-child').prop('checked'),
    true,
    'Element is checked'
  );

  assert.strictEqual(
    this.get('data.testValue'),
    this.$('>:first-child').val(),
    'data property is equal to `value`'
  );

  this.$('>:first-child').trigger('click');

  assert.strictEqual(
    this.get('data.testValue'),
    null,
    'data property is `null`'
  );
});

test('no `value`, data property equals `on` when checked, null when unchecked - checked state is determined dynamically', function(assert) {
  this.set('data', {
    testValue: null
  });

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
    }}
  `);

  this.$('>:first-child').trigger('click');

  assert.strictEqual(
    this.get('data.testValue'),
    'on',
    'data property is `on`'
  );

  this.$('>:first-child').trigger('click');

  assert.strictEqual(
    this.get('data.testValue'),
    null,
    'data property is `null`'
  );
});

test('no `value`, data property equals `on` when checked, null when unchecked - checked state is to a bound value', function(assert) {
  const checked = false;

  this.set('data', {
    testValue: null
  });

  this.set('checked', checked);

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
      checked=checked
    }}
  `);

  assert.strictEqual(
    this.get('data.testValue'),
    null,
    'data property is `null`'
  );

  this.set('checked', true);

  assert.strictEqual(
    this.get('data.testValue'),
    'on',
    'data property is `on`'
  );

  this.$('>:first-child').trigger('click');

  assert.strictEqual(
    this.get('data.testValue'),
    null,
    'data property is `null`'
  );
});

test('different value, `checked` is true, data property equals `value`, null when unchecked', function(assert) {
  this.set('data', {
    testValue: 'differentValue'
  });

  this.render(hbs`
    {{form/input/ef-checkbox
      data=data
      property="testValue"
      value="newValue"
      checked=true
    }}
  `);

  assert.strictEqual(
    this.$('>:first-child').prop('checked'),
    true,
    'Element is checked'
  );

  assert.strictEqual(
    this.get('data.testValue'),
    this.$('>:first-child').val(),
    'data property is equal to `value`'
  );

  this.$('>:first-child').trigger('click');

  assert.strictEqual(
    this.get('data.testValue'),
    null,
    'data property is `null`'
  );
});
