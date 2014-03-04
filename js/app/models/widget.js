define([
  
  'backbone'

], function(Backbone){

  var model = Backbone.Model.extend({
    
    url: '/widget_data',

    defaults: {
      
      serverFn: null,
      data: null
    },

    fetch: function(filter) {
      // http request here
      console.log('fetching data from server using '+this.get('serverFn'));
    }



  
  });



  return model;

});