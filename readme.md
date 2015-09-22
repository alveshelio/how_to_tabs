How To: Tabs
============

* Design and Refactoring
In the series, we use these techniques to develop a basic tab-switching effect. This repository contains code developed in the series.

To try the code on your computer:
---------------------------------

1. Install [Node.js 0.12.4](http://nodejs.org/dist/v0.12.4/).
2. Install [Git](
3. Open a command prompt
4. Change to the directory that will contain the project. In your command prompt, type: cd <directory> (where <directory> is the directory that will contain the project).
5. Copy the source repository to your computer: 'git clone https://github.com/helioalves/how_to_tabs.git'
6. Change to the project directory 'cd how_to_tabs'

To run the build, type 'node jakefile.js'.

To look at the source code for a particular episode:
----------------------------------------------------

Every episode's source code has an associated 'episodeXX' tag. You switch to other episodes like this:

1. If you made any changes, check them in.
2. Erase generated files 'git clean -fdx'
3. Reset any changes: 'git reset --hard'
4. Check out old version: 'git checkout episodeXX' (For example, 'git checkout episode1'.)

After changing versions, look at your copy of the 'readme.md' file. It will have information about working with the code for that episode. In particular:

1. Look at the "Install Nodes.js" line in the readme to see which version of Node the code is designed to work with.
2. If it's different than the version you have installed [ find and install] (http://nodejs.org/dist) the correct version of Node.
3. Read the rest of the readme to see how to run the code

