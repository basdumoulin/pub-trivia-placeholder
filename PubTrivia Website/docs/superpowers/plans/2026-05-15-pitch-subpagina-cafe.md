# Pitch-subpagina /cafe/ Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bouw een statische Nederlandse pitch-pagina onder `pub-trivia.nl/cafe/` die fungeert als landing voor cold-outreach mails naar cafés in Weesp en omgeving. Eén belofte (gratis pubquiz voor rustige avonden), één actie (Bas komt persoonlijk langs).

**Architecture:** Statische HTML (`cafe/index.html`) volgens hetzelfde patroon als `index.html` en `en/index.html`. Inline CSS in een `<style>`-blok, hergebruik van de `.pt-d` namespace uit de homepage met enkele extra rules voor Bas-portret en minimale footer. Geen JS-framework, geen build-step. Single-purpose landing: geen NAV-links, geen footer-links, alleen CTA-knoppen als uitgang.

**Tech Stack:** HTML5, CSS3 (inline), kleine inline JS-snippet voor footer-jaartal. Hergebruik van bestaande `assets/`-bestanden en `assets/analytics.js` voor GA4 + cookie/privacy-banner.

**Source spec:** `docs/superpowers/specs/2026-05-15-pitch-subpagina-design.md`

---

## File Structure

| File | Action | Purpose |
|------|--------|---------|
| `assets/bas-portrait.webp` | CREATE (copy) | Pop-out portret van Bas, gebruikt in hero (klein) en eindblok (groot) |
| `cafe/` | CREATE | Nieuwe directory voor de pagina (mirrors `en/` patroon) |
| `cafe/index.html` | CREATE | De volledige pitch-pagina |
| `sitemap.xml` | MODIFY | `<url>` voor `/cafe/` toevoegen |

Geen wijzigingen aan `index.html` (homepage NAV blijft schoon), `styles/shared.css`, `robots.txt` of `assets/analytics.js`.

---

## Task 1: Asset kopiëren (Bas-portret)

**Files:**
- Create: `assets/bas-portrait.webp`

- [ ] **Step 1: Kopieer het bronbestand naar `assets/`**

Run:
```bash
cp "/Users/basdumoulin/Opruimen/Bas-Director-Alpha-Circle.webp" "assets/bas-portrait.webp"
```

- [ ] **Step 2: Verifieer dat het bestand bestaat en niet leeg is**

Run:
```bash
ls -la "assets/bas-portrait.webp"
file "assets/bas-portrait.webp"
```
Expected: bestand bestaat, `file`-uitvoer noemt WebP image.

- [ ] **Step 3: Commit**

```bash
git add "assets/bas-portrait.webp"
git commit -m "Add Bas portrait pop-out for /cafe/ landing"
```

---

## Task 2: HTML skeleton + head + base CSS

Maak `cafe/index.html` met de complete `<head>` (meta, OG, fonts, analytics, FAQ JSON-LD) en de volledige `.pt-d` CSS-namespace uit de homepage, plus drie nieuwe CSS-rules voor Bas-portret, eindblok-met-foto en minimale footer.

**Files:**
- Create: `cafe/index.html`

- [ ] **Step 1: Maak de directory**

Run:
```bash
mkdir -p cafe
```

- [ ] **Step 2: Schrijf het volledige skeleton-bestand**

Maak `cafe/index.html` met de inhoud hieronder. De CSS-blok hergebruikt het volledige `.pt-d`-namespace uit `index.html` regels 254-743. Aan het eind van de bestaande CSS voeg je drie nieuwe regels toe (`.bas-micro`, `.cta-photo`, `.footer-min`). De `<body>` blijft voorlopig leeg, sectie-content komt in volgende tasks.

