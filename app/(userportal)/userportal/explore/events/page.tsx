import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, Users, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EventsPage() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Join events to enhance your manifestation practice</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Manifestation Workshop",
                date: "March 25, 2023",
                time: "3:00 PM - 5:00 PM",
                location: "Online",
                host: "Alex Johnson",
                attendees: 45,
                type: "Workshop",
              },
              {
                title: "Group Meditation",
                date: "March 28, 2023",
                time: "7:00 PM - 8:00 PM",
                location: "Online",
                host: "Sarah Williams",
                attendees: 32,
                type: "Meditation",
              },
              {
                title: "Success Stories Sharing",
                date: "April 2, 2023",
                time: "5:30 PM - 7:00 PM",
                location: "Community Center, New York",
                host: "Michael Brown",
                attendees: 28,
                type: "Meetup",
              },
              {
                title: "Visualization Techniques",
                date: "April 10, 2023",
                time: "6:00 PM - 7:30 PM",
                location: "Online",
                host: "Emily Davis",
                attendees: 50,
                type: "Workshop",
              },
            ].map((event, i) => (
              <Card key={i} className="border">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <Badge>{event.type}</Badge>
                  </div>
                  <CardDescription>{event.host}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{event.attendees} attending</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Register</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
