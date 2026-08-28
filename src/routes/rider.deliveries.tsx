import { createFileRoute } from "@tanstack/react-router";
import { AdminPanel } from "@/components/portal/PortalBits";

export const Route = createFileRoute("/rider/deliveries")({
  component: RiderDeliveries,
});

function RiderDeliveries() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl">Deliveries</h1>
      <AdminPanel title="Assignment history">
        Orders assigned to you, with pickup and drop details.
      </AdminPanel>
    </div>
  );
}
