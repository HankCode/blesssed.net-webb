"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

export default function ResetPasswordForm() {
  const router = useRouter();
  const supabase = createClient();

  const form = useForm<ResetPasswordFormValues>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  });

  const { formState } = form;
  const { isSubmitting, isSubmitSuccessful } = formState;

  // Redirect to sign-in page after successful password reset
  useEffect(() => {
    if (isSubmitSuccessful && !formState.errors.root) {
      const timer = setTimeout(() => {
        router.push("/sign-in");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, formState.errors.root, router]);

  const onSubmit = async (values: ResetPasswordFormValues) => {
    if (values.password !== values.confirmPassword) {
      form.setError("confirmPassword", {
        type: "validate",
        message: "Passwords do not match",
      });
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: values.password,
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
        <h1 className="text-2xl font-medium">Reset Password</h1>
        <p className="text-sm text-foreground">Enter your new password</p>

        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="password">New Password</Label>
                <FormControl>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    minLength={6}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <FormControl>
                  <Input
                    {...field}
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    minLength={6}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Updating password..." : "Update password"}
          </Button>

          {formState.errors.root && (
            <div className="bg-destructive/15 text-destructive text-sm p-2 rounded-md mt-2">
              {formState.errors.root.message}
            </div>
          )}

          {isSubmitSuccessful && !formState.errors.root && (
            <div className="bg-emerald-500/15 text-emerald-500 text-sm p-2 rounded-md mt-2">
              Your password has been updated successfully.
            </div>
          )}
        </div>
      </form>
    </Form>
  );
}
