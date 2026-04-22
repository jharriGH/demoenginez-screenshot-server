# ⚙️ DemoEnginez — CLAUDE.md
# Managed by brain_sync.py (Brain sections)
# + Manual additions (never auto-updated)
# Last synced: April 22, 2026 01:47 PM PST

---

## CURRENT STATUS
<!-- BRAIN-SYNC:START:STATUS -->
*Brain sync: April 22, 2026 01:47 PM PST*

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
- Today: $0.0000
- This month: $0.0072
- All time: $0.0072

**Empire:**
- 6 live | 2 launch ready | 7 in progress
<!-- BRAIN-SYNC:END:EMPIRE_STATE -->

---

## RECENT DEMOENGINEZ MEMORIES
<!-- BRAIN-SYNC:START:MEMORIES -->
1. Tags: demoenginez
2. Tags: demoboosterz
3. Next: DemoEnginez and DemoBoosterz testing, sales pages, ecosystem go-live, KJ Autonomous multi-product clone, Marketing session
4. DemoBoosterz status on March 26, 2026: LAUNCH READY
5. Concept is DemoEnginez one-click fulfillment
6. DemoBoosterz pipeline 8/8 live
7. Testing status: Send to DemoEnginez built and briefly tested, ReachInbox Campaign Builder built but not yet tested, Activity History Log built but not yet tested, Logo.dev built waiting on enrichment ...
8. KJ Autonomous pipeline cloned for DemoBoosterz
<!-- BRAIN-SYNC:END:MEMORIES -->

---

## BUILD STATE
<!-- BRAIN-SYNC:START:BUILD_STATE -->
**Card:** DemoEnginez BUILD_STATE-FINAL-v1
**Saved:** 2026-04-07

# 🏗️ DEMOENGINEZ — MASTER CONTEXT CARD
> Last updated: Apr 6, 2026
> Paste this at the top of every new Claude chat for instant full context.

---

## 🧠 WHAT IS DEMOENGINEZ?
SaaS admin tool that generates personalized website demos for local businesses as cold outreach hooks.
Prospect receives a link to their custom demo site — tours it, sees AI features, accepts the website.
**Flow:** KJLE (scores leads) → DemoEnginez (imports + generates demos) → ReachInbox/SalesAgentz (outreach)
**Admin URL:** app.demoenginez.com (GoDaddy CNAME → Lovable, DNS configured Apr 5 2026)
**Sales page:** DemoEnginez.com (GoDaddy — sales page not yet built, pinned for strategy session)

---

## 🛠️ TECH STACK
| Layer | Tool |
|---|---|
| Frontend | Lovable (React / TypeScript / Tailwind / shadcn) |
| Database | Supabase (project: ycgcuixicvvnnuqirqpa) |
| Lovable internal Supabase | wvqifxycceixsiwsudve (hero images + screenshots) |
| Screenshot Server | https://demoboosterz-screenshot-server.onrender.com |
| Screenshot Auth | x-auth-token: demoboosterz-screenshots-2024 |
| Hero Images | Supabase Storage hero-images bucket (wvqifxycceixsiwsudve) |
| Outreach | ReachInbox / Instantly / HeyReach (AppSumo LTDs) |

---

## 🔧 SCREENSHOT SERVER — CRITICAL RULES
- server.js lives in DemoBoosterz GitHub repo — changes affect BOTH apps
- Returns: raw binary JPEG — frontend MUST use response.blob() NEVER response.json()
- Viewport: 1280x800, clip {x:0,y:0,w:1280,h:800}, scroll to top before capture
- Railway server ABANDONED (resource exhaustion) — Render only

---

## 🏗️ KEY ARCHITECTURE DECISIONS
- 172-niche config system — services, hero keyword, gallery label, CTA, color scheme, aliases
- Alias matching: 150+ entries covering all 172 niches
- NO scoring in DemoEnginez — KJLE Pain Score is single source of truth
- Demo link: /demo/[id] via window.location.origin — PUBLIC, no auth
- Report card: /report/[id] — PUBLIC, no auth required
- Address format: {street}, {city}, {state} {zip}
- Screenshots: raw binary JPEG via response.blob()
- Hero images: 688 images across 172 niche folders in Supabase Storage
- Ideogram processed MASTER CSV in REVERSE order — mapping accounts for this

