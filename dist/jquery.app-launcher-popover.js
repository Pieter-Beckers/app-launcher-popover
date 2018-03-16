"use strict";

/*
 *  app-launcher-popover - v1.0.1
 *  A bootstrap popover jquery plugin with buttons for apps to launch
 *  
 *
 *  Made by Pieter Beckers
 *  Under MIT License
 */
;(function ($, window, document) {
	"use strict";

	var pluginName = "appLauncherPopover",
	    defaults = {
		apps: []
	};

	function Plugin(element, options) {
		this.settings = $.extend({}, defaults, options);
		this.init();
	}

	$.extend(Plugin.prototype, {
		init: function init() {
			var _this = this;

			var rowLength = this.settings.rowLength ? this.settings.rowLength : 5;
			var apps = this.settings.apps.slice();
			var appsGrouped = [];
			while (apps.length) {
				appsGrouped.push(apps.splice(0, rowLength));
			}
			var content = appsGrouped.reduce(function (total, apps) {
				return total + _this.createButtonRowTemplate(apps);
			}, "");
			$(document).ready(function () {
				$("[data-toggle=\"app-launcher-popover\"]").popover({
					content: content,
					placement: "bottom",
					html: true,
					template: _this.createPopoverTemplate(content)
				});
			});
		},
		createPopoverTemplate: function createPopoverTemplate(content) {
			return "\n\t\t\t\t<div class=\"popover app-launcher-popover\" role=\"tooltip\">\n\t\t\t\t\t<style>\n\t\t\t\t\t\t.app-launcher-popover {\n\t\t\t\t\t\t\tmax-width: none;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.app-launcher-popover-button {\n\t\t\t\t\t\t\theight:150px;\n\t\t\t\t\t\t\twidth:150px;\n\t\t\t\t\t\t\tmargin:5px;\n\t\t\t\t\t\t\tpadding:0;\n\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.app-launcher-popover-text {\n\t\t\t\t\t\t\theight: inherit;\n\t\t\t\t\t\t\tpadding: 5px;\n\t\t\t\t\t\t\tdisplay: table-cell;\n\t\t\t\t\t\t\tvertical-align: bottom;\n\t\t\t\t\t\t\twhite-space: normal;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.app-launcher-popover-row {\n\t\t\t\t\t\t\tdisplay: table;\n\t\t\t\t\t\t}\n\t\t\t\t\t</style>\n\t\t\t\t\t<div class=\"arrow\"></div>\n\t\t\t\t\t<div class=\"popover-content grid\" style=\"padding: 10px;\">\n\t\t\t\t\t\t" + content + "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t";
		},
		createButtonRowTemplate: function createButtonRowTemplate(apps) {
			var _this2 = this;

			var buttons = apps.reduce(function (total, app) {
				return total + _this2.createButtonTemplate(app);
			}, "");
			return "<div class=\"app-launcher-popover-row\">" + buttons + "</div>";
		},
		createButtonTemplate: function createButtonTemplate(app) {
			return "\n\t\t\t\t<a style=\"background:url(" + app.backgroundUrl + ") 50% 50%/100px no-repeat;\"\n\t\t\t\t   href=\"" + (app.url ? app.url : "#") + "\"\n\t\t\t\t   role=\"button\"\n\t\t\t\t   class=\"btn btn-default app-launcher-popover-button col-lg-1\">\n\t\t\t\t\t\t<div class=\"app-launcher-popover-text\">\n\t\t\t\t\t\t\t" + (app.name ? app.name : "") + "\n\t\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t";
		}
	});
	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin(this, options));
			}
		});
	};
})(jQuery, window, document);
//# sourceMappingURL=jquery.app-launcher-popover.js.map
