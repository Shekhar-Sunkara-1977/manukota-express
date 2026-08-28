import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.jpeg.asset.json";
const logo = logoAsset.url;

export function Logo({
  to = "/",
  size = 44,
  showText = false,
  tone = "default",
}: {
  to?: string;
  size?: number;
  showText?: boolean;
  tone?: "default" | "inverted";
}) {
  return (
    <Link to={to} className="flex items-center gap-3">
      <img
        src={logo}
        alt="Manukota Food Junction logo"
        height={size}
        className="h-[var(--logo-height)] w-auto shrink-0 object-contain"
        style={{ ["--logo-height" as string]: `${size}px` }}
      />
      {showText && (
        <span className="leading-tight">
          <span
            className={`block font-display text-base tracking-tight ${
              tone === "inverted" ? "text-primary-foreground" : "text-primary"
            }`}
          >
            Manukota
          </span>
          <span
            className={`block text-[11px] uppercase tracking-[0.2em] ${
              tone === "inverted" ? "text-accent" : "text-muted-foreground"
            }`}
          >
            Food Junction
          </span>
        </span>
      )}
    </Link>
  );
}
