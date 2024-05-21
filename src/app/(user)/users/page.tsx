import { getUsers } from "@/actions/user";

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="flex flex-col items-center p-24 space-y-10">
      <h1 className="text-4xl font-bold">Users</h1>
      <section className="space-y-5">
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <p>{user.createdAt.toString()}</p>
            <p>{user.updatedAt.toString()}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