```html
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Gratis pubquiz voor je café in Weesp — PubTrivia komt langs</title>
  <meta name="description" content="Een gratis pubquiz voor cafés in Weesp en omgeving. 24/7 op je TV, geen quizmaster, geen werk. Bas komt persoonlijk langs voor een demo.">
  <meta name="robots" content="index,follow">
  <link rel="icon" type="image/png" href="/assets/favicon.png">
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
  <link rel="canonical" href="https://pub-trivia.nl/cafe/">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="PubTrivia">
  <meta property="og:locale" content="nl_NL">
  <meta property="og:title" content="Gratis pubquiz voor je café in Weesp — PubTrivia komt langs">
  <meta property="og:description" content="Een gratis pubquiz voor cafés in Weesp en omgeving. 24/7 op je TV, geen quizmaster, geen werk.">
  <meta property="og:url" content="https://pub-trivia.nl/cafe/">
  <meta property="og:image" content="https://pub-trivia.nl/assets/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#ff6a1f">
  <meta name="geo.region" content="NL">
  <meta name="geo.placename" content="Amsterdam-Weesp">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"></noscript>
  <link rel="stylesheet" href="/styles/shared.css">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://pub-trivia.nl/#wonderloop",
        "name": "WonderLoop",
        "url": "https://wonderloop.nl",
        "email": "info@pub-trivia.nl",
        "telephone": "+31681025396",
        "logo": "https://pub-trivia.nl/assets/pubtrivia-logo.png"
      },
      {
        "@type": "WebPage",
        "@id": "https://pub-trivia.nl/cafe/#page",
        "url": "https://pub-trivia.nl/cafe/",
        "name": "Gratis pubquiz voor je café in Weesp — PubTrivia komt langs",
        "description": "Een gratis pubquiz voor cafés in Weesp en omgeving. 24/7 op je TV, geen quizmaster, geen werk. Bas komt persoonlijk langs voor een demo.",
        "inLanguage": "nl-NL",
        "isPartOf": { "@id": "https://pub-trivia.nl/#website" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://pub-trivia.nl/cafe/#faq",
        "inLanguage": "nl-NL",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Hoe kan dit gratis zijn?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tussen de quizrondes draaien er korte advertenties van lokale bedrijven en evenementen op het scherm. Dat is hoe wij geld verdienen, niet via jou. De basisversie blijft gratis."
            }
          },
          {
            "@type": "Question",
            "name": "Wat als niemand meespeelt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "De TV laat ook zonder spelers vragen, weetjes en jouw eigen aanbiedingen zien. Vaak begint één tafel, daarna volgt de rest."
            }
          },
          {
            "@type": "Question",
            "name": "Wat heb ik aan apparatuur nodig?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Een TV met HDMI-ingang en wifi. Wij leveren een TV stick waarmee het meteen werkt."
            }
          },
          {
            "@type": "Question",
            "name": "Hoe stop ik als het niks is?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Eén appje, ik kom 'm ophalen of je trekt de stekker eruit. Geen contract, geen opzegtermijn, geen kosten."
            }
          },
          {
            "@type": "Question",
            "name": "Kan ik 'm alleen op rustige avonden gebruiken?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. Zet de TV gewoon uit op de avonden dat je 'm niet wilt. De quiz pakt vanzelf weer op als je 'm weer aanzet."
            }
          }
        ]
      }
    ]
  }
  </script>

  <style>
    html, body { margin: 0; padding: 0; background: #f0eee9; }
    .pt-root { width: 100%; }

    /* === Begin .pt-d namespace — kopie van homepage index.html regels 261-743 === */
    /* COPY: alle .pt-d regels uit /index.html (regels 261 t/m 743). Plak hier integraal. */
    /* === Einde .pt-d namespace === */

    /* === Nieuwe regels specifiek voor /cafe/ === */

    /* Bas micro-card in hero */
    .pt-d .bas-micro {
      margin-top: 32px;
      display: flex; align-items: center; gap: 16px;
      padding: 16px;
      background: white; border: 1px solid var(--line);
      border-radius: 16px;
      max-width: 480px;
    }
    .pt-d .bas-micro img {
      width: 64px; height: 64px; flex-shrink: 0;
      object-fit: contain;
    }
    .pt-d .bas-micro p {
      margin: 0; font-size: 14px; color: var(--ink-soft); line-height: 1.5;
    }
    .pt-d .bas-micro p strong { color: var(--ink); }

    /* Eindblok met foto — twee-koloms */
    .pt-d .cta-photo {
      margin: 0 32px 96px;
      max-width: 1136px;
      margin-left: auto; margin-right: auto;
      background: var(--ink); color: var(--paper);
      border-radius: 24px; padding: 64px 48px;
      position: relative; overflow: hidden;
    }
    .pt-d .cta-photo::before {
      content: ''; position: absolute; inset: -20%;
      background: radial-gradient(circle at 50% 0%, rgba(255,106,31,0.22) 0%, transparent 50%);
      pointer-events: none;
    }
    .pt-d .cta-photo-grid {
      position: relative;
      display: grid; grid-template-columns: 280px 1fr; gap: 48px; align-items: center;
    }
    .pt-d .cta-photo img {
      width: 280px; height: auto; display: block;
    }
    .pt-d .cta-photo .pill {
      background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.18); color: var(--paper);
    }
    .pt-d .cta-photo h2 {
      font-family: 'Fat Frank', system-ui, sans-serif; font-weight: 400;
      font-size: clamp(32px, 4.4vw, 52px);
      line-height: 1.04; letter-spacing: -0.02em;
      margin: 16px 0;
    }
    .pt-d .cta-photo h2 em { color: #ff9355; font-style: italic; }
    .pt-d .cta-photo p { color: rgba(246,241,234,0.78); font-size: 17px; margin: 0 0 28px; max-width: 520px; }
    .pt-d .cta-photo .btn-row { display: flex; gap: 12px; flex-wrap: wrap; }
    .pt-d .cta-photo .btn-primary { background: var(--accent); color: white; }
    .pt-d .cta-photo .btn-primary:hover { background: white; color: var(--ink); }
    .pt-d .cta-photo .btn-primary .btn-arrow { background: var(--ink); color: var(--paper); }
    .pt-d .cta-photo .btn-ghost { background: transparent; color: var(--paper); border-color: rgba(255,255,255,0.25); }
    .pt-d .cta-photo .btn-ghost:hover { background: rgba(255,255,255,0.08); border-color: var(--paper); }
    .pt-d .cta-photo .disclaimer {
      margin-top: 20px; font-size: 13px; color: rgba(246,241,234,0.6);
    }

    /* Minimale footer — geen links */
    .pt-d .footer-min {
      padding: 32px 0;
      border-top: 1px solid var(--line);
      text-align: center;
      font-size: 13px;
      color: var(--ink-soft);
    }

    /* Hero visual op /cafe/ — bargefoto */
    .pt-d .hero-bar-photo {
      width: 100%; height: auto; display: block;
      border-radius: 20px;
      box-shadow: 0 30px 80px rgba(26,23,20,0.10);
      aspect-ratio: 4/3;
      object-fit: cover;
    }

    /* Responsive aanpassingen voor /cafe/-specifieke blokken */
    @media (max-width: 900px) {
      .pt-d .cta-photo { padding: 48px 32px; margin: 0 16px 64px; }
      .pt-d .cta-photo-grid { grid-template-columns: 1fr; gap: 32px; text-align: center; }
      .pt-d .cta-photo img { margin: 0 auto; width: 200px; }
      .pt-d .cta-photo .btn-row { justify-content: center; }
    }
    @media (max-width: 600px) {
      .pt-d .bas-micro { padding: 12px; gap: 12px; }
      .pt-d .bas-micro img { width: 52px; height: 52px; }
      .pt-d .cta-photo { padding: 40px 22px; margin: 0 12px 56px; border-radius: 16px; }
      .pt-d .cta-photo img { width: 160px; }
    }
  </style>

  <!-- Analytics + cookie consent (zelfde GA4 + privacy-banner als homepage) -->
  <script defer src="/assets/analytics.js" data-ga-id="G-PC0DQTYR5B"></script>
</head>
<body>
<div class="pt-root">
<div class="pt-d">

  <!-- Sections volgen in volgende tasks -->

</div>
</div>

<script>document.getElementById('yr') && (document.getElementById('yr').textContent = new Date().getFullYear());</script>
</body>
</html>
```

