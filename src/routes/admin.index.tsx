import { createFileRoute } from "@tanstack/react-router";
import { AdminPanel, StatCard } from "@/components/portal/PortalBits";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl">Kitchen dashboard</h1>
        <p className="text-sm text-muted-foreground">Live order and sales overview.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Live orders" value="—" />
        <StatCard label="Today's sales" value="—" />
        <StatCard label="Riders online" value="—" />
        <StatCard label="Avg. delivery time" value="—" />
      </div>
      <AdminPanel title="Live order feed">
        Real-time orders will stream in here once the ordering flow is built.
      </AdminPanel>
    </div>
  );
}
