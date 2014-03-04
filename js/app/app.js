/**
 * App.js
 *
 * Entry point to application: It initializes router to access to every URL in the app
 */
define([
  'underscore',
  'views'

], function(_, views) {
  
  var app = {

    init: function() {
      _.each(views, function(View) {

        var view = new View();

        if (!view.id) {
          throw 'Error: All views must have an id';
        }

        view.setElement($('#'+view.id));
        
        if (!view.$el.length) {
          console.log(view.id+' does not exist on page. Fix selector or remove class from views.js if it is not longer needed');
          return;
        }

        view.render();
        if (view.model) {
          view.model.on('change', view.render, view);
          view.model.fetch();
          
        }
      
      });
    }

  }

  window.app = app;
  
  return app;
});