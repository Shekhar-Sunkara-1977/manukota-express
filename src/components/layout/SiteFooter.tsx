import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/60">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            Sip · Bite · Smile — hot food from our kitchen to your door, delivered by our own riders.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-foreground">Explore</p>
          <Link to="/menu" className="block text-muted-foreground hover:text-foreground">
            Menu
          </Link>
          <Link to="/offers" className="block text-muted-foreground hover:text-foreground">
            Offers
          </Link>
          <Link to="/auth" className="block text-muted-foreground hover:text-foreground">
            Sign in
          </Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-foreground">Staff</p>
          <Link to="/admin" className="block text-muted-foreground hover:text-foreground">
            Admin portal
          </Link>
          <Link to="/rider" className="block text-muted-foreground hover:text-foreground">
            Rider portal
          </Link>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Manukota Food Junction
      </div>
    </footer>
  );
}
