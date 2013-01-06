// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require hogan.js
//= require underscore
//= require backbone
//= require backbone_rails_sync
//= require backbone_datalink
//= require backbone/time_travel
//= require moment
//##ember_boot
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require_tree .

EmberTimeTravel = Ember.Application.create();
//##ember_boot

activityData = {1: "Hiking", 2: "Changing History",
  3: "Baseball", 4: "Programming"}

// $(function() {
//   initializeAutocompleteSelector({
//       parentSelector: "#autodiv",
//       field: "[user][activity_ids]",
//       dataUniverse: activityData,
//       initialValue: ""
//   });
// });

