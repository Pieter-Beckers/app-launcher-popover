module.exports = function( config ) {

	config.set( {
		files: [
			"node_modules/jquery/dist/jquery.js",
			"src/*",
			"test/*"
		],
		browsers: [ "PhantomJS" ],
		frameworks: [ "qunit" ],
		autoWatch: true,
		logLevel: config.LOG_DEBUG
	} );
};
