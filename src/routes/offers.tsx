import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers & Deals — Manukota Food Junction" },
      {
        name: "description",
        content: "Promo codes, combo deals and first-order discounts at Manukota Food Junction.",
      },
      { property: "og:title", content: "Offers & Deals — Manukota Food Junction" },
      { property: "og:description", content: "Save on your next Manukota Food Junction order." },
    ],
  }),
  component: OffersPage,
});

function OffersPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-16">
        <h1 className="text-3xl">Offers & deals</h1>
        <p className="mt-2 max-w-lg text-muted-foreground">
          Promo codes will be published here from the admin portal once the deals engine is wired up.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
