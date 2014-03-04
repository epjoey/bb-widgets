define([

  'backbone',
  'models/instances/widgetModel',
  'd3',
  'd3LayoutCloud'

], function(Backbone, widgetModel, d3, d3LayoutCloud){

	var View = Backbone.View.extend({

    // DOM ID
    id: 'widget',
    model: widgetModel,

		render: function(){

      var data = this.model.get('data');
      var canvas = d3.select(this.el).html('').append("svg");
      var fill = d3.scale.category20();
      d3.layout.cloud().size([300, 300])

          .words(data)
          .padding(5)
          .rotate(function() { return ~~ 0; })
          .font("Impact")
          .fontSize(function(d) { return d.size; })
          .on("end", draw)
          .start();

      function draw(words) {
        canvas
            .attr("width", 300)
            .attr("height", 300)
          .append("g")
            .attr("transform", "translate(150,150)")
          .selectAll("text")
            .data(words)
          .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return fill(); })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
              return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });		
      }
    }
	
  });

  return View;
});