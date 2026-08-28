import { createFileRoute } from "@tanstack/react-router";
import { AdminPanel } from "@/components/portal/PortalBits";

export const Route = createFileRoute("/admin/menu")({
  component: AdminMenu,
});

function AdminMenu() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl">Menu</h1>
      <AdminPanel title="Categories & items">
        Add categories, dishes, prices, photos and customizations here.
      </AdminPanel>
    </div>
  );
}
