'use strict';

/* To see what we need to do to build a HTML table with JS, let's take a look at the HTML needed to start the table and make the top two rows:

<table>
  <tr>              create tr
    <th>Name</th>   create a th, give it content, add it to tr
    <th>Color</th>  create a th, give it content, add it to tr
    <th>Tail</th>   create a th, give it content, add it to tr
  </tr>             add tr to the table

  <tr>
    <td>Buddy</td>
    <td>Orange and White</td>
    <td>VERY long</td>
  </tr>
</table>

Tables are built in the same way that a typewriter types: left-to-right, top-to-bottom.

We'll need to create and append HTML elements in the same order.

We have already put an empty <table> element in the HTML, with id="cats" */

var allCats = [];
var theTable = document.getElementById('cats');

function Cat(name, color, tail){
  this.name = name;
  this.color = color;
  this.tail = tail;
  allCats.push(this);
}

Cat.prototype.render = function(){

  // <tr>              create tr
  var trEl = document.createElement('tr');

  //   <th>Name</th>   create a th, give it content, add it to tr
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  //   <th>Color</th>  create a th, give it content, add it to tr
  tdEl = document.createElement('td');
  tdEl.textContent = this.color;
  trEl.appendChild(tdEl);

  //   <th>Tail</th>   create a th, give it content, add it to tr
  tdEl = document.createElement('td');
  tdEl.textContent = this.tail;
  trEl.appendChild(tdEl);

  // </tr>             add tr to the table
  theTable.appendChild(trEl);
};

new Cat('Buddy', 'orange and white', 'VERY long');
new Cat('Alistair', 'orange', 'small');
new Cat('Trillian', 'black/orange', 'very small');
new Cat('Meow Mix', 'black', 'medium');
new Cat('Toeny', 'gray', 'medium-large');
// console.table(allCats);

function machenSieDasHeader() {
  // <tr>              create tr
  var trEl = document.createElement('tr');

  //   <th>Name</th>   create a th, give it content, add it to tr
  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);

  //   <th>Color</th>  create a th, give it content, add it to tr
  var thEl = document.createElement('th');
  thEl.textContent = 'Color';
  trEl.appendChild(thEl);

  //   <th>Tail</th>   create a th, give it content, add it to tr
  var thEl = document.createElement('th');
  thEl.textContent = 'Tail';
  trEl.appendChild(thEl);

  // </tr>             add tr to the table
  theTable.appendChild(trEl);
}

function renderAllCats() {
  for(var i = 0; i < allCats.length; i++){
    allCats[i].render();
  }
}

machenSieDasHeader();
renderAllCats();
