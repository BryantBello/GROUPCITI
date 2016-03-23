

var messagesRef = new Firebase("https://bridgeschat.firebaseio.com/");



var messageField = $('#chatTextInput');
var nameField = $('#nameInput');
var messageList = $('#chat')



messageField.keydown(function (e) {
   
	if (e.keyCode == 13){
		
		$("#chatTextInput").focus();
		var username = nameField.val();
		var message = messageField.val();

		messagesRef.push({name: username, text: message});
		messageField.val('');

	}

});

messagesRef.limitToLast(10).on('child_added',function(snapshot){

	var data = snapshot.val();
	var username = data.name || "anonymous";
	var message = data.text; 

	var messageElement = $("<div class='well well-sm'></div>");
	var nameElement = $("<strong class='chatContent'></strong>");
	nameElement.text(username + ": ");
	messageElement.text(message).prepend(nameElement);

	messageList.append(messageElement);

	messageList[0].scrollTop = messageList[0].scrollHeight;



});

var feedcontainer= document.getElementById("newsFeed")
var feedurl="http://rss.cnn.com/rss/edition_world.rss"
var feedlimit=5
var rssoutput="<b>Latest CNN World News:</b><br /><ul>"

function rssfeedsetup(){
var feedpointer = new google.feeds.Feed(feedurl) //Google Feed API method
feedpointer.setNumEntries(feedlimit) //Google Feed API method
feedpointer.load(displayfeed) //Google Feed API method
}

function displayfeed(result){
if (!result.error){
var thefeeds = result.feed.entries
for (var i=0; i<thefeeds.length; i++)
rssoutput+="<li><a href='" + thefeeds[i].link + "'>" + thefeeds[i].title + "</a></li>"
rssoutput+="</ul>"
feedcontainer.innerHTML=rssoutput
}
else
alert("Error fetching feeds!")
}

window.onload=function(){
rssfeedsetup()
}

$(document).ready(function(){

$.backstretch('images/usabridge.jpg');



})




//function translatedText(){
//	var language = $("#selectLanguage").text();
//	var sourceText = $("#responseDisplay").text();
//	var queryUrl ='https://www.googleapis.com/language/translate/v2?key=AIzaSyBGVNFrlzQURAt858e34_eOIwdyxzMqv0w&source=en&target=decallback=translateText&q=' + sourceText;
	
//	$.ajax({url: queryUrl, method : 'GET'})
//		.done(function(response){
//			var result = response.data;

//			$("#responseDisplay").text(translatedText);
		
//		console.log(JSON.stringify(queryUrl))

//		});






	
//}



$("#nameInput").focus();


$("#translate").on('click',function(){

	translatedText();

});