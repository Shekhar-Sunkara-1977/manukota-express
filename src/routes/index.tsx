import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgePercent, Clock3, ShieldCheck, Truck } from "lucide-react";
import heroAsset from "@/assets/hero.jpg.asset.json";
const heroImage = heroAsset.url;
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manukota Food Junction — Sip · Bite · Smile" },
      {
        name: "description",
        content:
          "Biryani, burgers, pizza and desserts from Manukota Food Junction, delivered hot by our own riders. Order online, pay by UPI, card or cash.",
      },
      { property: "og:title", content: "Manukota Food Junction — Sip · Bite · Smile" },
      {
        property: "og:description",
        content: "Order hot food online from Manukota Food Junction and track it to your door.",
      },
    ],
  }),
  component: Home,
});

const categories = [
  { name: "Biryani", emoji: "🍛", note: "Slow-dum, aromatic" },
  { name: "Burgers", emoji: "🍔", note: "Grilled to order" },
  { name: "Pizza", emoji: "🍕", note: "Stone-baked" },
  { name: "Rolls & Wraps", emoji: "🌯", note: "Street-style" },
  { name: "Beverages", emoji: "🥤", note: "Chilled & fresh" },
  { name: "Desserts", emoji: "🍮", note: "Sweet endings" },
];

const perks = [
  { icon: Truck, title: "Our own riders", text: "No third-party couriers — trained delivery crew." },
  { icon: Clock3, title: "30-min promise", text: "Hot food within our delivery radius." },
  { icon: ShieldCheck, title: "Safe payments", text: "UPI, cards or cash on delivery." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-hero-gradient">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                Sip · Bite · Smile
              </span>
              <h1 className="mt-6 text-4xl leading-tight text-primary-foreground sm:text-5xl">
                The junction where hunger stops.
              </h1>
              <p className="mt-4 max-w-md text-base text-primary-foreground/80">
                Freshly cooked biryani, burgers and more from Manukota Food Junction — ordered in a
                tap, delivered by our own crew.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full bg-gold-gradient text-accent-foreground hover:opacity-90">
                  <Link to="/menu">
                    Browse the menu <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link to="/offers">Today's offers</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Biryani, burger and street food spread from Manukota Food Junction"
                width={1280}
                height={960}
                className="w-full rounded-3xl border border-accent/30 object-cover shadow-lifted"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-14">
          <div className="grid gap-4 sm:grid-cols-3">
            {perks.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <p.icon className="size-6 text-primary" />
                <h3 className="mt-3 text-base">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl">Featured categories</h2>
            <Link to="/menu" className="text-sm font-medium text-primary hover:underline">
              See all
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((c) => (
              <Link
                key={c.name}
                to="/menu"
                className="group rounded-2xl border border-border bg-card p-5 text-center shadow-soft transition-transform hover:-translate-y-1"
              >
                <span className="text-3xl">{c.emoji}</span>
                <p className="mt-3 text-sm font-semibold text-foreground">{c.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-14">
          <div className="overflow-hidden rounded-3xl bg-gold-gradient p-8 shadow-lifted sm:p-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
              <BadgePercent className="size-3.5" /> Deals coming soon
            </span>
            <h2 className="mt-4 max-w-lg text-3xl text-accent-foreground">
              Flat 20% off your first junction order.
            </h2>
            <p className="mt-2 max-w-md text-sm text-accent-foreground/80">
              Live promo codes and combo deals will appear here once the deals engine is wired up.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
