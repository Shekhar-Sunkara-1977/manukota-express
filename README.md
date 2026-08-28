# Manukota Bites

I'm building "Manukota Food Junction" — a food ordering and delivery website 

for a single restaurant (not a multi-restaurant marketplace). Tagline: "Sip · Bite · Smile". 

I've attached the brand logo — use it as the site logo and base the visual style on it: 

a vintage steam-train / diner theme (deep maroon-red, mustard gold, warm cream, near-black 

espresso brown) but with a clean, modern app layout — think Swiggy/Zomato/McDonald's app 

quality, not a literal vintage poster. Rounded cards, subtle shadows, bold display font for 

headings, clean sans-serif for body/UI text.

There are three types of users, all on one Supabase backend with role-based access:

1. customer — browses menu, orders, pays, tracks delivery

2. admin — manages orders, menu, deals, delivery partners, reports

3. delivery — receives delivery assignments, updates delivery status, tracks earnings

Set up:

- Connect Supabase and enable email/password auth (I'll add phone OTP later) with a 

  `role` field on the user profile: 'customer' | 'admin' | 'delivery'. New signups 

  default to 'customer' — admin and delivery accounts will be created/promoted manually.

- Create these tables with sensible relationships and Row Level Security:

  - profiles (id, user_id, name, phone, email, role, created_at)

  - addresses (id, customer_id, label, full_address, lat, lng, is_default)

  - categories (id, name, sort_order)

  - menu_items (id, category_id, name, description, price, image_url, is_veg, is_available)

  - item_customizations (id, menu_item_id, name, options jsonb)  -- e.g. size, spice level, add-ons

  - deals (id, code, type, value, min_order_value, valid_from, valid_to, usage_limit, times_used, is_active)

  - orders (id, customer_id, address_id, status, subtotal, discount, delivery_fee, 

    packaging_fee, tax, total, payment_method, payment_status, delivery_partner_id, 

    created_at, accepted_at, delivered_at)

  - order_items (id, order_id, menu_item_id, quantity, unit_price, customizations jsonb)

  - payments (id, order_id, gateway, gateway_txn_id, amount, status, method, created_at)

  - delivery_partners (id, user_id, vehicle_type, vehicle_number, is_online, is_active)

  - reviews (id, order_id, customer_id, food_rating, delivery_rating, comment, created_at)

  - restaurant_settings (id, opening_hours jsonb, delivery_radius_km, min_order_value, 

    delivery_fee, packaging_fee, tax_rate)

- RLS rules: customers can only read/write their own profile, addresses, orders, and reviews; 

  delivery partners can only see orders assigned to them; admins have full read/write access 

  to everything. Order status changes should be restricted to admin and the assigned delivery 

  partner only.

- Build three route groups with protected routing based on role: 

  public/customer routes at "/", admin routes under "/admin", delivery partner routes under "/rider". 

  Unauthenticated users hitting /admin or /rider should be redirected to login.

- Build a simple, good-looking landing page (Home) using the logo and color palette, with a 

  hero section, featured categories, and a placeholder deals banner — real data wiring comes next.

Don't build the full ordering flow yet — this step is just auth, schema, RLS, and the shell/navigation for all three portals plus the home page.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/afaba315-855f-4132-9f5e-59e6d002bdee).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
