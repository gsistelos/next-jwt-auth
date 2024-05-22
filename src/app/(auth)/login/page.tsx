"use client";

import { login } from "@/actions/auth";
import { useState } from "react";

export default function Login() {
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(formData: FormData) {
    try {
      await login(formData);
    } catch (error: any) {
      setError(error.message);
    }
  }

  return (
    <main className="flex flex-col items-center p-24 space-y-10">
      <h1 className="text-4xl font-bold">Login</h1>
      <form
        className="flex flex-col items-center space-y-5"
        action={handleLogin}
      >
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-col space-y-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="text-black"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="text-black"
            type="password"
            name="password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
