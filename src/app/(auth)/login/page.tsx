import { AuthCard } from "@/components/auth-card";
import { LoginForm } from "@/components/login-form";

export default function Login() {
  return (
    <AuthCard
      title="Login"
      description="Enter your account:"
      footerMessage="Don't have an account?"
      linkHref="/register"
      linkMessage="Register"
    >
      <LoginForm />
    </AuthCard>
  );
}
