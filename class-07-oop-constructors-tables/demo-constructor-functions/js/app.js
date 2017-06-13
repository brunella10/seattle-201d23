'use strict';

// Demo for objects to constructors

// Let's make an object literal of one of you:

// var aaronLiteral =  {
//   firstName: 'Aaron',
//   lastInitial: 'M',
//   hasBeard: true,
//   class: '201d23',
//   faveNumber: 7,
//   isLeetHaxx0r: true,
//   introduction: function() {
//     console.log('Hi, my name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
//   }
// }

// I would need 264 lines of code to model our class this way
// (22 students * 12 lines each)

// What if... I had a function to make these many similar objects for me? A function where I could pass in a student's unique characteristics as arguments, and then that function would make the individual objects?

// Something like this would then make Aaron:

var mahClass = [];

function Student(firstName, lastInitial, hasBeard, faveNumber){
  this.firstName = firstName;
  var dog = 'woof';
  this.lastInitial = lastInitial;
  this.hasBeard = hasBeard;
  this.class = '201d23';
  this.faveNumber = faveNumber;
  this.isLeetHaxx0r = true;
  mahClass.push(this);
}

Student.prototype.introduction = function() {
  console.log('Hi, my name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
};

Student.prototype.beardedness = function(){
  console.log('Does ' + this.firstName + ' have a luxurious and thick beard? ' + this.hasBeard);
};

Student.weasels = 'WEASELS!!!! RUN!!!!!!'; // not inherited by instances
Student.prototype.seagull = 'Seagulls, stop it now!';

new Student('Aaron', 'M', true, 7);
new Student('Chai', 'N', true, 7);
new Student('Katherine', 'H', false, 9);

// Now all I need is <40 lines of code to represent all 22 students instead of 240+. What a bargain!
