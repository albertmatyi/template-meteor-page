'use strict';

Template.posts.events({
	'click .post': function() {
		console.log('handle');
		alert('hey');
	}
});
