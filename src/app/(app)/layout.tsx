"use client";

import Logo from "@/components/Logo";
import { Code, Home, Menu, Settings, Trophy, Users, X } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";
export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <span className="text-xl font-semibold p-8">
            <Logo />
          </span>
          <button onClick={toggleSidebar} className="lg:hidden">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-6">
          <Link href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <Home className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <Code className="w-5 h-5 mr-3" />
            Contests
          </Link>
          <Link href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <Trophy className="w-5 h-5 mr-3" />
            Leaderboard
          </Link>
          <Link href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <Users className="w-5 h-5 mr-3" />
            Community
          </Link>
          <Link href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b">
          <div>
            {" "}
            <button onClick={toggleSidebar} className="lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">John Doe</span>
            <img src="/placeholder.svg?height=32&width=32" alt="User avatar" className="w-8 h-8 rounded-full" />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 px-6 py-8">{children}</main>
      </div>
    </div>
  );
}
