'use strict';

Template.posts.helpers({
	posts: function() {
		return ['wow', 'doge'];
	},
	postData: function() {
		console.log('help');
		return 'hawaii';
	}
});

