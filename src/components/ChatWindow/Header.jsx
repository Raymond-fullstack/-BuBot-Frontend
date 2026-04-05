import { History,User } from "lucide-react"

export function Header() {
  return (
    <header className="h-16 flex justify-between items-center px-8 bg-surface/80 backdrop-blur-md sticky top-0 z-10">
      <div className="flex flex-col">
        <h2 className="text-lg font-bold text-on-surface font-headline tracking-tight">Bubot – Busitema Assistant</h2>
        <p className="text-[10px] text-secondary font-medium">Helping you navigate campus life.</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-secondary hover:text-on-surface transition-colors">
          <History size={20} />
        </button>
        <button className="flex items-center gap-2 p-1 pl-3 border border-outline-variant/20 rounded-full hover:bg-surface-container-low transition-colors">
          <span className="text-xs font-semibold text-on-surface">User</span>
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-primary">
            <User size={18} fill="currentColor" />
          </div>
        </button>
      </div>
    </header>
  )
}