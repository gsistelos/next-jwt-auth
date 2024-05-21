import { getSession, logout } from "@/actions/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  async function handleLogout() {
    "use server";
    await logout();
    redirect("/login");
  }

  return (
    <main className="flex flex-col items-center p-24 space-y-10">
      <h1 className="text-4xl font-bold">Home</h1>
      <section className="space-y-5">
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </section>
      <form action={handleLogout}>
        <button type="submit">Logout</button>
      </form>
    </main>
  );
}
