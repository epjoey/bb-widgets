require.config({
  shim: {   // Using shim we define dependencies between our libraries
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: [
        'underscore',
        'jquery',
      ],
      exports: 'Backbone'
    },
    'modelFactory': {
      deps: [
        'backbone'
      ]
    }
  },
  paths: {   // Require.js allows us to configure shortcut alias
    jquery: '../libs/jquery/jquery-min',
    underscore: '../libs/underscore/underscore-min',
    backbone: '../libs/backbone/backbone-min',
    modelFactory: '../libs/backbone/backbone-model-factory',
    d3: 'http://d3js.org/d3.v3.min',
    d3LayoutCloud: '../libs/d3/d3.layout.cloud',
    text: '../libs/require/text',
    templates: 'templates',

  }
});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(app){ // The "app" dependency is passed in as "app"
  
  app.init();

});