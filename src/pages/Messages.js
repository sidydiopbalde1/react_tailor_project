// src/pages/Messages.js
import React, { useState } from 'react';
import MessagesList from '../components/MessagesList';
import ChatWindow from '../components/ChatWindow';

function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(null);

  const conversations = [
    {
      id: 1,
      user: { name: "User1", avatar: "user1-avatar.jpg" },
      lastMessage: "Hi!",
      messages: [{ text: "Hi!", sender: "User1" }, { text: "Hello!", sender: "me" }],
    },
    // More conversations...
  ];

  return (
    <div className="messages-page">
      <MessagesList conversations={conversations} onSelectConversation={setSelectedConversation} />
      {selectedConversation && <ChatWindow conversation={selectedConversation} />}
    </div>
  );
}

export default Messages;