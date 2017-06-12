var myFavoriteUL = document.getElementById('stuff');

var seagullCount = [2, 88, 3, 45, 66, 123864];

for (var i = 0; i < seagullCount.length; i++){
  // 1. Create the element
  // 2. Give the element some content
  // 3. Append the element to the appropriate place in the DOM
  var liEl = document.createElement('li');
  liEl.textContent = seagullCount[i];
  myFavoriteUL.appendChild(liEl);
}

var zen = document.getElementById('myMostPatientStudent');
zen.textContent = 'My Most Patient Students';
for (var j = 0; j < 5; j++) {
  var liEl = document.createElement('li');
  liEl.textContent = prompt('Who is the most patient student?');
  zen.appendChild(liEl);
}
