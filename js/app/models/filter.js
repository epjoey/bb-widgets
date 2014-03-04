define([
  
  'backbone'

], function(Backbone){

  var filter = Backbone.Model.extend({
		defaults: {
			emotion: 'happy',
      startDate: 'dksmvkdmvm'
		}
	});

  // SINGLETON
  return filter;

});