- [ ] **Step 3: Plak de homepage CSS in de gemarkeerde regel**

Open `index.html`, kopieer **alle CSS-regels** binnen het `<style>`-blok van regel 261 tot en met regel 743 (de hele `.pt-d` namespace inclusief responsive breakpoints en `prefers-reduced-motion`). Plak deze regels in `cafe/index.html` op de plek die nu de comment `/* COPY: alle .pt-d regels uit /index.html (regels 261 t/m 743). Plak hier integraal. */` bevat. Verwijder die comment-regel en plak de gekopieerde CSS daar.

Verifieer:
```bash
grep -c '.pt-d .btn-primary' cafe/index.html
```
Expected: ≥1 (de regel komt minstens één keer voor na het kopiëren).

- [ ] **Step 4: Verifieer de pagina laadt zonder errors**

Open `cafe/index.html` in een browser. Page should be blank (geen body content nog), maar background `#f0eee9` toont en geen console errors.

Run:
```bash
open "cafe/index.html"
```

- [ ] **Step 5: Commit**

```bash
git add cafe/index.html
git commit -m "Add /cafe/ HTML skeleton with head and base CSS"
```

---

## Task 3: NAV (minimaal — logo + 1 CTA, geen links)

**Files:**
- Modify: `cafe/index.html` (vervang `<!-- Sections volgen in volgende tasks -->` met de NAV)

- [ ] **Step 1: Voeg de NAV toe**

Vervang de comment `<!-- Sections volgen in volgende tasks -->` met dit blok:

```html
  <!-- NAV — minimaal: logo (niet klikbaar) + 1 CTA -->
  <nav class="nav">
    <div class="nav-inner">
      <span class="logo" aria-label="PubTrivia">
        <img src="/assets/pubtrivia-logo.png" alt="PubTrivia" class="logo-img">
      </span>
      <div class="nav-cta-row">
        <a href="https://wa.me/31681025396?text=Hoi%20Bas%2C%20ik%20zie%20jouw%20PubTrivia%20pagina%20%E2%80%94%20ik%20heb%20een%20kroeg%20in%20%5Bplaats%5D%20en%20wil%20wel%20even%20kennismaken" class="btn btn-primary">
          Stuur Bas een appje
          <span class="btn-arrow">→</span>
        </a>
      </div>
    </div>
  </nav>

  <!-- Hero komt in volgende task -->
```

Belangrijk: `<span class="logo">` in plaats van `<a class="logo">` — logo is bewust niet klikbaar, want we willen geen route terug naar homepage of elders. Geen interne anker-links, geen taal-switch.

- [ ] **Step 2: Verifieer NAV-structuur**

Run:
```bash
grep -c 'href="https://wa.me' cafe/index.html
grep -c 'href="/"' cafe/index.html
grep -c 'class="nav-links"' cafe/index.html
```
Expected: WhatsApp-link ≥1, geen href naar `/` (=0), geen `.nav-links` div (=0).

- [ ] **Step 3: Visuele check in browser**

Refresh `cafe/index.html`. Verwacht: paper-achtergrond met top-NAV — logo links, oranje "Stuur Bas een appje" knop rechts. Logo is niet klikbaar (cursor verandert niet). Geen andere links.

- [ ] **Step 4: Commit**

```bash
git add cafe/index.html
git commit -m "Add minimal NAV to /cafe/ (logo + single CTA)"
```

---

## Task 4: Hero sectie

