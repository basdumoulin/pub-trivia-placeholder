/* =========================================================
   DIRECTION C — MODERN PLAYFUL
   Brand colors kept (cream + orange + green) but refined:
   modern buttons, cleaner typography, more whitespace,
   the mascots and color joy front-and-center.
   ========================================================= */

const DirectionC = () => {
  return (
    <div className="pt-c">
      <style>{`
        .pt-c {
          --ink: #14110d;
          --ink-soft: #5c544a;
          --paper: #fff8ec;
          --paper-2: #ffefd6;
          --orange: #ff6a1f;
          --orange-deep: #e54e00;
          --green: #1ec96a;
          --green-deep: #0e9450;
          --blue: #3da3ff;
          --pink: #ff5fa2;
          --line: rgba(20,17,13,0.10);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          color: var(--ink);
          background: var(--paper);
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          font-size: 16px;
        }
        .pt-c .display { font-family: 'Fat Frank', sans-serif; font-weight: 400; line-height: 1; letter-spacing: -0.01em; }
        .pt-c .wrap { max-width: 1200px; margin: 0 auto; padding: 0 32px; }

        /* NAV */
        .pt-c .nav {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 32px; max-width: 1200px; margin: 0 auto;
        }
        .pt-c .logo { display: flex; align-items: center; gap: 10px; font-family: 'Fat Frank', sans-serif; font-size: 22px; text-decoration: none; color: inherit; }
        .pt-c .logo-img { height: 50px; width: auto; display: block; }
        .pt-c .logo-mark {
          width: 36px; height: 36px; border-radius: 12px;
          background: var(--orange);
          display: flex; align-items: center; justify-content: center;
          color: white; font-family: 'Fat Frank', sans-serif; font-size: 16px;
          transform: rotate(-6deg);
          box-shadow: 0 6px 0 var(--orange-deep);
        }
        .pt-c .nav-links { display: flex; gap: 32px; font-size: 15px; color: var(--ink-soft); }
        .pt-c .nav-links a:hover { color: var(--ink); }

        /* BUTTONS — modern, soft drop, no heavy black border */
        .pt-c .btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 22px; border-radius: 12px; border: none;
          font-size: 15px; font-weight: 600; font-family: 'Inter', sans-serif;
          transition: all 180ms cubic-bezier(.4,0,.2,1);
        }
        .pt-c .btn-primary {
          background: var(--orange); color: white;
          box-shadow: 0 4px 0 var(--orange-deep), 0 8px 16px rgba(255,106,31,0.25);
        }
        .pt-c .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 0 var(--orange-deep), 0 12px 24px rgba(255,106,31,0.3);
        }
        .pt-c .btn-primary:active { transform: translateY(2px); box-shadow: 0 2px 0 var(--orange-deep); }
        .pt-c .btn-secondary {
          background: white; color: var(--ink);
          box-shadow: 0 4px 0 var(--line), 0 4px 12px rgba(0,0,0,0.06);
        }
        .pt-c .btn-secondary:hover { transform: translateY(-2px); }
        .pt-c .btn-ghost {
          background: transparent; color: var(--ink);
        }
        .pt-c .btn-ghost:hover { color: var(--orange); }
        .pt-c .btn-lg { padding: 16px 26px; font-size: 16px; border-radius: 14px; }
        .pt-c .btn-arrow { font-size: 18px; line-height: 1; }

        /* HERO */
        .pt-c .hero {
          padding: 56px 0 96px; position: relative; overflow: hidden;
        }
        .pt-c .hero-grid {
          display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center;
        }
        .pt-c .hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          background: white; padding: 8px 14px; border-radius: 100px;
          font-size: 13px; font-weight: 600;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          margin-bottom: 24px;
        }
        .pt-c .hero-tag-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--green); }
        .pt-c .hero h1 {
          font-family: 'Fat Frank', sans-serif; font-weight: 400;
          font-size: clamp(48px, 6.6vw, 88px);
          line-height: 0.95; letter-spacing: -0.02em;
          margin-bottom: 24px;
        }
        .pt-c .hero h1 .word-1 {
          display: inline-block;
          background: var(--orange); color: white;
          padding: 0 16px 6px; border-radius: 16px;
          transform: rotate(-2deg);
          box-shadow: 0 8px 0 var(--orange-deep);
          margin: 0 4px;
        }
        .pt-c .hero h1 .word-2 {
          background: var(--green); color: white;
          padding: 0 14px 6px; border-radius: 14px;
          display: inline-block;
          transform: rotate(1.5deg);
          box-shadow: 0 8px 0 var(--green-deep);
        }
        .pt-c .hero p.lead {
          font-size: 19px; color: var(--ink-soft);
          max-width: 480px; margin-bottom: 32px;
        }
        .pt-c .hero-cta { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
        .pt-c .hero-meta { margin-top: 32px; display: flex; gap: 24px; font-size: 14px; color: var(--ink-soft); flex-wrap: wrap; }
        .pt-c .hero-meta-item { display: flex; align-items: center; gap: 8px; }
        .pt-c .hero-meta-item-dot {
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--green); color: white;
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: bold;
        }

        .pt-c .hero-mascot-wrap { position: relative; }
        .pt-c .hero-mascot {
          width: 100%; max-width: 540px;
          margin-left: auto;
          filter: drop-shadow(0 24px 40px rgba(0,0,0,0.18));
          animation: ptCBob 5s ease-in-out infinite;
          position: relative; z-index: 2;
        }
        @keyframes ptCBob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-1.5deg); }
        }
        .pt-c .hero-blobs { position: absolute; inset: 0; }
        .pt-c .blob {
          position: absolute; border-radius: 50%;
        }
        .pt-c .blob-1 { width: 160px; height: 160px; background: var(--pink); opacity: 0.55; top: 10%; right: 8%; }
        .pt-c .blob-2 { width: 240px; height: 240px; background: var(--blue); opacity: 0.32; bottom: 0; left: 5%; }
        .pt-c .blob-3 { width: 80px; height: 80px; background: #ffd84d; top: 50%; right: 0; }

        /* FACT STRIP */
        .pt-c .facts {
          background: var(--ink); color: var(--paper);
          border-radius: 24px; margin: 0 32px;
          max-width: 1136px; margin-left: auto; margin-right: auto;
          padding: 28px 40px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 24px; flex-wrap: wrap;
        }
        .pt-c .fact { display: flex; align-items: center; gap: 14px; }
        .pt-c .fact-icon {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Fat Frank', sans-serif; font-size: 18px;
          flex-shrink: 0;
        }
        .pt-c .fact:nth-child(1) .fact-icon { background: var(--orange); color: white; }
        .pt-c .fact:nth-child(2) .fact-icon { background: var(--green); color: white; }
        .pt-c .fact:nth-child(3) .fact-icon { background: var(--blue); color: white; }
        .pt-c .fact:nth-child(4) .fact-icon { background: var(--pink); color: white; }
        .pt-c .fact-text strong { display: block; font-family: 'Fat Frank', sans-serif; font-size: 18px; }
        .pt-c .fact-text span { color: rgba(255,248,236,0.6); font-size: 13px; }

        /* SECTIONS */
        .pt-c section { padding: 96px 0; }
        .pt-c .head { max-width: 720px; margin-bottom: 48px; }
        .pt-c .head .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 600; color: var(--orange);
          text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px;
        }
        .pt-c .head h2 {
          font-family: 'Fat Frank', sans-serif; font-weight: 400;
          font-size: clamp(36px, 4.8vw, 60px);
          line-height: 1.02; letter-spacing: -0.02em;
        }
        .pt-c .head h2 .pop {
          color: var(--orange);
          font-style: normal;
        }
        .pt-c .head p { color: var(--ink-soft); font-size: 17px; margin-top: 16px; max-width: 560px; }

        /* HOW */
        .pt-c .how-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .pt-c .step {
          background: white; border-radius: 20px; padding: 28px;
          box-shadow: 0 6px 16px rgba(20,17,13,0.06);
          transition: transform 200ms;
        }
        .pt-c .step:hover { transform: translateY(-4px); }
        .pt-c .step-num {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Fat Frank', sans-serif; font-size: 22px; color: white;
          margin-bottom: 20px;
        }
        .pt-c .step:nth-child(1) .step-num { background: var(--orange); box-shadow: 0 6px 0 var(--orange-deep); transform: rotate(-3deg); }
        .pt-c .step:nth-child(2) .step-num { background: var(--green); box-shadow: 0 6px 0 var(--green-deep); transform: rotate(2deg); }
        .pt-c .step:nth-child(3) .step-num { background: var(--blue); box-shadow: 0 6px 0 #1d6cb0; transform: rotate(-2deg); }
        .pt-c .step h3 { font-family: 'Fat Frank', sans-serif; font-weight: 400; font-size: 22px; margin-bottom: 8px; }
        .pt-c .step p { color: var(--ink-soft); font-size: 15px; margin-bottom: 20px; }
        .pt-c .step-shot {
          aspect-ratio: 4/3; border-radius: 12px; overflow: hidden;
          background: var(--paper-2);
        }
        .pt-c .step-shot img { width: 100%; height: 100%; object-fit: cover; }

        /* WHY — alternating cards */
        .pt-c .why { background: var(--paper-2); }
        .pt-c .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .pt-c .why-card {
          background: white; border-radius: 20px; padding: 28px;
          transition: transform 200ms;
        }
        .pt-c .why-card:hover { transform: translateY(-4px); }
        .pt-c .why-icon {
          width: 48px; height: 48px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Fat Frank', sans-serif; color: white; font-size: 20px;
          margin-bottom: 20px;
        }
        .pt-c .why-card:nth-child(6n+1) .why-icon { background: var(--orange); }
        .pt-c .why-card:nth-child(6n+2) .why-icon { background: var(--green); }
        .pt-c .why-card:nth-child(6n+3) .why-icon { background: var(--blue); }
        .pt-c .why-card:nth-child(6n+4) .why-icon { background: var(--pink); }
        .pt-c .why-card:nth-child(6n+5) .why-icon { background: #b266ff; }
        .pt-c .why-card:nth-child(6n+6) .why-icon { background: #ffaa00; }
        .pt-c .why-card h3 { font-family: 'Fat Frank', sans-serif; font-weight: 400; font-size: 22px; margin-bottom: 8px; letter-spacing: -0.01em; }
        .pt-c .why-card p { color: var(--ink-soft); font-size: 15px; }

        /* IN ACTION */
        .pt-c .in-action {
          background: var(--ink); color: var(--paper);
          border-radius: 28px; padding: 64px;
          margin: 0 32px; max-width: 1136px;
          margin-left: auto; margin-right: auto;
          position: relative; overflow: hidden;
        }
        .pt-c .in-action::before {
          content: ''; position: absolute; top: -50px; right: -80px;
          width: 240px; height: 240px; border-radius: 50%;
          background: var(--orange); opacity: 0.5; filter: blur(60px);
        }
        .pt-c .in-action-grid {
          display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 48px;
          align-items: center; position: relative;
        }
        .pt-c .in-action h2 {
          font-family: 'Fat Frank', sans-serif; font-weight: 400;
          font-size: clamp(36px, 4.4vw, 52px);
          line-height: 1.02; letter-spacing: -0.02em;
          margin-bottom: 16px;
        }
        .pt-c .in-action h2 .pop { color: #ff9355; }
        .pt-c .in-action p { color: rgba(255,248,236,0.7); font-size: 17px; margin-bottom: 28px; }
        .pt-c .in-action-screens {
          position: relative; aspect-ratio: 4/3;
        }
        .pt-c .in-action-tv {
          position: absolute; top: 6%; left: 0; width: 78%;
          border-radius: 12px; overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
          border: 8px solid #2a2520;
        }
        .pt-c .in-action-phone {
          position: absolute; bottom: 0; right: 0; width: 32%;
          border-radius: 18px; overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
          border: 4px solid #1a1a1a;
          transform: rotate(5deg);
        }

        /* QUOTE */
        .pt-c .quote {
          padding: 96px 0;
          text-align: center;
        }
        .pt-c .quote-mark {
          font-family: 'Fat Frank', sans-serif;
          font-size: 96px; color: var(--orange); line-height: 0.7;
          margin-bottom: 16px;
        }
        .pt-c .quote-text {
          font-family: 'Fat Frank', sans-serif; font-weight: 400;
          font-size: clamp(28px, 3.4vw, 44px);
          line-height: 1.15; letter-spacing: -0.015em;
          max-width: 880px; margin: 0 auto 32px;
        }
        .pt-c .quote-author {
          display: inline-flex; align-items: center; gap: 12px;
          font-size: 15px; color: var(--ink-soft);
        }
        .pt-c .quote-avatar {
          width: 44px; height: 44px; border-radius: 50%;
          background: linear-gradient(135deg, var(--orange), var(--pink));
          color: white; display: flex; align-items: center; justify-content: center;
          font-family: 'Fat Frank', sans-serif; font-size: 18px;
        }
        .pt-c .quote-author strong { color: var(--ink); }

        /* FAQ */
        .pt-c .faq { background: var(--paper-2); }
        .pt-c .faq-grid { max-width: 820px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; }
        .pt-c .faq-item {
          background: white; border-radius: 16px;
          padding: 20px 24px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .pt-c .faq-item summary {
          list-style: none; cursor: pointer;
          display: flex; justify-content: space-between; align-items: center;
          font-family: 'Fat Frank', sans-serif; font-weight: 400; font-size: 20px;
          letter-spacing: -0.005em;
        }
        .pt-c .faq-item summary::-webkit-details-marker { display: none; }
        .pt-c .faq-item summary::after {
          content: '+';
          width: 32px; height: 32px; border-radius: 10px;
          background: var(--orange); color: white;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; line-height: 1; flex-shrink: 0;
          transition: transform 200ms;
        }
        .pt-c .faq-item[open] summary::after { transform: rotate(45deg); }
        .pt-c .faq-item p { color: var(--ink-soft); font-size: 15px; margin-top: 12px; }

        /* CTA */
        .pt-c .cta {
          background: var(--orange); color: white;
          border-radius: 28px;
          margin: 0 32px 96px; max-width: 1136px;
          margin-left: auto; margin-right: auto;
          padding: 80px 48px;
          text-align: center; position: relative; overflow: hidden;
        }
        .pt-c .cta-mascot {
          position: absolute; right: -32px; bottom: -32px; width: 280px;
          transform: rotate(8deg);
          filter: drop-shadow(0 12px 30px rgba(0,0,0,0.2));
        }
        .pt-c .cta-inner { position: relative; max-width: 640px; margin: 0 auto; }
        .pt-c .cta h2 {
          font-family: 'Fat Frank', sans-serif; font-weight: 400;
          font-size: clamp(40px, 5.4vw, 72px);
          line-height: 0.98; letter-spacing: -0.02em;
          margin-bottom: 20px;
        }
        .pt-c .cta p { font-size: 18px; opacity: 0.95; margin-bottom: 32px; }
        .pt-c .cta .btn-primary {
          background: var(--ink); color: white;
          box-shadow: 0 4px 0 #000;
        }
        .pt-c .cta .btn-primary:hover {
          box-shadow: 0 6px 0 #000;
        }

        /* FOOTER */
        .pt-c footer { padding: 56px 0 32px; border-top: 1px solid var(--line); }
        .pt-c .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 32px; }
        .pt-c footer h4 { font-family: 'Fat Frank', sans-serif; font-weight: 400; font-size: 17px; margin-bottom: 14px; }
        .pt-c footer ul { list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 14px; color: var(--ink-soft); }
        .pt-c footer a:hover { color: var(--orange); }
        .pt-c .footer-legal {
          margin-top: 40px; padding-top: 24px; border-top: 1px solid var(--line);
          display: flex; justify-content: space-between; font-size: 13px; color: var(--ink-soft);
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="#" className="logo" aria-label="PubTrivia">
          <img src="assets/pubtrivia-logo.png" alt="PubTrivia" className="logo-img" />
        </a>
        <div className="nav-links">
          <a href="#how">Hoe het werkt</a>
          <a href="#why">Waarom</a>
          <a href="#faq">Vragen</a>
        </div>
        <a href="#demo" className="btn btn-primary">Demo aanvragen</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="hero-tag"><span className="hero-tag-dot"></span> In pilotfase · 3 mnd gratis voor de eerste 10 kroegen</div>
              <h1>
                Vul je <span className="word-1">rustige</span><br />
                avonden met<br />
                <span className="word-2">vol publiek.</span>
              </h1>
              <p className="lead">
                PubTrivia draait 24/7 op je TV. Gasten doen mee op hun telefoon, blijven langer hangen, en bestellen één rondje extra. Jij hoeft niets te doen.
              </p>
              <div className="hero-cta">
                <a href="#demo" className="btn btn-primary btn-lg">
                  Vraag een demo aan <span className="btn-arrow">→</span>
                </a>
                <a href="#how" className="btn btn-ghost btn-lg">Zo werkt het</a>
              </div>
              <div className="hero-meta">
                <div className="hero-meta-item"><span className="hero-meta-item-dot">✓</span> 3 mnd gratis</div>
                <div className="hero-meta-item"><span className="hero-meta-item-dot">✓</span> TV met HDMI nodig</div>
                <div className="hero-meta-item"><span className="hero-meta-item-dot">✓</span> Geen quizmaster</div>
              </div>
            </div>
            <div className="hero-mascot-wrap">
              <div className="hero-blobs">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
              </div>
              <img className="hero-mascot" src="assets/monster-duo.webp" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* FACT STRIP */}
      <section style={{padding: 0}}>
        <div className="facts">
          <div className="fact">
            <div className="fact-icon">10</div>
            <div className="fact-text"><strong>Pilotkroegen gezocht</strong><span>jij bent één van de eerste</span></div>
          </div>
          <div className="fact">
            <div className="fact-icon">→</div>
            <div className="fact-text"><strong>We komen langs</strong><span>installatie, koffie, klaar</span></div>
          </div>
          <div className="fact">
            <div className="fact-icon">10'</div>
            <div className="fact-text"><strong>Installatie</strong><span>tot eerste vraag</span></div>
          </div>
          <div className="fact">
            <div className="fact-icon">€0</div>
            <div className="fact-text"><strong>De eerste 3 mnd</strong><span>geen creditcard nodig</span></div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how">
        <div className="wrap">
          <div className="head">
            <div className="eyebrow">Hoe het werkt</div>
            <h2>Drie stappen,<br /><span className="pop">nul gedoe.</span></h2>
            <p>Je gasten kennen QR-codes al van het bestellen. Voor jou: TV aan en draaien.</p>
          </div>
          <div className="how-grid">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Gast scant de QR</h3>
              <p>Wij maken QR-stickers met jouw naam erop — print ze zelf op A4 en hang ze op tafel, aan de bar, of bij de wc. Klaar.</p>
              <div className="step-shot"><img src="assets/screenshots/step1-join.webp" alt="" /></div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>Speelt mee op de telefoon</h3>
              <p>Vragen op TV en bij iedere speler. Geen app, geen account, geen drempel.</p>
              <div className="step-shot"><img src="assets/screenshots/step2-question.webp" alt="" /></div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>Winnaars op het scherm</h3>
              <p>Live leaderboard, animaties en tussendoor jouw eigen aanbiedingen.</p>
              <div className="step-shot"><img src="assets/screenshots/tv-question.webp" alt="" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why" id="why">
        <div className="wrap">
          <div className="head">
            <div className="eyebrow">Waarom PubTrivia</div>
            <h2>Meer omzet op de uren<br />die <span className="pop">nu leeg staan.</span></h2>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">€</div>
              <h3>Eén rondje extra per gezelschap</h3>
              <p>Gasten blijven langer als er iets te doen is — aan tafel of aan de bar. Dat is direct extra omzet.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">7d</div>
              <h3>Vult je rustige avonden</h3>
              <p>Dinsdag, woensdag, vroege avond. Een reden om langs te komen.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">∅</div>
              <h3>Geen quizmaster nodig</h3>
              <p>Geen organisatie, geen werk voor je personeel. TV aan — meer niet.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">TV</div>
              <h3>Jouw acties op het scherm</h3>
              <p>Promoot je menu, borrelhapjes en evenementen tussen de rondes.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">★</div>
              <h3>Live leaderboard</h3>
              <p>Ranglijst tussen alle meespelers — tafels, bar, terras. Drijft fanatiek doorspelen, en dus extra bestellingen.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">24</div>
              <h3>24/7 actief</h3>
              <p>Werkt door als je dicht bent. Of alleen op rustige avonden — jouw keuze.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IN ACTION */}
      <section style={{padding: '0 0 96px'}}>
        <div className="in-action">
          <div className="in-action-grid">
            <div>
              <div className="eyebrow" style={{color: '#ff9355', marginBottom: 16}}>In de kroeg</div>
              <h2>Zo ziet het<br />eruit op een<br /><span className="pop">donderdag&shy;avond.</span></h2>
              <p>De TV speelt. Gasten doen mee. De score loopt. En jij staat achter de bar tappen.</p>
              <a href="#demo" className="btn btn-primary btn-lg">Plan een live bezoek →</a>
            </div>
            <div className="in-action-screens">
              <div className="in-action-tv"><img src="assets/screenshots/tv-question.webp" alt="" /></div>
              <div className="in-action-phone"><img src="assets/screenshots/mobile-answer.webp" alt="" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER NOTE */}
      <section className="quote">
        <div className="wrap">
          <div className="quote-mark">"</div>
          <p className="quote-text">
            PubTrivia draait. De software werkt. Maar er hangt nog geen TV in een echte kroeg — daar zoek ik nu de eerste tien voor.
          </p>
          <div className="quote-author">
            <div className="quote-avatar">B</div>
            <span><strong>Bas Dumoulin</strong> · Maker, WonderLoop · Weesp</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="wrap">
          <div className="head" style={{textAlign: 'center', margin: '0 auto 48px', maxWidth: '100%'}}>
            <div className="eyebrow" style={{justifyContent: 'center'}}>Veelgestelde vragen</div>
            <h2>Vragen die we <span className="pop">vaker horen.</span></h2>
          </div>
          <div className="faq-grid">
            <details className="faq-item" open>
              <summary>Heb ik een quizmaster nodig?</summary>
              <p>Nee. Vragen, antwoorden, scores en leaderboard draaien volledig automatisch. Jij hoeft niets aan de microfoon te doen.</p>
            </details>
            <details className="faq-item">
              <summary>Moet mijn personeel iets doen?</summary>
              <p>Nee. TV aan, klaar. Hooguit "ja, je kunt meedoen op je telefoon" als gasten ernaar vragen.</p>
            </details>
            <details className="faq-item">
              <summary>Kan ik dit gratis testen?</summary>
              <p>Ja — drie maanden gratis pilot, geen creditcard, geen kleine lettertjes. Werkt het niet, dan stoppen we gewoon.</p>
            </details>
            <details className="faq-item">
              <summary>Wat heb ik nodig om te starten?</summary>
              <p>Een TV met internet (smart-TV, Chromecast, Apple TV of een mini-PC). Wij helpen je op afstand met opzetten.</p>
            </details>
            <details className="faq-item">
              <summary>Wat als niemand meespeelt?</summary>
              <p>De TV laat ook zonder spelers vragen, weetjes en jouw aanbiedingen zien. Vaak begint één tafel — daarna volgt de rest.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding: 0}}>
        <div className="cta" id="demo">
          <div className="cta-inner">
            <h2>Drie maanden,<br />op het huis.</h2>
            <p>Geen creditcard, geen verplichtingen. We bellen je binnen 24 uur en zetten 'm samen op.</p>
            <a href="#" className="btn btn-primary btn-lg">Vraag een demo aan →</a>
          </div>
          <img className="cta-mascot" src="assets/monster-duo.webp" alt="" />
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="logo" style={{marginBottom: 16}}>
                <img src="assets/pubtrivia-logo.gif" alt="PubTrivia" style={{height: 64, width: 'auto'}} />
              </div>
              <p style={{color: 'var(--ink-soft)', fontSize: 14, maxWidth: 320}}>24/7 digitale pubquiz voor de Nederlandse horeca. Onderdeel van WonderLoop, Amsterdam-Weesp.</p>
            </div>
            <div>
              <h4>Product</h4>
              <ul>
                <li><a href="#how">Hoe het werkt</a></li>
                <li><a href="#why">Waarom</a></li>
                <li><a href="#faq">Vragen</a></li>
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
                <li><a href="#">Voorwaarden</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-legal">
            <span>© 2026 WonderLoop · KVK 91926440 · BTW NL004925659B82</span>
            <span>Gemaakt in Amsterdam-Weesp</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

window.DirectionC = DirectionC;
