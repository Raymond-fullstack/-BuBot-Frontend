import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { formatDate } from "../../utils/formatDate";
import { ConfirmDialog } from "../ConfirmDialog";

export const SidebarItem = ({ title, createdAt, active = false, onDelete }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation();
    setIsDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    setIsDialogOpen(false);
    onDelete();
  };

  return (
    <>
      <button 
        className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-200 group ${
          active 
            ? 'bg-surface-container-highest text-on-surface font-semibold border-l-4 border-primary' 
            : 'text-secondary hover:text-on-surface hover:bg-surface-container-highest/50'
        }`}
      >
        <div className="flex flex-col items-start flex-1 min-w-0">
          <span className="truncate text-sm font-semibold">{title}</span>
          <span className="text-xs text-secondary">{formatDate(createdAt)}</span>
        </div>
        
        <button
          onClick={handleDelete}
          className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-red-500/20 rounded-lg text-red-500"
        >
          <Trash2 size={18} />
        </button>
      </button>

      <ConfirmDialog
        isOpen={isDialogOpen}
        title="Delete Conversation"
        message="Are you sure you want to delete this conversation? This action cannot be undone."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        isDangerous={true}
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDialogOpen(false)}
      />
    </>
  );
};