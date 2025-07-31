fetch('/links.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const selector = `[data-insurance-link="${item.Key}"]`;
      const btn = document.querySelector(selector);
      if (btn) {
        btn.id = item.ID || '';
        btn.href = item.Href || '#';
        btn.textContent = item.Text || btn.textContent;
        btn.className = item.Class || btn.className;
        btn.setAttribute('data-gatrack', item.DataGATrack || '');
        btn.rel = item.Rel || 'nofollow noopener noreferrer';
        btn.target = item.Target || '_blank';
      }
    });
  });
