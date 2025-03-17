import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";

export default function ProfilePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
      </div>

      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Photo
                  </Button>
                </div>

                <div className="grid gap-4 flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue="john.doe@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Input id="timezone" defaultValue="Eastern Time (ET)" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Update your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Update Password</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Customize your experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="dark-mode" className="flex flex-col space-y-1">
                  <span>Dark Mode</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Toggle between light and dark mode
                  </span>
                </Label>
                <Switch id="dark-mode" />
              </div>

              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="email-digest" className="flex flex-col space-y-1">
                  <span>Weekly Email Digest</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Receive a weekly summary of your manifestation progress
                  </span>
                </Label>
                <Switch id="email-digest" defaultChecked />
              </div>

              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="reminders" className="flex flex-col space-y-1">
                  <span>Daily Reminders</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Get daily reminders to practice manifestation
                  </span>
                </Label>
                <Switch id="reminders" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
                  <span>Email Notifications</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Receive notifications via email
                  </span>
                </Label>
                <Switch id="email-notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="push-notifications" className="flex flex-col space-y-1">
                  <span>Push Notifications</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Receive notifications on your device
                  </span>
                </Label>
                <Switch id="push-notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="desire-updates" className="flex flex-col space-y-1">
                  <span>Desire Updates</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Get notified about updates to your desires
                  </span>
                </Label>
                <Switch id="desire-updates" defaultChecked />
              </div>

              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="community-activity" className="flex flex-col space-y-1">
                  <span>Community Activity</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Get notified about activity in the community
                  </span>
                </Label>
                <Switch id="community-activity" />
              </div>

              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="coaching-reminders" className="flex flex-col space-y-1">
                  <span>Coaching Reminders</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Get reminders about upcoming coaching sessions
                  </span>
                </Label>
                <Switch id="coaching-reminders" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
