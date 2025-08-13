(function () {
  function ready(fn){
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function() {
    const data = Array.isArray(window.LINK_DATA) ? window.LINK_DATA : [];
    if (data.length === 0) {
      console.warn('LINK_DATA missing or empty.');
      return;
    }

    // Build a quick lookup by Key
    const map = Object.create(null);
    data.forEach(item => { if (item && item.Key) map[item.Key] = item; });

    // Only touch buttons that actually exist on this page
    const buttons = document.querySelectorAll('[data-insurance-link]');
    buttons.forEach(btn => {
      const key = btn.getAttribute('data-insurance-link');
      const item = map[key];

      if (!item) {
        // This means the page has a button we don't have data for — worth warning.
        console.warn(`No LINK_DATA entry for key "${key}" on this page.`);
        return;
      }

      // Apply attributes
      if (item.ID) btn.id = item.ID;             // only if you truly keep IDs unique per page
      if (item.Href) btn.href = item.Href;
      if (item.DataGATrack) btn.setAttribute('data-gatrack', item.DataGATrack);

      // Hardcoded defaults (your choice)
      btn.textContent = 'Get Quote';
      btn.className = 'button cta slim web-lead w-button';
      btn.rel = 'nofollow noopener noreferrer';
      btn.target = '_blank';
    });
  });
})();
