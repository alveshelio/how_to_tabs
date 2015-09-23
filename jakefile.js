(function() {
    "use strict";

    var EXPECTED_NODE_VERSION = "v4.0.0";
    desc("Default build");
    task("default", [ "version" ], function() {
        console.log("\n\nBUILD OK");
    });

    desc( "Checking Node Version");
    task("version", function() {
        console.log("Checking Node Version: .");

        var actualVersion = process.version;
        if (actualVersion !== EXPECTED_NODE_VERSION) {
            fail( "Incorrect Node version: expected " + EXPECTED_NODE_VERSION + " but was " + actualVersion);
        }
    });
}());
