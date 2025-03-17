import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function ExplorePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Community</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Success Stories</CardTitle>
            <CardDescription>Inspiration from the community</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Alex J.",
                  story: "Manifested my dream job after 3 months of visualization",
                  avatar: "/placeholder.svg?height=40&width=40",
                },
                {
                  name: "Sarah W.",
                  story: "Found my soulmate using the manifestation techniques",
                  avatar: "/placeholder.svg?height=40&width=40",
                },
              ].map((story, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={story.avatar} alt={story.name} />
                    <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{story.name}</p>
                    <p className="text-xs text-muted-foreground">{story.story}</p>
                  </div>
                </div>
              ))}
              <Button variant="link" className="p-0 h-auto text-sm">
                View all success stories →
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Join our community events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Manifestation Workshop", date: "March 25, 2023", time: "3:00 PM" },
                { title: "Group Meditation", date: "March 28, 2023", time: "7:00 PM" },
              ].map((event, i) => (
                <div key={i} className="border-b pb-3 last:border-0 last:pb-0">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {event.date} at {event.time}
                  </p>
                  <Button variant="link" className="p-0 h-auto mt-1 text-sm">
                    Register
                  </Button>
                </div>
              ))}
              <Button variant="link" className="p-0 h-auto text-sm">
                View all events →
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Discussion Forums</CardTitle>
            <CardDescription>Share your experiences and insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Manifestation Techniques", posts: 24, lastActivity: "2 hours ago" },
                { title: "Success Stories", posts: 56, lastActivity: "1 day ago" },
              ].map((forum, i) => (
                <div key={i} className="border-b pb-3 last:border-0 last:pb-0">
                  <p className="font-medium">{forum.title}</p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{forum.posts} posts</span>
                    <span>Last activity: {forum.lastActivity}</span>
                  </div>
                  <Button variant="link" className="p-0 h-auto mt-1 text-sm">
                    View Forum
                  </Button>
                </div>
              ))}
              <Button variant="link" className="p-0 h-auto text-sm">
                View all forums →
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
