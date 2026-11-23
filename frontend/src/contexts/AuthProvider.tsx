import { createContext, useContext, useState, type ReactNode } from "react";

type User = {
  id: string;
  email: string;
};

type AuthState = {
  user?: User | null;
  register: (
    email: string,
    password: string,
    username: string,
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthState | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean | null>(null);

  async function login(email: string, password: string) {
    return;
  }

  async function register(email: string, password: string, username: string) {
    const res = await fetch("http://localhost:8000/register-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, username }),
    });

    if (res.status === 409)
      throw new Error("Există deja un cont cu acest email");

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      console.error("Register error:", data); // vezi exact ce câmp a picat validarea
      throw new Error("Înregistrarea a eșuat (parola minim 8 caractere)");
    }
  }
  return (
    <AuthContext.Provider value={{ register, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx)
    throw new Error("useAuth trebuie folosit în interiorul <AuthProvider>");

  return ctx;
}
