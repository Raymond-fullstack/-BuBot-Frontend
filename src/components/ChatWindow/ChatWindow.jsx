import { Header } from './Header';
import { ChatArea } from './ChatArea';
import { InputArea } from './InputArea';

export function ChatWindow() {
  return (
    <main className="flex-1 flex flex-col relative">
      <Header />
      <ChatArea />
      <InputArea />
    </main>
  )
}