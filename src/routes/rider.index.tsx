import { createFileRoute } from "@tanstack/react-router";
import { AdminPanel, StatCard } from "@/components/portal/PortalBits";

export const Route = createFileRoute("/rider/")({
  component: RiderToday,
});

function RiderToday() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl">Today</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Assigned" value="—" />
        <StatCard label="Delivered" value="—" />
        <StatCard label="Earned" value="—" />
      </div>
      <AdminPanel title="Current assignment">
        Your active delivery, customer address and status controls appear here.
      </AdminPanel>
    </div>
  );
}
