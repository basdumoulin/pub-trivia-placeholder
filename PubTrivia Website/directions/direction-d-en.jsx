/* =========================================================
   DIRECTION D — Layout B + Palette A
   Editorial cream + ink + orange, Fraunces serif accents,
   on top of B's structure (sticky nav, ROI hero card,
   stats grid, two-col how-it-works, feature grid, quotes).
   ========================================================= */

const DirectionDEn = () => {
  return (
    <div className="pt-d">
      <style>{`
        .pt-d {
          --ink: #1a1714;
          --ink-soft: #4a4441;
          --paper: #f6f1ea;
          --paper-2: #fff;
          --paper-warm: #ede5d6;
          --line: #d9cfbf;
          --line-2: #c8bca6;
          --accent: #ff6a1f;
          --accent-deep: #d6520f;
          --accent-soft: #ffe8d6;
          --green: #1a8f4a;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          color: var(--ink);
          background: var(--paper);
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          font-size: 16px;
        }
        .pt-d .wrap { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
        .pt-d .mono { font-family: 'JetBrains Mono', 'SF Mono', ui-monospace, monospace; }
        .pt-d .serif { font-family: 'Fat Frank', system-ui, sans-serif; }

        /* NAV — sticky, like B */
        .pt-d .nav {
          position: sticky; top: 0; z-index: 50;
          backdrop-filter: blur(14px); background: rgba(246,241,234,0.78);
          border-bottom: 1px solid var(--line);
        }
        .pt-d .nav-inner {
          display: flex; align-items: center; justify-content: space-between;
          padding: 4px 32px; max-width: 1200px; margin: 0 auto;
        }
        .pt-d .logo { display: flex; align-items: center; gap: 10px; font-family: 'Fat Frank', sans-serif; font-size: 20px; text-decoration: none; color: inherit; }
        .pt-d .logo-img { height: 88px; width: auto; display: block; margin: -16px 0; }
        .pt-d .logo-mark {
          width: 30px; height: 30px; border-radius: 50%; background: var(--accent);
          display: flex; align-items: center; justify-content: center; color: white;
          font-size: 14px; font-family: 'Fat Frank', sans-serif;
        }
        .pt-d .nav-links { display: flex; gap: 32px; font-size: 14px; color: var(--ink-soft); }
        .pt-d .nav-links a:hover { color: var(--ink); }
        .pt-d .nav-cta-row { display: flex; gap: 10px; align-items: center; }
        .pt-d .nav-login { font-size: 14px; color: var(--ink-soft); padding: 8px 12px; }
        .pt-d .nav-login:hover { color: var(--ink); }
        .pt-d .lang-switch { display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px; border: 1px solid var(--line); border-radius: 999px; background: white; transition: border-color 0.15s; }
        .pt-d .lang-switch:hover { border-color: var(--ink-soft); }
        .pt-d .lang-switch img { width: 18px; height: 18px; border-radius: 50%; object-fit: cover; display: block; }
        .pt-d .lang-switch span { font-size: 12px; font-weight: 600; color: var(--ink); letter-spacing: 0.04em; }

        /* BUTTONS — A's refined pill style */
        .pt-d .btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 18px; border-radius: 100px; border: none;
          font-size: 14px; font-weight: 500;
          transition: all 180ms cubic-bezier(.4,0,.2,1);
        }
        .pt-d .btn-primary { background: var(--ink); color: var(--paper); }
        .pt-d .btn-primary:hover { background: var(--accent); transform: translateY(-1px); }
        .pt-d .btn-ghost { background: transparent; color: var(--ink); border: 1px solid var(--line-2); }
        .pt-d .btn-ghost:hover { background: white; border-color: var(--ink); }
        .pt-d .btn-lg { padding: 14px 24px; font-size: 15px; }
        .pt-d .btn-arrow {
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--accent); color: white; display: inline-flex;
          align-items: center; justify-content: center; font-size: 11px;
        }
        .pt-d .btn-primary .btn-arrow { background: var(--paper); color: var(--ink); }

        /* HERO */
        .pt-d .hero {
          position: relative; overflow: hidden;
          padding: 72px 0 96px;
          background:
            radial-gradient(ellipse 60% 60% at 80% 20%, rgba(255,106,31,0.14) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 10% 90%, rgba(255,106,31,0.06) 0%, transparent 60%);
        }
        .pt-d .hero-grid {
          display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 64px; align-items: center;
        }
        .pt-d .pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: white; border: 1px solid var(--line);
          color: var(--ink); padding: 6px 14px; border-radius: 100px;
          font-size: 13px; font-weight: 500; margin-bottom: 24px;
        }
        .pt-d .pill::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); box-shadow: 0 0 8px var(--accent);
          animation: ptDPulse 2s ease infinite;
        }
        @keyframes ptDPulse {
          0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
        }
        .pt-d .hero h1 {
          font-family: 'Fat Frank', system-ui, sans-serif;
          font-weight: 400;
          font-size: clamp(48px, 6vw, 80px);
          line-height: 0.98; letter-spacing: -0.025em;
          margin-bottom: 24px;
        }
        .pt-d .hero h1 em {  color: var(--accent); }
        .pt-d .hero p.lead {
          font-size: 18px; color: var(--ink-soft);
          max-width: 480px; margin-bottom: 36px;
        }
        .pt-d .hero-cta { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
        .pt-d .hero-meta {
          margin-top: 32px; display: flex; gap: 20px 24px;
          font-size: 13px; color: var(--ink-soft);
          flex-wrap: wrap;
        }
        .pt-d .hero-meta-item { display: flex; align-items: center; gap: 8px; }
        .pt-d .hero-meta-item::before {
          content: '✓'; color: var(--accent); font-weight: bold;
        }

        /* HERO CARD — ROI mockup (B's layout, A's colors) */
        .pt-d .roi-card {
          background: white;
          border: 1px solid var(--line);
          border-radius: 20px; padding: 32px;
          box-shadow: 0 30px 80px rgba(26,23,20,0.10);
          position: relative;
        }
        .pt-d .roi-card-head {
          display: flex; justify-content: space-between; align-items: center;
          padding-bottom: 16px; border-bottom: 1px solid var(--line);
          margin-bottom: 20px;
        }
        .pt-d .roi-card-title { font-size: 13px; color: var(--ink-soft); text-transform: uppercase; letter-spacing: 0.08em; }
        .pt-d .roi-card-live { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--accent); font-weight: 600; }
        .pt-d .roi-card-live::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); animation: ptDPulse 2s infinite;
        }
        .pt-d .roi-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--line); font-size: 14px; }
        .pt-d .roi-row:last-of-type { border-bottom: none; }
        .pt-d .roi-row span:first-child { color: var(--ink-soft); }
        .pt-d .roi-row span:last-child { font-family: 'JetBrains Mono', monospace; }
        .pt-d .roi-total {
          margin-top: 20px; padding-top: 20px; border-top: 2px solid var(--ink);
          display: flex; justify-content: space-between; align-items: baseline;
        }
        .pt-d .roi-total-label { font-size: 14px; color: var(--ink-soft); }
        .pt-d .roi-total-value {
          font-family: 'Fat Frank', system-ui, sans-serif;
          font-weight: 400; 
          font-size: 48px; color: var(--accent); line-height: 1;
          letter-spacing: -0.02em;
        }
        .pt-d .roi-mascot {
          position: absolute; right: -32px; top: -52px; width: 130px;
          transform: rotate(8deg);
          filter: drop-shadow(0 12px 24px rgba(26,23,20,0.18));
        }
        .pt-d .roi-bars { margin-top: 20px; display: flex; align-items: flex-end; gap: 6px; height: 56px; }
        .pt-d .roi-bar { flex: 1; background: var(--accent-soft); border-radius: 4px; }
        .pt-d .roi-bar.full { background: var(--accent); }

        /* QUICK FACTS — under trust label, above stats */
        .pt-d .facts {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
          border-top: 1px solid var(--line);
          background: white;
        }
        .pt-d .fact { padding: 28px 24px; border-right: 1px solid var(--line); }
        .pt-d .fact:last-child { border-right: none; }
        .pt-d .fact-num {
          font-family: 'Fat Frank', system-ui, sans-serif;
          font-weight: 400;
          font-size: 44px; line-height: 1; margin-bottom: 8px;
          letter-spacing: -0.02em;
        }
        .pt-d .fact-num em { font-style: italic; color: var(--accent); }
        .pt-d .fact-label { font-size: 14px; color: var(--ink-soft); }

        /* TRUST */
        .pt-d .trust { padding: 40px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: white; }
        .pt-d .trust-inner {
          display: flex; align-items: center; gap: 48px;
          justify-content: space-between; flex-wrap: wrap;
        }
        .pt-d .trust-label { font-size: 13px; color: var(--ink-soft); text-transform: uppercase; letter-spacing: 0.1em; flex-shrink: 0; }
        .pt-d .trust-logos { display: flex; gap: 40px; align-items: center; flex-wrap: wrap; }
        .pt-d .trust-logo { font-family: 'Fat Frank', serif; font-size: 22px; color: var(--ink-soft); opacity: 0.75; transition: opacity 200ms; }
        .pt-d .trust-logo:hover { opacity: 1; color: var(--ink); }
        .pt-d .trust-logo.serif { font-family: 'Fat Frank', system-ui, sans-serif;  font-weight: 500; }
        .pt-d .trust-logo.upper { text-transform: uppercase; letter-spacing: 0.12em; font-size: 16px; font-family: 'Inter', sans-serif; font-weight: 600; }

        /* STATS */
        .pt-d .stats {
          padding: 96px 0;
          border-bottom: 1px solid var(--line);
        }
        .pt-d .stats-head { text-align: center; margin-bottom: 56px; }
        .pt-d .stats-head h2 {
          font-family: 'Fat Frank', system-ui, sans-serif;
          font-weight: 400;
          font-size: clamp(36px, 4.4vw, 56px);
          line-height: 1.05; letter-spacing: -0.02em;
        }
        .pt-d .stats-head h2 em {  color: var(--accent); }
        .pt-d .stats-head p { color: var(--ink-soft); margin-top: 16px; max-width: 720px; margin-left: auto; margin-right: auto; }
        .pt-d .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .pt-d .stat-card {
          background: white; border: 1px solid var(--line);
          border-radius: 16px; padding: 32px;
          transition: all 200ms;
        }
        .pt-d .stat-card:hover { border-color: var(--ink); transform: translateY(-2px); }
        .pt-d .stat-num {
          font-family: 'Fat Frank', system-ui, sans-serif;
          font-weight: 400; 
          font-size: 64px; line-height: 1;
          color: var(--accent); margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .pt-d .stat-num .unit { font-size: 32px; opacity: 0.7; font-style: normal; }
        .pt-d .stat-label { font-weight: 600; margin-bottom: 8px; }
        .pt-d .stat-sub { font-size: 14px; color: var(--ink-soft); }

        /* HOW */
        .pt-d .how { padding: 96px 0; background: white; }
        .pt-d .how-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 64px; align-items: center; }
        .pt-d .how-grid h2 {
          font-family: 'Fat Frank', system-ui, sans-serif; font-weight: 400;
          font-size: clamp(32px, 3.6vw, 48px); line-height: 1.05;
          letter-spacing: -0.02em; margin-bottom: 16px;
        }
        .pt-d .how-grid h2 em {  color: var(--accent); }
        .pt-d .step-list { list-style: none; counter-reset: step; }
        .pt-d .step-item {
          counter-increment: step;
          padding: 24px 0; border-top: 1px solid var(--line);
          display: grid; grid-template-columns: auto 1fr; gap: 24px; align-items: start;
        }
        .pt-d .step-item:last-child { border-bottom: 1px solid var(--line); }
        .pt-d .step-item::before {
          content: '0' counter(step);
          font-family: 'Fat Frank', system-ui, sans-serif; 
          font-size: 22px; color: var(--accent); padding-top: 0;
        }
        .pt-d .step-item h3 {
          font-family: 'Fat Frank', system-ui, sans-serif; font-weight: 500;
          font-size: 22px; margin-bottom: 6px; letter-spacing: -0.01em;
        }
        .pt-d .step-item p { color: var(--ink-soft); font-size: 15px; }
        .pt-d .how-visual {
          aspect-ratio: 4/3.2;
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }
        .pt-d .how-tv {
          width: 80%; border-radius: 8px; overflow: hidden;
          border: 6px solid #2a2520; box-shadow: 0 20px 50px rgba(26,23,20,0.25);
        }
        .pt-d .how-phone {
          position: absolute; bottom: 24px; right: 24px; width: 28%;
          border-radius: 14px; overflow: hidden;
          border: 3px solid #1a1a1a; box-shadow: 0 12px 30px rgba(26,23,20,0.3);
          transform: rotate(5deg);
        }
        .pt-d .how-sticker {
          width: 92%; max-width: 460px; height: auto; display: block;
        }

        /* FEATURES */
        .pt-d .features { padding: 96px 0; border-top: 1px solid var(--line); }
        .pt-d .features-head { margin-bottom: 48px; }
        .pt-d .features-eyebrow {
          font-size: 13px; color: var(--accent); font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          display: flex; align-items: center; gap: 8px; margin-bottom: 16px;
        }
        .pt-d .features-eyebrow::before {
          content: ''; display: inline-block; width: 6px; height: 6px;
          border-radius: 50%; background: var(--accent);
        }
        .pt-d .features-head h2 {
          font-family: 'Fat Frank', system-ui, sans-serif; font-weight: 400;
          font-size: clamp(36px, 4vw, 56px);
          line-height: 1.05; letter-spacing: -0.02em; max-width: 720px;
        }
        .pt-d .features-head h2 em { color: var(--accent); font-style: italic; }
        .pt-d .features-sub {
          margin-top: 18px; font-size: 15px; color: var(--ink-soft); max-width: 600px;
        }
        .pt-d .benefits-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px;
          background: var(--line); border: 1px solid var(--line); border-radius: 16px; overflow: hidden;
        }
        .pt-d .benefit {
          background: var(--paper); padding: 36px 36px 40px;
          display: flex; gap: 20px; transition: background 150ms;
        }
        .pt-d .benefit:hover { background: white; }
        .pt-d .benefit-num {
          font-family: 'Fat Frank', system-ui, sans-serif;
          font-size: 14px; font-style: italic; color: var(--accent);
          flex-shrink: 0; padding-top: 4px; min-width: 28px;
        }
        .pt-d .benefit h3 {
          font-family: 'Fat Frank', system-ui, sans-serif;
          font-weight: 500; font-size: 22px; margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .pt-d .benefit p { color: var(--ink-soft); font-size: 15px; line-height: 1.5; }
        .pt-d .feat {
          background: white; border: 1px solid var(--line);
          border-radius: 14px; padding: 28px;
          transition: all 200ms;
        }
        .pt-d .feat:hover { border-color: var(--ink); transform: translateY(-2px); }
        .pt-d .feat-tag {
          display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: var(--accent); background: var(--accent-soft); padding: 4px 8px; border-radius: 4px;
          margin-bottom: 16px;
        }
        .pt-d .feat h3 {
          font-family: 'Fat Frank', system-ui, sans-serif; font-weight: 500;
          font-size: 20px; margin-bottom: 8px; letter-spacing: -0.01em;
        }
        .pt-d .feat p { color: var(--ink-soft); font-size: 14px; }

        /* QUOTES */
        .pt-d .quote-row {
          padding: 96px 0;
          border-top: 1px solid var(--line);
        }
        .pt-d .quote-row .wrap > div { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .pt-d .quote-card {
          padding: 32px; border: 1px solid var(--line); border-radius: 16px;
          background: white;
        }
        .pt-d .quote-stars { color: var(--accent); margin-bottom: 16px; font-size: 14px; letter-spacing: 4px; }
        .pt-d .quote-card blockquote {
          font-family: 'Fat Frank', system-ui, sans-serif; font-weight: 400; 
          font-size: 22px; line-height: 1.3; letter-spacing: -0.01em;
          margin-bottom: 24px;
        }
        .pt-d .quote-author { display: flex; align-items: center; gap: 12px; font-size: 14px; }
        .pt-d .quote-avatar {
          width: 40px; height: 40px; border-radius: 50%;
          background: var(--accent);
          display: flex; align-items: center; justify-content: center;
          color: white; font-family: 'Fat Frank', sans-serif; font-size: 16px;
        }
        .pt-d .quote-author-name strong { display: block; }
        .pt-d .quote-author-name span { color: var(--ink-soft); font-size: 13px; }

        /* FAQ */
        .pt-d .faq { padding: 96px 0; border-top: 1px solid var(--line); background: white; }
        .pt-d .faq-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 64px; }
        .pt-d .faq-grid h2 {
          font-family: 'Fat Frank', system-ui, sans-serif; font-weight: 400;
          font-size: clamp(36px, 4vw, 48px); letter-spacing: -0.02em; line-height: 1.05;
        }
        .pt-d .faq-grid h2 em {  color: var(--accent); }
        .pt-d .faq-list { display: flex; flex-direction: column; }
        .pt-d .faq-item { border-top: 1px solid var(--line); padding: 20px 0; }
        .pt-d .faq-item:last-child { border-bottom: 1px solid var(--line); }
        .pt-d .faq-item summary {
          list-style: none; cursor: pointer;
          display: flex; justify-content: space-between; align-items: center;
          font-family: 'Fat Frank', system-ui, sans-serif; font-weight: 500;
          font-size: 19px; letter-spacing: -0.01em;
        }
        .pt-d .faq-item summary::-webkit-details-marker { display: none; }
        .pt-d .faq-item summary::after {
          content: '+'; font-family: 'Fat Frank', system-ui, sans-serif; 
          color: var(--accent); font-size: 26px;
          transition: transform 200ms;
        }
        .pt-d .faq-item[open] summary::after { transform: rotate(45deg); }
        .pt-d .faq-item p { color: var(--ink-soft); font-size: 15px; margin-top: 12px; }

        /* CTA */
        .pt-d .cta {
          margin: 0 32px 96px; max-width: 1136px;
          margin-left: auto; margin-right: auto;
          background: var(--ink); color: var(--paper);
          border-radius: 24px; padding: 80px 48px;
          text-align: center; position: relative; overflow: hidden;
        }
        .pt-d .cta::before {
          content: ''; position: absolute; inset: -20%;
          background: radial-gradient(circle at 50% 0%, rgba(255,106,31,0.22) 0%, transparent 50%);
          pointer-events: none;
        }
        .pt-d .cta-inner { position: relative; }
        .pt-d .cta .pill {
          background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.18); color: var(--paper);
        }
        .pt-d .cta h2 {
          font-family: 'Fat Frank', system-ui, sans-serif; font-weight: 400;
          font-size: clamp(40px, 5vw, 64px);
          line-height: 1; letter-spacing: -0.02em;
          margin-bottom: 16px;
        }
        .pt-d .cta h2 em {  color: #ff9355; }
        .pt-d .cta p { color: rgba(246,241,234,0.7); font-size: 17px; margin-bottom: 36px; max-width: 520px; margin-left: auto; margin-right: auto; }
        .pt-d .cta .btn-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .pt-d .cta .btn-primary { background: var(--accent); color: white; }
        .pt-d .cta .btn-primary:hover { background: white; color: var(--ink); }
        .pt-d .cta .btn-primary .btn-arrow { background: var(--ink); color: var(--paper); }
        .pt-d .cta .btn-ghost { background: transparent; color: var(--paper); border-color: rgba(255,255,255,0.25); }
        .pt-d .cta .btn-ghost:hover { background: rgba(255,255,255,0.08); border-color: var(--paper); }

        /* FOOTER */
        .pt-d footer { border-top: 1px solid var(--line); padding: 56px 0 40px; }
        .pt-d .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 32px; }
        .pt-d footer h4 { font-family: 'Fat Frank', system-ui, sans-serif; font-size: 16px; margin-bottom: 16px; color: var(--ink); font-weight: 500; }
        .pt-d footer ul { list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 14px; }
        .pt-d footer ul a { color: var(--ink-soft); }
        .pt-d footer ul a:hover { color: var(--accent); }
        .pt-d .footer-tag { color: var(--ink-soft); font-size: 14px; margin-top: 12px; max-width: 320px; }
        .pt-d .footer-legal {
          margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--line);
          display: flex; justify-content: space-between; font-size: 13px; color: var(--ink-soft);
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="logo" aria-label="PubTrivia">
            <img src="../assets/pubtrivia-logo.png" alt="PubTrivia" className="logo-img" />
          </a>
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#stats">Results</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="nav-cta-row">
            <a href="../" className="lang-switch" aria-label="Wissel naar Nederlands">
              <img src="../assets/flags/nl.png" alt="" />
              <span>NL</span>
            </a>
            <a href="#" className="nav-login">Log in</a>
            <a href="#demo" className="btn btn-primary">
              Request a demo
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="pill"><span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginRight: 8, verticalAlign: 'middle' }}></span>In pilot phase · looking for the first 5 bars</div>
              <h1>
                One more round<br />
                per group.<br />
                <em>Every night.</em>
              </h1>
              <p className="lead">
                PubTrivia keeps guests in your venue with a quiz that runs 24/7 on your TV. No quiz master, no hassle — just more revenue on the hours you're currently losing.
              </p>
              <div className="hero-cta">
                <a href="#demo" className="btn btn-primary btn-lg">
                  Request a demo
                  <span className="btn-arrow">→</span>
                </a>
                <a href="#how" className="btn btn-ghost btn-lg">How it works</a>
              </div>
              <div className="hero-meta">
                <div className="hero-meta-item">3-month free pilot</div>
                <div className="hero-meta-item">TV with HDMI needed</div>
                <div className="hero-meta-item">No credit card</div>
              </div>
            </div>

            <div className="roi-card">
              <img className="roi-mascot" src="../assets/monster-duo.webp" alt="" />
              <div className="roi-card-head">
                <span className="roi-card-title">Example · weeknight</span>
                <span className="roi-card-live">DEMO</span>
              </div>
              <div className="roi-row"><span>Groups playing</span><span>14</span></div>
              <div className="roi-row"><span>Players in venue</span><span>52</span></div>
              <div className="roi-row"><span>Avg. dwell time</span><span>+38 min</span></div>
              <div className="roi-row"><span>Extra rounds sold</span><span style={{ color: 'var(--accent)', fontWeight: 600 }}>+19</span></div>
              <div className="roi-bars">
                <div className="roi-bar" style={{ height: '40%' }}></div>
                <div className="roi-bar" style={{ height: '55%' }}></div>
                <div className="roi-bar" style={{ height: '50%' }}></div>
                <div className="roi-bar" style={{ height: '70%' }}></div>
                <div className="roi-bar full" style={{ height: '85%' }}></div>
                <div className="roi-bar full" style={{ height: '95%' }}></div>
                <div className="roi-bar full" style={{ height: '100%' }}></div>
              </div>
              <div className="roi-total">
                <span className="roi-total-label">Projected extra revenue (50 players)</span>
                <span className="roi-total-value" style={{ fontSize: "35px" }}>€200-€300</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section style={{ background: 'white' }}>
        <div className="wrap">
          <div className="facts">
            <div className="fact">
              <div className="fact-num"><em>5</em></div>
              <div className="fact-label">pilot bars wanted — three months free</div>
            </div>
            <div className="fact">
              <div className="fact-num">24/<em>7</em></div>
              <div className="fact-label">automatic — no quiz master</div>
            </div>
            <div className="fact">
              <div className="fact-num"><em>10</em> min</div>
              <div className="fact-label">from HDMI to first question</div>
            </div>
            <div className="fact">
              <div className="fact-num">3 mo</div>
              <div className="fact-label">free pilot — no credit card</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust">
        <div className="wrap">
          <div className="trust-inner">
            <div className="trust-label">Pilot bars wanted in</div>
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
            <h2>What we'll measure<br />in the <em>pilot.</em></h2>
            <p>PubTrivia just launched. These are the targets we're aiming for in every pilot bar, and what we'll honestly measure to prove it works.</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-num" style={{ fontSize: 48 }}>1</div>
              <div className="stat-label">Dwell time up</div>
              <div className="stat-sub">We measure how much longer guests stay when the quiz is running. Before & after measurements per pilot bar.</div>
            </div>
            <div className="stat-card">
              <div className="stat-num" style={{ fontSize: 48 }}>2</div>
              <div className="stat-label">Rounds per group</div>
              <div className="stat-sub">We count whether an extra round is ordered on average on nights when PubTrivia runs.</div>
            </div>
            <div className="stat-card">
              <div className="stat-num" style={{ fontSize: 48 }}>3</div>
              <div className="stat-label">Extra revenue / night</div>
              <div className="stat-sub">Before & after till data on quiet nights. Honest numbers, no marketing fluff.</div>
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
              <h2>Ten minutes<br />from unboxing to <em>first question.</em></h2>
              <p style={{ color: 'var(--ink-soft)', marginBottom: 32 }}>No installer. No training. A TV, a QR code, done.</p>
              <ol className="step-list">
                <li className="step-item">
                  <div>
                    <h3>Connect a TV</h3>
                    <p>Open our link on a smart TV, Chromecast or Apple TV. We'll help remotely.</p>
                  </div>
                </li>
                <li className="step-item">
                  <div>
                    <h3>QR codes — print them yourself</h3>
                    <p>We create the codes for your bar or pub, you print them yourself on A4. On tables, at the bar, by the loo. Print and play!</p>
                  </div>
                </li>
                <li className="step-item">
                  <div>
                    <h3>The quiz runs — forever</h3>
                    <p>24/7 active. Or only on quiet nights.<br />Pick what fits your schedule.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="how-visual">
              <img className="how-sticker" src="../assets/qr-sticker.png" alt="PubTrivia QR-sticker — Scan To Play" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="wrap">
          <div className="features-head">
            <div className="features-eyebrow">Why PubTrivia</div>
            <h2>More revenue on the hours<br />that are <em>currently empty.</em></h2>
            <p className="features-sub">Not just a quiz — a revenue tool that happens to be fun.</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-num">01</div>
              <div>
                <h3>One more round per group</h3>
                <p>Guests stay longer when there's something to do. They order a second beer — simply because they want to stick around for the next question. Works at tables and at the bar.</p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-num">02</div>
              <div>
                <h3>Fills Tuesday and Wednesday nights</h3>
                <p>Your dead days become your surprise nights. Give guests a reason to drop by on the hours you're currently losing.</p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-num">03</div>
              <div>
                <h3>No quiz master, no work</h3>
                <p>The questions roll on their own. Your staff doesn't need to do anything, organise anything, or track anything. TV on — that's it.</p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-num">04</div>
              <div>
                <h3>Promote your own menu on screen</h3>
                <p>Between rounds, show your bar snacks, daily special or upcoming events. With your own logo alongside.</p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-num">05</div>
              <div>
                <h3>Works in NL or EN</h3>
                <p>Questions in Dutch or English. Tourist neighbourhood? Switch to English mode and your international guests join in too.</p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-num">06</div>
              <div>
                <h3>24/7 active, even when you're off</h3>
                <p>Keeps running when you're closed or on holiday. Switch on and forget — or only run on quiet nights. Your call.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER NOTE */}
      <section className="quote-row">
        <div className="wrap">
          <div style={{ gridTemplateColumns: '1fr', maxWidth: 880, margin: '0 auto' }}>
            <div className="quote-card">
              <div className="quote-stars" style={{ letterSpacing: 0, fontSize: 13, fontWeight: 600 }}>HONEST STORY</div>
              <blockquote>"PubTrivia runs. The software works. But there's no TV in a real bar yet — that's what I'm looking for the first five for. <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginTop: 16, lineHeight: 1.5, color: 'var(--ink)' }}>Three months free, I'll come by, I'll install it, and together we'll measure whether this actually adds anything on a quiet Tuesday.</span>"</blockquote>
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
            <h2>Questions.<br /><em>Honest answers.</em></h2>
            <div className="faq-list">
              <details className="faq-item" open>
                <summary>Do I need a quiz master?</summary>
                <p>No. Questions, answers, scores and leaderboard run fully automatically. You don't need to touch a microphone.</p>
              </details>
              <details className="faq-item">
                <summary>What does it cost after the pilot?</summary>
                <p>After three months free, you decide whether to continue. Fixed monthly fee, comparable to a streaming service — no extra cut of your revenue.</p>
              </details>
              <details className="faq-item">
                <summary>What equipment do I need?</summary>
                <p>A TV with an HDMI port and internet. We'll help you set it up.</p>
              </details>
              <details className="faq-item">
                <summary>What if no one plays?</summary>
                <p>Even with no players, the TV shows questions, fun facts and your offers. Often one table starts — then the rest follow.</p>
              </details>
              <details className="faq-item">
                <summary>Can I use it only on quiet nights?</summary>
                <p>Yes. You choose the schedule. Or let it run 24/7 — both work.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 0 }}>
        <div className="cta" id="demo">
          <div className="cta-inner">
            <div className="pill" style={{ margin: '0 auto 24px' }}>Three months, on the house</div>
            <h2>Ready for one extra<br />round <em>per group?</em></h2>
            <p>No credit card, no commitment. We'll call you within 24 hours and set it up together.</p>
            <div className="btn-row">
              <a href="#" className="btn btn-primary btn-lg">
                Request a demo
                <span className="btn-arrow">→</span>
              </a>
              <a href="#" className="btn btn-ghost btn-lg">Send a WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="logo" style={{ marginBottom: 16 }}>
                <img src="../assets/pubtrivia-logo.png" alt="PubTrivia" style={{ height: 56, width: 'auto' }} />
              </div>
              <p className="footer-tag">24/7 digital pub quiz for hospitality. Part of WonderLoop, Amsterdam-Weesp.</p>
            </div>
            <div>
              <h4>Product</h4>
              <ul>
                <li><a href="#how">How it works</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#stats">Results</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:info@pub-trivia.nl">info@pub-trivia.nl</a></li>
                <li><a href="#">WhatsApp</a></li>
                <li><a href="#">Log in</a></li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-legal">
            <span>© 2026 WonderLoop · KVK 91926440 · BTW NL004925659B82</span>
            <span>Made in Amsterdam-Weesp</span>
          </div>
        </div>
      </footer>
    </div>);
};

window.DirectionDEn = DirectionDEn;