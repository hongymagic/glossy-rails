$(function () {
	window.app = new DefinitionsRouter;
	Backbone.history.start({ pushState: true });
});