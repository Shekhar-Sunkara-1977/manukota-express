import { createFileRoute } from "@tanstack/react-router";
import { AdminPanel } from "@/components/portal/PortalBits";

export const Route = createFileRoute("/admin/reports")({
  component: AdminReports,
});

function AdminReports() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl">Reports</h1>
      <AdminPanel title="Sales & performance">
        Revenue, top-selling items and delivery performance charts land here.
      </AdminPanel>
    </div>
  );
}
