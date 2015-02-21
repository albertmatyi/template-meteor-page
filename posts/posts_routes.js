'use strict';

Router.route('/posts', {
	waitOn: function() {
		return Meteor.subscribe('posts');
	},
	onBeforeAction: function() {
		this.next();
	},
	data: function() {
		return {
			posts: App.posts.collection.find()
		};
	}
});

