import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useAuth, type AppRole } from "@/lib/auth";

export function RoleGate({ role, children }: { role: AppRole; children: ReactNode }) {
  const { user, roles, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      void navigate({ to: "/auth", search: { redirect: window.location.pathname }, replace: true });
    }
  }, [loading, user, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">
        Loading…
      </div>
    );
  }

  if (!user) return null;

  if (!roles.includes(role)) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="max-w-sm rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
          <h1 className="text-xl">Access restricted</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            This area is for {role === "admin" ? "restaurant staff" : "delivery partners"} only. Ask
            an admin to grant your account access.
          </p>
          <Button asChild className="mt-6 rounded-full">
            <Link to="/">Back to home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
