
var messagesRef = new Firebase("https://bridgeschat.firebaseio.com/");



var messageField = $('#chatTextInput');
var nameField = $('#nameInput');
var messageList = $('#chat');



var languages = [{//1
 language: "Espanol",
 value: "en-es"
}, {//2
 language: "Francais",
 value: "en-fr"
}, {//3
 language: "Deutsche",
 value: "en-de"
}, {//4
 language: "Pyccknn",
 value: "en-ru"
}, {//5
 language: "Italiano",
 value: "en-it"
}];

var source="";

//take number and call question and answers by index position
for (var i = 0; i < languages.length; i++) {
     $("#panel").append("<button class='answer-button1' id='button' 'value='" + languages[i].value  + "data-name=" + languages[i].language + "''>" + languages[i].language+ "</button>");
   }


 
$(document).on("click", '.answer-button1', function(e) {
 source = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160317T225805Z.24fe4d3e49b00f5f.6bcc824a7ac0b4ec0da91a97f022d7045d9b121c&text=Hello&lang=en-es' +  questions[questionNumber].question + $(event.target).attr("value");

console.log($(event.target).attr("value"));
 console.log(source);
});