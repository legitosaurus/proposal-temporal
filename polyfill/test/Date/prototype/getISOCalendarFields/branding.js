// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.date.prototype.getisocalendarfields
---*/

const getISOCalendarFields = Temporal.Date.prototype.getISOCalendarFields;

assert.sameValue(typeof getISOCalendarFields, "function");

assert.throws(TypeError, () => getISOCalendarFields.call(undefined), "undefined");
assert.throws(TypeError, () => getISOCalendarFields.call(null), "null");
assert.throws(TypeError, () => getISOCalendarFields.call(true), "true");
assert.throws(TypeError, () => getISOCalendarFields.call(""), "empty string");
assert.throws(TypeError, () => getISOCalendarFields.call(Symbol()), "symbol");
assert.throws(TypeError, () => getISOCalendarFields.call(1), "1");
assert.throws(TypeError, () => getISOCalendarFields.call({}), "plain object");
assert.throws(TypeError, () => getISOCalendarFields.call(Temporal.Date), "Temporal.Date");
assert.throws(TypeError, () => getISOCalendarFields.call(Temporal.Date.prototype), "Temporal.Date.prototype");
