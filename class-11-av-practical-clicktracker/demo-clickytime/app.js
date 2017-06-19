'use strict';

var container = document.getElementById('stooges');

container.addEventListener('click', handleClick);

var larryClicks = 0;
var curlyClicks = 0;
var moeClicks = 0;
var iggyClicks = 0;

function handleClick(event) {
  // console.log(event.target.id);

  if(event.target.id === 'stooges') {
    alert('You had one job. Click on the H2s but NOT the section.');
  }

  var larry = document.getElementById('larry');
  var curly = document.getElementById('curly');
  var moe = document.getElementById('moe');
  var iggy = document.getElementById('iggy');


  if(event.target.id === 'larry'){
    larryClicks += 1;
    larry.textContent = 'Larry has been clicked ' + larryClicks + ' times';
  }
  if(event.target.id === 'curly'){
    curlyClicks += 1;
    curly.textContent = 'Curly has been clicked ' + curlyClicks + ' times';
  }
  if(event.target.id === 'moe'){
    moeClicks += 1;
    moe.textContent = 'Moe has been clicked ' + moeClicks + ' times';
  }
  if(event.target.id === 'iggy'){
    iggyClicks += 1;
    iggy.textContent = 'Iggy has been clicked ' + iggyClicks + ' times';
  }


}
