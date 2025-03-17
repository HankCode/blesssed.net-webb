import { Metadata } from "next";
import ResetPasswordForm from "@/app/(auth-pages)/_components/reset-password-form";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Set a new password for your account",
};

export default function ResetPasswordPage() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <ResetPasswordForm />
    </div>
  );
}
