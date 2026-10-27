# AquaTessera web

Početna razvojna osnova weba brenda AquaTessera: Vite + TypeScript, bez dodatnog UI frameworka. Repozitorij je pri preuzimanju bio prazan; nije bilo postojećeg koda za migraciju.

## Lokalni razvoj

Potreban je Node.js 24 LTS i npm. `nvm use` odabire verziju iz `.nvmrc`.

```sh
npm ci
npm run dev
```

Otvorite adresu koju Vite ispiše (uobičajeno http://127.0.0.1:5173).

```sh
npm run check        # TypeScript
npm run format:check
npm run build       # provjera tipova i produkcijski dist/
npm run preview     # lokalni pregled izgrađene stranice
```

## Struktura

- `src/content/` — centralni podaci tvrtke i budući sadržaj.
- `src/styles/` — stilovi i radne vrijednosti boja brenda.
- `public/brand/` — izvorni dostavljeni logo, bez promjena.
- `docs/brand.md` — izvori, potvrđeni podaci i otvorene stavke.
- `.github/workflows/ci.yml` — provjera formatiranja i izgradnje svakog PR-a.

Početna stranica prikazuje logo, poruku brenda i izravan kontakt putem e-maila/telefona. Nema poslužitelja, obrasca za slanje ni analitike. Fotografije, katalog i reference dodaju se kada budu dostupni. Izlaz `dist/` može se poslužiti na statičkom hostingu; objava i domena još nisu konfigurirane. Za objavu u podmapi potrebno je podesiti Vite `base`.

## Rad s promjenama

Radite na zasebnoj grani, pokrenite provjere i otvorite PR prema `main`. Početni PR ne treba automatski spojiti. Lockfile je verzioniran; koristite `npm ci` za ponovljivu instalaciju. `.env.example` objašnjava varijable; nikad ne unosite tajne u `VITE_*` vrijednosti ili Git.

## Sljedeći sadržaj

Predložena struktura: Naslovnica, Kolekcije i materijali, Boja vode, Bazenski sustavi, Projekti, Za arhitekte, O brendu, Kontakt. To je plan sadržaja, a ne već implementiran katalog. Prije javne objave potvrditi tekstove, prava na fotografije, proizvode i potrebne podatke tvrtke.

## Provjere i priprema za hosting

`npm run verify` provjerava formatiranje, izgradnju i rad u Chromiumu na veličinama računala i mobitela. Prije prvog pokretanja: `npx playwright install chromium`. `npm run package:hosting` izrađuje ZIP za cPanel u `release/`. Pristup i postupak opisani su u [docs/hosting.md](docs/hosting.md).
