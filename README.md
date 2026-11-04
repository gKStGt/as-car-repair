# AS Car Repair Website (Entwurf)

Statische Webseite für AS Car Repair, Otto-Hahn-Straße 2, 71254 Ditzingen-Heimerdingen. Kein Build, keine Abhängigkeiten, keine Drittanbieter (keine Google Fonts, kein Google Maps, keine Cookies).

## Dateien

| Datei | Inhalt |
|---|---|
| `index.html`, `leistungen.html`, `galerie.html`, `ueber-uns.html`, `kontakt.html` | Eigene Seiten, untereinander verlinkt (je ein H1) |
| `impressum.html`, `datenschutz.html` | Rechtstexte als eigene Seiten |
| `assets/site.css`, `assets/site.js` | Stil, Hell-/Dunkelmodus, Formular (öffnet das Mailprogramm) |
| `assets/` | Logo-Symbol, Open-Graph-Bild (1200x630), Favicons |
| `robots.txt`, `sitemap.xml`, `llms.txt` | Crawler, Sitemap, Kurzfassung für KI-Systeme (KI-Crawler nicht gesperrt) |
| `config/` | Beispiel für eigenes Hosting: nginx und Apache mit HTTPS-Weiterleitung, HSTS, CSP, Caching |

## Vor dem Livegang

1. **Indexierung freigeben:** In allen HTML-Dateien steht `noindex, nofollow`. Auf `index, follow` stellen, wenn alle Platzhalter ersetzt sind.
2. **Domain eintragen:** Alle absoluten URLs (Canonical, Open Graph, Schema.org, Sitemap, robots.txt, llms.txt) nutzen `https://gkstgt.github.io/as-car-repair`. Per Suchen und Ersetzen durch die Zieldomain tauschen, zum Beispiel `https://as-car-repair.de`. `robots.txt` und `sitemap.xml` werden von Suchmaschinen nur im Hauptverzeichnis einer Domain gelesen, unter einer Projekt-URL auf github.io wirken sie nicht.
3. **Platzhalter in eckigen Klammern ersetzen:** Vorher/Nachher-Fotos, Qualifikation, Gründungsjahr, Google-Bewertungen, Rechtsform, Handwerkskammer, USt-ID im Impressum, Drittland-Angaben zum Hoster in der Datenschutzerklärung.
4. **Rechtstexte prüfen lassen.** Beide Seiten sind Entwürfe.

## Sicherheit

- Eine Content-Security-Policy steckt als Meta-Tag in jeder Seite: nur eigene Dateien, keine Fremdquellen. Auf GitHub Pages sind eigene HTTP-Header nicht möglich, daher kein HSTS und kein `frame-ancestors`. GitHub Pages leitet auf HTTPS weiter (Enforce HTTPS).
- Bei eigenem Hosting `config/nginx.conf.example` oder `config/htaccess.example` verwenden. Zertifikat: `sudo certbot --nginx -d as-car-repair.de -d www.as-car-repair.de`. HSTS erst einschalten, wenn HTTPS stabil läuft.

## Datenschutz

- Keine Cookies, kein Tracking, keine Nachladungen: kein Einwilligungs-Banner nötig. Erst wenn Analytics, Karten oder Videos dazukommen, braucht die Seite eines.
- Der Hell-/Dunkelmodus speichert die Wahl im Local Storage. Das steht in der Datenschutzerklärung.
- Das Formular sendet nichts selbst, es öffnet das Mailprogramm. Fotos müssen dort angehängt werden.
- Wechselt der Hoster, muss der Abschnitt "Hosting" in `datenschutz.html` angepasst werden.

## Bewusst nicht enthalten

- **FAQ mit Schema.org-Auszeichnung:** FAQ-Daten sind nur zulässig, wenn die Fragen und Antworten sichtbar auf der Seite stehen. Dafür braucht es echte Antworten des Betriebs.
- **Mechatronik** steht nicht in den Leistungen (nicht auf der Visitenkarte).
