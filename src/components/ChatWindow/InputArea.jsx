import { 
  Paperclip,
  Mic,
  Send } from "lucide-react"

export function InputArea() {
  return(
    <footer className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-surface via-surface to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="bg-surface-container-lowest shadow-lg border border-outline-variant/10 rounded-[2rem] p-2 flex items-center gap-2 pl-6">
          <input 
            type="text" 
            placeholder="Ask Bubot anything about campus..." 
            className="flex-1 bg-transparent border-none focus:ring-0 outline-none text-sm py-3 placeholder:text-secondary/60"
          />
          <div className="flex items-center gap-1 pr-2">
            <button className="p-2 text-secondary hover:text-on-surface transition-colors">
              <Paperclip size={20} />
            </button>
            <button className="p-2 text-secondary hover:text-on-surface transition-colors">
              <Mic size={20} />
            </button>
            <button className="w-12 h-12 rounded-full bg-tertiary text-white flex items-center justify-center hover:opacity-90 transition-all shadow-md active:scale-95">
              <Send size={20} fill="currentColor" />
            </button>
          </div>
        </div>
        <p className="mt-3 text-center text-[10px] text-secondary/60 font-medium">
          Bubot can make mistakes. Verify important academic information with your department.
        </p>
      </div>
    </footer>
  )
}