---

## ✅ FULLY COMPLETED FEATURES
| Feature | Notes |
|---|---|
| 172-niche config system | All niches, aliases, hero images |
| 688 hero images | All uploaded, NICHE_IMAGES updated, all 172 pass niche test |
| Screenshot server (Before/After) | Raw binary JPEG, Render hosted |
| Alias matching (150+ entries) | All 172 niches covered |
| Demo page widgets (8 widgets) | Fake but convincing — see widget list below |
| Guided demo tour | Cinematic 8-step tour, fake widget demos, FIRE 🔥 |
| Competitors section on demo page | Niche-specific fake competitors with scores |
| Report Card (/report/[id]) | Public, no auth, builds from demo data |
| Accept This Website modal | Lead capture → Supabase status='accepted' |
| Cost Intelligence dashboard | $13.03 actual spend showing, all services tracked |
| Demo Manager | Compact table view, sortable, groupable, quality badges |
| Campaigns page | Basic list view with stats |
| Campaign detail + analytics | Funnel, hot leads, sequence tracking, revenue |
| Lead Management + Lists | Full CRM-lite, table + card view |
| Smart Lists (4 auto-updating) | Hot Leads, No Demo Yet, Viewed 3+, Uncontacted |
| CSV import (KJLE format) | Redesigned modal, fuzzy mapping, live preview, validation |
| ReachInbox export | custom_1=demo_url, custom_2=report_card_url |
| Instantly export | CSV formatted for direct import |
| Niche tester (/admin/niche-test) | All 172 niches, bulk test grid |
| Admin Settings (7 tabs) | API Keys, Widgets, Screenshot, Branding, Budgets, Outreach, Account |
| Scheduler | Overnight bulk generation, rate control, job queue, pause/resume |
| Dashboard redesign | Dark premium, sparkline stats, quick actions, activity feed |
| Main App + Admin separation | Purple=main, Orange=admin, breadcrumbs, ← Main App link |
| Find Leads | Keep for testing only — production uses KJLE CSV import |
| Regenerate Demo | Force new demo even if one exists |
| app.demoenginez.com | GoDaddy CNAME configured, DNS propagating |
| Duplicate code removal | Deleted duplicate Settings + MyDemos pages, redirects added |
| Garbage lead cleanup | Removed invalid leads (short names, emails, URLs, numbers) |
| Firecrawl error handling | Graceful fallback to template-only demo on scrape failure |

---

## 🎬 GUIDED DEMO TOUR — COMPLETE SPEC
Tour plays on EVERY demo page load — NO localStorage caching.
All real widgets hidden until tour completes.
One widget shown at a time — fake versions inside tour overlay.
Skip Tour button injected directly into document.body (z-index: 2147483647).
Hand icon injected into document.body, uses getBoundingClientRect() for precision.

**8 Steps:**
1. Welcome overlay — typewriter headline, sparkle animation, 12 seconds
2. Hero spotlight — checklist animating in, 10 seconds
3. Competitors — niche-specific fake competitors, scores count up, YOUR NEW SITE pulses green
4. Chatbot — fake expanded chat panel, scripted conversation typewriter, lead captured badge
5. Booking — fake booking widget, animated slot selection, confirmation
6. AI Callback — phone mockup animation, scripted transcript, appointment booked
7. Revenue Calculator — fake calculator, slider animates, niche-specific ticket prices, red numbers
8. Reviews — fake review cards stacking in, social proof stats
9. Final CTA — SVG checkmark, giant Accept button, 30-day guarantee

**Post-Tour Finale:**
- Widgets reveal one by one (800ms apart) with scale animation
- All widgets glow simultaneously (purple pulse, 2 cycles)
- Elegant overlay card appears (matches Step 0 style):
  "Your new website is ready to explore! 🎉"
  Checklist of AI features
  Accept CTA + Explore button
- "▶ Replay Tour" button in demo footer

---

## 🎛️ DEMO PAGE WIDGETS (8 total — fake but convincing)
**Widget positions (FINAL — do not change):**

