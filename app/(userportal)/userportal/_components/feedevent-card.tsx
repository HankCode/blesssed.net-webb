import { FeedEvent } from "@/types";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const FeedEventCard = ({ event }: { event: FeedEvent }) => {
  return (
    <div className="p-3">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <Avatar className="h-12 w-12">
          <AvatarImage src={event.user.avatar_url || undefined} alt={event.user.username || "?"} />
          <AvatarFallback className="bg-primary/10 text-primary">
            {event.user.username?.[0]?.toUpperCase() || "?"}
          </AvatarFallback>
        </Avatar>

        <div className="flex-grow">
          {/* Main message */}
          <div className="text-gray-900 text-sm">
            {event.message ||
              `${event.user.username ? event.user.username : "Unnamed user"} added a new desire`}
          </div>

          {/* Optional: Show the desire title */}
          {event.event_type === "new_desire" && event.desire && (
            <div className="text-gray-600 mt-0.5">{event.desire.title}</div>
          )}
          {/* Date */}
          <div className="text-xs text-gray-400">
            {new Date(event.created_at).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedEventCard;
