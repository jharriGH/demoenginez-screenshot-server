# ⚙️ DemoEnginez — CLAUDE.md
# Managed by brain_sync.py (Brain sections)
# + Manual additions (never auto-updated)
# Last synced: May 05, 2026 02:45 PM PST

---

## CURRENT STATUS
<!-- BRAIN-SYNC:START:STATUS -->
*Brain sync: May 05, 2026 02:45 PM PST*

**Status:** TESTING
**Description:** 62-niche demo platform — groups 4-6 bugs pending
**Next Action:** ⚡ Stress test all 62 niches. Fix remaining bugs. Close as COMPLETE. Then build sales page.
<!-- BRAIN-SYNC:END:STATUS -->

---

## EMPIRE STATE & COSTS
<!-- BRAIN-SYNC:START:EMPIRE_STATE -->
- Clients: 0
- MRR: $99.00
- HOT leads: 23
- Last decision: KJ Autonomous v2.0: 7/8 KJWidgetz + 8/8 DemoBoosterz agents live. Clone script built. Agent 4 stubbed pending AVA. VoiceDropz stubbed pending Drop Cowboy BYOC. Next: wire Agent 4 to KJ SalesAgentz, clone SiteEnginez + UnhideLocal pipelines.

**AI Costs:**
- Today: $0.0083
- This month: $0.0083
- All time: $0.0083

**Empire:**
- 7 live | 3 launch ready | 6 in progress
<!-- BRAIN-SYNC:END:EMPIRE_STATE -->

---

## RECENT DEMOENGINEZ MEMORIES
<!-- BRAIN-SYNC:START:MEMORIES -->
1. Tags: demoenginez
2. Tags: demoboosterz
3. Next: DemoEnginez and DemoBoosterz testing, sales pages, ecosystem go-live, KJ Autonomous multi-product clone, Marketing session
4. DemoBoosterz status on March 26, 2026: LAUNCH READY
5. DemoEnginez authenticates against a separate Supabase project at wvqifxycceixsiwsudve.supabase.co
6. Projects include reviewbombz, kjle, kjwidgetz, demoenginez, demoboosterz, siteenginez, iasy, unhidelocal, testenginez
7. Concept is DemoEnginez one-click fulfillment
8. DemoBoosterz pipeline 8/8 live
<!-- BRAIN-SYNC:END:MEMORIES -->

---

## BUILD STATE
<!-- BRAIN-SYNC:START:BUILD_STATE -->
**Card:** DemoEnginez TestEnginez Spec Card 2026-04-23
**Saved:** 2026-04-23

# DemoEnginez TestEnginez Spec Card

## IDENTITY
- KJE Product #: earliest KJE SaaS (pre-numbering era)
- Slug: demoenginez
- Category: SaaS (demo generation platform)
- Status: in_progress (punch list items remaining)
- Domain: app.demoenginez.com

## URLS
- Production: https://app.demoenginez.com
- Test environment: TBD (may reuse prod with test account)
- Backend API: TBD (likely /api on same origin)
- Admin dashboard: same origin post-login

## TEST AUTH
- Requires login: yes
- Test user: sales@mobilewebs.com / KingJames2026!
- API auth header: n/a (session cookie after login)

## CORE USER FLOWS (what TestEnginez should exercise)
1. Login flow: POST credentials, receive session, land on dashboard
2. Niche selection: 62 niches available, pick one
3. Demo generation kick-off: submit form, wait for generation
4. Demo preview: confirm rendered demo loads
5. Export flow: verify export CTA exists (do not actually click to export)

## EXPECTED DOM PATTERNS
- Primary CTA text: Sign In on login, Generate Demo on dashboard
- Page titles: DemoEnginez on public, Dashboard - DemoEnginez after login
- Navigation items: Dashboard, Niches, My Demos, Settings
- Critical selectors: niche cards carry data-niche-slug, generate button has data-action of generate

## PAYMENT FLOW
- Stripe mode: TBD (billing integration status pending punch list)
- Stripe test cards allowed: TBD
- Price IDs: TBD
- Expected redirect: TBD

## DO NOT TOUCH (during tests)
- Actual demo exports (resource-intensive; eats GPU/render minutes)
- Real demo delivery emails (demo completion triggers email to user)
- Bulk demo generation (rate-limited; keep to 1 per test run)

## KNOWN FLAKY AREAS
- Demo generation takes 30-60s; tests need generous waits (default 30s will fail)
- Shared Supabase schema demoenginez on project dhzpwobfihrprlcxqjbq: cross-product data leakage possible
- Login form may drop the session cookie on first request if CORS misconfigured

## AUTO-HEAL RATIONALE
When proposing fixes:
- If demo generation assertions time out, widen timeout to 90s BEFORE investigating selector drift
- Never change test user credentials without checking if auth schema changed
- If session drops, investigate CORS/cookie attributes before patching selectors
- Prefer data-niche-slug over text match for niche selection (62 niches can be renamed)

## BRAIN SYNC
- Repo path: C:\Users\Jim\Documents\GitHub\demoenginez
- Supabase schema: demoenginez on dhzpwobfihrprlcxqjbq
- Related cards: DemoEnginez BUILD_STATE 8 (id 1775186699841), DemoEnginez BUILD_STATE-FINAL-v1 (id 1775521621740)

<!-- BRAIN-SYNC:END:BUILD_STATE -->

---

## MANUAL ADDITIONS
<!-- brain_sync.py never modifies below this line -->

---

## EMPIRE STATE & COSTS

---

## RECENT DEMOENGINEZ MEMORIES

---

## BUILD STATE


---

## FIRST THING — DO THIS AUTOMATICALLY

```
brain_session_start(focus="[today's task]", product="demoenginez")
brain_search(query='demoenginez')
brain_list_cards()   # find build card
brain_get_card(id)   # load full spec
# THEN ask Jim what to tackle
```

**Do not wait to be asked. Always do this first.**

---

## SESSION END — DO THIS AUTOMATICALLY

```
brain_session_end(
  product="demoenginez",
  what_shipped="[what was built]",
  decisions="[key decisions]",
  next_action="[most important next task]"
)
brain_save_card(
  title="DemoEnginez BUILD_STATE [date]",
  project="demoenginez",
  content="[full build state md]"
)
```

---

*Synced: May 05, 2026 02:45 PM PST*
*Refresh: `python brain_sync.py demoenginez`*