Hero met hoofdbelofte links, kroeg-foto rechts, plus Bas micro-card onder de meta-strip.

**Files:**
- Modify: `cafe/index.html` (vervang `<!-- Hero komt in volgende task -->` met hero)

- [ ] **Step 1: Voeg hero-sectie toe**

Vervang de comment met:

```html
  <!-- HERO -->
  <section class="hero">
    <div class="wrap">
      <div class="hero-grid">
        <div>
          <div class="pill">Voor cafés in Weesp en omgeving</div>
          <h1>
            Een gratis pubquiz<br>
            die jouw rustige<br>
            <em>avonden vult.</em>
          </h1>
          <p class="lead">
            24/7 op je TV. Geen quizmaster, geen werk, geen kosten. Ik kom persoonlijk langs om het op te zetten en uit te leggen, gratis, vrijblijvend, een halfuurtje.
          </p>
          <div class="hero-cta">
            <a href="https://wa.me/31681025396?text=Hoi%20Bas%2C%20ik%20zie%20jouw%20PubTrivia%20pagina%20%E2%80%94%20ik%20heb%20een%20kroeg%20in%20%5Bplaats%5D%20en%20wil%20wel%20even%20kennismaken" class="btn btn-primary btn-lg">
              Stuur Bas een appje
              <span class="btn-arrow">→</span>
            </a>
            <a href="#bezoek" class="btn btn-ghost btn-lg">Lees eerst hoe het werkt</a>
          </div>
          <div class="hero-meta">
            <div class="hero-meta-item">Gratis</div>
            <div class="hero-meta-item">Eigen TV + wifi</div>
            <div class="hero-meta-item">TV blijft de hele dag aan</div>
          </div>
          <div class="bas-micro">
            <img src="/assets/bas-portrait.webp" alt="Bas Dumoulin, maker van PubTrivia">
            <p><strong>Hi, ik ben Bas.</strong> Ik woon in Weesp en bouw PubTrivia. Ik kom binnen ±45 min rijden bij je langs. Geen verkooppraat, gewoon laten zien wat 't is.</p>
          </div>
        </div>

        <div>
          <img src="/assets/amsterdam-bar.webp" alt="Amsterdamse kroeg met PubTrivia op de TV — gasten spelen mee" class="hero-bar-photo" loading="eager" width="1600" height="1200">
        </div>
      </div>
    </div>
  </section>

  <!-- Fact-strip komt in volgende task -->
```

Let op: de `<a href="#bezoek">` ankert naar de "Hoe een bezoek werkt"-sectie die we in Task 6 toevoegen met `id="bezoek"`.

- [ ] **Step 2: Verifieer hero-structuur**

Run:
```bash
grep -c 'class="hero"' cafe/index.html
grep -c 'bas-portrait.webp' cafe/index.html
grep -c 'amsterdam-bar.webp' cafe/index.html
grep -c 'Een gratis pubquiz' cafe/index.html
```
Expected: alle counts ≥1.

- [ ] **Step 3: Visuele check**

Refresh in browser. Verwacht: H1 met "Een gratis pubquiz die jouw rustige avonden vult" (laatste regel in oranje accent). Lead-tekst eronder. Twee CTAs. Drie meta-vinkjes. Bas micro-card met foto links onderaan. Rechts groot: amsterdam-bar foto.

- [ ] **Step 4: Commit**

```bash
git add cafe/index.html
git commit -m "Add hero section to /cafe/ with Bas micro-card"
```

---

## Task 5: Fact-strip (4 vakken)

**Files:**
- Modify: `cafe/index.html` (vervang `<!-- Fact-strip komt in volgende task -->`)

- [ ] **Step 1: Voeg fact-strip toe**

```html
  <!-- FACT-STRIP -->
  <section style="background:white">
    <div class="wrap">
      <div class="facts">
        <div class="fact">
          <div class="fact-num"><em>Vollere</em></div>
          <div class="fact-label">avonden — op de uren die nu leeg staan</div>
        </div>
        <div class="fact">
          <div class="fact-num"><em>10</em> min</div>
          <div class="fact-label">van TV tot eerste vraag</div>
        </div>
        <div class="fact">
          <div class="fact-num">24/<em>7</em></div>
          <div class="fact-label">aan = aan, geen avond missen</div>
        </div>
        <div class="fact">
          <div class="fact-num"><em>Geen</em></div>
          <div class="fact-label">quizmaster, geen training, geen werk</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits komt in volgende task -->
```

- [ ] **Step 2: Verifieer**

```bash
grep -c 'class="facts"' cafe/index.html
grep -c 'Vollere' cafe/index.html
```
Expected: ≥1 voor beide.

- [ ] **Step 3: Visuele check**

Refresh. Verwacht: witte strip onder hero met 4 vakken — Vollere / 10 min / 24/7 / Geen.

- [ ] **Step 4: Commit**

```bash
git add cafe/index.html
git commit -m "Add fact-strip to /cafe/"
```

---

## Task 6: Concrete benefits (6 stuks)

**Files:**
- Modify: `cafe/index.html` (vervang `<!-- Benefits komt in volgende task -->`)

- [ ] **Step 1: Voeg benefits-sectie toe**

