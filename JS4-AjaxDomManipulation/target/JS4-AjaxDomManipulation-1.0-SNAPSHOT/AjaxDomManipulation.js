var button1 = document.querySelector("#button1");
var quote = document.querySelector("#quote");
quote.innerHTML = "didn't work now did it..."

button1.onclick = function () {
    var url = "https://jokes-plaul.rhcloud.com/api/joke";
    var conf = {metod: 'get'};
    var promise = fetch(url, conf);
    promise.then(function(response){
        return response.text();
    }).then(function(text){
        console.log(text);
        quote.innerHTML = text;
    })

};




