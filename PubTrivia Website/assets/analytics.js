(function () {
  var script = document.currentScript;
  var GA_ID = script && script.dataset && script.dataset.gaId;
  if (!GA_ID) return;

  var lang = (document.documentElement.lang || 'nl').slice(0, 2).toLowerCase();
  var STORAGE_KEY = 'pt_consent';
  var stored = null;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };

  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });

  if (stored === 'accepted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }

  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(gaScript);

  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var location = inferLocation(a);

    if (href.indexOf('mailto:') === 0) {
      gtag('event', 'email_clicked', { location: location, language: lang });
    } else if (/^https?:\/\/wa\.me/.test(href)) {
      gtag('event', 'whatsapp_clicked', { location: location, language: lang });
    } else if (a.classList.contains('lang-switch')) {
      gtag('event', 'language_switched', {
        from: lang,
        to: lang === 'nl' ? 'en' : 'nl'
      });
    }
  });

  function inferLocation(a) {
    if (a.closest('.nav-cta-row, header nav')) return 'nav';
    if (a.closest('.hero-cta')) return 'hero';
    if (a.closest('#demo, .cta')) return 'demo_section';
    if (a.closest('footer')) return 'footer';
    return 'other';
  }

  if (!stored) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', renderBanner);
    } else {
      renderBanner();
    }
  }

  function renderBanner() {
    if (document.getElementById('pt-consent')) return;
    injectStyles();

    var copy = lang === 'en'
      ? {
          message: 'We use analytics cookies to understand how visitors find PubTrivia and improve the site. No advertising, no cross-site tracking.',
          essential: 'Essential only',
          accept: 'Accept all',
          learn: 'Privacy'
        }
      : {
          message: 'We gebruiken analytics-cookies om te begrijpen hoe bezoekers PubTrivia vinden en de site te verbeteren. Geen advertenties, geen tracking elders.',
          essential: 'Alleen noodzakelijk',
          accept: 'Accepteer alles',
          learn: 'Privacy'
        };

    var bar = document.createElement('div');
    bar.id = 'pt-consent';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Cookie consent');
    bar.innerHTML =
      '<div class="pt-consent-text">' +
      escapeHtml(copy.message) +
      ' <a href="/privacy.html">' + escapeHtml(copy.learn) + '</a>' +
      '</div>' +
      '<div class="pt-consent-buttons">' +
      '<button type="button" class="pt-btn-secondary" data-action="essential">' + escapeHtml(copy.essential) + '</button>' +
      '<button type="button" class="pt-btn-primary" data-action="accept">' + escapeHtml(copy.accept) + '</button>' +
      '</div>';

    bar.addEventListener('click', function (e) {
      var action = e.target.getAttribute && e.target.getAttribute('data-action');
      if (action === 'accept') accept();
      else if (action === 'essential') decline();
    });

    document.body.appendChild(bar);
  }

  function accept() {
    gtag('consent', 'update', { analytics_storage: 'granted' });
    persist('accepted');
    gtag('event', 'consent_given', { level: 'all' });
    hideBanner();
  }

  function decline() {
    persist('essential');
    hideBanner();
  }

  function persist(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
  }

  function hideBanner() {
    var b = document.getElementById('pt-consent');
    if (b) b.remove();
  }

  function injectStyles() {
    if (document.getElementById('pt-consent-styles')) return;
    var s = document.createElement('style');
    s.id = 'pt-consent-styles';
    s.textContent = [
      '#pt-consent{position:fixed;bottom:16px;left:16px;right:16px;background:#0b0f17;color:#f4f4f6;border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:16px 20px;font-family:Inter,system-ui,sans-serif;font-size:14px;line-height:1.5;z-index:9999;display:flex;align-items:center;gap:16px;flex-wrap:wrap;box-shadow:0 10px 40px rgba(0,0,0,0.3);max-width:calc(100% - 32px)}',
      '#pt-consent .pt-consent-text{flex:1 1 280px}',
      '#pt-consent a{color:#ff6a1f;text-decoration:underline}',
      '#pt-consent .pt-consent-buttons{display:flex;gap:8px;flex-shrink:0}',
      '#pt-consent button{padding:9px 18px;border:none;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:background .15s}',
      '#pt-consent .pt-btn-primary{background:#ff6a1f;color:#fff}',
      '#pt-consent .pt-btn-primary:hover{background:#e85f17}',
      '#pt-consent .pt-btn-secondary{background:transparent;color:#f4f4f6;border:1px solid rgba(255,255,255,0.25)}',
      '#pt-consent .pt-btn-secondary:hover{background:rgba(255,255,255,0.06)}',
      '@media (max-width:600px){#pt-consent{flex-direction:column;align-items:stretch}#pt-consent .pt-consent-buttons{width:100%}#pt-consent button{flex:1}}'
    ].join('');
    document.head.appendChild(s);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
})();
