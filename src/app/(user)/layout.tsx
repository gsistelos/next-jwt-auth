import { getSession } from "@/actions/auth";
import { redirect } from "next/navigation";

interface UserLayoutProps {
  children: React.ReactNode;
}

export default async function UserLayout({
  children,
}: Readonly<UserLayoutProps>) {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return children;
}
