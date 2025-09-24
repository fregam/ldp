'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/Admin", label: "Dashboard" },
  { href: "/Admin/Content", label: "Content" },
  { href: "/Admin/Styling", label: "Styling" },
  { href: "/Admin/Media", label: "Media" },
  { href: "/Admin/Settings", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r h-full">
      <div className="p-6 font-bold text-xl">Backoffice</div>
      <nav className="flex flex-col space-y-2 px-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`p-2 rounded-md text-sm font-medium ${
              pathname === item.href
                ? "bg-gray-200 text-black"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
