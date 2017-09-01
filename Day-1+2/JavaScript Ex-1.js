//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2
}

//Callback example
var cb = function (n1, n2, callback) {
    try {
        if (typeof n1 != "number" || typeof n2 != "number") {
            throw "Make sure n1/n2 is a number"
        }
        if (typeof callback != "function") {
            throw "Make sure callback is a function";
        }
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);

    } catch (error) {
        console.log(error);
        //console.log(error.name + "; " + error.message)
    }

}

// return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
// 2)
console.log(add(1, 2))         // What will this print?                            - 3 (uses the function)
console.log(add)              // What will it print and what does add represent?  - [Function: add] (Descriptes what it is)
console.log(add(1, 2, 3));     // What will it print                               - 3 (the function only takes 2 inputs, the 3rd is ignored)
console.log(add(1));	        // What will it print 	                            - NaN (the function is missing an input, therfore it can't function)
console.log(cb(3, 3, add));     // What will it print                               - "Result from the two numbers: 3+3=6" (the function only prints text, so it uses the "add" function to do the math)
console.log(cb(4, 3, sub));     // What will it print                               - "Result from the two numbers: 4+3=1" (it prints hardcoded text, it uses the sub function to get the '1')
console.log(cb(3, 3, add()));     // What will it print (and what was the problem)    - the add() function is run immidiatly and therfore fails
console.log(cb(3, "hh", add));    // What will it print                               

console.log("************** CALLBACKS **************");

// 1)
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
var filterNames = names.filter(function (str) {
    if (str.length < 4) {
        return str;
    }
});

names.forEach(function (element) {
    console.log("nonfiltered names: " + element);
}, this);

filterNames.forEach(function (element) {
    console.log("filteret names: " + element);
}, this);

// 2)
var namesUppercase = names.map(function (element) {
    return element.charAt(0).toUpperCase() + element.slice(1);
})

// 3)
function makeList(array) {
    array = array.map(function (element) {
        return "<li>" + element + "</li>";
    });
    return "<ul>" + array.join("") + "</ul>";
}
console.log(" makeList: " + makeList(namesUppercase));

// 4)
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

// a)
var newCars = cars.filter(function (element) {
    if (element.year > 1999) {
        return element;
    }
});
var volvo = cars.filter(function (element) {
    if (element.make === "Volvo") {
        return element;
    }

});
var cheapCars = cars.filter(function (element) {
    if (element.price < 5000) {
        return element;
    }
});
console.log("***************");
console.log(cars);
console.log("*** new cars *** ");
console.log(newCars);
console.log("*** Volvo's *** ");
console.log(volvo);
console.log("*** cheap cars *** ");
console.log(cheapCars);

// ASYNCHRONOUS CALLBACKS

var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");

// "THIS" AND CONSTRUCTURE FUNCTIONS

function Person(name){
    this.name = name;  
    console.log("Name: "+ this.name);
    setTimeout(function(){
      console.log("Hi  "+this.name);  
    }.bind(this),2000);
  }
  
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: " + name);  //Explain this

// the "this" function is limited to the function it was defined in, therfore it is still undefined when name was called in the clg.

var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
console.log("I'm global: "+ name);  //What’s different ?










