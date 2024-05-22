import { AuthCard } from "@/components/auth-card";
import { RegisterForm } from "@/components/register-form";

export default function Login() {
  return (
    <AuthCard
      title="Register"
      description="Create your account:"
      footerMessage="Already have an account?"
      linkHref="/login"
      linkMessage="Login"
    >
      <RegisterForm />
    </AuthCard>
  );
}
