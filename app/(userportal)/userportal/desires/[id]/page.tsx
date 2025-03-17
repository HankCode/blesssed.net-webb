import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Edit, Star, Bell, BellOff } from "lucide-react";
import Link from "next/link";

// Mock function to get desire by ID
function getDesireById(id: string) {
  // This would be a database call in a real app
  return {
    id,
    title: "New career opportunity",
    description: "Find a fulfilling job in tech that allows for growth and creativity",
    manifestation_scene:
      "I'm sitting at my desk in a modern office. I feel excited about the projects I'm working on. My colleagues respect my input and I'm making a meaningful contribution. My salary allows me to live comfortably and save for the future.",
    category: "Career",
    status: "active",
    created_at: "2023-03-15T10:30:00Z",
    send_notifications: true,
    realized_at: null,
  };
}

export default function DesireDetailPage({ params }: { params: { id: string } }) {
  const desire = getDesireById(params.id);

  const formattedDate = new Date(desire.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center gap-2">
        <Link href="/desires">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Desires
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{desire.title}</CardTitle>
                  <CardDescription>Created on {formattedDate}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge variant={desire.status === "realized" ? "outline" : "default"}>
                    {desire.status}
                  </Badge>
                  <Badge variant="secondary">{desire.category}</Badge>
                </div>
                <div className="flex items-center mt-2">
                  {desire.send_notifications ? (
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Bell className="h-3 w-3 mr-1" />
                      <span>Notifications enabled</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-xs text-muted-foreground">
                      <BellOff className="h-3 w-3 mr-1" />
                      <span>Notifications disabled</span>
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-muted-foreground">{desire.description}</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Manifestation Scene</h3>
                <p className="text-muted-foreground">{desire.manifestation_scene}</p>
              </div>

              <div className="flex justify-end">
                <Button variant="outline" className="mr-2">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                {desire.status !== "realized" && (
                  <Button>
                    <Star className="h-4 w-4 mr-2" />
                    Mark as Realized
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
