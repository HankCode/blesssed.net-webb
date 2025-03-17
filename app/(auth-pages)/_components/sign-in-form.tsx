"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";

interface SignInFormValues {
  email: string;
  password: string;
}

export default function SignInForm() {
  const router = useRouter();
  const supabase = createClient();
  const [isNavigating, setIsNavigating] = useState(false);

  const form = useForm<SignInFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const { formState } = form;
  const { isSubmitting } = formState;

  // Create a combined loading state to handle both form submission and navigation
  const isLoading = isSubmitting || isNavigating;

  const onSubmit = async (values: SignInFormValues) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        form.setError("root", {
          type: "manual",
          message: error.message,
        });
        return;
      }

      // Set navigating state to true to maintain loading state during navigation
      setIsNavigating(true);
      router.push("/userportal");
      router.refresh();

      // In case the navigation takes too long, we'll reset the state after a timeout
      // This is just a fallback and shouldn't be needed in most cases
      setTimeout(() => {
        setIsNavigating(false);
      }, 5000);
    } catch (error) {
      console.error("Sign in error:", error);
      form.setError("root", {
        type: "manual",
        message: "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col min-w-64 p-4 max-w-sm w-full mx-auto border rounded-lg"
      >
        <h1 className="text-2xl font-medium">Sign in</h1>
        <p className="text-sm text-foreground">
          Don't have an account?{" "}
          <Link className="text-foreground font-medium underline" href="/sign-up">
            Sign up
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="email">Email</Label>
                <FormControl>
                  <Input
                    {...field}
                    id="email"
                    placeholder="you@example.com"
                    required
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <Link className="text-xs text-foreground underline" href="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    placeholder="Your password"
                    required
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <span className="flex items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </span>
            ) : (
              "Sign in"
            )}
          </Button>

          {formState.errors.root && (
            <div className="bg-destructive/15 text-destructive text-sm p-2 rounded-md mt-2">
              {formState.errors.root.message}
            </div>
          )}
        </div>
      </form>
    </Form>
  );
}
