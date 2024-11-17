"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Edit2, Bell, BellOff } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

interface DesireProps {
  id: string;
  title: string;
  description: string | null;
  manifestation_scene: string | null;
  category: "career" | "relationships" | "health" | "wealth" | "personal_growth" | "other";
  send_notifications: boolean | null;
}

export default function DesireCard({ desire }: { desire: DesireProps }) {
  const supabase = createClient();
  const router = useRouter();
  const [notifications, setNotifications] = useState(desire.send_notifications ?? false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);

      const { error } = await supabase.from("desires").delete().eq("id", desire.id);

      if (error) throw error;

      // Refresh the page or update the UI
      router.refresh();
    } catch (error) {
      console.error("Error deleting desire:", error);
      // You might want to show an error toast/alert here
    } finally {
      setIsDeleting(false);
    }
  };

  const toggleNotifications = async () => {
    try {
      const newNotificationState = !notifications;

      const { error } = await supabase
        .from("desires")
        .update({ send_notifications: newNotificationState })
        .eq("id", desire.id);

      if (error) throw error;

      setNotifications(newNotificationState);
    } catch (error) {
      console.error("Error updating notifications:", error);
      // You might want to show an error toast/alert here
    }
  };

  return (
    <Card className="w-full overflow-hidden transition-shadow duration-300 hover:shadow-md hover:shadow-slate-100">
      <CardHeader className="pb-2">
        <Badge variant="secondary" className="w-fit text-xs font-normal">
          {desire.category}
        </Badge>
        <h3 className="text-xl font-semibold tracking-tight mt-2">{desire.title}</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        {desire.description && (
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-1">Description</h4>
            <p className="text-sm leading-relaxed">{desire.description}</p>
          </div>
        )}
        {desire.manifestation_scene && (
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-1">
              Manifestation Scene
            </h4>
            <p className="text-xs italic leading-relaxed text-muted-foreground">
              {desire.manifestation_scene}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4 border-t">
        <div className="flex space-x-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete your desire "{desire.title}". This action cannot be
                  undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="bg-red-500 hover:bg-red-600"
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => router.push(`/desires/${desire.id}/edit`)}
          >
            <Edit2 className="h-4 w-4" />
            <span className="sr-only">Edit</span>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleNotifications}>
          {notifications ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
          <span className="sr-only">
            {notifications ? "Turn off notifications" : "Turn on notifications"}
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
}
