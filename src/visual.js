// Create a letter
// Pick random horiz position
// Place html element
// Move through the page

// Set timeout function to keep creating letters

$(document).ready(function() {
  setInterval(dropLetter, 200)

});

function dropLetter() {
  // CHANGE THE LETTER HEIGHT MOFOS
  var LETTERHEIGHT = 10;

  var docHeight = $(window).height();
  var docWidth = $(window).width();
  var xPos = rng(0, docWidth);
  var newLetter = new Character();
  var $letter = newLetter.$letterDiv;
  $letter.css({left: xPos});
  $('body').append($letter);

  // $letter.animate({
  //   bottom: '-' + (docHeight + LETTERHEIGHT) + 'px',
  // }, 5000, 'linear', function() {$(this).remove();}); 
};

// Returns a random number between min and max, inclusive.
function rng(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};