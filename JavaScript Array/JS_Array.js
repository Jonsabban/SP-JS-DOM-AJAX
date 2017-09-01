//  A)
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "Hanne", "sanne"];

//  B)
var all = boys.concat(girls);

// C)
var allJoin = all.join(", ");
var allJoin2 = all.join(" - ");

// D)
all.push("Lone", "Gitte");

// E)
all.unshift("Hans", "Kurt");

// F)
all.shift(1);

// G)
all.pop();

// H)
all.splice(3, 2);

// I)
all.reverse();

// J)
all.sort();

// L)
function upperCase(element){
    return element.charAt(0).toUpperCase() + element.slice(1);
}

// M)
function filterNames(str){
    if ( str.charAt(0) == "L" || str.charAt(0) == "l" )
        return str;
} 

var upper = all.map(upperCase);
var filter = all.filter(filterNames);

console.log(all.join(", "));
console.log(upper.join(", "));
console.log(filter.join(", "));

//document.getElementById("demo").innerHTML = all;