LEFT SIDE:
- ROI Calculator tab: fixed, left 0, top 35% — opens panel rightward
- Booking widget: fixed, bottom 20px, left 20px — collapsed header, expands upward
- Call button: fixed, bottom 80px, left 20px (above booking)

RIGHT SIDE:
- Visitor counter: fixed, top 56px, right 16px
- Accept This Website tab: fixed, right 0, top 35% — green vertical tab
- Chatbot bubble: fixed, bottom 20px, right 20px — opens panel upward

TOP:
- Countdown bar: fixed, top 0, full width

SMART RULES:
- ONE widget open at a time — others auto-close
- Review popup: bottom 20px, left 20px — only when booking collapsed
- Post-tour: chatbot auto-peeks after 30s with greeting
- Review popup: never shows simultaneously with booking widget

**Widget controls:** Global → Per-Niche → Per-Demo (priority order)
**Settings:** Admin Settings → Widgets tab

---

## 🏆 DEMO PAGE SECTIONS (in order)
1. Countdown timer bar (top)
2. Navigation
3. Hero section (niche hero image + business info)
4. Gallery/Portfolio
5. Competitors section ("See How [Business] Stacks Up")
6. Services section
7. Reviews
8. CTA section
9. Contact/Footer + Replay Tour button

---

## 💰 REVENUE CALCULATOR — NICHE TICKET PRICES
Key examples:
- salon: $75 | nail_salon: $55 | barbershop: $35
- hvac: $1,200 | plumbing: $450 | electrical: $600
- roofing: $8,500 | pool_builder: $45,000
- dental: $350 | lawyer: $2,500 | real_estate: $12,000
- restaurant: $45 | coffee: $12
- wedding_planner: $3,500 | funeral_home: $8,000
- solar: $25,000 | remodeling: $15,000
- Cap display at $999,999/mo with "and growing..."
- Default fallback: $300

---

## 🗂️ ADMIN PANEL STRUCTURE
ANALYTICS: Cost Intelligence, Niche Tester
MANAGEMENT: Demo Manager, Leads, Campaigns, Scheduler
CONFIG: Settings

Main App sidebar: OUTREACH (Dashboard, Leads, Campaigns) | TOOLS (Generate Demo, My Demos, Report Cards) | SYSTEM (Settings, Admin Panel →)

---

