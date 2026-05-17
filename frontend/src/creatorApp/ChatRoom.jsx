import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ChatRoom.scss";

const INITIAL_MESSAGES = [
  { id: 1, text: "Hey there! Thanks for unlocking my VIP tier ✨", sender: "them", time: "10:00 AM" },
  { id: 2, text: "I've got some exclusive behind-the-scenes content coming. What do you want to see first?", sender: "them", time: "10:01 AM" },
];




const ChatRoom = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  
  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: input,
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInput("");

    // Simulate creator typing back after 2 seconds
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "That sounds amazing... let me see what I can do for you 😉",
        sender: "them",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 2000);
  };

  return (
    <div className="chat-page">
      {/* Premium Glass Header */}
      <header className="chat-header">
        <button className="chat-header__back" onClick={() => navigate(-1)}>‹</button>
        
        <div className="chat-header__profile">
          <div className="chat-header__avatar-wrap">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop" 
              alt="Sarah" 
              className="chat-header__avatar"
            />
            <span className="chat-header__status-dot"></span>
          </div>
          <div className="chat-header__info">
            <h2 className="chat-header__name">Sarah</h2>
            <p className="chat-header__status">Online now</p>
          </div>
        </div>





        <button className="chat-header__menu">⋮</button>
      </header>

      {/* Chat Body */}
      <div className="chat-body">
        <div className="chat-body__timestamp">Today, 10:00 AM</div>
        
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`chat-bubble chat-bubble--${msg.sender}`}
          >
            <div className="chat-bubble__text">{msg.text}</div>
            <div className="chat-bubble__time">{msg.time}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Floating Input Area */}
      <div className="chat-footer">
        <form className="chat-form" onSubmit={handleSend}>
          <button type="button" className="chat-form__attach">+</button>
          <input 
            type="text" 
            className="chat-form__input" 
            placeholder="Type a message..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
            type="submit" 
            className={`chat-form__send ${input.trim() ? 'chat-form__send--active' : ''}`}
            disabled={!input.trim()}
          >
            ↑
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;