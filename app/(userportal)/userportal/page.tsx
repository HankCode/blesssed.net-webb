"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Plus } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { Separator } from "@/components/ui/separator";
import FeedEventCard from "./_components/feedevent-card";
import { FeedEvent } from "@/types";

const UserDashboard = () => {
  const supabase = createClient();
  const [hasDesires, setHasDesires] = useState(false);
  const [feedEvents, setFeedEvents] = useState<FeedEvent[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Check if user has any desires
      setLoading(true);
      const { data: desiresData } = await supabase.from("desires").select("*").limit(1);

      setHasDesires(desiresData !== null && desiresData.length > 0);

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
    <div>
      {/* Welcome Section */}
      <div className="mb-6">
        <h1>Welcome user</h1>
        <p className="text-muted-foreground mt-2">Your manifestation journey begins here</p>
      </div>
      {loading ? (
        <div className="py-4">Loading...</div>
      ) : (
        <div>
          {/* Feed Section */}
          <div>
            {loading ? (
              <div className="text-center py-4">Loading feed...</div>
            ) : (
              feedEvents.map((event) => <FeedEventCard key={event.id} event={event} />)
            )}
          </div>

          {/* Side Panel */}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
