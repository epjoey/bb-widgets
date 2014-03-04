define([
  
  'backbone',
  'models/instances/widgetModel'

], function(Backbone, widgetModel){

	var View = Backbone.View.extend({
		
    id: 'widget2',
    model: widgetModel,
    render: function() {
      this.$el.html(JSON.stringify(this.model));
    }

	});

  // Intstantiate the View from within the module 
  // so if an initialization error occurs (in BaseView) we are shown this filename in the console
  return View;

});