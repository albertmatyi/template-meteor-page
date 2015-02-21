'use strict';

Template.post.events({
	'click .post': function() {
		console.log('handle');
		alert('hey');
	}
});
