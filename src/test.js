( function () {
    "use strict";

    var assert = require("chai").assert;

    describe("Addition", function() {

        it("adds positive numbers", function() {
            /* Basic addition */
            //assert.equal(add(3,4), 7, "Expected 7 but got " + add(3, 4));
            expect(add(3,4)).toBe(7);
        });

        it("uses IEEE 754 floating point", function() {
            //assert.equal(add(0.1, 0.2), 0.30000000000000004);
            expect(add(0.1, 0.2)).toBe(0.30000000000000004);
        });

    });

    function add(a, b) {
        return a + b;
    }

}());