# AquaTessera Organic Mediterranean Luxury — UI v1

## Cilj

Premium mediteranska prezentacija kuriranih bazenskih površina i proizvođača.
Katalog i proizvođači imaju prvenstvo pred lifestyle sadržajem, a komunikacija ostaje poštena prema trenutnom stanju asortimana.

## Vizualni smjer

- Originalni `public/brand/aquatessera-logo.svg` ostaje neizmijenjen.
- Primarne boje postojeće AquaTessera palete: `#093A65`, `#2295CC`, `#C9A481`.
- Sekundarne UI boje: topla slonovača `#F6F2EC`, kamen `#E7DED2`, tamni tekst.
- Tipografija: lokalni serifni fallback za editorial naslove i čitljiv sans-serif za sadržaj; bez novih vanjskih fontova u ovoj fazi.
- Organski detalji: asimetrične foto-kompozicije, ograničena zaobljenja, bogati razmaci. Bez dekorativnih valova koji skreću pozornost s proizvoda.

## Ponašanje naslovnice

1. Hero jasno objašnjava ponudu i vodi na katalog ili savjetovanje.
2. Kategorije proizvoda vode prema kuriranom sadržaju; trenutačne fotografije ostaju izvorno pripisane Vidrepuru.
3. Sekcija kolekcija koristi `renderCatalogPreview(catalog)`. Bez odobrenih podataka prikazuje iskreno prazno stanje.
4. Proizvođači predstavljeni kao izvor inspiracije, bez neutemeljenih tvrdnji o zastupništvu.
5. Paleta i tehnički pregled ostaju edukativni, ne simuliraju stvarne SKU-ove ili garantiranu boju vode.
6. Showroom se opisuje kao prostor u pripremi, ne kao otvoreni prodajni salon.

## Uvjeti objave

- Ovaj PR ne mijenja hosting, DNS, robots.txt ili produkcijsku domenu.
- Nije izrađen stvarni katalog proizvoda jer još nisu komercijalno odobreni.
- Prije javne produkcije potvrditi prava korištenja vizuala, odnose s proizvođačima, tekstove, tehničke tvrdnje i poslovne uvjete.
- Trenutačni kontaktni obrazac otvara mail aplikaciju; nema potvrde stvarne dostave poruke. Za javno lansiranje preporučen pouzdan kanal upita.
- Obavezno vizualno pregledati desktop i mobile prije odobravanja promjena, uz provjere pristupačnosti.
