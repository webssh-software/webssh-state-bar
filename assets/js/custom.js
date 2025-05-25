function loadGoatCounterViews() {
  const pv = document.getElementById('pageviews');
  if (pv !== null) {
    const uri = location.pathname.replace(/\/$/, '');
    const url = `https://webssh-state-bar.goatcounter.com/counter/${encodeURIComponent(uri)}.json`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const count = data.count.replace(/\s/g, '');
        pv.innerText = new Intl.NumberFormat().format(count);
      })
      .catch((error) => {
        pv.innerText = '1';
      });
  }
}

function loadCustomCSS() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const cacheBuster = `${year}-${month}-${day}-${hour}`;

  const css = document.createElement('link');
  css.rel = 'stylesheet';
  // year-month-day-hour
  css.href = '/assets/css/custom.css?_=' + cacheBuster;
  document.head.appendChild(css);
}

(() => {
  function onDomReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  onDomReady(() => {
    loadGoatCounterViews();
    loadCustomCSS();
  });
})();
