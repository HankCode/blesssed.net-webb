import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function SuccessStoriesPage() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Success Stories</CardTitle>
          <CardDescription>
            Real stories from people who have manifested their desires
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              {
                name: "Alex Johnson",
                avatar: "/placeholder.svg?height=40&width=40",
                title: "Manifested My Dream Job",
                story:
                  "After three months of daily visualization and affirmations, I received a call for an interview at my dream company. Two weeks later, I got the job offer with even better compensation than I had imagined!",
                date: "2 months ago",
              },
              {
                name: "Sarah Williams",
                avatar: "/placeholder.svg?height=40&width=40",
                title: "Found My Soulmate",
                story:
                  "I had been single for years and was losing hope. I started using the manifestation techniques in this app, created a detailed scene of meeting my perfect partner, and within 3 months, I met them at a friend's gathering exactly as I had visualized!",
                date: "1 month ago",
              },
              {
                name: "Michael Brown",
                avatar: "/placeholder.svg?height=40&width=40",
                title: "Healed My Chronic Pain",
                story:
                  "I suffered from chronic back pain for over 5 years. After consistently practicing the healing visualizations and affirmations, my pain gradually decreased. Now I'm pain-free and can enjoy activities I thought I'd never do again.",
                date: "3 weeks ago",
              },
              {
                name: "Emily Davis",
                avatar: "/placeholder.svg?height=40&width=40",
                title: "Manifested My Dream Home",
                story:
                  "We had been looking for our perfect home for over a year with no success. I created a detailed manifestation scene of the exact house we wanted, and within two months, our real estate agent called us about a new listing that matched our visualization perfectly!",
                date: "1 week ago",
              },
            ].map((story, i) => (
              <div key={i} className="border-b pb-6 last:border-0 last:pb-0">
                <div className="flex items-center gap-4 mb-3">
                  <Avatar>
                    <AvatarImage src={story.avatar} alt={story.name} />
                    <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{story.name}</p>
                    <p className="text-xs text-muted-foreground">{story.date}</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                <p className="text-muted-foreground mb-3">{story.story}</p>
                <Button variant="outline" size="sm">
                  Read full story
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
