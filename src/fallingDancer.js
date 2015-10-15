function fallingDancer(top, left, timeBetweenSteps) {
  makeDancer.call(this, 0, left, (100 * Math.random()));
  this.yPos = 0;
  // this.xPos = left;

  this.step();
}

fallingDancer.prototype = Object.create(makeDancer.prototype);

fallingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.css({top: this.yPos, left: this.xPos});
  this.yPos += 5;
  if(this.yPos > $(window).height()) {
    this.$node.remove();
  }
};