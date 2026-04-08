import { formatDate } from "../../utils/formatDate";

export const SidebarItem = ({ title, createdAt, active = false }) => {

  return (
    <button 
      className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-200 ${
        active 
          ? 'bg-surface-container-highest text-on-surface font-semibold border-l-4 border-primary' 
          : 'text-secondary hover:text-on-surface hover:bg-surface-container-highest/50'
      }`}
    >
      <div className="flex flex-col items-start flex-1 min-w-0">
        <span className="truncate text-sm font-semibold">{title}</span>
        <span className="text-xs text-secondary">{formatDate(createdAt)}</span>
      </div>
    </button>
  );
};