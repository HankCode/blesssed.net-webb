"use client";

import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Credenza,
  CredenzaTrigger,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaDescription,
  CredenzaBody,
  CredenzaFooter,
} from "@/components/ui/credenza";
import { LoaderCircle, ChevronDown, ChevronUp, Plus } from "lucide-react";
import { desireSchema, DesireFormData } from "@/types";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import AddDesireAction from "@/actions/add-desire.action";

const AddDesireDialog = ({ isSidebar = false }: { isSidebar?: boolean }) => {
  const [open, setOpen] = React.useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const [isPending, startTransition] = useTransition();

  const exampleScenes = [
    "A friend hugging you and congratulating you",
    "Looking at physical evidence of your desire",
    "Hearing specific words from someone",
    "Being in a specific location",
    "Feeling a particular emotion strongly",
  ];

  // Initialize React Hook Form with Zod resolver
  const form = useForm<DesireFormData>({
    resolver: zodResolver(desireSchema),
    defaultValues: {
      title: "",
      manifestation_scene: "",
      send_notifications: true,
      category: undefined,
    },
  });

  const onSubmit = async (data: DesireFormData) => {
    startTransition(async () => {
      const res = await AddDesireAction(data);
      if (!res.success) {
        console.error("Failed to add desire:", res.message);
        return;
      }
      console.log("Desire added:", res);
      form.reset();
      setOpen(false);
    });
  };

  return (
    <Credenza open={open} onOpenChange={setOpen}>
      <div>
        {isSidebar ? (
          <Plus onClick={() => setOpen(true)} />
        ) : (
          <Button size="sm" onClick={() => setOpen(true)}>
            Add Desire <Plus className="pl-2" />
          </Button>
        )}
      </div>

      <CredenzaContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CredenzaHeader>
              <CredenzaTitle>Add Desire</CredenzaTitle>
              <CredenzaDescription>Fill in the form below to add a desire.</CredenzaDescription>
            </CredenzaHeader>

            <CredenzaBody className="space-y-4">
              {/* Desire Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your desire?</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g., My dream job at Google" />
                    </FormControl>
                    {/* Validation Error Message */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Manifestation Scene */}
              <FormField
                control={form.control}
                name="manifestation_scene"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Imagine a scene that would imply this desire is already fulfilled
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="e.g., My best friend Sarah is hugging me tightly, saying 'You did it!'"
                      />
                    </FormControl>
                    {/* Validation Error Message */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="career">Career</SelectItem>
                        <SelectItem value="relationships">Relationships</SelectItem>
                        <SelectItem value="health">Health</SelectItem>
                        <SelectItem value="wealth">Wealth</SelectItem>
                        <SelectItem value="personal_growth">Personal growth</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Show Examples */}
              <div>
                <Button
                  variant="ghost"
                  onClick={() => setShowExamples(!showExamples)}
                  className="flex items-center justify-between w-full"
                >
                  <span>{showExamples ? "Hide examples" : "Show examples"}</span>
                  {showExamples ? <ChevronUp /> : <ChevronDown />}
                </Button>
                {showExamples && (
                  <div className="mt-4 space-y-2">
                    {exampleScenes.map((scene, index) => (
                      <p key={index} className="text-sm text-gray-600">
                        {scene}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Notification Toggle */}
              <FormField
                control={form.control}
                name="send_notifications"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <FormLabel>Receive Daily Reminders</FormLabel>
                      <p className="text-sm text-gray-600">Get daily notification reminders</p>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </CredenzaBody>

            <CredenzaFooter>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? (
                  <div className="flex items-center space-x-2">
                    <LoaderCircle className="animate-spin" />
                    <div>Adding desire..</div>
                  </div>
                ) : (
                  "Add desire"
                )}
              </Button>
            </CredenzaFooter>
          </form>
        </Form>
      </CredenzaContent>
    </Credenza>
  );
};

export default AddDesireDialog;
