import { createFileRoute } from "@tanstack/react-router";
import { AdminPanel } from "@/components/portal/PortalBits";

export const Route = createFileRoute("/admin/deals")({
  component: AdminDeals,
});

function AdminDeals() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl">Deals</h1>
      <AdminPanel title="Promo codes">
        Create discount codes with validity windows, minimum order values and usage limits.
      </AdminPanel>
    </div>
  );
}
