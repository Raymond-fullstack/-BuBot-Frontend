import { useState, useEffect } from 'react';
import { MessageLoader } from '../MessageLoader';

export function Message({ message, special = null }) {
  const isBot = message.sender === "Bot";
  const [showLoader, setShowLoader] = useState(isBot);

  const time = new Date(message.timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  useEffect(() => {
    if (isBot) {
      const timer = setTimeout(() => setShowLoader(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isBot]);

  return (
    <div className={`flex flex-col gap-2 max-w-[85%] ${isBot ? 'items-start' : 'items-end ml-auto'}`}>
      
      {isBot && (
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold text-on-primary-fixed">
            B
          </div>
          <span className="text-xs font-bold text-on-surface">BuBot</span>
        </div>
      )}

      <div className={`p-5 rounded-2xl shadow-sm ${
        isBot 
          ? 'bg-surface-container-lowest ghost-border rounded-bl-sm' 
          : 'bg-primary-container text-on-primary-fixed font-medium rounded-br-sm'
      }`}>
        {showLoader ? <MessageLoader /> : <p className="text-sm leading-relaxed">{message.text}</p>}
      </div>

      {special}

      <span className="text-[10px] text-secondary px-1">{time}</span>
    </div>
  );
}