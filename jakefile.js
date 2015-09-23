(function() {
    "use strict";

    var semver = require("semver");
    var jshint = require("simplebuild-jshint");

    desc("Default build");
    task("default", [ "version", "lint" ], function() {
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

    desc ();
    task("lint", function() {
        process.stdout.write("Linting JavaScript: ");

        jshint.checkFiles({
            files : "jakefile.js",
            options: {},
            globals: {}
        }, complete, fail);
        //jake.exec("node node_modules/jshint/bin/jshint jakefile.js", { interactive: true }, complete);
    }, {async: true});
}());
