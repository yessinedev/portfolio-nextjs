import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Settings, User, Shield, Database, Download } from "lucide-react"

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">Settings</h2>
        <p className="text-[#9cabba]">Manage your admin panel and portfolio settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <Card className="bg-[#1b2127] border-[#3b4754]">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <User className="w-5 h-5" />
              Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Full Name
              </Label>
              <Input
                id="name"
                defaultValue="Sarah Chen"
                className="bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="sarah.chen@example.com"
                className="bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio" className="text-white">
                Bio
              </Label>
              <Textarea
                id="bio"
                defaultValue="Passionate software developer with a focus on creating innovative and user-friendly applications."
                className="bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4] resize-none"
                rows={3}
              />
            </div>
            <Button className="bg-[#3d98f4] hover:bg-[#2d7bd4] text-white">Update Profile</Button>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="bg-[#1b2127] border-[#3b4754]">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password" className="text-white">
                Current Password
              </Label>
              <Input
                id="current-password"
                type="password"
                className="bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password" className="text-white">
                New Password
              </Label>
              <Input
                id="new-password"
                type="password"
                className="bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-white">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                className="bg-[#283039] border-[#3b4754] text-white placeholder:text-[#9cabba] focus:border-[#3d98f4]"
              />
            </div>
            <Button className="bg-[#10b981] hover:bg-[#059669] text-white">Change Password</Button>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="bg-[#1b2127] border-[#3b4754]">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Database className="w-5 h-5" />
              Data Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-white font-medium">Export Data</h4>
              <p className="text-[#9cabba] text-sm">Download your portfolio data as JSON</p>
              <Button
                variant="outline"
                className="border-[#3b4754] text-[#9cabba] hover:text-white hover:bg-[#283039] bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Export Skills & Projects
              </Button>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-medium">Clear Cache</h4>
              <p className="text-[#9cabba] text-sm">Clear cached data and refresh content</p>
              <Button
                variant="outline"
                className="border-[#3b4754] text-[#9cabba] hover:text-white hover:bg-[#283039] bg-transparent"
              >
                Clear Cache
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* System Info */}
        <Card className="bg-[#1b2127] border-[#3b4754]">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Settings className="w-5 h-5" />
              System Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[#9cabba] text-sm">Version</p>
                <p className="text-white font-medium">1.0.0</p>
              </div>
              <div>
                <p className="text-[#9cabba] text-sm">Last Updated</p>
                <p className="text-white font-medium">Dec 30, 2024</p>
              </div>
              <div>
                <p className="text-[#9cabba] text-sm">Total Skills</p>
                <p className="text-white font-medium">15</p>
              </div>
              <div>
                <p className="text-[#9cabba] text-sm">Total Projects</p>
                <p className="text-white font-medium">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
