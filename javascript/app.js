

var messagesRef = new Firebase("https://bridgeschat.firebaseio.com/");



var messageField = $('#chatTextInput');
var nameField = $('#nameInput');
var messageList = $('#chat')



messageField.keydown(function (e) {
   
	if (e.keyCode == 13){
		

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

	var messageElement = $("<li>");
	var nameElement = $("<strong class='chatContent'></strong>");
	nameElement.text(username + " ");
	messageElement.text(message).prepend(nameElement);

	messageList.append(messageElement);

	messageList[0].scrollTop = messageList[0].scrollHeight;



});