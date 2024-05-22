import { getSession, logout } from "@/actions/auth";

export default async function Home() {
  const session = await getSession();

  return (
    <main className="flex flex-col items-center p-24 space-y-10">
      <h1 className="text-4xl font-bold">Home</h1>
      <section className="space-y-5">
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </section>
      <form action={logout}>
        <button type="submit">Logout</button>
      </form>
    </main>
  );
}
