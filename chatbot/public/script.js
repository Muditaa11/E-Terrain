function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    let chatBox = document.getElementById("chatBox");

    if (userInput.trim() === "") return;

    let userMessage = `<p class="user-message message">${userInput}</p>`;
    chatBox.innerHTML += userMessage;
    
    document.getElementById("userInput").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Show bot is thinking...
    let botThinking = `<p class="bot-message message">Thinking...</p>`;
    chatBox.innerHTML += botThinking;
    chatBox.scrollTop = chatBox.scrollHeight;

    fetch("/chat", {
        method: "POST",
        body: JSON.stringify({ message: userInput }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        chatBox.lastElementChild.innerHTML = `<strong>Bot:</strong> ${data.response}`;
    })
    .catch(error => {
        console.error("Error:", error);
        chatBox.lastElementChild.innerHTML = `<strong>Bot:</strong> Sorry, something went wrong.`;
    });
}
