

export const SidebarItem = ({ icon:Icon, label, active = false }) => (
  <button 
    className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-200 ${
      active 
        ? 'bg-surface-container-highest text-on-surface font-semibold border-l-4 border-primary' 
        : 'text-secondary hover:text-on-surface hover:bg-surface-container-highest/50'
    }`}
  >
    <Icon size={20} className={active ? 'text-primary' : ''} />
    <span className="truncate text-sm">{label}</span>
  </button>
);