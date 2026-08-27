import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Manukota Food Junction" },
      {
        name: "description",
        content: "Biryani, burgers, pizza, rolls, beverages and desserts at Manukota Food Junction.",
      },
      { property: "og:title", content: "Menu — Manukota Food Junction" },
      { property: "og:description", content: "Browse the full Manukota Food Junction menu." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-16">
        <h1 className="text-3xl">Our menu</h1>
        <p className="mt-2 max-w-lg text-muted-foreground">
          The live menu, item customizations and cart are coming in the next step. Categories are
          already set up in the kitchen database.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
