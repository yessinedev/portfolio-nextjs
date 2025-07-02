"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Code2, FolderOpen, Settings, LogOut, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { logout } from "@/lib/auth"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Skills", href: "/admin/skills", icon: Code2 },
  { name: "Projects", href: "/admin/projects", icon: FolderOpen },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-[#1b2127] border-r border-[#3b4754] flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#3b4754]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-[#3d98f4] to-[#2563eb] rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg">Admin Panel</h2>
            <p className="text-[#9cabba] text-xs">Portfolio Management</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                isActive ? "bg-[#3d98f4] text-white" : "text-[#9cabba] hover:text-white hover:bg-[#283039]",
              )}
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-[#3b4754]">
        <form action={logout}>
          <Button
            type="submit"
            variant="ghost"
            className="w-full justify-start text-[#9cabba] hover:text-white hover:bg-[#283039]"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Button>
        </form>
      </div>
    </div>
  )
}
