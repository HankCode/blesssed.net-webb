import { Metadata } from "next";
import ForgotPasswordForm from "../_components/forgot-password-form";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your password",
};

export default function ForgotPasswordPage() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <ForgotPasswordForm />
    </div>
  );
}
