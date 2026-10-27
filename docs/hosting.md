# Hosting i pristup

Provjereno 27. listopada 2026. kroz korisnikovu postojeću Chrome prijavu u cPanel.

- cPanel: https://cpanel.aquatessera.hr
- DNS poslužitelji: ns1.studio4web.com i ns2.studio4web.com.
- Glavna domena: aquatessera.hr; cPanel prikazuje aktivan SSL.
- Glavni web prostor: public_html (vidljivi sadržaj: cgi-bin i php.ini).
- Postojeća testna domena: test.aquatessera.hr, zaseban istoimeni direktorij, pri pregledu prazan.
- Dostupni alati: File Manager, Backup, Git Version Control, Zone Editor i SSH Access. Sama prisutnost alata ne potvrđuje omogućen SSH pristup.
- MX upućuje na mail.aquatessera.hr. Pri objavi weba sačuvati postojeće zapise e-pošte.

## Pripremljeni lokalni postupak

```sh
npm ci
npx playwright install chromium
npm run verify
npm run package:hosting
```

Paket `release/aquatessera-web.zip` sadrži samo produkcijski `dist/` sadržaj, bez izvornog koda, ovisnosti ili pristupnih podataka. Naredba pakiranja koristi lokalni alat `zip` (macOS/Linux).

## Sljedeća objava

1. U cPanelu ponovno provjeriti odredište i napraviti sigurnosnu kopiju postojećih datoteka, uključujući skrivene konfiguracije.
2. Paket prenijeti i raspakirati u prostor testne domene, a ne u glavni public_html.
3. Provjeriti HTTPS, logo, kontaktne poveznice i mobilni prikaz. Testnu verziju zaštititi od indeksiranja prije objave.
4. Nakon pregleda prenijeti isti provjereni paket na glavnu domenu. Ne prepisivati php.ini, cgi-bin ili postojeće skrivene konfiguracije bez provjere.
5. Za povratak vratiti prethodne web datoteke iz sigurnosne kopije.

## Granice pristupa

Pristup je potvrđen preko postojeće prijave u Chromeu. Nije stvoren trajni API token, SSH ključ ni FTP račun; GitHub Actions ne objavljuje na hosting. Nakon isteka prijave korisnik se ponovno prijavljuje u pregledniku. Za trajnu automatizaciju naknadno dogovoriti ograničen pristup samo web direktoriju i pohraniti tajne izvan repozitorija. Pristupne podatke i URL-ove koji sadrže oznaku sesije ne zapisivati u Git.

U ovoj pripremi nije mijenjan DNS, e-pošta, certifikat niti sadržaj hostinga.
