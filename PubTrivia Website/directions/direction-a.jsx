/* =========================================================
   DIRECTION A — EDITORIAL PREMIUM
   Inspired by Orbit. Warm cream + ink, generous whitespace,
   confident type, refined buttons, mascots used as accent art.
   ========================================================= */

const DirectionA = () => {
  return (
    <div className="pt-a">
      <style>{`
        .pt-a {
          --ink: #1a1714;
          --ink-soft: #4a4441;
          --paper: #f6f1ea;
          --paper-warm: #ede5d6;
          --line: #d9cfbf;
          --accent: #ff6a1f;
          --accent-soft: #ffe8d6;
          --green: #1a8f4a;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          color: var(--ink);
          background: var(--paper);
          line-height: 1.45;
          -webkit-font-smoothing: antialiased;
          font-size: 16px;
        }
        .pt-a .display { font-family: 'Fat Frank', system-ui, sans-serif; font-weight: 400; letter-spacing: -0.01em; line-height: 1; }
        .pt-a .wrap { max-width: 1240px; margin: 0 auto; padding: 0 32px; }

        /* NAV */
        .pt-a .nav {
          display: flex; align-items: center; justify-content: space-between;
          padding: 24px 32px; max-width: 1240px; margin: 0 auto;
        }
        .pt-a .nav-logo { display: flex; align-items: center; gap: 10px; font-family: 'Fat Frank', sans-serif; font-size: 22px; text-decoration: none; color: inherit; }
        .pt-a .nav-logo-img { height: 44px; width: auto; display: block; }
        .pt-a .nav-logo-mark {
          width: 30px; height: 30px; border-radius: 50%; background: var(--accent);
          display: flex; align-items: center; justify-content: center; color: white;
          font-size: 16px; font-family: 'Fat Frank', sans-serif;
        }
        .pt-a .nav-links { display: flex; gap: 36px; font-size: 15px; color: var(--ink-soft); }
        .pt-a .nav-links a:hover { color: var(--ink); }
        .pt-a .nav-cta {
          background: var(--ink); color: var(--paper); padding: 10px 18px; border-radius: 100px;
          font-size: 14px; font-weight: 500; transition: background 150ms;
        }
        .pt-a .nav-cta:hover { background: var(--accent); }

        /* HERO */
        .pt-a .hero { padding: 72px 0 96px; position: relative; overflow: hidden; }
        .pt-a .hero-grid {
          display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 64px; align-items: center;
        }
        .pt-a .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 500; color: var(--ink-soft);
          text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 28px;
        }
        .pt-a .eyebrow::before {
          content: ''; width: 8px; height: 8px; border-radius: 50%; background: var(--accent);
        }
        .pt-a .hero h1 {
          font-size: clamp(48px, 6.4vw, 84px);
          letter-spacing: -0.025em;
          line-height: 0.95;
          margin-bottom: 28px;
          font-family: 'Fraunces', 'Fat Frank', Georgia, serif;
          font-weight: 400;
        }
        .pt-a .hero h1 em {
          font-style: italic;
          color: var(--accent);
          font-family: 'Fraunces', Georgia, serif;
        }
        .pt-a .hero p.lead {
          font-size: 19px; color: var(--ink-soft); max-width: 480px;
          margin-bottom: 36px; line-height: 1.5;
        }
        .pt-a .hero-cta { display: flex; align-items: center; gap: 16px; }

        /* BUTTONS — refined */
        .pt-a .btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 24px; border-radius: 100px;
          font-size: 15px; font-weight: 500; border: none;
          transition: all 180ms cubic-bezier(.4,0,.2,1);
        }
        .pt-a .btn-primary { background: var(--ink); color: var(--paper); }
        .pt-a .btn-primary:hover { background: var(--accent); transform: translateY(-1px); }
        .pt-a .btn-ghost { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .pt-a .btn-ghost:hover { background: white; border-color: var(--ink); }
        .pt-a .btn-arrow {
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--accent); display: inline-flex; align-items: center; justify-content: center;
          color: white; font-size: 11px;
        }
        .pt-a .btn-primary .btn-arrow { background: var(--paper); color: var(--ink); }

        .pt-a .hero-mascot-wrap {
          position: relative; display: flex; justify-content: center;
        }
        .pt-a .hero-mascot {
          width: 100%; max-width: 480px;
          filter: drop-shadow(0 30px 50px rgba(26,23,20,0.18));
          animation: ptABob 5s ease-in-out infinite;
        }
        @keyframes ptABob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(-1deg); }
        }
        .pt-a .hero-blob {
          position: absolute; inset: 0; z-index: 0;
          background: radial-gradient(circle at 50% 50%, var(--accent-soft) 0%, transparent 60%);
        }

        /* QUICK FACTS — under hero */
        .pt-a .facts {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
          border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
          margin-top: 24px;
        }
        .pt-a .fact { padding: 28px 24px; border-right: 1px solid var(--line); }
        .pt-a .fact:last-child { border-right: none; }
        .pt-a .fact-num {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 44px; line-height: 1; margin-bottom: 8px;
          letter-spacing: -0.02em;
        }
        .pt-a .fact-num em { font-style: italic; color: var(--accent); }
        .pt-a .fact-label { font-size: 14px; color: var(--ink-soft); }

        /* SECTION HEADERS */
        .pt-a section { padding: 96px 0; }
        .pt-a .section-head { max-width: 720px; margin-bottom: 56px; }
        .pt-a .section-head .eyebrow { margin-bottom: 16px; }
        .pt-a .section-head h2 {
          font-size: clamp(36px, 4vw, 56px);
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 400; letter-spacing: -0.02em; line-height: 1.05;
        }
        .pt-a .section-head h2 em { font-style: italic; color: var(--accent); }
        .pt-a .section-head p { color: var(--ink-soft); font-size: 17px; margin-top: 16px; max-width: 560px; }

        /* HOW IT WORKS */
        .pt-a .how { background: white; }
        .pt-a .how-steps {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px;
        }
        .pt-a .step-card {
          padding: 32px; border: 1px solid var(--line); border-radius: 16px;
          background: var(--paper); transition: all 200ms;
        }
        .pt-a .step-card:hover { transform: translateY(-4px); border-color: var(--ink); }
        .pt-a .step-num {
          font-family: 'Fraunces', Georgia, serif;
          font-style: italic; font-size: 56px;
          color: var(--accent); line-height: 1; margin-bottom: 24px;
        }
        .pt-a .step-card h3 {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 24px; letter-spacing: -0.01em;
          font-weight: 500; margin-bottom: 10px;
        }
        .pt-a .step-card p { color: var(--ink-soft); font-size: 15px; }
        .pt-a .step-shot {
          margin-top: 24px; aspect-ratio: 4/3; border-radius: 10px;
          background: var(--paper-warm); overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        .pt-a .step-shot img { width: 100%; height: 100%; object-fit: cover; }

        /* BENEFITS */
        .pt-a .benefits-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px;
          background: var(--line); border: 1px solid var(--line); border-radius: 16px; overflow: hidden;
        }
        .pt-a .benefit {
          background: var(--paper); padding: 36px 36px 40px;
          display: flex; gap: 20px; transition: background 150ms;
        }
        .pt-a .benefit:hover { background: white; }
        .pt-a .benefit-num {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 14px; font-style: italic; color: var(--accent);
          flex-shrink: 0; padding-top: 4px; min-width: 28px;
        }
        .pt-a .benefit h3 {
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 500; font-size: 22px; margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .pt-a .benefit p { color: var(--ink-soft); font-size: 15px; }

        /* IN ACTION — big visual */
        .pt-a .action {
          background: var(--ink); color: var(--paper);
          border-radius: 24px; padding: 64px; margin: 0 32px;
          max-width: 1176px; margin-left: auto; margin-right: auto;
          position: relative; overflow: hidden;
        }
        .pt-a .action-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center;
        }
        .pt-a .action h2 {
          font-family: 'Fraunces', Georgia, serif; font-weight: 400;
          font-size: clamp(32px, 3.6vw, 48px); letter-spacing: -0.02em;
          line-height: 1.05; margin-bottom: 20px;
        }
        .pt-a .action h2 em { font-style: italic; color: #ff9355; }
        .pt-a .action p { color: rgba(246,241,234,0.7); font-size: 17px; margin-bottom: 32px; max-width: 440px; }
        .pt-a .action-screens {
          position: relative; aspect-ratio: 4/3;
        }
        .pt-a .action-tv {
          position: absolute; top: 8%; left: 0; width: 78%;
          border-radius: 12px; overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
          border: 8px solid #2a2520;
        }
        .pt-a .action-phone {
          position: absolute; bottom: 0; right: 0; width: 32%;
          border-radius: 18px; overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          border: 4px solid #2a2520;
          transform: rotate(4deg);
        }
        .pt-a .action .btn-primary { background: var(--paper); color: var(--ink); }
        .pt-a .action .btn-primary:hover { background: var(--accent); color: white; }

        /* TESTIMONIAL */
        .pt-a .quote {
          padding: 96px 0;
          text-align: center;
        }
        .pt-a .quote-text {
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 400; font-style: italic;
          font-size: clamp(28px, 3vw, 42px);
          letter-spacing: -0.015em; line-height: 1.15;
          max-width: 880px; margin: 0 auto 32px;
        }
        .pt-a .quote-text::before, .pt-a .quote-text::after { color: var(--accent); }
        .pt-a .quote-author { font-size: 15px; color: var(--ink-soft); }
        .pt-a .quote-author strong { color: var(--ink); font-weight: 600; }

        /* FAQ */
        .pt-a .faq-grid { max-width: 820px; margin: 0 auto; }
        .pt-a .faq-item {
          border-bottom: 1px solid var(--line);
          padding: 24px 0;
        }
        .pt-a .faq-item summary {
          list-style: none; cursor: pointer;
          display: flex; justify-content: space-between; align-items: center;
          font-family: 'Fraunces', Georgia, serif; font-size: 22px;
          font-weight: 500; letter-spacing: -0.01em;
        }
        .pt-a .faq-item summary::-webkit-details-marker { display: none; }
        .pt-a .faq-item summary::after {
          content: '+'; font-family: 'Fraunces', serif; font-style: italic;
          color: var(--accent); font-size: 28px; transition: transform 200ms;
        }
        .pt-a .faq-item[open] summary::after { transform: rotate(45deg); }
        .pt-a .faq-item p { color: var(--ink-soft); font-size: 16px; margin-top: 12px; max-width: 620px; }

        /* CTA */
        .pt-a .cta-final {
          background: var(--accent); color: white;
          border-radius: 24px; padding: 80px 48px;
          margin: 0 32px 96px; max-width: 1176px;
          margin-left: auto; margin-right: auto;
          text-align: center;
          position: relative; overflow: hidden;
        }
        .pt-a .cta-final h2 {
          font-family: 'Fraunces', Georgia, serif; font-weight: 400;
          font-size: clamp(40px, 5vw, 68px); letter-spacing: -0.02em;
          line-height: 1; margin-bottom: 20px;
        }
        .pt-a .cta-final h2 em { font-style: italic; }
        .pt-a .cta-final p { font-size: 18px; opacity: 0.92; margin-bottom: 36px; max-width: 520px; margin-left: auto; margin-right: auto; }
        .pt-a .cta-final .btn-primary { background: var(--ink); color: var(--paper); }
        .pt-a .cta-final .btn-primary:hover { background: white; color: var(--ink); }
        .pt-a .cta-final .btn-primary .btn-arrow { background: var(--accent); color: white; }
        .pt-a .cta-mascot {
          position: absolute; right: -40px; bottom: -20px;
          width: 240px; opacity: 0.95;
          filter: drop-shadow(0 12px 30px rgba(0,0,0,0.2));
        }

        /* FOOTER */
        .pt-a footer {
          padding: 48px 0; border-top: 1px solid var(--line);
          font-size: 14px; color: var(--ink-soft);
        }
        .pt-a .footer-grid {
          display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 32px;
        }
        .pt-a footer h4 { font-family: 'Fraunces', serif; font-size: 16px; margin-bottom: 16px; color: var(--ink); font-weight: 500; }
        .pt-a footer ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .pt-a footer a:hover { color: var(--ink); }
        .pt-a .footer-legal {
          margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--line);
          display: flex; justify-content: space-between; font-size: 13px;
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="#" className="nav-logo" aria-label="PubTrivia">
          <img src="assets/pubtrivia-logo.png" alt="PubTrivia" className="nav-logo-img" />
        </a>
        <div className="nav-links">
          <a href="#how">Hoe het werkt</a>
          <a href="#why">Waarom</a>
          <a href="#faq">Vragen</a>
        </div>
        <a href="#demo" className="nav-cta">Vraag een demo aan</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Voor de Nederlandse horeca</div>
              <h1>
                Maak van je<br />
                rustige avond een<br />
                <em>volle kroeg.</em>
              </h1>
              <p className="lead">
                PubTrivia draait 24/7 op je TV. Gasten spelen mee op hun telefoon, blijven langer hangen, en bestellen één rondje extra. Jij hoeft niets te doen.
              </p>
              <div className="hero-cta">
                <a href="#demo" className="btn btn-primary">
                  Vraag een demo aan
                  <span className="btn-arrow">→</span>
                </a>
                <a href="#how" className="btn btn-ghost">Zo werkt het</a>
              </div>
            </div>
            <div className="hero-mascot-wrap">
              <div className="hero-blob"></div>
              <img className="hero-mascot" src="assets/monster-duo.webp" alt="" />
            </div>
          </div>

          <div className="facts">
            <div className="fact">
              <div className="fact-num"><em>10</em></div>
              <div className="fact-label">pilotkroegen gezocht — drie maanden gratis</div>
            </div>
            <div className="fact">
              <div className="fact-num">24/<em>7</em></div>
              <div className="fact-label">automatisch — geen quizmaster</div>
            </div>
            <div className="fact">
              <div className="fact-num"><em>10</em> min</div>
              <div className="fact-label">van HDMI tot eerste vraag</div>
            </div>
            <div className="fact">
              <div className="fact-num">3 mnd</div>
              <div className="fact-label">gratis pilot — geen creditcard</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="how" id="how">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Hoe het werkt</div>
            <h2>Drie stappen.<br /><em>Nul gedoe.</em></h2>
            <p>Je gasten kennen QR-codes al van het bestellen. Voor jou: TV aan en klaar.</p>
          </div>
          <div className="how-steps">
            <div className="step-card">
              <div className="step-num">i.</div>
              <h3>Gast scant een QR-code</h3>
              <p>Wij maken de QR-stickers met jouw naam erop — jij print ze zelf op A4. Op tafels, op de bar, of bij de toiletten. Waar je gasten zitten of staan.</p>
              <div className="step-shot"><img src="assets/screenshots/step1-join.webp" alt="" /></div>
            </div>
            <div className="step-card">
              <div className="step-num">ii.</div>
              <h3>Speelt mee op de telefoon</h3>
              <p>Vragen verschijnen synchroon op de TV en bij iedere speler. Geen app nodig.</p>
              <div className="step-shot"><img src="assets/screenshots/step2-question.webp" alt="" /></div>
            </div>
            <div className="step-card">
              <div className="step-num">iii.</div>
              <h3>Winnaars op het scherm</h3>
              <p>Live leaderboard, animaties, en tussendoor jouw aanbiedingen.</p>
              <div className="step-shot"><img src="assets/screenshots/tv-question.webp" alt="" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Waarom PubTrivia</div>
            <h2>Meer omzet op de uren<br />die <em>nu leeg staan.</em></h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-num">01</div>
              <div>
                <h3>Eén rondje meer per gezelschap</h3>
                <p>Gasten blijven langer als er iets te doen is. Ze bestellen een tweede biertje — gewoon omdat ze willen blijven voor de volgende vraag. Werkt aan tafels én aan de bar.</p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-num">02</div>
              <div>
                <h3>Vult dinsdag- en woensdagavonden</h3>
                <p>Je dode dagen worden je verrassende avonden. Geef gasten een reden om langs te komen op de uren waar je nu omzet mist.</p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-num">03</div>
              <div>
                <h3>Geen quizmaster, geen werk</h3>
                <p>De vragen rollen vanzelf. Je personeel hoeft niets te doen, te organiseren, of bij te houden. TV aan — meer niet.</p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-num">04</div>
              <div>
                <h3>Promoot je eigen menu op het scherm</h3>
                <p>Tussen de rondes laat je je borrelhapjes, dagaanbieding of evenementen zien. Met je eigen logo erbij.</p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-num">05</div>
              <div>
                <h3>Werkt in NL of EN</h3>
                <p>Vragen in het Nederlands of Engels. Toeristisch buurtje? Engelse modus aan en je internationale gasten doen ook mee.</p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-num">06</div>
              <div>
                <h3>24/7 actief, ook als jij vrij bent</h3>
                <p>Werkt door als je dicht bent of op vakantie. Aanzetten en vergeten — of alleen op rustige avonden draaien. Jouw keuze.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IN ACTION */}
      <section style={{padding: '0 0 96px'}}>
        <div className="action">
          <div className="action-grid">
            <div>
              <div className="eyebrow" style={{color: '#ff9355'}}>In de kroeg</div>
              <h2>Zo ziet het<br />eruit op een<br /><em>donderdag­avond.</em></h2>
              <p>De TV speelt. Gasten doen mee. De score loopt. En jij staat achter de bar tappen.</p>
              <a href="#demo" className="btn btn-primary">
                Bekijk live in Weesp
                <span className="btn-arrow">→</span>
              </a>
            </div>
            <div className="action-screens">
              <div className="action-tv"><img src="assets/screenshots/tv-question.webp" alt="" /></div>
              <div className="action-phone"><img src="assets/screenshots/mobile-answer.webp" alt="" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER NOTE */}
      <section className="quote">
        <div className="wrap">
          <div className="eyebrow" style={{justifyContent: 'center'}}>Eerlijk verhaal — maker aan het woord</div>
          <p className="quote-text">
            "PubTrivia draait. De software werkt. Maar er hangt nog geen TV in een echte kroeg — daar zoek ik nu de eerste tien voor. Drie maanden gratis, ik kom langs, ik installeer."
          </p>
          <div className="quote-author">
            <strong>Bas Dumoulin</strong> · Maker, WonderLoop · Weesp
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{paddingTop: 0}}>
        <div className="wrap">
          <div className="section-head" style={{textAlign: 'center', margin: '0 auto 56px'}}>
            <h2>Vragen die we<br /><em>vaker horen.</em></h2>
          </div>
          <div className="faq-grid">
            <details className="faq-item">
              <summary>Heb ik een quizmaster nodig?</summary>
              <p>Nee. Vragen, antwoorden, scores en leaderboard draaien volledig automatisch. Jij hoeft niets aan de microfoon te doen.</p>
            </details>
            <details className="faq-item">
              <summary>Moet mijn personeel iets doen?</summary>
              <p>Nee. TV aan, klaar. Hooguit "ja, je kunt meedoen op je telefoon" als gasten ernaar vragen.</p>
            </details>
            <details className="faq-item">
              <summary>Kan ik dit eerst gratis testen?</summary>
              <p>Ja — drie maanden gratis pilot, geen creditcard, geen kleine lettertjes. Werkt het niet voor jouw kroeg, dan stoppen we gewoon.</p>
            </details>
            <details className="faq-item">
              <summary>Wat heb ik nodig om te starten?</summary>
              <p>Een TV met internet (smart-TV, Chromecast, Apple TV of een goedkope mini-PC). Wij helpen je op afstand met opzetten.</p>
            </details>
            <details className="faq-item">
              <summary>Wat als niemand meespeelt?</summary>
              <p>De TV laat ook zonder spelers vragen, weetjes en aanbiedingen zien. Vaak begint één tafel, en dan volgt de rest.</p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{padding: 0}}>
        <div className="cta-final" id="demo">
          <h2>Drie maanden,<br /><em>op het huis.</em></h2>
          <p>Geen creditcard, geen verplichtingen. We bellen je binnen 24 uur en zetten 'm samen op.</p>
          <a href="#" className="btn btn-primary">
            Vraag een demo aan
            <span className="btn-arrow">→</span>
          </a>
          <img className="cta-mascot" src="assets/monster-duo.webp" alt="" />
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="nav-logo" style={{marginBottom: 16}}>
                <img src="assets/pubtrivia-logo.png" alt="PubTrivia" style={{height: 56, width: 'auto'}} />
              </div>
              <p>24/7 digitale pubquiz voor de Nederlandse horeca. Onderdeel van WonderLoop, Amsterdam-Weesp.</p>
            </div>
            <div>
              <h4>Product</h4>
              <ul>
                <li><a href="#how">Hoe het werkt</a></li>
                <li><a href="#why">Waarom</a></li>
                <li><a href="#faq">Veelgestelde vragen</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:info@pub-trivia.nl">info@pub-trivia.nl</a></li>
                <li><a href="#">WhatsApp</a></li>
                <li><a href="#">Inloggen</a></li>
              </ul>
            </div>
            <div>
              <h4>Juridisch</h4>
              <ul>
                <li><a href="#">Algemene voorwaarden</a></li>
                <li><a href="#">Privacyverklaring</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-legal">
            <span>© 2026 WonderLoop · KVK 91926440 · BTW NL004925659B82</span>
            <span>Powered by WonderLoop</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

window.DirectionA = DirectionA;
