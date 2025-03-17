import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="grid gap-4">
      <div className="relative mb-4">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search community members..." className="pl-8 w-full md:max-w-sm" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Community Members</CardTitle>
          <CardDescription>
            Connect with like-minded individuals on their manifestation journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Alex Johnson",
                interests: "Career, Financial",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                name: "Sarah Williams",
                interests: "Relationships, Health",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                name: "Michael Brown",
                interests: "Health, Personal Growth",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                name: "Emily Davis",
                interests: "Travel, Financial",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                name: "David Wilson",
                interests: "Career, Relationships",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                name: "Jessica Taylor",
                interests: "Health, Travel",
                avatar: "/placeholder.svg?height=40&width=40",
              },
            ].map((member, i) => (
              <div key={i} className="flex items-center gap-4 p-3 border rounded-lg">
                <Avatar>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium">{member.name}</p>
                  <p className="text-xs text-muted-foreground">Interests: {member.interests}</p>
                </div>
                <Button variant="outline" size="sm">
                  Connect
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
