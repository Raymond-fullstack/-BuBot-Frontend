
export function Sidebar() {
  return (
    <aside id="sidebar"
      className="fixed md:relative z-20 w-64 h-screen bg-white border-r border-gray-200 transform -translate-x-full md:translate-x-0 transition-transform duration-300">

      <div className="flex flex-col h-full">

        <div className="p-4 border-b font-bold text-lg">
          Busitema University
        </div>

        <div className="p-4">
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg">
            + New Chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-2 space-y-2">
          <div className="p-3 rounded-lg bg-yellow-100 cursor-pointer">
            Timetable Help
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            Course Inquiry
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            Hostel Info
          </div>
        </div>

      </div>
    </aside>
  )
}