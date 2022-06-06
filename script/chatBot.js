window.onload = function () {
    document.getElementById("sendMessage").onclick = function () {sendMessage()}

}

function sendMessage() {
    let ChatBox = document.getElementById("ChatOutput");
    let messageOutput = document.createElement('li');
    let textMessage = document.getElementById('ChatInput').value;
    document.getElementById('ChatInput').value = '';

    messageOutput.setAttribute('class', 'sent');
    messageOutput.innerHTML = textMessage;

    ChatBox.appendChild(messageOutput);

    messageOutput.scrollIntoView(true);

    let bot = new ChatBot(textMessage);
    sendReply(bot.reply());

}

function sendReply(replyMessage) {
    let ChatBox = document.getElementById("ChatOutput");
    let replyOutput = document.createElement('li');

    replyOutput.setAttribute('class', 'received');
    replyOutput.innerHTML = replyMessage;

    ChatBox.appendChild(replyOutput);
    console.log(replyMessage)
    replyOutput.scrollIntoView(true);
}

class ChatBot {
    constructor(message) {
        this.Message = message.toLowerCase();
    }

    reply() {
        let brain = new Brain(this.Message);
        brain.Run();
        brain.FindReply();
        return brain.Reply;
    }
}