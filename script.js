let currentRoom = 'Sala 1';

function selectRoom(room) {
    currentRoom = room;
    document.getElementById('room-title').innerText = `Mensagens da ${room}`;
    document.getElementById('messages').innerHTML = ''; // Limpa as mensagens
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const messagesDiv = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.textContent = `[${currentRoom}] Você: ${messageText}`;
        messagesDiv.appendChild(messageElement);
        messageInput.value = ''; // Limpa o campo de entrada
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Rola para o final
    }
}
