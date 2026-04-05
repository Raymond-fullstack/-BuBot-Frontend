import { Message } from "./Message"

export function ChatArea() {
  return (
    <div className="flex-1 overflow-y-auto pt-8 pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-surface-container-highest/50 px-3 py-1 rounded-full">Today</span>
        </div>

        <Message 
          content="Hello" 
          time="09:16 AM" 
        />

        <Message 
          isBot 
          content="Hey there, how can i be of help today" 
          time="09:15 AM" 
        />

      </div>
    </div>
  )
}