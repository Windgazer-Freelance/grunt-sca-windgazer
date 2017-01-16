"use strict";
const _ = require( "lodash" );

module.exports = function( grunt, options ) {
    const configs = [
        "javascript",
    ];
    var out = {};

    grunt.log.debug( "Loading all configs for " + __filename );
    for ( let i = 0; i < configs.length; ++i ) {
        out = _.merge( out, require( "./config/" + configs[i] )( grunt, options ) );
    }

    return require( "./config/javascript" )( grunt, options );

};
