import axios from "axios";
import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar/Sidebar"
import { ChatWindow } from "./ChatWindow/ChatWindow"

export function Chat() {
  const [activeConversationId, setActiveConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [convos, setConvos] = useState([]);

  // Load conversations on mount
  useEffect(() => {
    const getConvos = async () => {
      const response = await axios.get("/api/conversations");
      setConvos(response.data);
    };
    getConvos();
  }, []);

  // Load messages when activeConversationId changes
  useEffect(() => {
    if (!activeConversationId) return;

    const fetchMessages = async () => {
      const response = await axios.get(`/api/messages/${activeConversationId}`);
      setMessages(response.data);
    };
    fetchMessages();
  }, [activeConversationId]);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    let convoId = activeConversationId;
    let newConvo = null;

    // Create new conversation if none exists
    if (!convoId) {
      const res = await axios.post("/api/conversations/");
      newConvo = res.data;
      convoId = newConvo.conversationId;
      setActiveConversationId(convoId);

      // Update conversations list (sidebar)
      setConvos(prev => [newConvo, ...prev]);

      // Clear messages for new conversation
      setMessages([]);
    }

    // Optimistic UI: user message
    const userMessage = {
      messageId: crypto.randomUUID(),
      conversationId: convoId,
      sender: "User",
      text,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, userMessage]);

    // Send to backend
    const response = await axios.post("/api/chat/send/", {
      conversationId: convoId,
      message: text
    });

    // Add bot replies
    const botMessages = response.data.map(reply => ({
      messageId: crypto.randomUUID(),
      conversationId: convoId,
      sender: "Bot",
      text: reply,
      timestamp: new Date().toISOString()
    }));
    setMessages(prev => [...prev, ...botMessages]);
  };

  const handleCreateNewConversation = async () => {
  // Call backend to create a new conversation
  const res = await axios.post("/api/conversations/");
  const newConvo = res.data;

  // Add to sidebar
  setConvos(prev => [newConvo, ...prev]);

  // Set as active
  setActiveConversationId(newConvo.conversationId);

  // Clear messages area
  setMessages([]);
};

const handleDeleteConversation = (conversationId) => {
  // Remove from conversations list
  setConvos(prev => prev.filter(convo => convo.conversationId !== conversationId));

  // If deleted conversation was active, clear it
  if (activeConversationId === conversationId) {
    setActiveConversationId(null);
    setMessages([]);
  }
};

  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      <Sidebar
        convos={convos} // pass all conversations
        onSelectConversation={setActiveConversationId}
        activeConversationId={activeConversationId}
        onCreateNewConversation={handleCreateNewConversation}
        onDeleteConversation={handleDeleteConversation}
      />

      <ChatWindow
        messages={messages}
        onSendMessage={handleSendMessage}
        conversationId={activeConversationId}
      />
    </div>
  );
}