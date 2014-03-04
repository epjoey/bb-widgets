define([
  
  '../widget',
  'models/instances/filterModel',

], function(Widget, filter){

  var widgetModel = new Widget({
    
    serverFn: 'getWidget1Data',
    data: [
      {"text": "happy", "size": 76, "id":1},
      {"text": "sad", "size": 60, "id":2},
      {"text": "angry", "size": 25, "id":3},
      {"text": "sad", "size": 50, "id":4},
      {"text": "happy", "size": 30, "id":5}
    ]
      
  });

  filter.on('change', function() {
    widgetModel.fetch(filter);
  })

  return widgetModel;

});