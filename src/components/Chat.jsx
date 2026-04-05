import { Sidebar } from "./Sidebar";
import { ChatWindow } from "./ChatWindow";

export function Chat() {
  function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');

      sidebar.classList.toggle('-translate-x-full');
      overlay.classList.toggle('hidden');
    }
    
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatWindow />

      <div id="overlay"
        onClick={toggleSidebar}
        class="fixed inset-0 bg-black bg-opacity-30 hidden md:hidden">
      </div>
    </div>
  )
}