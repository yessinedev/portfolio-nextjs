"use client"

import { usePathname } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const pageNames: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/skills": "Skills Management",
  "/admin/projects": "Projects Management",
  "/admin/settings": "Settings",
}

export default function AdminHeader() {
  const pathname = usePathname()
  const pageName = pageNames[pathname] || "Admin Panel"

  return (
    <header className="bg-[#1b2127] border-b border-[#3b4754] px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">{pageName}</h1>
          <p className="text-[#9cabba] text-sm">Manage your portfolio content</p>
        </div>

        <div className="flex items-center gap-4">
          <Badge className="bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20">Online</Badge>

          <Button variant="ghost" size="sm" className="text-[#9cabba] hover:text-white">
            <Bell className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-2 px-3 py-2 bg-[#283039] rounded-lg">
            <User className="w-4 h-4 text-[#9cabba]" />
            <span className="text-white text-sm font-medium">Admin</span>
          </div>
        </div>
      </div>
    </header>
  )
}
