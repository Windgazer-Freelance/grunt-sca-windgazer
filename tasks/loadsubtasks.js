"use strict";
const path = require( "path" );

module.exports = function( grunt ) {
    grunt.log.debug( "Attempting to load all grunt-tasks required for SCA" );
    require( "load-grunt-tasks" )( grunt, {
        "config": path.join( __dirname, "../package.json" ),
        "scope": "dependencies",
    } );

    grunt.registerTask( "sca", [ "eslint" ] );
};
