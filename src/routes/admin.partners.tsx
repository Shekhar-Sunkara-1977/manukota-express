import { createFileRoute } from "@tanstack/react-router";
import { AdminPanel } from "@/components/portal/PortalBits";

export const Route = createFileRoute("/admin/partners")({
  component: AdminPartners,
});

function AdminPartners() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl">Delivery partners</h1>
      <AdminPanel title="Rider roster">
        Onboard riders, record vehicle details and see who is online.
      </AdminPanel>
    </div>
  );
}
