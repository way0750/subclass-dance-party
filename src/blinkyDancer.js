var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  debugger;
  this.oldStep = this.step;
};


makeBlinkyDancer.prototype = Object.create(makeDancer);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function () {
  this.oldStep();
  debugger;
  this.$node.toggle();
};