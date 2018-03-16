/*
 *  app-launcher-popover - v1.0.0
 *  A bootstrap popover jquery plugin with buttons for apps to launch
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
		this.settings = $.extend( {}, defaults, options );
		this.init();
	}

	$.extend( Plugin.prototype, {
		init: function() {
			var links = this.settings.apps.reduce( function( linksString, app ) {
				var url = app.url ? app.url : "#";
				var innerContentStyle = "\"height: 98px;padding-left: 5px;display: table-cell;" +
					"vertical-align: bottom;white-space: normal;\"";
				var innerContent = "<div style=" + innerContentStyle + ">" +
					"<div class=\"app-launcher-popover-text\">" + ( app.name ? app.name : "" ) +
					"</div></div>";
				var aTagTemplate = "<a style=\"background:url(" + app.backgroundUrl + ") " +
					"50% 50%/100px no-repeat;height:100px;width:100px;margin:2px;padding:0;" +
					"text-align: left;\"" +
					"href=\"" + url + "\" role=\"button\" class=\"btn btn-default\">" +
					innerContent + "</a>";
				return linksString + aTagTemplate;
			}, "" );
			var widthInPxPerApp = 104;
			var rowLength = this.settings.rowLength ? this.settings.rowLength : 5;
			var width = rowLength * widthInPxPerApp + 12;
			var style = "width:" + width + "px;max-width:" + width + "px;";
			$( document ).ready( function() {
				$( "[data-toggle=\"app-launcher-popover\"]" ).popover( {
					content: links,
					placement: "bottom",
					html: true,
					template: "<div class=\"popover\" style=\"" + style + "\" " +
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
