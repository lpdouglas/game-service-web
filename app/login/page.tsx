"use client"

import type { SubmitEvent } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginAction } from "@/services/login";

export default function Page() {
  return (
    <div className="flex flex-col min-h-svh p-6 gap-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <form onSubmit={handleSubmit}>
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

function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  console.log(formData.get("username"), formData.get("password"));
  loginAction(formData);
}
