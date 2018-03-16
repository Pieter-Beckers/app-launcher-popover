module.exports = function( config ) {

	config.set( {
		files: [
			"node_modules/jquery/dist/jquery.js",
			"dist/jquery.app-launcher-popover.js",
			"test/*"
		],
		browsers: [ "PhantomJS" ],
		frameworks: [ "qunit" ],
		autoWatch: true,
		logLevel: config.LOG_DEBUG
	} );
};
