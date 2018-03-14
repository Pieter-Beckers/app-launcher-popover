;( function( $, window, document ) {
	"use strict";
	var pluginName = "appLauncherPopover",
		defaults = {
			apps: []
		};

	function Plugin( element, options ) {
		this.settings = $.extend( {}, defaults, options );
		this.init();
	}

	$.extend( Plugin.prototype, {
		init: function() {
			var links = this.settings.apps.reduce( function( linksString, app ) {
				var url = app.url ? app.url : "#";
				var style = "height: 100px;width: 100px;margin: 2px;padding: 0;text-align: left;";
				var innerContentStyle = "\"height: 98px;padding-left: 5px;display: table-cell;" +
					"vertical-align: bottom;white-space: normal;\"";
				var innerContent = "<div style=" + innerContentStyle + ">" +
					"<div class=\"app-launcher-popover-text\">" + ( app.name ? app.name : "" ) +
					"</div></div>";
				var aTagTemplate = "<a style=\"background:" + app.background + ";" + style +
					"\" href=\"" + url + "\" role=\"button\" class=\"btn btn-default\">" +
					innerContent + "</a>";
				return linksString + aTagTemplate;
			}, "" );
			var widthInPxPerApp = 104;
			var rowLength = this.settings.rowLength ? this.settings.rowLength : 5;
			var maxWidth = rowLength * widthInPxPerApp + 10;
			$( document ).ready( function() {
				$( "[data-toggle=\"app-launcher-popover\"]" ).popover( {
					content: links,
					placement: "bottom",
					html: true,
					template: "<div class=\"popover\" style=\"max-width:" + maxWidth + "px;\" " +
					"role=\"tooltip\"><div class=\"arrow\"></div><div class=\"popover-content\" " +
					"style=\"padding: 4px;\">" + links + "</div></div>"
				} );
			} );
		}
	} );
	$.fn[ pluginName ] = function( options ) {
		return this.each( function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" +
					pluginName, new Plugin( this, options ) );
			}
		} );
	};

} )( jQuery, window, document );
