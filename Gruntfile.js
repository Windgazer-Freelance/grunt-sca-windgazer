// Gruntfile.js
module.exports = function ( grunt ) {
    //loads the various task configuration files
    var configs = require( "load-grunt-configs" )( grunt );
    grunt.initConfig( configs );

    require( "load-grunt-tasks" )( grunt );

    grunt.registerTask( "default", [ "eslint" ] );
};
