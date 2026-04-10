export function ConfirmDialog({ 
  isOpen, 
  title, 
  message, 
  confirmLabel = "Delete", 
  cancelLabel = "Cancel",
  onConfirm, 
  onCancel,
  isDangerous = false 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-6 animate-in fade-in duration-200">
        <h2 className="text-lg font-bold text-on-surface mb-2">{title}</h2>
        <p className="text-sm text-secondary mb-6">{message}</p>
        
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-6 py-2.5 rounded-xl bg-surface-container-highest text-on-surface font-semibold hover:bg-surface-container-highest/80 transition-colors"
          >
            {cancelLabel}
          </button>
          
          <button
            onClick={onConfirm}
            className={`px-6 py-2.5 rounded-xl font-semibold transition-colors ${
              isDangerous
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-primary-container text-on-primary-fixed hover:bg-primary-container/80'
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
