import { redirect } from "next/navigation";
import { getSession } from "@/actions/auth";
import { createUser } from "@/actions/user";

export default async function Register() {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  async function handleRegister(formData: FormData) {
    "use server";
    await createUser(formData);
    redirect("/login");
  }

  return (
    <main className="flex flex-col items-center p-24 space-y-10">
      <h1 className="text-4xl font-bold">Register</h1>
      <form className="flex flex-col space-y-5" action={handleRegister}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            className="text-black"
            type="text"
            name="username"
            required
          />
        </div>
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
        <button type="submit">Register</button>
      </form>
    </main>
  );
}
