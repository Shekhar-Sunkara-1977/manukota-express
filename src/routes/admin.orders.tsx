import { createFileRoute } from "@tanstack/react-router";
import { AdminPanel } from "@/components/portal/PortalBits";

export const Route = createFileRoute("/admin/orders")({
  component: AdminOrders,
});

function AdminOrders() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl">Orders</h1>
      <AdminPanel title="Order management">
        Accept, prepare and assign orders to riders. Wiring comes with the ordering flow.
      </AdminPanel>
    </div>
  );
}
