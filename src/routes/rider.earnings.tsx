import { createFileRoute } from "@tanstack/react-router";
import { AdminPanel } from "@/components/portal/PortalBits";

export const Route = createFileRoute("/rider/earnings")({
  component: RiderEarnings,
});

function RiderEarnings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl">Earnings</h1>
      <AdminPanel title="Payouts">
        Daily and weekly earnings summaries will show up here.
      </AdminPanel>
    </div>
  );
}
