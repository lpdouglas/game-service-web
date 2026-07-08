"use server";

import { cookies } from "next/headers";

const LOGIN_API_URL = process.env.GAME_SERVICE_API_URL ?? "http://localhost:8080";

export async function loginAction(formData: FormData): Promise<boolean> {
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
    return false;
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

  return true;
}