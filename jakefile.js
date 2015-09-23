(function() {
    "use strict";

    var semver = require("semver");

    desc("Default build");
    task("default", [ "version" ], function() {
        console.log("\n\nBUILD OK");
    });
    desc( "Checking Node Version");

    task("version", function() {
        console.log("Checking Node Version: .");

        var packageJson = require("./package.json");

        var expectedVersion = packageJson.engines.node;

        var actualVersion = process.version;
        if (semver.neq(expectedVersion, actualVersion)) {
            fail( "Incorrect Node version: expected " + expectedVersion + " but was " + actualVersion);
        }
    });
}());
