import { Message } from "./Message";
import { formatDate } from "../../utils/formatDate";

export function ChatArea({ messages }) {

const groupedDate = formatDate(messages[0]?.timestamp);

  return (
    <div className="flex-1 overflow-y-auto pt-8 pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-8">

        <div className="flex justify-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-surface-container-highest/50 px-3 py-1 rounded-full">
            {groupedDate}
          </span>
        </div>

        {messages.map((msg) => (
          <Message 
            key={msg.messageId}
            message={msg}
          />
        ))}

      </div>
    </div>
  );
}