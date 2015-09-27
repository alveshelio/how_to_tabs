( function () {
    "use strict";

    var addition = require("./addition.js");

    describe("Addition", function() {

        it("adds positive numbers", function() {
            /* Basic addition */
            assertEqual(addition.add(3,4), 7);
            //expect(add(3,4)).toBe(7);
        });

        it("uses IEEE 754 floating point", function() {
            assertEqual(addition.add(0.1, 0.2), 0.30000000000000004);
            //expect(add(0.1, 0.2)).toBe(0.30000000000000004);
        });

        function assertEqual(actual,expected) {
            if (actual !== expected) {
                throw new Error("expected " + expected + " and got " + actual);
            }
        }

    });

}());