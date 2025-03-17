import { Metadata } from "next";
import SignInForm from "../_components/sign-in-form";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default function SignInPage() {
  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center">
      <SignInForm />
    </div>
  );
}
