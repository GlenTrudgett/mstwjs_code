//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./views
//= require_tree ./routers

var TimeTravel = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  init: function(tripData) {
    this.trips = new TimeTravel.Collections.Trips(tripData);
    this.app = new TimeTravel.Routers.TripRouter();
    Backbone.history.start({pushState: true});
    return this;
  },

  //##template
  template: function(filename) {
    return HoganTemplates["backbone/templates/" + filename];
  },
  //##template

  //##getTrip
  getTrip: function(id) {
    return this.trips.find(function(trip) {
      return trip.get("id").toString() === id.toString();
    })
  }
  //##getTrip
}
