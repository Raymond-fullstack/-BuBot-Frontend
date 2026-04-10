import { 
  Plus, 
  MessageSquare, 
  Search, 
  Map as MapIcon, 
  Settings, 
  HelpCircle, 
  LogOut
} from 'lucide-react';
import { SidebarItem } from './SidebarItem';
import Busitema from '../../assets/busitema.png'

export function Sidebar({ convos, onSelectConversation, activeConversationId, onCreateNewConversation, onDeleteConversation }) {
  const handleDeleteConversation = async (conversationId) => {
    try {
      const response = await fetch(`/api/conversations/${conversationId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        onDeleteConversation(conversationId);
      } else {
        alert('Failed to delete conversation');
      }
    } catch (error) {
      console.error('Error deleting conversation:', error);
      alert('Error deleting conversation');
    }
  };

  return (
      <aside className="w-[280px] bg-surface-container-low flex flex-col py-6 border-r border-outline-variant/10">
        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
            <img 
              src={Busitema}
              alt="Busitema Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-on-surface leading-tight font-headline">BuBot</h1>
            <p className="text-[10px] text-secondary font-bold uppercase tracking-wider">Academic Assistant</p>
          </div>
        </div>

        <div className="px-4 mb-8">
          <button
            className="w-full py-3.5 px-6 rounded-full bg-primary-container text-on-primary-fixed font-bold flex items-center justify-center gap-2 hover:bg-primary-container/80 transition-all shadow-sm active:scale-95"
            onClick={onCreateNewConversation}
          >
            <Plus size={20} strokeWidth={3} />
            <span>New Chat</span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto custom-scrollbar px-2 space-y-1">
          <div className="px-4 py-2">
            <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Recent Conversations</span>
          </div>
          {/* <SidebarItem icon={MessageSquare} label="Timetable Help" active />
          <SidebarItem icon={LogOut} label="Student Portal" />
          <SidebarItem icon={Search} label="Research Support" />
          <SidebarItem icon={MapIcon} label="Campus Maps" /> */}
          {convos.map((convo) => (
            <div 
              key={convo.conversationId}
              onClick={() => onSelectConversation(convo.conversationId)}
            >
              <SidebarItem 
                title={convo.title} 
                createdAt={convo.createdAt} 
                active={convo.conversationId === activeConversationId}
                onDelete={() => handleDeleteConversation(convo.conversationId)}
              />
            </div>
          ))}
        </nav>

        <div className="mt-auto px-2 space-y-1 pt-6 border-t border-outline-variant/10">
          <SidebarItem icon={Settings} label="Settings" />
          <SidebarItem icon={HelpCircle} label="Help Center" />
        </div>
      </aside>
  )
}