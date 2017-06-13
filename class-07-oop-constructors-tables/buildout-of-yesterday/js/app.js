'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am'];

var pikeplace = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerSale: 6.3,
  totalDailySales: 0,

  // To calculate that, I first need to know customers each hourly
  // [34, 62, 44, 33]
  customersEachHour: [],
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      // push a new random number into the customer array
      this.customersEachHour.push(randCust(this.minCustomers, this.maxCustomers));
    }
  },

  // Ultimately, I want an array of hourly cookie sales
  // [88, 94, 105, 56...]
  cookiesSoldEachHour: [],
  calccookiesSoldEachHour: function() {
    this.calcCustomersEachHour();
    for(var i = 0; i < hours.length; i++) {
      // push the value (customers * avgPerSale)
      this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale));
      this.totalDailySales += this.cookiesSoldEachHour[i];
    }
  },

  // I will need a method to render this to the DOM
  render: function() {
    this.calccookiesSoldEachHour();
    var pikeUL = document.getElementById('pike');
    for(var i = 0; i < hours.length; i++) {
      // create an element
      var liEl = document.createElement('li');
      // give it content
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      // append it to the DOM
      pikeUL.appendChild(liEl);
    }
    // TOTAL
    // create an element
    liEl = document.createElement('li');
    // give it content
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    // append that chile
    pikeUL.appendChild(liEl);

  }
};

var seatac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerSale: 1.2,
  totalDailySales: 0,

  // To calculate that, I first need to know customers each hourly
  // [34, 62, 44, 33]
  customersEachHour: [],
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      // push a new random number into the customer array
      this.customersEachHour.push(randCust(this.minCustomers, this.maxCustomers));
    }
  },

  // Ultimately, I want an array of hourly cookie sales
  // [88, 94, 105, 56...]
  cookiesSoldEachHour: [],
  calccookiesSoldEachHour: function() {
    this.calcCustomersEachHour();
    for(var i = 0; i < hours.length; i++) {
      // push the value (customers * avgPerSale)
      this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale));
      this.totalDailySales += this.cookiesSoldEachHour[i];
    }
  },

  // I will need a method to render this to the DOM
  render: function() {
    this.calccookiesSoldEachHour();
    var pikeUL = document.getElementById('seatac');
    for(var i = 0; i < hours.length; i++) {
      // create an element
      var liEl = document.createElement('li');
      // give it content
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      // append it to the DOM
      pikeUL.appendChild(liEl);
    }
    // TOTAL
    // create an element
    liEl = document.createElement('li');
    // give it content
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    // append that chile
    pikeUL.appendChild(liEl);

  }
};

function randCust(min, max) {
  // Thank you MDN for the codez below!
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

pikeplace.render();
seatac.render();
console.log(pikeplace);
