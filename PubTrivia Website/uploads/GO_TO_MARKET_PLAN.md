# PubTrivia Go-To-Market Plan

**Date:** April 24, 2026
**Author:** Bas Dumoulin / WonderLoop

---

## Context

PubTrivia is a working product with no customers yet. The app runs, the admin panel works, the ad system is built, venue accounts with plan tiers (free/gold/platinum at €0/€49/€149 ex-BTW) exist in the database, and a placeholder site is live at pub-trivia.nl. Bas lives in Weesp (5-10 potential venues), has no existing relationships with bar owners, and is starting cold. Costs are near zero (Hetzner VPS + Supabase), so the priority is building proof and network density, not rushing to revenue.

**Approach:** Proof-first with community amplification. Free pilot → prove it works → use proof to sign more bars → monetize once there's density and data.

---

## Phase 1: The Pilot (Week 1-6) - One Bar, Prove It Works

**Goal:** Get PubTrivia installed and running in one Weesp bar. Collect hard data. Fix issues in the wild.

### Week 1-2: Find and sign the first venue
- Walk into 2-3 bars that have a TV visible from the bar area and decent evening traffic
- Target bars that struggle with quiet weeknight traffic (Mon-Wed) - that's the pain point
- **The pitch:** "I built a digital pub quiz that runs 24/7 on your TV. Guests scan a QR code and play on their phones. I want to test it in one bar for free. You get more people staying longer on quiet nights. All I need is your TV, WiFi, and honest feedback."
- Bring a tablet with the demo running - show, don't tell

### Week 2: Install
- Raspberry Pi (~€35) connected to venue TV, running Chromium pointed at the TV screen URL
- Print 15 table tents with QR code (~€20 at a print shop or Print.com)
- Configure venue in admin panel, activate game loop
- Brief the bar staff: what it is, how to point guests to the QR code, who to call if something breaks

### Week 3-6: Run, observe, fix
- Visit the bar 2-3 evenings per week - watch how people interact, fix issues live
- Track daily: player count, time of day, repeat device tokens (proxy for returning players)
- **Intake questionnaire for the owner (before PubTrivia):**
  - Average covers on Mon/Tue/Wed before PubTrivia
  - Average covers on Fri/Sat before PubTrivia
  - Biggest pain point (quiet nights, dwell time, competition from home)
- **Exit questionnaire at week 6:**
  - Same cover count questions - measure the delta
  - "Would you keep PubTrivia?" (yes/no/maybe)
  - "Would you pay for it?" (and at what price)
  - "Can I quote you?" (for pitching other bars)

### Community angle (start immediately)
- Post about it on Weesp Facebook groups / Nextdoor: "I'm testing a pub quiz at [bar name], come try it"
- Film content: phone footage of people playing, TV screen in action, owner reaction
- Reach out to Weesper Courant / local blog for a feature: "Weesp man builds digital pub quiz for local bars"

### Deliverables before Phase 2
- [ ] Owner testimonial (written quote or short video)
- [ ] Player count data (average per evening, peak, quiet nights vs weekends)
- [ ] Before/after cover count comparison
- [ ] 5+ photos/videos of the quiz running in the bar
- [ ] Bug list: what broke, what confused people, what needs fixing

### Hardware cost: ~€55 (Pi + QR tents)

---

## Phase 2: Local Network (Month 2-5) - Expand to 5-8 Bars in Weesp

**Goal:** Build density. Make PubTrivia "a Weesp thing." All venues still free (3-month trial each).

### Rollout
- Use Phase 1 proof to pitch remaining bars: "Bar X has been running PubTrivia for 6 weeks. [Show photos/data]. Their Tuesday nights went from [before] to [after] visitors."
- Pace: 1-2 new venues per week, you personally install each one
- Each venue gets 3 months free from their install date (staggered conversion dates)
- Same intake questionnaire at every venue (before/after cover counts)

### What makes this phase work
- **Cross-venue leaderboard** (already built): players compete across bars - "You're #1 at Bar X but can you beat the leader at Bar Y?"
- **Density = discovery:** People encounter PubTrivia at multiple bars, it becomes familiar
- **Weesp-wide tournament** (once 5+ venues): One special evening, all venues, same questions, combined leaderboard. Great press/content moment.

### Community amplification
- Local press follow-up: "PubTrivia now runs in 5 bars across Weesp"
- Ask satisfied bar owners to share on their own social media
- Consider a simple Instagram/Facebook page for PubTrivia Weesp

