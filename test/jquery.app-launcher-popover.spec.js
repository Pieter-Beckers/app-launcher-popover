( function( $, QUnit ) {

	"use strict";

	var $fixture = null;

	QUnit.module( "app-launcher-popover", {
		beforeEach: function() {
			$fixture = $( "<a id=\"element\" href=\"#\" " +
				"data-toggle=\"app-launcher-popover\">Popover</a>" );
		},
		afterEach: function() {
			$fixture.remove();
		}
	} );

	QUnit.test( "is inside jQuery library", function( assert ) {
		assert.equal( typeof $.fn.appLauncherPopover, "function", "has function inside jquery.fn" );
		assert.equal( typeof $fixture.appLauncherPopover, "function", "another way to test it" );
	} );

	QUnit.test( "returns jQuery functions after called (chaining)", function( assert ) {
		assert.equal(
			typeof $fixture.appLauncherPopover().on,
			"function",
			"'on' function must exist after plugin call" );
	} );

	QUnit.test( "caches plugin instance", function( assert ) {
		$fixture.appLauncherPopover();
		assert.ok(
			$fixture.data( "plugin_appLauncherPopover" ),
			"has cached it into a jQuery data"
		);
	} );

	QUnit.test( "enable custom config", function( assert ) {
		$fixture.appLauncherPopover( {
			apps: [{name: "app-name"}]
		} );

		var pluginData = $fixture.data( "plugin_appLauncherPopover" );

		assert.deepEqual(
			pluginData.settings,
			{
				apps: [{name: "app-name"}]
			},
			"extend plugin settings"
		);

	} );

}( jQuery, QUnit ) );
