/* globals jake:false, desc:false, task:false, complete:false, fail:false */

(function() {
    "use strict";

    var semver = require("semver");
    var jshint = require("simplebuild-jshint");

    /* General-purpose tasks*/
    desc("Default build");
    task("default", [ "version", "lint" ], function() {
        console.log("\n\nBUILD OK");
    });

    desc("Run the http-server");
    task("run", function() {
        jake.exec("node node_modules/watch-http-server/bin/http-server ./src -o", {interactive: true}, complete);
    }, {async:true});

    desc("Start the Karma server (run this first)");
    task("karma", function() {
        
    });

    /* Supporting Tasks */
    desc( "Checking Node Version");
    task("version", function() {
        console.log("Checking Node Version: .");

        var packageJson = require("./package.json");

        var expectedVersion = packageJson.engines.node;

        var actualVersion = process.version;
        if (semver.neq(expectedVersion, actualVersion)) {
            fail( "Incorrect Node version: expected " + expectedVersion + " but got " + actualVersion);
        }
    });

    desc ();
    task("lint", function() {
        process.stdout.write("Linting JavaScript: ");

        jshint.checkFiles({
            files : ["jakefile.js", "src/**/*.js"],
            options: lintOptions(),
            globals: lintGlobals()
        }, complete, fail);
    }, {async: true});

    function lintOptions () {
        return {
            bitwise: true,
            eqeqeq: true,
            forin: true,
            freeze: true,
            futurehostile: true,
            latedef: "nofunc",
            noarg: true,
            nocomma: true,
            nonbsp: true,
            nonew: true,
            strict: true,
            undef: true,
            node: true,
            browser: true
        };
    }

    function lintGlobals() {
        return {
            // Mocha globals
            describe: false,
            it: false,
            before: false,
            after: false,
            beforeEach: false,
            afterEach: false
        };
    }
}());
