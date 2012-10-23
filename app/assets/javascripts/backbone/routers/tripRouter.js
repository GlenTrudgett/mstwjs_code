TimeTravel.Routers.TripRouter = Backbone.Router.extend({
  //##routes
  routes: {
    "": "index",
    "trips/:id": "tripDetail",
  },
  //##routes

  //##initialize
  initialize: function() {
    this.topNavigationView = new TimeTravel.Views.TopNavigationView();
    this.sidebarView = new TimeTravel.Views.SidebarView();
  },
  //##initialize

  //##index
  index: function() {
    $container = $("#container");
    $container.append(this.topNavigationView.render().el);
    $container.append(this.sidebarView.render().el);
    var $content = $("<div/>").attr("id", "content");
    $container.append($content);
    var tripsView = new TimeTravel.Views.TripsView({
        collection: TimeTravel.trips});
    $content.append(tripsView.render().el);
    return $container;
  },
  //##index

  //##detail
  tripDetail: function(id) {
    console.log("here " + id);
  }
  //##detail                            +

});

