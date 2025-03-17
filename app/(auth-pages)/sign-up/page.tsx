// app/sign-up/page.tsx
import { Metadata } from "next";
import SignUpForm from "../_components/sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account",
};

export default function SignUpPage() {
  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center">
      <SignUpForm />
    </div>
  );
}
