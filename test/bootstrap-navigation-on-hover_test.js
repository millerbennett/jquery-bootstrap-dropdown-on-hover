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

    module('jQuery#bootstrapNavigationOnHover', {
        // This will run before each test in this module.
        setup: function () {
            this.elems = $('#qunit-fixture').bootstrapNavigationOnHover();
        }
    });

    test('is chainable', function () {
        // Not a bad test to run on collection methods.
        strictEqual(this.elems.bootstrapNavigationOnHover(), this.elems, 'should be chainable');
    });

    test('has plugin data', function () {
        strictEqual(typeof this.elems.data('bootstrapNavigationOnHover'), 'object', 'should store plugin data as object');
    });

    test('plugin gets destroyed', function () {
        this.elems.data('bootstrapNavigationOnHover').destroy();
        strictEqual(typeof this.elems.data('bootstrapNavigationOnHover'), 'undefined', 'plugin data should be undefined after destroy call');
    });

}(jQuery));