## 🤖 COMPETITOR SECTION — NICHE-SPECIFIC DATA
Each niche has 3 realistic fake competitors with:
- Business name (niche-appropriate)
- Star rating (3.5-4.1)
- Review count (15-90)
- Website score (26-55, always lower than prospect's 95)
- 2 weakness tags (No chatbot, Slow website, Low reviews)
YOUR NEW SITE: 95/100, ✅ AI Chatbot, ✅ Review System, ✅ Mobile Optimized, ✅ Online Booking

---

## 🔧 REMAINING / PENDING ITEMS
| # | Item | Priority |
|---|---|---|
| 1 | Post-tour elegant card (replace toast) | 🔥 Just fired |
| 2 | DNS propagation verify — test app.demoenginez.com in incognito | 🔥 Verify |
| 3 | Live end-to-end test — import 50-100 KJLE leads, schedule overnight, export ReachInbox | 🔥 Final test |
| 4 | Full campaign automation (List → Generate → Campaign → ReachInbox API → Launch) | 📌 After first manual campaign |
| 5 | Render server-side CORS fix | 📌 Pinned |
| 6 | Empire Health Monitor (KJLE Prompt 26) | 📌 Pinned |
| 7 | Gallery first-image Google placeholder fix | 📌 Pinned |
| 8 | Sales page at DemoEnginez.com | 📌 Strategy session |

---

## 📋 EXPORT FORMAT — REACHINBOX
first_name, last_name, email, phone, company_name
custom_1 = demo_url (https://app.demoenginez.com/demo/[id])
custom_2 = report_card_url (https://app.demoenginez.com/report/[id])
custom_3 = pain_score
custom_4 = niche
custom_5 = city

---

## 🗂️ ALL 172 NICHES
acai_bar, accountant, acupuncture, addiction_treatment, air_duct, appliance,
art_studio, auto, auto_body, auto_detailing, auto_glass, auto_locksmith,
auto_tinting, auto_upholstery, av_services, bakery, bar, barbershop,
bbq_restaurant, blinds_shutters, blood_lab, boat_repair, bounce_house,
boxing_gym, breakfast_brunch, business_consulting, cabinet_refinishing,
car_wash, carpet_cleaning, catering, chimney_sweep, chiropractic, cleaning,
coffee, computer_repair, concrete, courier, coworking, dance_studio, daycare,
deck_patio, dental, dermatologist, dog_grooming, dog_trainer, driving_school,
drone_photography, dumpster_rental, electrical, escape_room, event_planner,
exterminator, eyebrow_threading, eyelash_extensions, fencing, financial_advisor,
fleet, flooring, florist, food_truck, foundation_repair, funeral_home,
garage_door, general_contractor, generator, gun_shop, gutter_cleaning, gym,
hair_extensions, handyman, hearing_aid, home_inspector, home_security,
home_staging, hot_tub, hotel, hvac, hypnotherapy, ice_cream, insulation,
insurance_agent, irrigation, it_managed_services, it_services, iv_therapy,
juice_bar, junk_removal, landscaping, language_school, laundromat, lawn_care,
lawyer, limo, locksmith, marketing_agency, martial_arts, massage, meal_prep,
med_spa, mental_health, mortgage, motorcycle_repair, movers, moving_storage,
music_school, nail_salon, notary, nutritionist, optometrist, orthodontics,
painting, party_rental, pediatrician, permanent_makeup, personal_trainer,
pest_control, pet_boarding, pharmacy, photo_booth, photography, physical_therapy,
pilates, pizzeria, plastic_surgery, plumbing, podiatry, pool_builder,
pool_cleaning, pressure_washing, pressure_washing_commercial, printing,
private_investigator, property_management, real_estate, remodeling, restaurant,
roadside_assistance, rock_climbing, roofing, rv_repair, salon, sandwich_shop,
senior_care, septic_service, signage, solar, spa, speech_therapy,
staffing_agency, storage, sushi_restaurant, tanning_salon, tattoo, tax_prep,
tile, tire_shop, towing, translation, tree_service, tutoring, urgent_care,
veterinary, videography, waste_removal, waterproofing, waxing, wedding_planner,
wedding_venue, weight_loss, window_cleaning, window_replacement, yoga

---

## 📌 PINNED FOR LATER
- Render CORS fix (allow Authorization header — don't break DemoBoosterz)
- Empire Health Monitor — KJLE Prompt 26
- Gallery first-image Google placeholder fix
- Sales page at DemoEnginez.com (strategy session)
- Full campaign automation after first manual campaign
- DemoEnginez.com → Cloudflare Pages sales page

---

## 💡 SESSION NOTES — Apr 2-6, 2026
COMPLETED THIS SESSION:
- 172 niches, 688 hero images — all passing niche test ✅
- Demo page widgets (8) — positioned, non-overlapping ✅
- Guided cinematic demo tour — 8 steps, FIRE 🔥 ✅
- Fake widget demos in tour (chatbot convo, booking, callback, calculator, reviews) ✅
- Niche-specific competitor section with realistic data ✅
- Widget WHY YOU NEED THIS benefits copy ✅
- Post-tour widget grand reveal + glow animation ✅
- Demo Manager — compact table, grouping, quality badges ✅
- Campaigns + Campaign analytics ✅
- Lead Management + Lists + Smart Lists ✅
- Scheduler — overnight bulk generation ✅
- CSV import redesigned — fuzzy mapping, live preview ✅
- ReachInbox export — custom_1 + custom_2 both working ✅
- Admin Settings (7 tabs) ✅
- Dashboard redesign — dark premium ✅
- Main app vs Admin panel — clear visual separation ✅
- app.demoenginez.com DNS configured ✅
- Regenerate Demo button ✅
- Revenue calculator — niche-specific pricing ✅
- Widget layout finalized — no overlap ✅

FINAL ITEM FIRED (pending verification):
- Post-tour elegant overlay card replacing toast banner

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

*Synced: April 22, 2026 01:47 PM PST*
*Refresh: `python brain_sync.py demoenginez`*