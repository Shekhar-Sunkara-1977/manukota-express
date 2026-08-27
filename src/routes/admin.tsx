import { createFileRoute, Link, Outlet, useNavigate } from "@tanstack/react-router";
import {
  BadgePercent,
  BarChart3,
  Bike,
  LayoutDashboard,
  LogOut,
  ReceiptText,
  UtensilsCrossed,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { RoleGate } from "@/components/auth/RoleGate";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/admin")({
  ssr: false,
  component: AdminLayout,
});

const nav = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/orders", label: "Orders", icon: ReceiptText },
  { to: "/admin/menu", label: "Menu", icon: UtensilsCrossed },
  { to: "/admin/deals", label: "Deals", icon: BadgePercent },
  { to: "/admin/partners", label: "Delivery partners", icon: Bike },
  { to: "/admin/reports", label: "Reports", icon: BarChart3 },
];

function AdminLayout() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <RoleGate role="admin">
      <div className="flex min-h-screen bg-background">
        <aside className="hidden w-64 shrink-0 flex-col bg-sidebar p-5 md:flex">
          <Logo tone="inverted" />
          <nav className="mt-8 flex flex-1 flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact ?? false }}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-sidebar-foreground/75 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
                activeProps={{ className: "bg-sidebar-accent text-sidebar-primary" }}
              >
                <item.icon className="size-4" />
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 space-y-2 border-t border-sidebar-border pt-4">
            <p className="truncate text-xs text-sidebar-foreground/60">{user?.email}</p>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
              onClick={async () => {
                await signOut();
                void navigate({ to: "/", replace: true });
              }}
            >
              <LogOut className="size-4" /> Sign out
            </Button>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex items-center gap-3 overflow-x-auto border-b border-border bg-card px-4 py-3 md:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact ?? false }}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </header>
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </RoleGate>
  );
}
