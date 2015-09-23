#!/bin/sh

[ ! -f node_modules/.bin/jake ] && echo "Building NPM modules" && npm rebuild

node_modules/.bin/jake $*