```html
  <!-- BENEFITS -->
  <section class="features">
    <div class="wrap">
      <div class="features-head">
        <div class="features-eyebrow">Waarom PubTrivia</div>
        <h2>Wat het concreet doet<br>voor <em>je kroeg.</em></h2>
        <p class="features-sub">Geen marketingpraat, gewoon wat er gebeurt als die TV aanstaat.</p>
      </div>
      <div class="benefits-grid">
        <div class="benefit">
          <div class="benefit-num">01</div>
          <div>
            <h3>Vollere bar op je rustige avonden</h3>
            <p>Geef gasten een reden om binnen te komen op dinsdag en woensdag. Niet alleen een biertje halen, maar blijven hangen.</p>
          </div>
        </div>
        <div class="benefit">
          <div class="benefit-num">02</div>
          <div>
            <h3>Eén rondje extra per gezelschap</h3>
            <p>Mensen blijven plakken zolang de quiz draait. Ze bestellen een tweede biertje gewoon omdat ze de ronde willen afmaken.</p>
          </div>
        </div>
        <div class="benefit">
          <div class="benefit-num">03</div>
          <div>
            <h3>Geen werk voor je personeel</h3>
            <p>De quiz draait zichzelf. Geen quizmaster, geen vragen voorbereiden, geen scores bijhouden. Personeel doet wat ze altijd doen, tappen.</p>
          </div>
        </div>
        <div class="benefit">
          <div class="benefit-num">04</div>
          <div>
            <h3>Promoot je eigen menu op de TV</h3>
            <p>Tussen rondes laat het scherm jouw aanbieding zien. Borrelhapje 9 euro. Dagaanbeveling. Met jouw logo.</p>
          </div>
        </div>
        <div class="benefit">
          <div class="benefit-num">05</div>
          <div>
            <h3>24/7 vanzelf, ook als jij vrij bent</h3>
            <p>Aanzetten en vergeten. De TV draait 's middags, 's avonds, op de vrije zondag. Gasten die binnenlopen hebben meteen iets te doen.</p>
          </div>
        </div>
        <div class="benefit">
          <div class="benefit-num">06</div>
          <div>
            <h3>Werkt in Nederlands én Engels</h3>
            <p>Quizvragen in beide talen. Toeristen scannen de QR-code en spelen mee in hun taal, naast je Nederlandse stamgasten.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Bezoek komt in volgende task -->
```

- [ ] **Step 2: Verifieer**

```bash
grep -c 'class="benefit"' cafe/index.html
grep -c '\'s middags' cafe/index.html
```
Expected: 6 benefits, "'s middags" minstens 1.

- [ ] **Step 3: Visuele check**

Refresh. Verwacht: 2-kolomgrid met 6 benefits, oranje 01-06 nummers, headlines en uitleg.

- [ ] **Step 4: Commit**

```bash
git add cafe/index.html
git commit -m "Add 6 concrete benefits to /cafe/"
```

---

## Task 7: Hoe een bezoek werkt (3 stappen)

**Files:**
- Modify: `cafe/index.html` (vervang `<!-- Bezoek komt in volgende task -->`)

- [ ] **Step 1: Voeg bezoek-sectie toe**

```html
  <!-- BEZOEK — 3 stappen -->
  <section class="how" id="bezoek">
    <div class="wrap">
      <div class="how-grid">
        <div>
          <div class="pill">Bezoek</div>
          <h2>Hoe een bezoek<br><em>werkt.</em></h2>
          <p style="color:var(--ink-soft);margin-bottom:32px">Ik kom bij je langs. Gewoon een halfuurtje om te laten zien wat het is.</p>
          <ol class="step-list">
            <li class="step-item">
              <div>
                <h3>Stuur een appje</h3>
                <p>Je laat weten wanneer 't past. Een doordeweekse middag of voor opening werkt meestal het beste.</p>
              </div>
            </li>
            <li class="step-item">
              <div>
                <h3>Ik kom langs bij jou in de zaak</h3>
                <p>Ik draai de quiz op mijn laptop, we kijken samen of 't past in jouw kroeg.</p>
              </div>
            </li>
            <li class="step-item">
              <div>
                <h3>Als je wilt: dezelfde middag opgezet</h3>
                <p>TV koppelen, QR-codes printen, eerste vraag draaien. Klaar in tien minuten. Wil je 't niet, ook prima. Geen verplichting.</p>
              </div>
            </li>
          </ol>
        </div>
        <div class="how-visual">
          <img class="how-sticker" src="/assets/qr-sticker.webp" alt="PubTrivia QR-sticker — Scan To Play" loading="lazy" width="920" height="894">
        </div>
      </div>
    </div>
  </section>

  <!-- Kroeg-foto komt in volgende task -->
```

- [ ] **Step 2: Verifieer**

```bash
grep -c 'id="bezoek"' cafe/index.html
grep -c 'Ik kom bij je langs' cafe/index.html
grep -c 'Als je wilt' cafe/index.html
```
Expected: alle ≥1.

- [ ] **Step 3: Visuele check**

Refresh, scroll naar bezoek-sectie. Verwacht: drie genummerde stappen links, QR-sticker visual rechts. Click op "Lees eerst hoe het werkt"-knop in hero scrollt netjes naar deze sectie (anchor `#bezoek` werkt).

