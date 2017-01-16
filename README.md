# grunt-sca-windgazer

This is an attempt to pull in any static code analysis tools I use into a single config
that I can easily install via npm dependency-management.

## Goal

Single line installation using npm (This is a far-fetched goal, aiming for Mars...).

```
npm i grunt-sca-windgazer -D
```

## Dependencies

Since grunt can't handle distributed configuration out of the box, you'll need to install
something to handle that, this module will deliver it's configurations in a style
compatible with `load-grunt-configs`.

```
npm i load-grunt-configs -D
```

## Installation

As mentioned, the goal of this little project is aiming for Mars. Until we reach that,
these are the required steps to install and use this plugin.

This project also (unfortunately?) forces you to work with load-grunt-configs and
load-grunt-tasks, required to auto-wire your configuration. I believe these project to be
a lesser evil, since the only other recourse I see is modifying the grunt configuration
programmatically, after the fact.

### Step 1, install dependencies

```
npm i grunt-sca-windgazer load-grunt-configs load-grunt-tasks -D
```

### Step 2, prepare configuration of SCA tasks

Edit / create a file in your project named `config/sca.js` and make sure it contains the
following:

```javascript
module.exports = function( grunt, options ) {
    return require( "grunt-sca-windgazer" )( grunt, options );
};
```

### Step 3, load SCA configuration and dependencies

Edit your `Gruntfile.js` to contain (at least) the following:

```javascript
var configs = require( "load-grunt-configs" )( grunt );
grunt.initConfig( configs );

require( "load-grunt-tasks" )( grunt );
```

### Done

You can now run `grunt sca` and all tasks defined in grunt-sca-windgazer should run on
your project!
