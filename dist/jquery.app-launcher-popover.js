/*
 *  app-launcher-popover - v0.1.0
 *  A bootstrap popover with buttons for apps to launch
 *  
 *
 *  Made by Pieter Beckers
 *  Under MIT License
 */
;( function( $, window, document ) {
	"use strict";
	var pluginName = "appLauncherPopover",
		defaults = {
			apps: []
		};

	function Plugin( element, options ) {
		this.element = element;
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
					"<div>" + ( app.name ? app.name : "" ) + "</div>" +
					"</div>";
				var aTagTemplate = "<a style=\"background:" + app.background + ";" + style +
					"\" href=\"" + url + "\" role=\"button\" class=\"btn btn-default\">" +
					innerContent + "</a>";
				return linksString + aTagTemplate;
			}, "" );
			$( document ).ready( function() {
				$( "[data-toggle=\"app-launcher-popover\"]" ).popover( {
					content: links,
					placement: "bottom",
					html: true,
					template: "<div class=\"popover\" style=\"max-width: 428px;\" " +
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