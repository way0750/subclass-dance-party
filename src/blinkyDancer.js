var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // debugger;
  this.identity = 'blinky  dancer'

// this.step = function () {
//   this.oldStep();
  
//   this.$node.toggle();
// };

  this.step();
};


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
