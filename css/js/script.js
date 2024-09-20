function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
    var userMessage = '<p><strong>You:</strong> ' + userInput + '</p>';
    var botMessage = '<p><strong>Bot:</strong> This is where your bot response goes.</p>';

    chatBox.innerHTML += userMessage;
    setTimeout(function() {
        chatBox.innerHTML += botMessage;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    document.getElementById("user-input").value = "";
}
