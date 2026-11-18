# AquaTessera — urednički vodič

1. Prikupi službeni katalog, tehnički list i izvorne fotografije.
2. Zabilježi proizvođača, kolekciju, točnu šifru, dimenzije, boju i namjenu.
3. Provjeri prava na fotografije i pripremi alternativni tekst.
4. Komercijalnu mogućnost nabave provjeri izvan javnog repozitorija.
5. Dodaj povezane proizvođače, kategorije i kolekcije s trajnim ID-ovima.
6. Unesi proizvod u `src/content/catalog.ts` sa statusom `draft`.
7. Pokreni `node --experimental-strip-types --test tests/catalog.test.mjs` i `npm run check`.
8. Pregledaj sve upozoravajuće stavke iz `validateCatalog`.
9. Zatraži izričito poslovno odobrenje prije statusa `approved`.
10. Putem Pull Requesta provjeri CI, izgled i sadržaj prije odvojene odluke o objavi.

Trenutačno nema odobrenih proizvoda. Model se još ne koristi za prikaz javnog kataloga.
