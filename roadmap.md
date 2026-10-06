# Roadmap

## GitHub code refresh (joinpasa/staging-pasalopalante @ 90720f1) — done
- [x] Copy apps/website/src, packages/shared/src, public, index.html, tests, docs, supabase/functions into this project (keep local glue: src/integrations/supabase, config.toml, tailwind.config.lov.json, mcp, local migration)
- [x] Apply all 21 pending DB migrations (adapted old project refs)
- [x] Typecheck, build, unit tests pass
- [x] Deploy 16 edge functions (ghl-form-intake, ghl-backfill-tags, ghl-sync-totals, pending-review-digest deployed after registry refresh)
- [x] Secrets: GHL_INTAKE_SECRET generated; GEMINI_API_KEY + RESEND_API_KEY provided by user; VAPID trio + CLASSIFY_BACKFILL_SECRET regenerated earlier
- [x] Security scan: no critical findings (expected info/warn flags on public read tables)
- [x] Branding: user chose to keep GitHub's Pásalo Pa'lante branding as-is

## Open
- [ ] Email queue trigger: no pg_cron job / vault secret on this backend, so process-email-queue never fires automatically (blocker: vault is protected on Lovable Cloud; RESEND_API_KEY now present). Needs a trigger decision — e.g. a scheduled call to process-email-queue.
- [ ] OPS_ALERT_EMAIL secret (optional, used by pending-review-digest; alerts off until set)
- [ ] Publish to passkindnessforward.com when the user is ready
- [ ] GHL form webhook (0yYjuM24an5g0lzoencU) should be pointed at the deployed ghl-form-intake endpoint if that flow is to run here
