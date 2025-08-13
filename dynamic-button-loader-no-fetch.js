(function () {
  function ready(fn){
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function() {
    const data = (window.LINK_DATA || []);
    if (!Array.isArray(data) || data.length === 0) {
      console.warn('LINK_DATA missing or empty.');
      return;
    }

    data.forEach(item => {
      const key = item.Key;
      if (!key) return;

      const btns = document.querySelectorAll(`[data-insurance-link="${key}"]`);
      if (btns.length === 0) {
        console.warn(`No button found for Key "${key}"`);
        return;
      }

      btns.forEach(btn => {
        if (item.ID) btn.id = item.ID;
        if (item.Href) btn.href = item.Href;
        if (item.DataGATrack) btn.setAttribute('data-gatrack', item.DataGATrack);

        // Hardcoded styling + behavior
        btn.textContent = "Get Quote";
        btn.className = "button cta slim web-lead w-button";
        btn.rel = "nofollow noopener noreferrer";
        btn.target = "_blank";
      });
    });
  });
})();

// (function () {
//   // If you ever embed this script before the DOM, defer handles timing; this is just extra safe.
//   function ready(fn){ if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

//   ready(function() {
//     const data = (window.LINK_DATA || []);
//     if (!Array.isArray(data) || data.length === 0) {
//       console.warn('LINK_DATA missing or empty.');
//       return;
//     }

//     data.forEach(item => {
//       const key = item.Key;
//       if (!key) return;

//       // If you might have more than one button per key, use querySelectorAll:
//       const btns = document.querySelectorAll(`[data-insurance-link="${key}"]`);
//       if (btns.length === 0) {
//         console.warn(`No button found for Key "${key}"`);
//         return;
//       }

//       btns.forEach(btn => {
//         // Only set id if you’re sure it’s unique on the page
//         if (item.ID) btn.id = item.ID;

//         if (item.Href) btn.href = item.Href;
//         if (item.Text) btn.textContent = item.Text;

//         if (item.Class) btn.className = item.Class; // or: btn.classList = ... if you want additive behavior
//         if (item.DataGATrack) btn.setAttribute('data-gatrack', item.DataGATrack);

//         btn.rel = item.Rel || 'nofollow noopener noreferrer';
//         btn.target = item.Target || '_blank';
//       });
//     });
//   });
// })();
