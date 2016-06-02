// Meteor imports
import { Meteor } from 'meteor/meteor';

// App
import { Projects } from '../../../imports/api/projects/collections.js';


Template.allProjects.onRendered(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe("projects");
	});
});

Template.allProjects.helpers({
  allProjects: function () {
    return Projects.find({ meetupId: this._id }, { sort: { name: 1 } } );
  }
});
