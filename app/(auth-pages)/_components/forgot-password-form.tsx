"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

interface ForgotPasswordFormValues {
  email: string;
}

export default function ForgotPasswordForm() {
  const supabase = createClient();

  const form = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: "",
    },
    mode: "onSubmit",
  });

  const { formState } = form;
  const { isSubmitting, isSubmitSuccessful } = formState;

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
        redirectTo: `${window.location.origin}/auth/callback?redirect_to=/protected/reset-password`,
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
      console.error("Password reset error:", error);
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
        <h1 className="text-2xl font-medium">Forgot Password</h1>
        <p className="text-sm text-foreground">Enter your email to receive a password reset link</p>

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

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending link..." : "Send reset link"}
          </Button>

          <div className="text-center text-sm">
            Remember your password?{" "}
            <Link href="/sign-in" className="text-foreground font-medium underline">
              Sign in
            </Link>
          </div>

          {formState.errors.root && (
            <div className="bg-destructive/15 text-destructive text-sm p-2 rounded-md mt-2">
              {formState.errors.root.message}
            </div>
          )}

          {isSubmitSuccessful && !formState.errors.root && (
            <div className="bg-emerald-500/15 text-emerald-500 text-sm p-2 rounded-md mt-2">
              Check your email for a link to reset your password.
            </div>
          )}
        </div>
      </form>
    </Form>
  );
}
