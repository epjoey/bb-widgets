define([

  'backbone',
  'models/instances/widgetModel'

], function(Backbone, widgetModel){

	var View = Backbone.View.extend({
		
    id: 'widget3',
    model: widgetModel,
    render: function() {
      this.$el.html(JSON.stringify(this.model));
    }

	});

  return View;

});