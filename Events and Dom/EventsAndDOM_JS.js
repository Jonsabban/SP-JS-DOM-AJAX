document.getElementById("div1").onclick = function () {
    document.body.style.backgroundColor = "red";
};
document.getElementById("div2").onclick = function () {
    document.body.style.backgroundColor = "blue";
};
document.getElementById("div3").onclick = function () {
    document.body.style.backgroundColor = "green";
};

var div1 = document.querySelector("#div1");
var div2 = document.querySelector("#div2");
var div3 = document.querySelector("#div3");
var divColor = document.querySelector(".mydiv");

//A

function hiFromDiv1() {
    div1.innerHTML = "Hi from div1";
}
function hiFromDiv2() {
    div2.innerHTML = "Hi from div2";
}
function hiFromDiv3() {
    div3.innerHTML = "Hi from div3";
}

div1.onclick = hiFromDiv1;
div2.onclick = hiFromDiv2;
div3.onclick = hiFromDiv3;

//B & 3
var manyDivs = document.querySelector("#outher");

function manyDivsHandler() {
    console.log("clicked: " + this.id);
    document.querySelector("p").innerText = "clicked: " + this.id + ", Target: " + event.target.id;
}

console.log(manyDivs);
manyDivs.onclick = manyDivsHandler;

// 4)
var nameList = ["Filip", "Tobias", "Victor", "Anton"];

function makeList(array) {
    array = array.map(function (element) {
        return "<li>" + element + "</li>";
    });
    return "<ul>" + array.join("") + "</ul>";
}

var table = document.querySelector("#printTable");
var list = makeList(nameList);
console.log(list);
console.log(table);
table.innerHTML = list;

var addname = document.querySelector("#nameForm button[name ='addname']");
var delFirstName = document.querySelector("#nameForm button[name ='delFirstName']");
var delLastName = document.querySelector("#nameForm button[name ='delLastName']");

addname.onclick = function (e) {
    e.preventDefault(); //Stops it from reloading the page
    var inputfield = document.querySelector("#inputName"); //gets the input value
 
    nameList.push(inputfield.value);    //
    list = makeList(nameList);          //adds the name to the list and regenerates it
    return table.innerHTML = list;      //
};
delFirstName.onclick = function (e) {
    e.preventDefault();
    
    nameList.splice(0, 1);              //
    list = makeList(nameList);          //remove the first name on the list and regenerates it
    return table.innerHTML = list;      //

};
delLastName.onclick = function (e) {
    e.preventDefault();

    nameList.pop();              //
    list = makeList(nameList);          //remove the last name on the list and regenerates it
    return table.innerHTML = list;      //
};

// 5

// A)

/* function makeList(array) {
    array = array.map(function (element) {
        return "<li>" + element + "</li>";
    });
    return "<ul>" + array.join("") + "</ul>";
}
 */

function makeTable(array) {
    
}