### Build during this phase (parallel to signups)
- [ ] Proper marketing website (replace placeholder) - explain what it is, show social proof, "request PubTrivia" form
- [ ] One-page pitch sheet for venue owners (PDF, leave-behind)
- [ ] Advertising rate card (see Phase 3) - pricing TBD based on player data
- [ ] Short demo/promo video (filming real bars = authentic)
- [ ] Invoice template through WonderLoop

### Hardware cost: ~€250-400 (5-8 more venues x €35-50 each)

---

## Phase 3: First Revenue - Local Advertising (Month 4-7)

**Goal:** Sell ad slots to local Weesp businesses. First revenue stream.

### Timing
- Start selling once you have 5+ venues AND player data from Phase 1-2
- The before/after cover data from your intake questionnaires becomes the ad pitch

### What you're selling

| Ad Type | Description | Duration/Size |
|---------|-------------|--------------|
| **Full-screen ad** | Image or video shown on TV at ALL venues between rounds | 15-30 seconds |
| **Sponsor overlay** | Logo shown on leaderboard slides (high-attention moment) | Persistent during leaderboard |
| **Bundle** | Both of the above | Combined |

### Pricing approach
- **Don't set prices yet.** Use Phase 1-2 data to determine eyeball count.
- Once you know: "X players per evening across Y venues, average session Z minutes" - price per impression or flat monthly.
- Starting range likely €50-150/month depending on data. Calibrate to what local businesses already spend (ask them what they pay for Facebook ads, local paper ads, etc.)
- Start with 3-month contracts minimum (monthly churn at this stage would kill you)

### Sales approach
- Walk into local businesses in Weesp: bakeries, barbers, real estate agents, restaurants, gyms
- **The pitch:** "PubTrivia runs in [X] bars in Weesp. Every evening, [Y] people watch these screens for 30+ minutes. Your ad shows up between quiz rounds when everyone's paying attention. It's like a billboard in every bar in town."
- **Service differentiator:** You make the ad for them. They give you their logo and a message, you produce a 15-second spot. This removes friction and guarantees quality.
- You upload and manage all ads through the existing admin panel

### Revenue target
- 5-10 local advertisers
- Average €75-100/month each
- **Target: €400-750/month**

---

## Phase 4: Venue Subscriptions (Month 6-9)

**Goal:** Convert free venues to paid plans as 3-month trials expire.

### The tier logic (decide with Phase 1-2 data)

Current structure in the app:

