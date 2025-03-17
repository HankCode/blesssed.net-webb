"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, FileAudio, BookOpen, Star, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import FeedEventCard from "./_components/feedevent-card";
import type { FeedEvent } from "@/types";
import { Button } from "@/components/ui/button";

export default function Home() {
  const supabase = createClient();
  const [activeDesires, setActiveDesires] = useState<any[]>([]);
  const [realizedDesires, setRealizedDesires] = useState<Desire[]>([]);
  const [feedEvents, setFeedEvents] = useState<FeedEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // Get current user
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        // Get user profile
        const { data: profileData } = await supabase
          .from("profiles")
          .select("username, full_name")
          .eq("id", user.id)
          .single();

        if (profileData) {
          setUserName(profileData.full_name || profileData.username || user.email);
        }

        // Get active desires
        const { data: activeData } = await supabase
          .from("desires")
          .select("*")
          .eq("user_id", user.id)
          .eq("status", "active")
          .order("created_at", { ascending: false });

        if (activeData) {
          setActiveDesires(activeData);
        }

        // Get realized desires
        const { data: realizedData } = await supabase
          .from("desires")
          .select("*")
          .eq("user_id", user.id)
          .eq("status", "realized")
          .order("realized_at", { ascending: false });

        if (realizedData) {
          setRealizedDesires(realizedData);
        }
      }

      // Fetch feed events with related data
      const { data: feedData } = await supabase
        .from("feed_events")
        .select(
          `
          *,
          user:profiles(*),
          desire:desires(*),
          realization:realizations(*),
          testimonial:testimonials(*)
        `
        )
        .order("created_at", { ascending: false })
        .limit(10);

      if (feedData) {
        setFeedEvents(feedData as FeedEvent[]);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Welcome{userName ? `, ${userName}` : ""}
          </h2>
          <p className="text-muted-foreground mt-2">Your manifestation journey begins here</p>
        </div>
      </div>

      <Tabs defaultValue="feed" className="space-y-4">
        <TabsList>
          <TabsTrigger value="feed">Feed</TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="space-y-4">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div>
              {feedEvents.length > 0 ? (
                feedEvents.map((event) => <FeedEventCard key={event.id} event={event} />)
              ) : (
                <Card>
                  <CardContent className="py-10 text-center">
                    <p className="text-muted-foreground mb-4">No activity in your feed yet</p>
                    <Link href="/desires/new">
                      <Button>Create Your First Desire</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </TabsContent>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Your Active Desires</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{loading ? "..." : activeDesires.length}</div>
                {activeDesires.length > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Last added {new Date(activeDesires[0].created_at).toLocaleDateString()}
                  </p>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Your Realized Desires</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{loading ? "..." : realizedDesires.length}</div>
                {realizedDesires.length > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Last realized{" "}
                    {new Date(realizedDesires[0].realized_at || "").toLocaleDateString()}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Desires</CardTitle>
                <CardDescription>Your most recently created desires</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center items-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    {activeDesires.length > 0 ? (
                      activeDesires.slice(0, 3).map((desire) => (
                        <div
                          key={desire.id}
                          className="flex items-center justify-between border-b pb-2"
                        >
                          <div>
                            <p className="font-medium">{desire.title}</p>
                            <p className="text-sm text-muted-foreground">{desire.category}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">
                              {new Date(desire.created_at).toLocaleDateString()}
                            </span>
                            <div
                              className="h-2 w-2 rounded-full bg-green-500"
                              title={desire.status}
                            />
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted-foreground text-center py-4">
                        No desires created yet
                      </p>
                    )}
                    <div className="mt-4">
                      <Link href="/desires" className="text-sm text-primary hover:underline">
                        View all desires →
                      </Link>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
                <CardDescription>Navigate to frequently used sections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Link
                    href="/desires/new"
                    className="flex items-center gap-2 rounded-lg border p-3 hover:bg-muted"
                  >
                    <Star className="h-5 w-5" />
                    <div className="font-medium">Create New Desire</div>
                  </Link>
                  <Link
                    href="/explore/success-stories"
                    className="flex items-center gap-2 rounded-lg border p-3 hover:bg-muted"
                  >
                    <Users className="h-5 w-5" />
                    <div className="font-medium">Success Stories</div>
                  </Link>
                  <Link
                    href="/audio"
                    className="flex items-center gap-2 rounded-lg border p-3 hover:bg-muted"
                  >
                    <FileAudio className="h-5 w-5" />
                    <div className="font-medium">Audio Resources</div>
                  </Link>
                  <Link
                    href="/coaching"
                    className="flex items-center gap-2 rounded-lg border p-3 hover:bg-muted"
                  >
                    <BookOpen className="h-5 w-5" />
                    <div className="font-medium">Coaching Sessions</div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
