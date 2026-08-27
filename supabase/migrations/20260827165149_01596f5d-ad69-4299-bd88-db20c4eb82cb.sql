DROP POLICY "deals public read active" ON public.deals;
CREATE POLICY "deals anon read active" ON public.deals FOR SELECT TO anon USING (is_active);
CREATE POLICY "deals auth read" ON public.deals FOR SELECT TO authenticated USING (is_active OR public.is_admin());

REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.is_admin() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.is_assigned_partner(uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.owns_order(uuid) FROM PUBLIC, anon;

GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_assigned_partner(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.owns_order(uuid) TO authenticated;