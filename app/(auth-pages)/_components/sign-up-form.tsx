"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

interface SignUpFormValues {
  email: string;
  password: string;
}

export default function SignUpForm() {
  const supabase = createClient();

  const form = useForm<SignUpFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const { formState } = form;
  const { isSubmitting, isSubmitSuccessful } = formState;

  const onSubmit = async (values: SignUpFormValues) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        form.setError("root", {
          type: "manual",
          message: error.message,
        });
        return;
      }

      // React Hook Form will automatically set isSubmitSuccessful to true
    } catch (error) {
      console.error("Sign up error:", error);
      form.setError("root", {
        type: "manual",
        message: "An unexpected error occurred. Please try again.",
      });
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <div className="bg-emerald-500/15 text-emerald-500 text-sm p-4 rounded-md">
          Thanks for signing up! Please check your email for a verification link.
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col min-w-64 p-4 max-w-sm w-full mx-auto border rounded-lg"
      >
        <h1 className="text-2xl font-medium">Sign up</h1>
        <p className="text-sm text text-foreground">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
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
                  <Input {...field} id="email" placeholder="you@example.com" required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="password">Password</Label>
                <FormControl>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    placeholder="Your password"
                    minLength={6}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing up..." : "Sign up"}
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
