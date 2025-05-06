// components/admin/TopBar.tsx
export default function TopBar() {
    return (
      <header className="bg-white border-b h-16 flex items-center justify-between px-6 shadow-sm">
        <div className="text-lg font-semibold">Admin Panel</div>
        <button className="text-sm text-gray-600 hover:text-black">Logout</button>
      </header>
    );
  }
  