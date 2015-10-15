// base class of moving letters, one letter
// parame : direction, speed

function Character (direction, speed) {
  this.$letterDiv = $("<span class='character'></span>");

  this.c = this.generator(97,122);

  this.$letterDiv.text(this.c);
}

// Character.prototype.move = function(first_argument) {
//   this.speed
//   this.direction
// };

Character.prototype.generator = function(min, max) {
  // String.fromCharCode();
  // 33 - 126 are normal characters

  var randNum = Math.floor(Math.random() * (max + 1 - min)) + min;
  var character = String.fromCharCode(randNum);

  return character;
}