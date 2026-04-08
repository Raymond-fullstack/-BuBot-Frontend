import { Header } from './Header';
import { ChatArea } from './ChatArea';
import { InputArea } from './InputArea';

export function ChatWindow({ messages, onSendMessage, conversationId }) {

  return (
    <main className="flex-1 flex flex-col relative">
      <Header />
      <ChatArea messages={messages} />
      <InputArea 
        conversationId={conversationId}
        onSendMessage={onSendMessage}
      />
    </main>
  )
}