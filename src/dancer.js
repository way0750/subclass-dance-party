// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  this.step =  function() {
    setTimeout(this.step, this.timeBetweenSteps);
  };

  this.setPosition = function(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };


  this.step();
  this.setPosition(top, left);
};