import { getSession } from "@/actions/auth";
import { redirect } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({
  children,
}: Readonly<AuthLayoutProps>) {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-muted">
      {children}
    </main>
  );
}
