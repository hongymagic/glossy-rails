(function () {
	'use strict';

	var underscore,
		bootstrap,
		config = {
			baseUrl: 'assets',
			paths: {
				underscore: 'assets/underscore',
				Backbone: 'assets/backbone',
				text: 'assets/requirejs/text',

				/* Our own Backbone app modules */
				Models: 'assets/models',
				Collections: 'assets/collections',
				Views: 'assets/views',
				Routers: 'assets/routers',
				App: 'assets/app'
			}
		};
	
	underscore = require({ context: 'underscore', paths: config.paths });
	bootstrap = require({ context: 'bootstrap', paths: config.paths });
	underscore(['underscore', 'Backbone'], function (_) {
		window._ = _;
		bootstrap(['App'], function (App) {
			window.app = App.init();
			Backbone.history.start({ pushState: true });
		});
	});
}());