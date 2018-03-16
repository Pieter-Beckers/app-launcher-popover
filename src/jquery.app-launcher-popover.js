;( function( $, window, document ) {
	"use strict";
	let pluginName = "appLauncherPopover",
		defaults = {
			apps: []
		};

	function Plugin( element, options ) {
		this.settings = $.extend( {}, defaults, options );
		this.init();
	}

	$.extend( Plugin.prototype, {
		init: function() {
			const rowLength = this.settings.rowLength ? this.settings.rowLength : 5;
			let apps = this.settings.apps.slice();
			let appsGrouped = [];
			while ( apps.length ) {
				appsGrouped.push( apps.splice( 0, rowLength ) );
			}
			let content = appsGrouped
				.reduce( ( total, apps ) => total + this.createButtonRowTemplate( apps ), "" );
			$( document ).ready( () => {
				$( `[data-toggle="app-launcher-popover"]` ).popover( {
					content: content,
					placement: "bottom",
					html: true,
					template: this.createPopoverTemplate( content )
				} );
			} );
		},
		createPopoverTemplate: function( content ) {
			return `
				<div class="popover app-launcher-popover" role="tooltip">
					<style>
						.app-launcher-popover {
							max-width: none;
						}
						.app-launcher-popover-button {
							height:150px;
							width:150px;
							margin:5px;
							padding:0;
							text-align: left;
						}
						.app-launcher-popover-text {
							height: inherit;
							padding: 5px;
							display: table-cell;
							vertical-align: bottom;
							white-space: normal;
						}
						.app-launcher-popover-row {
							display: table;
						}
					</style>
					<div class="arrow"></div>
					<div class="popover-content grid" style="padding: 10px;">
						${content}
					</div>
				</div>
			`;
		},
		createButtonRowTemplate: function( apps ) {
			let buttons = apps
				.reduce( ( total, app ) => total + this.createButtonTemplate( app ), "" );
			return `<div class="app-launcher-popover-row">${buttons}</div>`;
		},
		createButtonTemplate: function( app ) {
			return `
				<a style="background:url(${app.backgroundUrl}) 50% 50%/100px no-repeat;"
				   href="${app.url ? app.url : "#"}"
				   role="button"
				   class="btn btn-default app-launcher-popover-button col-lg-1">
						<div class="app-launcher-popover-text">
							${app.name ? app.name : ""}
						</div>
				</a>
			`;
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
