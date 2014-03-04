define([
  
  'backbone',
  'models/instances/filterModel'

], function(Backbone, filterModel){

	var View = Backbone.View.extend({
		
    id: 'emotion-filter',
    events: {
      'change select': 'select'
    },
    select: function() {
      filterModel.set('emotion', this.$('select').val());
    }

	});

  // Intstantiate the View from within the module 
  // so if an initialization error occurs (in BaseView) we are shown this filename in the console
  return View;

});