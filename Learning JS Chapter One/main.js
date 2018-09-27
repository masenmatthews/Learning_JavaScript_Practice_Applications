$(document).ready(function() {
 'use strict';

  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var c = Shape.Circle(200, 200, 80);
  c.fillColor = 'black';
  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello world';

  var tool = new Tool();
  tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point, 20);
    c.fillColor = 'green';
  };

  // onMouseDown acts as the event handler - it's saying where the mouse is being clicked and to put a green circle there
  // location from onMouseDown is stored in event.point


  paper.view.draw();
});
