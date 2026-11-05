import { redirect } from "react-router";

const API_URL = "http://localhost:8000/register-user";

type User = {
  email: string;
  password: string;
};

export async function registerUser({ email, password }: User) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Registration failed!");
  }

  const data = await response.json();

  return data;
}
