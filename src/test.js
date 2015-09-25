( function () {
    "use strict";

    var assert = require("chai").assert;

    assert.equal(add(3,4), 7, "Expected 7 but got " + add(3, 4));

    function add(a, b) {
        return a - b;
    }



}());