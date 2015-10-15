function growingDancer(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, (timeBetweenSteps * 5));
  this.$node.addClass('growing');
  this.minSize = Math.random() + 0.5;
  this.maxSize = (Math.random() * 9) + 1.5;
  this.delta = (this.maxSize - this.minSize) * 0.2;
  this.curSize = this.minSize;

  this.step();
}

growingDancer.prototype = Object.create(makeDancer.prototype);

growingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  var em = '' + this.curSize + 'em';
  this.$node.animate({fontSize: em});
  // do the function to change the size
  this.curSize += this.delta;
  if(this.curSize < this.minSize || this.curSize > this.maxSize) {
    this.delta *= -1;
  }
};