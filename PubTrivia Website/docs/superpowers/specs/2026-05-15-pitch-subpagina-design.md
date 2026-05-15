# Pitch-subpagina /cafe/ — Design Doc

**Datum:** 2026-05-15
**Project:** PubTrivia marketingsite (pub-trivia.nl)
**Auteur:** Bas Dumoulin
**Status:** Ter goedkeuring

---

## Doel

Een persoonlijke landingspagina onder pub-trivia.nl die fungeert als bestemming voor:
1. De persoonlijke pitch-mail aan Pieter
2. De cold outreach mailtemplate naar cafés in Weesp en omgeving

De pagina draait om één belofte (een gratis pubquiz die rustige avonden vult) en één actie (Bas komt persoonlijk langs voor een gratis demo bij jou in de zaak).

## Onderscheidend van de homepage

De homepage (`/`) blijft het brede SEO-en-trust-verhaal in pilotfase-modus ("eerste 5 kroegen", "we gaan meten"). De pitch-pagina is commerciëler, korter, en directer omdat het publiek al voorgeselecteerd is via een gerichte mail. De CTA verschilt fundamenteel:

| Aspect | Homepage `/` | Pitch `/cafe/` |
|--------|-------------|---------------|
| Doel | Brede awareness, SEO | Conversie van cold/warm mail-traffic |
| Belofte | "24/7 pubquiz, 3 maanden gratis pilot" | "Gratis pubquiz die je rustige avonden vult" |
| Tone | Bedrijfsmatig met persoonlijke noot | Persoonlijk met Bas in beeld |
| CTA | Demo aanvragen via mail | Bas komt persoonlijk langs |
| Scope | Heel NL | Weesp en omgeving |
| Lengte | Lang, alle facetten | Single-scroll, alleen wat overtuigt |

## URL en zichtbaarheid

- **URL:** `/cafe/` (serveert `cafe/index.html`)
- **NAV:** Niet gelinkt vanuit de hoofd-NAV van de homepage. Alleen bereikbaar via direct gedeelde URL in mailings.
- **Sitemap:** Wel opnemen in `sitemap.xml` voor SEO-baseline, maar geen interne link vanaf andere pagina's.
- **Robots:** Indexeerbaar (geen `noindex`). De pagina ondersteunt de hoofd-keywords en heeft eigen waarde.

## Talen

- **Alleen Nederlands** voor versie 1. Doelgroep is NL-cafés in Weesp e.o.
- Engelse versie kan later als er bredere outreach komt — out of scope.

## Pagina-secties

