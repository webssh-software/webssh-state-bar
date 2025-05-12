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
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = '/assets/css/custom.css';
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
