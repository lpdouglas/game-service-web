"use client"

import type { SubmitEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginAction } from "@/services/login";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") ?? "/";
  const loggedOut: boolean = searchParams.get("loggedOut") == "true";
  const router = useRouter();
  const [loginError, setLoginError] = useState(false);

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>, redirectTo: string) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const success = await loginAction(formData);
    if (success) {
      router.replace(redirectTo);
      router.refresh();
    }
    else setLoginError(true);
  }

  return (
    <div className="flex flex-col min-h-svh p-6 gap-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <h2 className="text-l font-bold mb-4 text-center text-chart-3" hidden={!loggedOut}>You have been logged out</h2>
      <h2 className="text-l font-bold mb-4 text-center text-destructive"   hidden={!loginError}>Invalid login: Username or password wrongly</h2>
      <form onSubmit={e => handleSubmit(e, redirectTo)}>
        <FieldGroup className="min-w-sm">
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input name="username" type="text" placeholder="Username" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input name="password" type="password" placeholder="Password" required />
          </Field>
          <Field>
            <Button type="submit">Submit</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
