'use strict';

Router.route('/post', function() {
	this.layout('layout');
	this.render('footer', {to: 'footer'});
	this.render('header', {to: 'header'});
	this.render('post', {
		data: function() {
			return {};
		}
	});
});