- [ ] **Step 4: Commit**

```bash
git add cafe/index.html
git commit -m "Add bezoek section (3 steps) to /cafe/"
```

---

## Task 8: Kroeg-foto met caption

**Files:**
- Modify: `cafe/index.html` (vervang `<!-- Kroeg-foto komt in volgende task -->`)

- [ ] **Step 1: Voeg kroeg-foto sectie toe**

```html
  <!-- KROEG-FOTO -->
  <section style="padding:0 0 80px">
    <div class="wrap">
      <img src="/assets/amsterdam-bar.webp" alt="Amsterdamse kroeg op woensdagavond met PubTrivia op de TV" loading="lazy" width="1600" height="905" style="width:100%;height:auto;display:block;border-radius:24px">
      <p style="text-align:center;font-size:15px;color:var(--ink-soft);margin-top:20px">Zo ziet het eruit op een woensdagavond. De TV doet het werk, jij doet wat je altijd doet.</p>
    </div>
  </section>

  <!-- FAQ komt in volgende task -->
```

- [ ] **Step 2: Verifieer**

```bash
grep -c 'Zo ziet het eruit op een woensdagavond' cafe/index.html
```
Expected: ≥1.

- [ ] **Step 3: Visuele check**

Refresh. Verwacht: volle-breedte foto, afgeronde hoeken, caption-tekst eronder gecentreerd.

- [ ] **Step 4: Commit**

```bash
git add cafe/index.html
git commit -m "Add full-width bar photo with caption to /cafe/"
```

---

## Task 9: FAQ (5 vragen)

**Files:**
- Modify: `cafe/index.html` (vervang `<!-- FAQ komt in volgende task -->`)

- [ ] **Step 1: Voeg FAQ-sectie toe**

```html
  <!-- FAQ — 5 vragen -->
  <section class="faq" id="faq">
    <div class="wrap">
      <div class="faq-grid">
        <h2>Vragen<br>die je nu <em>hebt.</em></h2>
        <div class="faq-list">
          <details class="faq-item" open>
            <summary>Hoe kan dit gratis zijn?</summary>
            <p>Tussen de quizrondes draaien er korte advertenties van lokale bedrijven en evenementen op het scherm. Dat is hoe wij geld verdienen, niet via jou. De basisversie blijft gratis.</p>
          </details>
          <details class="faq-item">
            <summary>Wat als niemand meespeelt?</summary>
            <p>De TV laat ook zonder spelers vragen, weetjes en jouw eigen aanbiedingen zien. Vaak begint één tafel, daarna volgt de rest.</p>
          </details>
          <details class="faq-item">
            <summary>Wat heb ik aan apparatuur nodig?</summary>
            <p>Een TV met HDMI-ingang en wifi. Wij leveren een TV stick waarmee het meteen werkt.</p>
          </details>
          <details class="faq-item">
            <summary>Hoe stop ik als het niks is?</summary>
            <p>Eén appje, ik kom 'm ophalen of je trekt de stekker eruit. Geen contract, geen opzegtermijn, geen kosten.</p>
          </details>
          <details class="faq-item">
            <summary>Kan ik 'm alleen op rustige avonden gebruiken?</summary>
            <p>Ja. Zet de TV gewoon uit op de avonden dat je 'm niet wilt. De quiz pakt vanzelf weer op als je 'm weer aanzet.</p>
          </details>
        </div>
      </div>
    </div>
  </section>

  <!-- Eindblok komt in volgende task -->
```

- [ ] **Step 2: Verifieer**

```bash
grep -c 'class="faq-item"' cafe/index.html
grep -c 'TV stick' cafe/index.html
```
Expected: precies 5 faq-items, "TV stick" ≥1.

- [ ] **Step 3: Visuele check**

Refresh, scroll naar FAQ. Verwacht: 5 vragen, eerste open. Klik op vraag 2: opent, klik nogmaals: sluit. Geen vragen over "Wat als er iets kapot gaat?" (die is weg).

- [ ] **Step 4: Commit**

```bash
git add cafe/index.html
git commit -m "Add FAQ (5 questions) to /cafe/"
```

---

## Task 10: Eindblok CTA (donker, met foto)

**Files:**
- Modify: `cafe/index.html` (vervang `<!-- Eindblok komt in volgende task -->`)

- [ ] **Step 1: Voeg eindblok toe**

```html
  <!-- EINDBLOK CTA -->
  <section style="padding:0">
    <div class="cta-photo">
      <div class="cta-photo-grid">
        <img src="/assets/bas-portrait.webp" alt="Bas Dumoulin, maker van PubTrivia">
        <div>
          <div class="pill">Voor cafés in Weesp en omgeving</div>
          <h2>Klaar om meer omzet te gaan draaien? <em>Nodig me uit!</em></h2>
          <p>Stuur een appje wanneer 't past. Ik kom langs, laat zien wat 't is, en als je wilt zetten we 'm dezelfde middag op.</p>
          <div class="btn-row">
            <a href="https://wa.me/31681025396?text=Hoi%20Bas%2C%20ik%20zie%20jouw%20PubTrivia%20pagina%20%E2%80%94%20ik%20heb%20een%20kroeg%20in%20%5Bplaats%5D%20en%20wil%20wel%20even%20kennismaken" class="btn btn-primary btn-lg">
              Stuur Bas een appje
              <span class="btn-arrow">→</span>
            </a>
            <a href="mailto:info@pub-trivia.nl?subject=PubTrivia%20bij%20mijn%20kroeg&body=Hoi%20Bas%2C%0A%0AIk%20heb%20een%20kroeg%20in%20%5Bplaats%5D.%20Wanneer%20kun%20je%20langskomen%3F" class="btn btn-ghost btn-lg">Mail Bas</a>
          </div>
          <div class="disclaimer">Geen contract, geen opzegtermijn.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer komt in volgende task -->
```

