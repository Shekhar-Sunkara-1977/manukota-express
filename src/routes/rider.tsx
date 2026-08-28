import { createFileRoute, Link, Outlet, useNavigate } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { RoleGate } from "@/components/auth/RoleGate";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/rider")({
  ssr: false,
  component: RiderLayout,
});

const nav = [
  { to: "/rider", label: "Today", exact: true },
  { to: "/rider/deliveries", label: "Deliveries" },
  { to: "/rider/earnings", label: "Earnings" },
];

function RiderLayout() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <RoleGate role="delivery">
      <div className="min-h-screen bg-background">
        <header className="bg-sidebar">
          <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-4">
            <Logo tone="inverted" size={36} />
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
              onClick={async () => {
                await signOut();
                void navigate({ to: "/", replace: true });
              }}
            >
              <LogOut className="size-4" /> Sign out
            </Button>
          </div>
          <nav className="mx-auto flex w-full max-w-3xl gap-2 px-4 pb-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact ?? false }}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-sidebar-foreground/70"
                activeProps={{ className: "bg-sidebar-accent text-sidebar-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="mx-auto w-full max-w-3xl px-4 py-6">
          <p className="mb-4 text-xs text-muted-foreground">Signed in as {user?.email}</p>
          <Outlet />
        </main>
      </div>
    </RoleGate>
  );
}
