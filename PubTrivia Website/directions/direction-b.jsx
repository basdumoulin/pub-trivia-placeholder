/* =========================================================
   DIRECTION B — CONFIDENT OPERATOR
   Dark, ROI-forward. For pub owners who want the numbers.
   Mascots used as a single playful anchor in the hero.
   ========================================================= */

const DirectionB = () => {
  return (
    <div className="pt-b">
      <style>{`
        .pt-b {
          --bg: #0e1410;
          --bg-2: #161e18;
          --bg-3: #1f2922;
          --line: rgba(255,255,255,0.08);
          --line-2: rgba(255,255,255,0.14);
          --text: #e8efe9;
          --text-soft: rgba(232,239,233,0.62);
          --neon: #1AD960;
          --neon-soft: rgba(26,217,96,0.12);
          --orange: #FF6600;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          color: var(--text);
          background: var(--bg);
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          font-size: 16px;
        }
        .pt-b .wrap { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
        .pt-b .mono { font-family: 'JetBrains Mono', 'SF Mono', ui-monospace, monospace; }

        /* NAV */
        .pt-b .nav {
          position: sticky; top: 0; z-index: 50;
          backdrop-filter: blur(14px); background: rgba(14,20,16,0.7);
          border-bottom: 1px solid var(--line);
        }
        .pt-b .nav-inner {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px; max-width: 1200px; margin: 0 auto;
        }
        .pt-b .logo { display: flex; align-items: center; gap: 10px; font-family: 'Fat Frank', sans-serif; font-size: 20px; text-decoration: none; color: inherit; }
        .pt-b .logo-img { height: 40px; width: auto; display: block; }
        .pt-b .logo-mark {
          width: 28px; height: 28px; border-radius: 8px; background: var(--neon);
          display: flex; align-items: center; justify-content: center; color: var(--bg);
          font-size: 14px; font-family: 'Fat Frank', sans-serif; font-weight: bold;
        }
        .pt-b .nav-links { display: flex; gap: 32px; font-size: 14px; color: var(--text-soft); }
        .pt-b .nav-links a:hover { color: var(--text); }
        .pt-b .nav-cta-row { display: flex; gap: 10px; align-items: center; }
        .pt-b .nav-login { font-size: 14px; color: var(--text-soft); padding: 8px 12px; }
        .pt-b .nav-login:hover { color: var(--text); }

        /* BUTTONS */
        .pt-b .btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 18px; border-radius: 10px; border: none;
          font-size: 14px; font-weight: 500;
          transition: all 160ms cubic-bezier(.4,0,.2,1);
        }
        .pt-b .btn-primary {
          background: var(--neon); color: #082a14;
          box-shadow: 0 0 0 1px rgba(26,217,96,0.3), 0 8px 24px rgba(26,217,96,0.18);
        }
        .pt-b .btn-primary:hover {
          background: #2eea76; transform: translateY(-1px);
          box-shadow: 0 0 0 1px rgba(26,217,96,0.5), 0 12px 32px rgba(26,217,96,0.3);
        }
        .pt-b .btn-ghost {
          background: rgba(255,255,255,0.04); color: var(--text);
          border: 1px solid var(--line-2);
        }
        .pt-b .btn-ghost:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.25); }
        .pt-b .btn-lg { padding: 16px 24px; font-size: 15px; border-radius: 12px; }

        /* HERO */
        .pt-b .hero {
          position: relative; overflow: hidden;
          padding: 80px 0 100px;
          background:
            radial-gradient(ellipse 60% 60% at 75% 30%, rgba(26,217,96,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 20% 80%, rgba(255,102,0,0.10) 0%, transparent 60%);
        }
        .pt-b .hero-grid {
          display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 64px; align-items: center;
        }
        .pt-b .pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--neon-soft); border: 1px solid rgba(26,217,96,0.3);
          color: var(--neon); padding: 6px 14px; border-radius: 100px;
          font-size: 13px; font-weight: 500; margin-bottom: 24px;
        }
        .pt-b .pill::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--neon); box-shadow: 0 0 8px var(--neon);
          animation: ptBPulse 2s ease infinite;
        }
        @keyframes ptBPulse {
          0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
        }
        .pt-b .hero h1 {
          font-family: 'Fat Frank', sans-serif;
          font-weight: 400;
          font-size: clamp(48px, 6vw, 80px);
          line-height: 0.98; letter-spacing: -0.02em;
          margin-bottom: 24px;
        }
        .pt-b .hero h1 .accent { color: var(--neon); }
        .pt-b .hero p.lead {
          font-size: 18px; color: var(--text-soft);
          max-width: 480px; margin-bottom: 36px;
        }
        .pt-b .hero-cta { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
        .pt-b .hero-meta {
          margin-top: 32px; display: flex; gap: 20px 24px;
          font-size: 13px; color: var(--text-soft);
          flex-wrap: wrap;
        }
        .pt-b .hero-meta-item { display: flex; align-items: center; gap: 8px; }
        .pt-b .hero-meta-item::before {
          content: '✓'; color: var(--neon); font-weight: bold;
        }

        /* HERO CARD — ROI mockup */
        .pt-b .roi-card {
          background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-3) 100%);
          border: 1px solid var(--line-2);
          border-radius: 20px; padding: 32px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
          position: relative;
        }
        .pt-b .roi-card-head {
          display: flex; justify-content: space-between; align-items: center;
          padding-bottom: 16px; border-bottom: 1px solid var(--line);
          margin-bottom: 20px;
        }
        .pt-b .roi-card-title { font-size: 13px; color: var(--text-soft); text-transform: uppercase; letter-spacing: 0.08em; }
        .pt-b .roi-card-live { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--neon); }
        .pt-b .roi-card-live::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--neon); animation: ptBPulse 2s infinite;
        }
        .pt-b .roi-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--line); font-size: 14px; }
        .pt-b .roi-row:last-of-type { border-bottom: none; }
        .pt-b .roi-row span:first-child { color: var(--text-soft); }
        .pt-b .roi-row span:last-child { font-family: 'JetBrains Mono', monospace; }
        .pt-b .roi-total {
          margin-top: 20px; padding-top: 20px; border-top: 2px solid var(--neon);
          display: flex; justify-content: space-between; align-items: baseline;
        }
        .pt-b .roi-total-label { font-size: 14px; color: var(--text-soft); }
        .pt-b .roi-total-value { font-family: 'Fat Frank', sans-serif; font-size: 44px; color: var(--neon); line-height: 1; }
        .pt-b .roi-mascot {
          position: absolute; right: -32px; top: -52px; width: 130px;
          transform: rotate(8deg);
          filter: drop-shadow(0 12px 24px rgba(0,0,0,0.4));
        }
        .pt-b .roi-bars { margin-top: 20px; display: flex; align-items: flex-end; gap: 6px; height: 56px; }
        .pt-b .roi-bar { flex: 1; background: var(--neon-soft); border-radius: 4px; }
        .pt-b .roi-bar.full { background: var(--neon); }

        /* LOGOS / TRUST */
        .pt-b .trust { padding: 40px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .pt-b .trust-inner {
          display: flex; align-items: center; gap: 48px;
          justify-content: space-between; flex-wrap: wrap;
        }
        .pt-b .trust-label { font-size: 13px; color: var(--text-soft); text-transform: uppercase; letter-spacing: 0.1em; flex-shrink: 0; }
        .pt-b .trust-logos { display: flex; gap: 40px; align-items: center; flex-wrap: wrap; }
        .pt-b .trust-logo { font-family: 'Fat Frank', serif; font-size: 22px; color: var(--text-soft); opacity: 0.7; transition: opacity 200ms; }
        .pt-b .trust-logo:hover { opacity: 1; }
        .pt-b .trust-logo.serif { font-family: 'Fraunces', serif; font-style: italic; }
        .pt-b .trust-logo.upper { text-transform: uppercase; letter-spacing: 0.12em; font-size: 16px; font-family: 'Inter', sans-serif; font-weight: 600; }

        /* STATS */
        .pt-b .stats {
          padding: 96px 0;
          border-bottom: 1px solid var(--line);
        }
        .pt-b .stats-head { text-align: center; margin-bottom: 56px; }
        .pt-b .stats-head h2 {
          font-family: 'Fat Frank', sans-serif; font-weight: 400;
          font-size: clamp(36px, 4.4vw, 56px);
          line-height: 1.05; letter-spacing: -0.015em;
        }
        .pt-b .stats-head p { color: var(--text-soft); margin-top: 16px; max-width: 540px; margin-left: auto; margin-right: auto; }
        .pt-b .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .pt-b .stat-card {
          background: var(--bg-2); border: 1px solid var(--line);
          border-radius: 16px; padding: 32px;
          transition: border-color 200ms;
        }
        .pt-b .stat-card:hover { border-color: var(--neon); }
        .pt-b .stat-num {
          font-family: 'Fat Frank', sans-serif;
          font-size: 64px; line-height: 1;
          color: var(--neon); margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .pt-b .stat-num .unit { font-size: 32px; opacity: 0.7; }
        .pt-b .stat-label { font-weight: 600; margin-bottom: 8px; }
        .pt-b .stat-sub { font-size: 14px; color: var(--text-soft); }

        /* HOW */
        .pt-b .how { padding: 96px 0; }
        .pt-b .how-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 64px; align-items: center; }
        .pt-b .step-list { list-style: none; counter-reset: step; }
        .pt-b .step-item {
          counter-increment: step;
          padding: 24px 0; border-top: 1px solid var(--line);
          display: grid; grid-template-columns: auto 1fr; gap: 24px; align-items: start;
        }
        .pt-b .step-item:last-child { border-bottom: 1px solid var(--line); }
        .pt-b .step-item::before {
          content: '0' counter(step);
          font-family: 'JetBrains Mono', monospace; font-size: 13px;
          color: var(--neon); padding-top: 4px;
        }
        .pt-b .step-item h3 { font-family: 'Fat Frank', sans-serif; font-weight: 400; font-size: 22px; margin-bottom: 6px; }
        .pt-b .step-item p { color: var(--text-soft); font-size: 15px; }
        .pt-b .how-visual {
          background: var(--bg-2); border: 1px solid var(--line);
          border-radius: 20px; padding: 32px;
          aspect-ratio: 4/3.2;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        .pt-b .how-tv {
          width: 80%; border-radius: 8px; overflow: hidden;
          border: 6px solid #2a2520; box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .pt-b .how-phone {
          position: absolute; bottom: 24px; right: 24px; width: 28%;
          border-radius: 14px; overflow: hidden;
          border: 3px solid #1a1a1a; box-shadow: 0 12px 30px rgba(0,0,0,0.5);
          transform: rotate(5deg);
        }

        /* FEATURES */
        .pt-b .features { padding: 96px 0; border-top: 1px solid var(--line); }
        .pt-b .features-head { display: flex; justify-content: space-between; align-items: end; margin-bottom: 48px; gap: 32px; }
        .pt-b .features-head h2 {
          font-family: 'Fat Frank', sans-serif; font-weight: 400;
          font-size: clamp(36px, 4vw, 52px);
          line-height: 1.05; letter-spacing: -0.015em; max-width: 600px;
        }
        .pt-b .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .pt-b .feat {
          background: var(--bg-2); border: 1px solid var(--line);
          border-radius: 14px; padding: 28px;
          transition: all 200ms;
        }
        .pt-b .feat:hover { border-color: var(--line-2); background: var(--bg-3); }
        .pt-b .feat-tag {
          display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: var(--neon); background: var(--neon-soft); padding: 4px 8px; border-radius: 4px;
          margin-bottom: 16px;
        }
        .pt-b .feat h3 { font-family: 'Fat Frank', sans-serif; font-weight: 400; font-size: 20px; margin-bottom: 8px; }
        .pt-b .feat p { color: var(--text-soft); font-size: 14px; }

        /* QUOTE */
        .pt-b .quote-row {
          padding: 96px 0;
          border-top: 1px solid var(--line);
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;
        }
        .pt-b .quote-card {
          padding: 32px; border: 1px solid var(--line); border-radius: 16px;
          background: var(--bg-2);
        }
        .pt-b .quote-stars { color: var(--neon); margin-bottom: 16px; font-size: 14px; letter-spacing: 4px; }
        .pt-b .quote-card blockquote {
          font-family: 'Fat Frank', sans-serif; font-weight: 400;
          font-size: 22px; line-height: 1.3; letter-spacing: -0.01em;
          margin-bottom: 24px;
        }
        .pt-b .quote-author { display: flex; align-items: center; gap: 12px; font-size: 14px; }
        .pt-b .quote-avatar {
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg, var(--orange), var(--neon));
          display: flex; align-items: center; justify-content: center;
          color: white; font-family: 'Fat Frank', sans-serif; font-size: 16px;
        }
        .pt-b .quote-author-name strong { display: block; }
        .pt-b .quote-author-name span { color: var(--text-soft); font-size: 13px; }

        /* FAQ */
        .pt-b .faq { padding: 96px 0; border-top: 1px solid var(--line); }
        .pt-b .faq-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 64px; }
        .pt-b .faq-grid h2 {
          font-family: 'Fat Frank', sans-serif; font-weight: 400;
          font-size: clamp(36px, 4vw, 48px); letter-spacing: -0.015em; line-height: 1.05;
        }
        .pt-b .faq-list { display: flex; flex-direction: column; }
        .pt-b .faq-item { border-top: 1px solid var(--line); padding: 20px 0; }
        .pt-b .faq-item:last-child { border-bottom: 1px solid var(--line); }
        .pt-b .faq-item summary {
          list-style: none; cursor: pointer;
          display: flex; justify-content: space-between; align-items: center;
          font-size: 17px; font-weight: 500;
        }
        .pt-b .faq-item summary::-webkit-details-marker { display: none; }
        .pt-b .faq-item summary::after {
          content: '+'; color: var(--neon); font-size: 22px;
          transition: transform 200ms;
        }
        .pt-b .faq-item[open] summary::after { transform: rotate(45deg); }
        .pt-b .faq-item p { color: var(--text-soft); font-size: 15px; margin-top: 12px; }

        /* CTA */
        .pt-b .cta {
          margin: 0 32px 96px; max-width: 1136px;
          margin-left: auto; margin-right: auto;
          background: linear-gradient(135deg, #0e1410 0%, #1a2a1f 100%);
          border: 1px solid rgba(26,217,96,0.3);
          border-radius: 24px; padding: 80px 48px;
          text-align: center; position: relative; overflow: hidden;
        }
        .pt-b .cta::before {
          content: ''; position: absolute; inset: -20%;
          background: radial-gradient(circle at 50% 0%, rgba(26,217,96,0.15) 0%, transparent 50%);
          pointer-events: none;
        }
        .pt-b .cta-inner { position: relative; }
        .pt-b .cta h2 {
          font-family: 'Fat Frank', sans-serif; font-weight: 400;
          font-size: clamp(40px, 5vw, 64px);
          line-height: 1; letter-spacing: -0.02em;
          margin-bottom: 16px;
        }
        .pt-b .cta h2 .accent { color: var(--neon); }
        .pt-b .cta p { color: var(--text-soft); font-size: 17px; margin-bottom: 36px; max-width: 520px; margin-left: auto; margin-right: auto; }
        .pt-b .cta .btn-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

        /* FOOTER */
        .pt-b footer { border-top: 1px solid var(--line); padding: 56px 0 40px; }
        .pt-b .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 32px; }
        .pt-b footer h4 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-soft); margin-bottom: 16px; }
        .pt-b footer ul { list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 14px; }
        .pt-b footer ul a { color: var(--text); }
        .pt-b footer ul a:hover { color: var(--neon); }
        .pt-b .footer-tag { color: var(--text-soft); font-size: 14px; margin-top: 12px; max-width: 320px; }
        .pt-b .footer-legal {
          margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--line);
          display: flex; justify-content: space-between; font-size: 13px; color: var(--text-soft);
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="logo" aria-label="PubTrivia">
            <img src="assets/pubtrivia-logo-white.png" alt="PubTrivia" className="logo-img" />
          </a>
          <div className="nav-links">
            <a href="#how">Hoe het werkt</a>
            <a href="#features">Functies</a>
            <a href="#stats">Resultaten</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="nav-cta-row">
            <a href="#" className="nav-login">Inloggen</a>
            <a href="#demo" className="btn btn-primary">Demo aanvragen →</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="pill"><span style={{display:'inline-block',width:6,height:6,borderRadius:'50%',background:'var(--neon)',marginRight:8,verticalAlign:'middle'}}></span>In pilotfase · zoekt eerste 10 kroegen</div>
              <h1>
                Eén rondje<br />
                meer per gezelschap.<br />
                <span className="accent">Elke avond.</span>
              </h1>
              <p className="lead">
                PubTrivia houdt gasten in de zaak met een quiz die 24/7 op je TV draait. Geen quizmaster, geen gedoe — gewoon meer omzet op de uren waar je nu omzet mist.
              </p>
              <div className="hero-cta">
                <a href="#demo" className="btn btn-primary btn-lg">Vraag een demo aan →</a>
                <a href="#how" className="btn btn-ghost btn-lg">Hoe het werkt</a>
              </div>
              <div className="hero-meta">
                <div className="hero-meta-item">3 maanden gratis pilot</div>
                <div className="hero-meta-item">TV met HDMI nodig</div>
                <div className="hero-meta-item">Geen creditcard</div>
              </div>
            </div>

            <div className="roi-card">
              <img className="roi-mascot" src="assets/monster-duo.webp" alt="" />
              <div className="roi-card-head">
                <span className="roi-card-title">Voorbeeld · doordeweekse avond</span>
                <span className="roi-card-live">DEMO</span>
              </div>
              <div className="roi-row"><span>Gezelschappen actief</span><span>14</span></div>
              <div className="roi-row"><span>Spelers in de zaak</span><span>52</span></div>
              <div className="roi-row"><span>Gem. verblijfsduur</span><span>+38 min</span></div>
              <div className="roi-row"><span>Extra rondes verkocht</span><span style={{color: 'var(--neon)'}}>+19</span></div>
              <div className="roi-bars">
                <div className="roi-bar" style={{height: '40%'}}></div>
                <div className="roi-bar" style={{height: '55%'}}></div>
                <div className="roi-bar" style={{height: '50%'}}></div>
                <div className="roi-bar" style={{height: '70%'}}></div>
                <div className="roi-bar full" style={{height: '85%'}}></div>
                <div className="roi-bar full" style={{height: '95%'}}></div>
                <div className="roi-bar full" style={{height: '100%'}}></div>
              </div>
              <div className="roi-total">
                <span className="roi-total-label">Voorspelde extra omzet (op basis van 50 spelers)</span>
                <span className="roi-total-value">€200–300</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust">
        <div className="wrap">
          <div className="trust-inner">
            <div className="trust-label">Eerste pilotkroegen worden gezocht in</div>
            <div className="trust-logos">
              <span className="trust-logo">Weesp</span>
              <span className="trust-logo serif">Muiden</span>
              <span className="trust-logo upper">Naarden</span>
              <span className="trust-logo">Amsterdam-Oost</span>
              <span className="trust-logo serif">Het Gooi</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats" id="stats">
        <div className="wrap">
          <div className="stats-head">
            <h2>Wat we gaan meten<br />in de pilot.</h2>
            <p>PubTrivia is net gelanceerd. Dit zijn de doelen waar we ons in elke pilotkroeg op richten — en wat we gaan meten om te bewijzen dat het werkt.</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-num" style={{fontSize:48}}>Doel<span className="unit"></span></div>
              <div className="stat-label">Verblijfsduur omhoog</div>
              <div className="stat-sub">We meten hoeveel langer gasten blijven als de quiz draait. Voor- en nameting per pilotkroeg.</div>
            </div>
            <div className="stat-card">
              <div className="stat-num" style={{fontSize:48}}>Doel<span className="unit"></span></div>
              <div className="stat-label">Rondes per gezelschap</div>
              <div className="stat-sub">We tellen of er gemiddeld een rondje extra wordt besteld op de avonden waarop PubTrivia draait.</div>
            </div>
            <div className="stat-card">
              <div className="stat-num" style={{fontSize:48}}>Doel<span className="unit"></span></div>
              <div className="stat-label">Extra omzet / avond</div>
              <div className="stat-sub">Voor- en nameting van de kassa op rustige avonden. Eerlijke cijfers, geen marketingpraat.</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="how" id="how">
        <div className="wrap">
          <div className="how-grid">
            <div>
              <div className="pill">Setup</div>
              <h2 style={{fontFamily: 'Fat Frank, sans-serif', fontWeight: 400, fontSize: 'clamp(32px, 3.6vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.015em', marginBottom: 16}}>
                Tien minuten<br />van uitpakken tot eerste vraag.
              </h2>
              <p style={{color: 'var(--text-soft)', marginBottom: 32}}>Geen installateur. Geen training. Een TV, een QR-sticker, klaar.</p>
              <ol className="step-list">
                <li className="step-item">
                  <div>
                    <h3>TV koppelen</h3>
                    <p>Open onze link op een smart-TV, Chromecast of Apple TV. We helpen op afstand mee.</p>
                  </div>
                </li>
                <li className="step-item">
                  <div>
                    <h3>QR-stickers — zelf printen</h3>
                    <p>Wij maken de stickers met jouw naam, jij print ze zelf op A4. Op tafels, aan de bar, bij de wc. Plakken en draaien.</p>
                  </div>
                </li>
                <li className="step-item">
                  <div>
                    <h3>De quiz draait — voor altijd</h3>
                    <p>24/7 actief. Of alleen op rustige avonden. Kies wat past bij je rooster.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="how-visual">
              <div className="how-tv"><img src="assets/screenshots/tv-question.webp" alt="" /></div>
              <div className="how-phone"><img src="assets/screenshots/mobile-answer.webp" alt="" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="wrap">
          <div className="features-head">
            <h2>Niet zomaar een quiz.<br />Een omzet-tool die toevallig leuk is.</h2>
            <a href="#demo" className="btn btn-ghost">Bekijk alle functies →</a>
          </div>
          <div className="features-grid">
            <div className="feat">
              <span className="feat-tag">24/7</span>
              <h3>Altijd actief</h3>
              <p>Werkt door als je dicht bent of op vakantie. Aanzetten en vergeten.</p>
            </div>
            <div className="feat">
              <span className="feat-tag">€</span>
              <h3>Eigen aanbiedingen</h3>
              <p>Promoot je menu, borrelhapjes of evenementen tussen de rondes door.</p>
            </div>
            <div className="feat">
              <span className="feat-tag">★</span>
              <h3>Live leaderboard</h3>
              <p>Ranglijst tussen alle gezelschappen die meedoen — tafels, barklanten, terraszitters. Drijft fanatiek doorspelen en dus extra bestellingen.</p>
            </div>
            <div className="feat">
              <span className="feat-tag">QR</span>
              <h3>Geen app nodig</h3>
              <p>Gasten scannen, spelen, klaar. Geen download, geen account, geen drempel.</p>
            </div>
            <div className="feat">
              <span className="feat-tag">NL/EN</span>
              <h3>Nederlands of Engels</h3>
              <p>Vragen in NL of EN, afhankelijk van je publiek. Toeristisch buurtje? Engelse modus aan en klaar.</p>
            </div>
            <div className="feat">
              <span className="feat-tag">UI</span>
              <h3>Jouw logo op het scherm</h3>
              <p>Upload je logo en het verschijnt op de TV en op de telefoons van je gasten. Jouw kroeg, jouw naam, jouw scherm.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER NOTE */}
      <section className="quote-row">
        <div className="wrap" style={{gridColumn: '1 / -1'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: 24, maxWidth: 880, margin: '0 auto'}}>
            <div className="quote-card">
              <div className="quote-stars" style={{letterSpacing:0,fontSize:13,fontWeight:600}}>EERLIJK VERHAAL</div>
              <blockquote>"PubTrivia draait. De software werkt. Maar er hangt nog geen TV in een echte kroeg — daar zoek ik nu de eerste tien voor. Drie maanden gratis, ik kom langs, ik installeer, en samen meten we of dit echt iets toevoegt op een rustige dinsdag."</blockquote>
              <div className="quote-author">
                <div className="quote-avatar">B</div>
                <div className="quote-author-name">
                  <strong>Bas Dumoulin</strong>
                  <span>Maker · WonderLoop, Weesp</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="wrap">
          <div className="faq-grid">
            <h2>Vragen.<br />Eerlijke antwoorden.</h2>
            <div className="faq-list">
              <details className="faq-item" open>
                <summary>Heb ik een quizmaster nodig?</summary>
                <p>Nee. Vragen, antwoorden, scores en leaderboard draaien volledig automatisch. Jij hoeft niets aan de microfoon te doen.</p>
              </details>
              <details className="faq-item">
                <summary>Wat kost het na de pilot?</summary>
                <p>Na drie maanden gratis kies je zelf of je doorgaat. Vaste maandprijs, vergelijkbaar met een streamingdienst — geen %-fee op je omzet.</p>
              </details>
              <details className="faq-item">
                <summary>Wat heb ik aan apparatuur nodig?</summary>
                <p>Een TV met internet (smart-TV, Chromecast, Apple TV of een mini-PC). Wij helpen je op afstand met opzetten.</p>
              </details>
              <details className="faq-item">
                <summary>Wat als niemand meespeelt?</summary>
                <p>De TV laat ook zonder spelers vragen, weetjes en jouw aanbiedingen zien. Vaak begint één tafel — daarna volgt de rest.</p>
              </details>
              <details className="faq-item">
                <summary>Kan ik het ook alleen op rustige avonden gebruiken?</summary>
                <p>Ja. Je kiest zelf het rooster. Of laat het 24/7 lopen — beide werkt.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding: 0}}>
        <div className="cta" id="demo">
          <div className="cta-inner">
            <div className="pill" style={{margin: '0 auto 24px'}}>Drie maanden, op het huis</div>
            <h2>Klaar voor één<br />rondje extra <span className="accent">per gezelschap?</span></h2>
            <p>Geen creditcard, geen verplichtingen. We bellen je binnen 24 uur en zetten 'm samen op.</p>
            <div className="btn-row">
              <a href="#" className="btn btn-primary btn-lg">Vraag een demo aan →</a>
              <a href="#" className="btn btn-ghost btn-lg">Stuur een appje</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="logo" style={{marginBottom: 16}}>
                <img src="assets/pubtrivia-logo-white.png" alt="PubTrivia" style={{height: 48, width: 'auto'}} />
              </div>
              <p className="footer-tag">24/7 digitale pubquiz voor de Nederlandse horeca. Onderdeel van WonderLoop, Amsterdam-Weesp.</p>
            </div>
            <div>
              <h4>Product</h4>
              <ul>
                <li><a href="#how">Hoe het werkt</a></li>
                <li><a href="#features">Functies</a></li>
                <li><a href="#stats">Resultaten</a></li>
                <li><a href="#faq">FAQ</a></li>
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

window.DirectionB = DirectionB;