- [ ] **Step 2: Verifieer**

```bash
grep -c 'class="cta-photo"' cafe/index.html
grep -c 'Klaar om meer omzet' cafe/index.html
grep -c 'mailto:info@pub-trivia.nl' cafe/index.html
```
Expected: alle ≥1.

- [ ] **Step 3: Visuele check**

Refresh. Verwacht: donker afgerond eindblok, foto van Bas links groot (~280px), tekst rechts, twee knoppen (WhatsApp primair, Mail secundair), disclaimer-regel onderaan.

- [ ] **Step 4: Commit**

```bash
git add cafe/index.html
git commit -m "Add eindblok CTA with Bas portrait to /cafe/"
```

---

## Task 11: Footer (minimaal, geen links)

**Files:**
- Modify: `cafe/index.html` (vervang `<!-- Footer komt in volgende task -->`)

- [ ] **Step 1: Voeg minimale footer toe**

```html
  <!-- FOOTER — minimaal, geen klikbare links -->
  <footer class="footer-min">
    <div class="wrap">
      © <span id="yr"></span> WonderLoop · KVK 91926440 · Amsterdam-Weesp
    </div>
  </footer>
```

Belangrijk: deze footer overschrijft NIET de bestaande `<footer>` CSS uit homepage want we gebruiken `class="footer-min"`. De homepage-footer-rules (`.pt-d footer`) zouden hier ook kunnen werken, maar `.footer-min` heeft een eigen schone definitie zonder grid of links.

- [ ] **Step 2: Verifieer**

```bash
grep -c 'class="footer-min"' cafe/index.html
grep -c 'class="footer-grid"' cafe/index.html
grep -c '<a href="/voorwaarden"' cafe/index.html
grep -c '<a href="/privacy"' cafe/index.html
```
Expected: `footer-min` ≥1, `footer-grid` = 0, voorwaarden/privacy links = 0 (privacy is via cookie-banner).

- [ ] **Step 3: Visuele check**

Refresh, scroll naar onder. Verwacht: dunne grijze regel met "© 2026 WonderLoop · KVK 91926440 · Amsterdam-Weesp", gecentreerd. Geen klikbare links. Het `<span id="yr">` wordt door de bestaande inline-script aan het eind van de body gevuld met het huidige jaar.

- [ ] **Step 4: Commit**

```bash
git add cafe/index.html
git commit -m "Add minimal link-less footer to /cafe/"
```

---

## Task 12: Sitemap update

**Files:**
- Modify: `sitemap.xml`

- [ ] **Step 1: Lees huidige sitemap**

Run:
```bash
cat sitemap.xml
```

- [ ] **Step 2: Voeg URL-entry voor `/cafe/` toe**

Voeg vóór de afsluitende `</urlset>` deze entry toe:

```xml
  <url>
    <loc>https://pub-trivia.nl/cafe/</loc>
    <lastmod>2026-05-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
```

Houd indentatie consistent met de bestaande URL-entries.

- [ ] **Step 3: Verifieer**

```bash
grep -c '<loc>https://pub-trivia.nl/cafe/</loc>' sitemap.xml
xmllint --noout sitemap.xml && echo "XML valid"
```
Expected: ≥1 entry, XML valid (geen errors).

Als `xmllint` niet beschikbaar is, sla die check over (de site host is statisch en deze validatie is een nice-to-have).

- [ ] **Step 4: Commit**

```bash
git add sitemap.xml
git commit -m "Add /cafe/ to sitemap"
```

---

## Task 13: End-to-end verificatie en deploy-ready check

**Files:** geen wijzigingen, alleen verificatie.

- [ ] **Step 1: Volledige visuele review in browser**

Run:
```bash
open "cafe/index.html"
```

Loop door deze checklist (vinkje af in dit document, of noteer issues):

- [ ] NAV: alleen logo (niet klikbaar) + één oranje "Stuur Bas een appje" knop
- [ ] Hero: H1 met "Een gratis pubquiz die jouw rustige avonden vult" (laatste regel oranje)
- [ ] Hero links: pill, H1, lead, 2 CTAs, 3 meta-vinkjes, Bas micro-card
- [ ] Hero rechts: amsterdam-bar foto, afgeronde hoeken
- [ ] Fact-strip: 4 vakken (Vollere · 10 min · 24/7 · Geen)
- [ ] Benefits: 6 cards in 2-koloms grid met oranje nummers
- [ ] Bezoek: 3 stappen + QR-sticker visual rechts
- [ ] Klik "Lees eerst hoe het werkt"-knop in hero: scrollt naar bezoek-sectie
- [ ] Kroeg-foto: volle-breedte foto + caption "Zo ziet het eruit op een woensdagavond..."
- [ ] FAQ: 5 vragen, eerste open, accordion werkt
- [ ] Eindblok: donker, foto van Bas links groot, "Klaar om meer omzet..."-H2, 2 knoppen
- [ ] Footer: één grijze regel met © + KVK, geen klikbare links
- [ ] Klik WhatsApp-knop: opent WhatsApp-app of `wa.me` met prefilled tekst
- [ ] Klik Mail-knop in eindblok: opent mailclient met prefilled subject/body

