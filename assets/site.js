(function () {
  var root = document.documentElement;
  function apply(t) {
    root.setAttribute('data-theme', t);
    var b = document.getElementById('theme-toggle');
    if (b) b.setAttribute('aria-checked', t === 'dark' ? 'true' : 'false');
  }
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  apply(saved === 'light' ? 'light' : 'dark');

  document.addEventListener('DOMContentLoaded', function () {
    apply(root.getAttribute('data-theme'));
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        apply(next);
        try { localStorage.setItem('theme', next); } catch (e) {}
      });
    }
    var form = document.getElementById('anfrage');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var v = function (id) { return document.getElementById(id).value.trim(); };
        var body = 'Name: ' + v('f-name') + '\nTelefon: ' + v('f-tel') + '\nFahrzeug: ' + v('f-kfz') + '\n\n' + v('f-text');
        window.location.href = 'mailto:as.car@gmx.de?subject=' + encodeURIComponent('Anfrage über die Webseite') + '&body=' + encodeURIComponent(body);
      });
    }
  });
})();
