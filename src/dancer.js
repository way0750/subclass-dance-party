// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.c = this.generator(0,255);

  this.$node.text(this.c);

  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.generator = function(min, max) {
  // String.fromCharCode();
  // 33 - 126 are normal characters

  var randNum = Math.floor(Math.random() * (max + 1 - min)) + min;
  var character = String.fromCharCode(randNum);

  return character;
}