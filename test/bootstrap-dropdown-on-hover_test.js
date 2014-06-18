(function ($) {
    /*
     ======== A Handy Little QUnit Reference ========
     http://api.qunitjs.com/

     Test methods:
     module(name, {[setup][ ,teardown]})
     test(name, callback)
     expect(numberOfAssertions)
     stop(increment)
     start(decrement)
     Test assertions:
     ok(value, [message])
     equal(actual, expected, [message])
     notEqual(actual, expected, [message])
     deepEqual(actual, expected, [message])
     notDeepEqual(actual, expected, [message])
     strictEqual(actual, expected, [message])
     notStrictEqual(actual, expected, [message])
     throws(block, [expected], [message])
     */

    module('jQuery#bootstrapDropdownOnHover', {
        // This will run before each test in this module.
        setup: function () {
            this.elems = $('#qunit-fixture').bootstrapDropdownOnHover();
        }
    });

    test('is chainable', function () {
        // Not a bad test to run on collection methods.
        strictEqual(this.elems.bootstrapDropdownOnHover(), this.elems, 'should be chainable');
    });

    test('has plugin data', function () {
        strictEqual(typeof this.elems.data('bootstrapDropdownOnHover'), 'object', 'should store plugin data as object');
    });

    test('plugin gets destroyed', function () {
        this.elems.data('bootstrapDropdownOnHover').destroy();
        strictEqual(typeof this.elems.data('bootstrapDropdownOnHover'), 'undefined', 'plugin data should be undefined after destroy call');
    });

}(jQuery));
