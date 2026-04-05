import { Sidebar } from "./Sidebar/Sidebar"
import { ChatWindow } from "./ChatWindow/ChatWindow"

export function Chat() {
  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      <Sidebar />
      <ChatWindow />
    </div>
  )
}