Volgorde van boven naar beneden. Stijl en typografie zijn identiek aan de homepage (Fat Frank + Inter, paper #f6f1ea, accent #ff6a1f).

### 1. NAV (minimaal — single-purpose landing)

Geen interne anker-links, geen taal-switch, geen link naar homepage. De pagina heeft één doel en de bezoeker heeft alleen de CTA-knoppen als uitgang.

- Logo links — **niet klikbaar** (geen route terug naar `/`)
- Rechts: alleen de primaire CTA-knop "Stuur Bas een appje" (WhatsApp)

### 2. Hero

**Pill:** "● Voor cafés in Weesp en omgeving"

**H1:**
> Een gratis pubquiz die jouw rustige avonden vult.

**Lead:**
> 24/7 op je TV. Geen quizmaster, geen werk, geen kosten. Ik kom persoonlijk langs om het op te zetten en uit te leggen, gratis, vrijblijvend, een halfuurtje.

**Primaire CTA:** `[Stuur Bas een appje →]` (WhatsApp)
**Secundaire CTA:** `[Lees eerst hoe het werkt]` (anker naar sectie "Hoe een bezoek werkt")

**Hero meta-strip (3 vinkjes — eerlijk over wat zij meebrengen):**
- ✓ Gratis
- ✓ Eigen TV + wifi
- ✓ TV blijft de hele dag aan

**Bas-microblok onder de meta-strip:**
- Kleine pop-out foto (afgeleid van assets/bas-portrait.webp, ~64px)
- Naast foto:
  > Hi, ik ben Bas. Ik woon in Weesp en bouw PubTrivia. Ik kom binnen ±45 min rijden bij je langs. Geen verkooppraat, gewoon laten zien wat 't is.

**Hero rechts (visual):**
- Volle-breedte ruimte voor de mockup-foto van een kroeg met TV (bestand nog aan te leveren door Bas). Geen frame, mooi afgerond hoekje (border-radius 20px) zoals de homepage `roi-card`.
- Op mobiel: visual onder de tekst.

### 3. Fact-strip (4 vakken)

White block direct onder de hero. Zelfde stijl als `.facts` op de homepage.

| Vak | Kop | Onderschrift |
|-----|-----|--------------|
| 1 | Vollere avonden | Op de uren die nu leeg staan. |
| 2 | 10 min setup | Van TV tot eerste vraag. |
| 3 | 24/7 vanzelf | Aan = aan. Geen avond missen. |
| 4 | Geen werk | Geen quizmaster, geen training. |

### 4. Concrete benefits (6 stuks)

Eyebrow: `WAAROM PUBTRIVIA`
H2: **Wat het concreet doet voor je kroeg.**
Sub: Geen marketingpraat, gewoon wat er gebeurt als die TV aanstaat.

Grid van 6 benefits (zelfde `.benefits-grid` styling als homepage):

**01 — Vollere bar op je rustige avonden**
Geef gasten een reden om binnen te komen op dinsdag en woensdag. Niet alleen een biertje halen, maar blijven hangen.

**02 — Eén rondje extra per gezelschap**
Mensen blijven plakken zolang de quiz draait. Ze bestellen een tweede biertje gewoon omdat ze de ronde willen afmaken.

**03 — Geen werk voor je personeel**
De quiz draait zichzelf. Geen quizmaster, geen vragen voorbereiden, geen scores bijhouden. Personeel doet wat ze altijd doen, tappen.

**04 — Promoot je eigen menu op de TV**
Tussen rondes laat het scherm jouw aanbieding zien. Borrelhapje 9 euro. Dagaanbeveling. Met jouw logo.

**05 — 24/7 vanzelf, ook als jij vrij bent**
Aanzetten en vergeten. De TV draait 's middags, 's avonds, op de vrije zondag. Gasten die binnenlopen hebben meteen iets te doen.

**06 — Werkt in Nederlands én Engels**
Quizvragen in beide talen. Toeristen scannen de QR-code en spelen mee in hun taal, naast je Nederlandse stamgasten.

### 5. Hoe een bezoek werkt (3 stappen)

Eyebrow: `BEZOEK`
H2: **Hoe een bezoek werkt.**
Sub: Ik kom bij je langs. Gewoon een halfuurtje om te laten zien wat het is.

Drie stappen, zelfde `.step-list`-styling als homepage:

**01 — Stuur een appje**
Je laat weten wanneer 't past. Een doordeweekse middag of voor opening werkt meestal het beste.

**02 — Ik kom langs bij jou in de zaak**
Ik draai de quiz op mijn laptop, we kijken samen of 't past in jouw kroeg.

**03 — Als je wilt: dezelfde middag opgezet**
TV koppelen, QR-codes printen, eerste vraag draaien. Klaar in tien minuten. Wil je 't niet, ook prima. Geen verplichting.

### 6. Kroeg-foto met caption

Volle-breedte foto. Hergebruik `assets/amsterdam-bar.webp` (zelfde foto die op de homepage tussen FAQ en features staat). Geen border, alleen `border-radius: 24px` zoals op de homepage.

**Caption onder de foto:**
> Zo ziet het eruit op een woensdagavond. De TV doet het werk, jij doet wat je altijd doet.

### 7. FAQ (5 vragen)

Eyebrow: `VRAGEN`
H2: **Vragen die je nu hebt.**

Gebruik `<details>` accordion, zelfde stijl als homepage `.faq-item`. Eerste vraag staat open.

**1. Hoe kan dit gratis zijn?**
Tussen de quizrondes draaien er korte advertenties van lokale bedrijven en evenementen op het scherm. Dat is hoe wij geld verdienen, niet via jou. De basisversie blijft gratis.

**2. Wat als niemand meespeelt?**
De TV laat ook zonder spelers vragen, weetjes en jouw eigen aanbiedingen zien. Vaak begint één tafel, daarna volgt de rest.

**3. Wat heb ik aan apparatuur nodig?**
Een TV met HDMI-ingang en wifi. Wij leveren een TV stick waarmee het meteen werkt.

**4. Hoe stop ik als het niks is?**
Eén appje, ik kom 'm ophalen of je trekt de stekker eruit. Geen contract, geen opzegtermijn, geen kosten.

**5. Kan ik 'm alleen op rustige avonden gebruiken?**
Ja. Zet de TV gewoon uit op de avonden dat je 'm niet wilt. De quiz pakt vanzelf weer op als je 'm weer aanzet.

### 8. Eindblok CTA (donker)

Zelfde donkere card-stijl als homepage `.cta`. Twee-koloms layout:

**Links:** grote pop-out foto van Bas (assets/bas-portrait.webp), geen frame, eventueel groter dan in de hero (~280px).

**Rechts:**
- Pill: `● Voor cafés in Weesp en omgeving`
- H2: **Klaar om meer omzet te gaan draaien? Nodig me uit!**
- Sub: Stuur een appje wanneer 't past. Ik kom langs, laat zien wat 't is, en als je wilt zetten we 'm dezelfde middag op.
- Primaire CTA: `[Stuur Bas een appje →]` (WhatsApp link)
- Secundaire CTA: `[Mail Bas]` (mailto met prefilled subject/body)
- Disclaimer eronder, klein: "Geen contract, geen opzegtermijn."

Op mobiel: foto bovenaan, tekst eronder.

### 9. Footer (minimaal — geen links)

Eén dunne grijze strook onderaan. **Geen klikbare links**, geen logo-grid, geen product/contact/juridisch-kolommen. Alleen statische tekst, zodat de enige uitgang van de pagina de CTA-knoppen zijn.

Inhoud:
> © 2026 WonderLoop · KVK 91926440 · Amsterdam-Weesp

**Open punt — juridisch:** AVG vereist dat een privacy-statement bereikbaar is. Voorstel: cookie/analytics banner (zelfde `assets/analytics.js` als homepage) bevat de link naar `/privacy`. Hierdoor zijn er geen footer-links, maar blijft de privacy policy bereikbaar zonder navigatie te bieden naar andere site-pagina's. Te bevestigen voordat we gaan bouwen.

## Assets

| Asset | Pad | Bron | Status |
|-------|-----|------|--------|
| Bas portret pop-out | `assets/bas-portrait.webp` | `/Users/basdumoulin/Opruimen/Bas-Director-Alpha-Circle.webp` | Aan te leveren / kopiëren |
| Kroeg-foto | `assets/amsterdam-bar.webp` | Bestaand (homepage gebruikt 'm al) | OK, hergebruiken |
| Logo, favicons, monster-duo, qr-sticker | bestaande `assets/` | Bestaand | OK |

## Technische details

- **Bestandstype:** Statische HTML in `cafe/index.html`, ingebed CSS in de `<style>`-block (zelfde patroon als homepage `index.html` en `en/index.html`).
- **CSS:** Hergebruik de hele `.pt-d`-namespace uit homepage. Voeg waar nodig kleine extra rules toe (bijv. eindblok-met-foto layout) binnen dezelfde stijlblok.
- **Analytics:** Zelfde GA4-snippet als homepage (`/assets/analytics.js`).
- **Meta-tags:**
  - Title: "Gratis pubquiz voor je café in Weesp — PubTrivia komt langs"
  - Description: "Een gratis pubquiz voor cafés in Weesp en omgeving. 24/7 op je TV, geen quizmaster, geen werk. Bas komt persoonlijk langs voor een demo."
  - `<link rel="canonical">` naar `https://pub-trivia.nl/cafe/`
  - OG-image kan eerste versie de bestaande `og-image.png` zijn; later eigen variant.
- **JSON-LD:** Lichte versie. `Organization` en `Person` (zelfde als homepage). FAQ-schema toevoegen voor de 6 vragen op deze pagina. Geen aparte `Service` (dat staat al op homepage).
- **Sitemap:** `<url><loc>https://pub-trivia.nl/cafe/</loc>...</url>` toevoegen aan `sitemap.xml`.
- **CTA-links:**
  - WhatsApp: `https://wa.me/31681025396?text=Hoi%20Bas%2C%20ik%20zie%20jouw%20PubTrivia%20pagina%20%E2%80%94%20ik%20heb%20een%20kroeg%20in%20%5Bplaats%5D%20en%20wil%20wel%20even%20kennismaken`
  - Mail: `mailto:info@pub-trivia.nl?subject=PubTrivia%20bij%20mijn%20kroeg&body=Hoi%20Bas%2C%0A%0AIk%20heb%20een%20kroeg%20in%20%5Bplaats%5D.%20Wanneer%20kun%20je%20langskomen%3F`

## Buiten scope

- Engelse versie van de pitch-pagina (later, als er internationale outreach komt)
- Interactieve elementen (formulieren met validatie, ROI-calculator)
- A/B-test infrastructuur
- Eigen OG-image voor deze pagina (komt na launch)
- Link vanuit homepage NAV (later besluit als bezoekcijfers dat rechtvaardigen)
- CMS-achtige content (alle tekst is hardcoded in HTML; aanpassingen via code-edit)

## Open beslissingen (om later op te lossen)

1. **WhatsApp-prefilled-tekst:** Mag uiteindelijk korter/anders. Eerste versie hierboven is een gok.
2. **Privacy-link bereikbaarheid:** Footer heeft geen links. Voorstel is om de privacy/voorwaarden via de cookie-banner van `analytics.js` bereikbaar te maken. Te bevestigen.
3. **EN-variant:** Niet nodig nu, beslissing parkeren tot na eerste resultaten.

## Acceptatiecriteria

- [ ] `/cafe/index.html` bestaat en is rechtstreeks bereikbaar via URL
- [ ] Layout responsive: ≤900px tablet, ≤600px mobiel (zelfde breakpoints als homepage)
- [ ] CTA-knoppen openen WhatsApp en mailclient met prefilled tekst
- [ ] FAQ heeft 5 vragen, accordions werken (eerste open, rest dicht)
- [ ] Bas-foto verschijnt in hero (klein) en eindblok (groot), beide zonder kader
- [ ] NAV bevat alleen logo (niet klikbaar) + één CTA-knop; geen interne links, geen taal-switch, geen homepage-link
- [ ] Footer bevat geen klikbare links — alleen een tekstregel met © en KVK
- [ ] Privacy is bereikbaar via de bestaande cookie/analytics-banner (niet via een footer-link)
- [ ] Pagina is bereikbaar via `pub-trivia.nl/cafe/` zonder server-config aanpassingen (statische host)
- [ ] Sitemap bevat `/cafe/`
- [ ] Geen verwijzing naar deze pagina in homepage-NAV
- [ ] Geen em-dashes in de copy (commas of normale streepjes)
- [ ] Geen hypewoorden of AI-jargon in de copy
