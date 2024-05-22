import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface AuthCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  footerMessage: string;
  linkHref: string;
  linkMessage: string;
}

export function AuthCard({
  title,
  description,
  children,
  footerMessage,
  linkHref,
  linkMessage,
}: AuthCardProps) {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="text-muted-foreground space-x-1">
        <span>{footerMessage}</span>
        <Link className="text-primary" href={linkHref}>
          {linkMessage}
        </Link>
      </CardFooter>
    </Card>
  );
}