- [ ] **Step 2: Responsive check**

Open browser dev tools, schaal naar 800px (tablet) en 400px (mobiel). Verifieer:

- [ ] Tablet (≤900px): hero-grid wordt 1 kolom, fact-strip 2×2, benefits 1 kolom, eindblok foto onder tekst gecentreerd
- [ ] Mobiel (≤600px): logo kleiner, knoppen kleiner, fact-strip 1 kolom, Bas micro-card kleinere foto

- [ ] **Step 3: Verifieer geen verboden patronen in copy**

```bash
grep -E '(\bcruciaal\b|\bgame-changing\b|\bdelve\b|\bfoster\b|\btapestry\b|\blandscape\b|\brevolutionary\b|\binsane\b)' cafe/index.html || echo "Geen hype/AI-woorden gevonden"
grep -E '—' cafe/index.html && echo "WAARSCHUWING: em-dashes gevonden" || echo "Geen em-dashes"
```
Expected: geen matches voor hype-woorden, geen em-dashes (alleen normale streepjes of comma's).

Als em-dashes worden gevonden: vervang door komma's of normale streepjes (`-`).

- [ ] **Step 4: Verifieer dat geen privacy/voorwaarden-links lekken**

```bash
grep -E 'href="/(privacy|voorwaarden)"' cafe/index.html && echo "WAARSCHUWING: directe privacy/voorwaarden link gevonden" || echo "OK: geen footer-links"
```
Expected: geen matches. Privacy is alleen bereikbaar via de cookie-banner (`assets/analytics.js`).

- [ ] **Step 5: Final commit indien nodig**

Als alle checks slagen, geen extra commit nodig. Als fixes gedaan zijn:

```bash
git add cafe/index.html
git commit -m "Polish /cafe/ — fix copy/styling per verification"
```

- [ ] **Step 6: Mark plan complete**

```bash
git log --oneline -15
```
Expected: zie de chronologische sequence van /cafe/ commits.

---

## Self-Review

### Spec coverage

| Spec-sectie | Task | OK? |
|------------|------|-----|
| Doel + onderscheid van homepage | Heel plan | ✓ |
| URL `/cafe/` + niet in NAV | Task 2 (dir), niet wijzigen homepage | ✓ |
| NL-only | Geen `/en/cafe/` aangemaakt | ✓ |
| Sectie 1: NAV minimaal | Task 3 | ✓ |
| Sectie 2: Hero + Bas microblok | Task 4 | ✓ |
| Sectie 3: Fact-strip (4 vakken) | Task 5 | ✓ |
| Sectie 4: 6 benefits | Task 6 | ✓ |
| Sectie 5: Hoe een bezoek werkt (3 stappen) | Task 7 | ✓ |
| Sectie 6: Kroeg-foto + caption | Task 8 | ✓ |
| Sectie 7: FAQ (5 vragen) | Task 9 | ✓ |
| Sectie 8: Eindblok CTA met Bas-foto links | Task 10 | ✓ |
| Sectie 9: Minimale footer zonder links | Task 11 | ✓ |
| Assets: bas-portrait | Task 1 | ✓ |
| Assets: amsterdam-bar hergebruik | Task 4 + Task 8 | ✓ |
| FAQ JSON-LD schema | Task 2 (head) | ✓ |
| Sitemap update | Task 12 | ✓ |
| Geen NAV-link homepage → /cafe/ | (niet gewijzigd, OK) | ✓ |
| Privacy via cookie-banner | Bestaand `analytics.js` ingeladen in Task 2 | ✓ |
| Acceptatiecriteria (responsive, FAQ accordion, etc.) | Task 13 | ✓ |

Alle spec-secties hebben een implementerende task.

### Placeholder scan

- Geen "TBD" of "TODO" steps.
- Alle code-blokken bevatten complete, plak-klare content.
- Geen "similar to Task N" — elke task heeft volledige HTML.
- Verificatie-steps hebben concrete `grep`-commando's en verwachte uitkomsten.

### Type consistency

- WhatsApp-link is overal identiek (zelfde URL + prefilled tekst): NAV, Hero CTA, Eindblok CTA.
- Mail-link consistent: alleen in Eindblok.
- CSS-classes consistent: `.bas-micro` (Task 2 + Task 4), `.cta-photo` (Task 2 + Task 10), `.footer-min` (Task 2 + Task 11), `.hero-bar-photo` (Task 2 + Task 4).
- Asset-paden absoluut: `/assets/...` overal (werkt voor `/cafe/index.html` op pub-trivia.nl).
