
export function ChatWindow() {
  function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');

      sidebar.classList.toggle('-translate-x-full');
      overlay.classList.toggle('hidden');
    }
    
  return (
    <div className="flex-1 flex flex-col h-full">

      <div className="flex items-center justify-between p-4 border-b">

        <button onClick={toggleSidebar} className="md:hidden text-xl">
          ☰
        </button>

        <div>
          <h1 className="font-bold text-lg">Bubot – Busitema Assistant</h1>
          <p className="text-sm text-gray-500">Helping you navigate campus life</p>
        </div>

        <div></div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">

        <div className="text-center text-gray-500 mt-10">
          Hi, I'm Bubot 👋 <br/>
          How can I help you today at Busitema University?
        </div>

        <div className="flex">
          <div className="bg-white p-3 rounded-xl shadow max-w-xs">
            Hello! How can I assist you today?
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-yellow-400 p-3 rounded-xl max-w-xs">
            I need help with my timetable.
          </div>
        </div>

      </div>

      <div className="p-4 border-t flex items-center gap-2">

        <input
          type="text"
          placeholder="Ask Bubot anything about campus..."
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
          Send
        </button>

      </div>

    </div>
  )
}