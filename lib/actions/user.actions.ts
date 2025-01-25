"use server";

// Sign in the user with credentials
import { isRedirectError } from "next/dist/client/components/redirect-error";

import { signInFormSchema } from "@/lib/validator";

import { signIn, signOut } from "@/auth";

export async function signInWithCredentials(prevState: unknown, formData: FormData) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", user);

    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return { success: false, message: "Invalid email or password" };
  }
}

// Sign the user out
export async function signOutUser() {
  await signOut();
}