| Tier | Price | Concept |
|------|-------|---------|
| **Free** | €0/month | Full quiz runs. PubTrivia runs third-party ads between rounds — that revenue stays with PubTrivia. |
| **Gold** | €49/month | Logo on screen + 2 own promo slots (happy hour, own events). PubTrivia's third-party ads still run on top. |
| **Platinum** | €149/month | Logo + 5 own promo slots + theming + custom rounds + **no third-party advertiser content on this screen** (PubTrivia's own brand/house content still appears). Venue does NOT resell ad inventory — they pay €149 to keep external advertisers off their screen, not to monetize it. |

**Decision (already shipped in code):** Ad inventory trade-off model. Free venues get the full product, but PubTrivia owns the ad space and the revenue. Paying venues progressively gain *control* over their own screen — Gold adds 2 own promo slots (third-party advertiser content still runs), Platinum adds 5 own promos + theming + custom rounds + suppresses third-party advertiser content on that screen (PubTrivia's own brand/house content still appears). **Venues never resell ad inventory** — that revenue stream stays with PubTrivia regardless of tier.

Source of truth for tier features: `src/lib/venue-admin/plan-features.ts`. Source of truth for pricing: `src/lib/invoicing/constants.ts`. Treat any prose tier description (including elsewhere in this plan) as stale unless it matches the code.

### The conversion conversation
- Visit each venue as their 3-month trial ends
- Show them their own data: player counts, before/after comparison
- Present the options, let them choose

### Revenue target at this stage
- 5-8 venues, mix of free and paid: ~€150-300/month venue subs
- 5-10 advertisers: ~€400-750/month
- **Total: €550-1050/month**

---

## Phase 5: Beyond Weesp (Month 9-12+)

**Goal:** Prove the model works outside your backyard. Pick one more town.

### Candidates
- Amsterdam-Oost (close, dense)
- Muiden, Naarden, or another Gooi-area town (similar vibe to Weesp)
- Stay within driving distance - you still need to be hands-on

### What needs to change
- [ ] Website must do the selling for you (not just a placeholder) - pricing, demo video, testimonials, "get PubTrivia" form
- [ ] Self-service onboarding path: venue signs up, you ship a Pi, they plug it in (not you driving there)
- [ ] Ad sales shift to email/phone + rate card (still personal, but not walking in)
- [ ] Start approaching regional drink distributors (not Heineken HQ - the local rep who services bars in your area)

### Revenue target at 15-20 venues
- Venue subs: ~€400-800/month
- Local advertisers (10-15): ~€750-1500/month
- First regional brand ad deal: ~€200-500/month
- **Total: ~€1350-2800/month**

---

## Phase 6: The Decision Point (Year 2)

At ~20 venues and ~€2-3K/month, you face a real choice:

**Stay boutique:** 20-30 venues in greater Amsterdam area, €3-5K/month, manageable solo, good lifestyle business alongside WonderLoop.

**Scale:** Reinvest or raise money, hire a sales rep, target 100+ venues, build full self-serve onboarding, chase national brand advertisers (Heineken, Diageo, etc.)

**Don't decide now.** The data from Phase 1-5 will make this obvious.

---

## Timeline Summary

| Phase | When | What | Revenue |
|-------|------|------|---------|
| **1. Pilot** | Week 1-6 | One bar, prove it works | €0 |
| **2. Local network** | Month 2-5 | 5-8 bars in Weesp, all free | €0 |
| **3. Ad sales** | Month 4-7 | Sell to 5-10 local businesses | €400-750/mo |
| **4. Subscriptions** | Month 6-9 | Convert free venues to paid | €550-1050/mo |
| **5. Expand** | Month 9-12 | Second town, 15-20 total venues | €1350-2800/mo |
| **6. Decision** | Year 2 | Boutique vs. scale | €3000-5000/mo |

---

## Immediate Next Actions (This Week)

1. **Scout venues:** Walk through Weesp, identify 3 candidate bars (TV visible, decent traffic, approachable owner)
2. **Prepare the pitch:** Practice your 60-second explanation. No deck needed - bring a tablet with the live demo.
3. **Print QR tents:** Design simple table tents with venue QR code (can use Print.com or a local shop)
4. **Buy a Raspberry Pi:** Have one ready to install same-day if a bar says yes
5. **Create the intake questionnaire:** Simple Google Form or paper sheet - cover counts, pain points, contact info
6. **Post in Weesp groups:** Soft announce: "I'm building a digital pub quiz for bars in Weesp, looking for the first bar to test it - any suggestions?"

---

## What Needs to Be Built (Tech)

Most of the commercial infrastructure is already in the app. Gaps:

| Need | Status | When |
|------|--------|------|
| Venue subscription tiers | Built (free/gold/platinum in DB + admin UI) | Ready |
| Ad system (full-screen + sponsor overlay) | Built with rotation, scheduling | Ready |
| QR code generation | Built (player join flow) | Ready |
| Cross-venue leaderboard | Built (global leaderboard API) | Ready |
| Proper marketing website | Placeholder only | Phase 2 (month 2-3) |
| Stripe/payment processing | Not wired | Phase 4 (month 6) |
| Self-service venue onboarding | Manual only | Phase 5 (month 9) |
| Analytics dashboard (player counts, trends) | Basic ops only | Phase 3 (month 4) |
| Ad performance reporting (for advertisers) | Not built | Phase 3 (month 4) |

---

## Risks

| Risk | Likelihood | Mitigation |
|------|-----------|-----------|
| No bar in Weesp says yes | Medium | Try 5+ bars, not 2. Lead with "free" and "I'll do all the work." |
| Players don't engage / novelty wears off | Medium | Monitor repeat players. Rotate question content. The 24/7 always-on model means casual discovery, not just quiz nights. |
| Bar owners don't want to pay after free trial | High | This is why the ad-inventory model matters - free venues still generate revenue for you. Don't need every venue to pay. |
| WiFi issues at venues | Medium | Test before install. Bring a mobile hotspot as backup for the first week. |
| Weesp is too small (ceiling of 5-10 venues) | Expected | Weesp is the proof-of-concept, not the business. Phase 5 expands to bigger markets. |

---

## Checkpoints

- **Phase 1 (week 6):** Owner wants to keep it, 15+ players on busy nights, have testimonial + photos
- **Phase 2 (month 5):** 5+ venues live, cross-venue leaderboard active, marketing website live
- **Phase 3 (month 7):** 5+ paying advertisers, first €500+ month
- **Phase 4 (month 9):** 3+ paying venues, total revenue €500-1000/month
