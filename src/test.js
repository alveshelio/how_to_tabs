( function () {
    "use strict";

    var assert = require("chai").assert;

    /* Basic addition */
    assert.equal(add(3,4), 7, "Expected 7 but got " + add(3, 4));

    /* IEEE 754 floating point */
    assert.equal(add(0.1 + 0.2), 0.3);

    function add(a, b) {
        return a - b;
    }



}());