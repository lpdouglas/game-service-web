"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const LOGIN_API_URL = process.env.GAME_SERVICE_API_URL ?? "http://localhost:8080";

export async function loginAction(formData: FormData) {
  const username = String(formData.get("username"));
  const password = String(formData.get("password"));

  const response = await fetch(`${LOGIN_API_URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Invalid login");
  }

  const data = await response.json();

  const cookieStore = await cookies();

  cookieStore.set("access_token", data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: data.expiresIn ?? 60 * 60,
  });

  const token = (await cookies()).get("access_token")?.value;
  //console.log(`login set token: ${token}`);

  redirect("/");
}