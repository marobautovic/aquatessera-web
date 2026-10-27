import './styles/main.css';
import { company } from './content/company';

const arrow = '<span aria-hidden="true">↗</span>';
const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('Nedostaje glavni element stranice.');
const nav = [
  ['Proizvodi i rješenja', 'rjesenja'],
  ['Brendovi', 'brendovi'],
  ['Inspiracija', 'projekti'],
  ['O nama', 'o-nama'],
];
app.innerHTML = `
  <header class="header">
    <div class="shell header-inner">
      <a class="brand" href="#main" aria-label="AquaTessera — početna"><img class="logo" src="/brand/aquatessera-logo.svg" alt="AquaTessera" width="2048" height="2048" /></a>
      <button class="menu-toggle" aria-expanded="false" aria-controls="navigation">Izbornik <span aria-hidden="true">☰</span></button>
      <nav id="navigation" aria-label="Glavna navigacija">${nav.map(([title, id]) => `<a href="#${id}">${title}</a>`).join('')}<a class="nav-contact" href="#kontakt">Kontakt ${arrow}</a></nav>
    </div>
  </header>
  <main id="main">
    <section class="hero" aria-labelledby="title">
      <div class="hero-copy">
        <p class="eyebrow"><span></span> BAZENI. MATERIJALI. MEDITERAN.</p>
        <h1 id="title">Vaša vizija.<br />Naša paleta.<br /><em>Vaš bazen.</em></h1>
        <p class="hero-description">Mozaik, keramika i cjelovita rješenja za bazene. Od prve ideje do površine koja prostoru daje karakter.</p>
        <a class="button" href="#rjesenja">Istražite rješenja ${arrow}</a>
        <div class="hero-signature"><span lang="en">Surfaces shaped by water.</span><span>01 / AQUATESSERA</span></div>
      </div>
      <figure class="hero-image">
        <img src="/images/pool-breeze.jpg" alt="Mediteranski bazen s tirkiznim mozaikom, bijelim kamenom i maslinama — Vidrepur Breeze" width="1955" height="2560" fetchpriority="high" />
        <figcaption><span>Voda kao inspiracija.</span><a href="https://vidrepur.com/series/breeze/" target="_blank" rel="noopener noreferrer">Breeze · Vizual Vidrepur ${arrow}</a></figcaption>
      </figure>
    </section>
    <div class="intro-strip"><div class="shell"><span>Za privatne bazene</span><span>Za vile i hotele</span><span>Za arhitekte i izvođače</span><a href="#kontakt">Za vaš sljedeći projekt ${arrow}</a></div></div>
    <section class="section shell" id="rjesenja" aria-labelledby="solutions-title">
      <div class="section-heading"><div><p class="eyebrow">01 — PROIZVODI I RJEŠENJA</p><h2 id="solutions-title">Ljepota na površini.<br /><em>Sigurnost u svakom sloju.</em></h2></div><p>Izgled bazena počinje odabirom materijala. Njegova cjelina nastaje kada su obloga, podloga i sustav ugradnje dobro usklađeni.</p></div>
      <div class="materials">
        <a class="material" href="#paleta"><div class="material-photo"><img src="/images/mosaic-level.jpg" alt="Plavi bazen i detalj staklenog mozaika Vidrepur Level" loading="lazy" width="1600" height="2000" /><span>01</span></div><div class="material-title"><h3>Stakleni mozaik</h3>${arrow}</div><p>Boja, refleksija i mali format za velike ideje.</p></a>
        <a class="material" href="#projekti"><div class="material-photo"><img src="/images/pool-glitter.webp" alt="Vidrepur Glitter — inspiracija za oblaganje bazena i okolnih površina" loading="lazy" width="1000" height="1000" /><span>02</span></div><div class="material-title"><h3>Obloge i završni detalji</h3>${arrow}</div><p>Usklađen izgled vode, rubova i prostora oko bazena.</p></a>
        <a class="material system-card" href="#sustavi"><div class="material-photo technical"><div class="layers" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div><span>03</span><small>OD PODLOGE<br />DO POVRŠINE</small></div><div class="material-title"><h3>Bazenski sustavi</h3>${arrow}</div><p>Priprema, hidroizolacija, lijepljenje i fugiranje.</p></a>
      </div>
    </section>
    <section class="palette-section" id="paleta" aria-labelledby="palette-title"><div class="shell palette-layout">
      <div><p class="eyebrow">CHOOSE YOUR PALETTE</p><h2 id="palette-title">Koja je boja<br /><em>vašeg Mediterana?</em></h2><p>Od svijetlih pješčanih tonova do duboke plave. Odaberite smjer koji odgovara vašem prostoru.</p><div class="swatches" role="group" aria-label="Odabir kolorističkog smjera">${[
        ['Aqua', '#76b6b6'],
        ['Pijesak', '#c9b897'],
        ['Mediteran', '#31779c'],
        ['Grafit', '#555c60'],
      ]
        .map(
          ([n, c], i) =>
            `<button type="button" data-palette="${i}" style="--swatch:${c}" aria-pressed="${i === 0}"><span></span>${n}</button>`,
        )
        .join(
          '',
        )}</div><p class="small">Ilustrativni tonovi. Izgled vode ovisi o dubini, svjetlu i odabranoj oblozi; konačan izbor radi se prema stvarnom uzorku.</p></div>
      <div class="palette-board"><div class="mosaic-sample" aria-hidden="true"></div><div class="palette-caption" aria-live="polite"><span>01 / KOLORISTIČKI SMJER</span><h3 id="palette-name">Aqua</h3><p id="palette-description">Miran, svjež ton inspiriran plitkim mediteranskim uvalama.</p><a id="palette-inquiry" href="#kontakt">Razgovarajmo o ovoj paleti ${arrow}</a></div></div>
    </div></section>
    <section class="section shell system-layout" id="sustavi" aria-labelledby="system-title">
      <div class="system-intro"><p class="eyebrow">FROM STRUCTURE TO SURFACE</p><h2 id="system-title">Dobar bazen<br />počinje <em>ispod<br />površine.</em></h2><p>Estetiku prati tehnički promišljen sustav. Pregledajte korake i materijale koji povezuju bazensku školjku i završnu oblogu.</p><a class="text-link" href="#kontakt">Zatražite savjet za svoj bazen ${arrow}</a></div>
      <div class="system-steps">
        <details open><summary><span>01</span> Priprema podloge <b aria-hidden="true">+</b></summary><div><p>Prije oblaganja potrebno je pregledati stanje podloge, riješiti nepravilnosti i pripremiti ravnu površinu.</p><a href="https://www.mapei.com/hr/hr/proizvodi-i-rjesenja/popis-proizvoda/vise-o-proizvodu/planitop-fast-330" target="_blank" rel="noopener noreferrer">Primjer materijala: Planitop Fast 330 ${arrow}</a></div></details>
        <details><summary><span>02</span> Hidroizolacija <b aria-hidden="true">+</b></summary><div><p>Kontinuirana hidroizolacija i pažljiva obrada kutova, spojeva i prodora važni su dijelovi bazenskog sustava.</p><a href="https://www.mapei.com/hr/hr/proizvodi-i-rjesenja/popis-proizvoda/vise-o-proizvodu/mapelastic" target="_blank" rel="noopener noreferrer">Primjer materijala: Mapelastic ${arrow}</a></div></details>
        <details><summary><span>03</span> Lijepljenje obloge <b aria-hidden="true">+</b></summary><div><p>Ljepilo se bira prema vrsti mozaika ili keramike, podlozi i uvjetima trajne izloženosti vodi.</p><a href="https://www.mapei.com/hr/hr/proizvodi-i-rjesenja/linije-proizvoda/proizvodi-za-keramicke-plocice-i-kamen" target="_blank" rel="noopener noreferrer">Istražite Mapei ljepila za obloge ${arrow}</a></div></details>
        <details><summary><span>04</span> Fugiranje i brtvljenje <b aria-hidden="true">+</b></summary><div><p>Fuge i elastični spojevi dovršavaju površinu. Vrsta i boja materijala usklađuju se s oblogom i zahtjevima bazena.</p><a href="https://www.mapei.com/hr/hr/alati/mase-za-fugiranje-i-brtvljenje" target="_blank" rel="noopener noreferrer">Mapei mase za fugiranje i brtvljenje ${arrow}</a></div></details>
        <p class="small">Informativan pregled prema Mapei materijalima. Konačan sustav i primjenu potrebno je uskladiti s projektom i aktualnim tehničkim listovima proizvođača.</p>
      </div>
    </section>
    <section class="brands-section" id="brendovi" aria-labelledby="brands-title"><div class="shell"><div class="section-heading"><div><p class="eyebrow">02 — BRENDOVI I MATERIJALI</p><h2 id="brands-title">Dizajn i tehnologija.<br /><em>U istom projektu.</em></h2></div><p>Upoznajte proizvođače koji su polazište ove prezentacije: svijet staklenog mozaika i tehnička rješenja za njegovu ugradnju.</p></div><div class="brand-grid"><a href="https://vidrepur.com/" target="_blank" rel="noopener noreferrer"><span class="manufacturer vidrepur">vidrepur<span>®</span></span><div><h3>Stakleni mozaik i boja</h3><p>Kolekcije, teksture i inspiracija za bazene.</p></div>${arrow}</a><a href="https://www.mapei.com/hr/hr/" target="_blank" rel="noopener noreferrer"><span class="manufacturer mapei">MAPEI</span><div><h3>Materijali za cjelovit sustav</h3><p>Priprema podloge, hidroizolacija i ugradnja obloga.</p></div>${arrow}</a></div><p class="small">Informativni prikaz proizvođača; status suradnje, dostupnost i izbor proizvoda potvrđuju se na upit.</p></div></section>
    <section class="section shell" id="projekti" aria-labelledby="projects-title"><div class="section-heading"><div><p class="eyebrow">03 — PROJEKTI I INSPIRACIJA</p><h2 id="projects-title">Prostori koji pozivaju<br /><em>da zastanete.</em></h2></div><p>Materijal oblikuje doživljaj prostora. Izdvajamo inspiraciju iz Vidrepur kolekcija i njihovih projekata bazena.</p></div><div class="projects-grid"><a href="https://vidrepur.com/series/breeze/" target="_blank" rel="noopener noreferrer" class="project"><img src="/images/pool-breeze.jpg" alt="Vidrepur Breeze — bazen u mediteranskom dvorištu" loading="lazy" width="1955" height="2560" /><div><span>INSPIRACIJA · VIDREPUR BREEZE</span><h3>Mediteranska mirnoća ${arrow}</h3></div></a><a href="https://vidrepur.com/proyectos/501-niebla-turquesa/" target="_blank" rel="noopener noreferrer" class="project"><img src="/images/pool-north-down.webp" alt="Vidrepur projekt privatnog bazena u North Downu, Engleska" loading="lazy" width="746" height="498" /><div><span>PROJEKT PROIZVOĐAČA · NORTH DOWN, ENGLESKA</span><h3>Tirkiz u arhitekturi ${arrow}</h3></div></a></div><p class="small credit">Fotografije i prikazani projekti: Vidrepur. Nisu reference izvedbe AquaTessere.</p></section>
    <section class="about-section" id="o-nama" aria-labelledby="about-title"><div class="shell about-layout"><div><p class="eyebrow">04 — O NAMA</p><h2 id="about-title">Voda nas inspirira.<br /><em>Materijali nas povezuju.</em></h2></div><div><p class="large-copy">AquaTessera povezuje ideju o bazenu s odabirom njegove površine.</p><p>Naš je fokus jednostavan: razumjeti prostor, željeni izgled i potrebe projekta. Kroz razgovor o mozaiku, keramici i materijalima za ugradnju pomažemo vam definirati sljedeći korak.</p><p>Za vlasnike privatnih bazena, arhitekte, investitore i izvođače koji žele uskladiti estetiku i tehničke zahtjeve.</p><a class="text-link" href="#kontakt">Upoznajmo vaš projekt ${arrow}</a></div></div></section>
    <section class="section shell contact-layout" id="kontakt" aria-labelledby="contact-title"><div><p class="eyebrow">05 — KONTAKT</p><h2 id="contact-title">Vaš bazen.<br />Naš sljedeći<br /><em>razgovor.</em></h2><p>Gradite, obnavljate ili tek prikupljate ideje?<br />Javite nam se za ponudu i savjetovanje.</p><address><a class="contact-email" href="mailto:${company.email}">${company.email}</a><a href="tel:${company.phoneHref}">${company.phone}</a><p>${company.name}<br />${company.address}</p></address></div><form id="inquiry-form"><h3>Recite nam nešto o projektu.</h3><div class="form-row"><label>Vaše ime<input name="name" autocomplete="name" required maxlength="100" placeholder="Ime i prezime" /></label><label>E-mail<input name="email" autocomplete="email" type="email" required maxlength="200" placeholder="vas@email.hr" /></label></div><label>Vrsta projekta<select name="project"><option>Privatni bazen</option><option>Vila ili hotel</option><option>Obnova bazena</option><option>Arhitektonski projekt</option><option>Ostalo</option></select></label><label>Vaša ideja<textarea name="message" rows="4" required maxlength="3000" placeholder="Lokacija, faza projekta, dimenzije ili materijali koji vas zanimaju…"></textarea></label><button class="button" type="submit">Pripremi upit e-mailom ${arrow}</button><p class="small">Otvara vaš program za e-poštu s pripremljenim upitom. Poruka se šalje tek kada je vi pošaljete. Podaci se ne spremaju na stranici.</p><p id="form-status" role="status"></p></form></section>
  </main>
  <footer><div class="shell footer-top"><p class="footer-wordmark">AquaTessera</p><p lang="en">Surfaces shaped by water.</p><a href="#main">Natrag na vrh ↑</a></div><div class="shell footer-bottom"><span>© ${new Date().getFullYear()} ${company.name}</span><span>OIB: ${company.oib} · PDV ID: ${company.vatId}</span><span>Testna verzija 01</span></div></footer>
`;
const menu = document.querySelector<HTMLButtonElement>('.menu-toggle')!;
const navigation = document.querySelector<HTMLElement>('#navigation')!;
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  }),
);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    menu.focus();
  }
});
const palettes = [
  {
    name: 'Aqua',
    color: '#76b6b6',
    description: 'Miran, svjež ton inspiriran plitkim mediteranskim uvalama.',
  },
  {
    name: 'Pijesak',
    color: '#c9b897',
    description: 'Topao, prirodan smjer koji povezuje vodu, kamen i svjetlo.',
  },
  {
    name: 'Mediteran',
    color: '#31779c',
    description: 'Izražajna plava za klasičan, prepoznatljiv bazenski ugođaj.',
  },
  {
    name: 'Grafit',
    color: '#555c60',
    description:
      'Smiren, taman ton za suvremenu arhitekturu i naglašene odsjaje.',
  },
];
document
  .querySelectorAll<HTMLButtonElement>('[data-palette]')
  .forEach((button) =>
    button.addEventListener('click', () => {
      const selected = palettes[Number(button.dataset.palette)]!;
      document
        .querySelectorAll('[data-palette]')
        .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      document
        .querySelector<HTMLElement>('.mosaic-sample')!
        .style.setProperty('--tile', selected.color);
      document.querySelector('#palette-name')!.textContent = selected.name;
      document.querySelector('#palette-description')!.textContent =
        selected.description;
    }),
  );
const form = document.querySelector<HTMLFormElement>('#inquiry-form')!;
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const body = `Ime: ${data.get('name')}\nE-mail: ${data.get('email')}\nVrsta projekta: ${data.get('project')}\n\n${data.get('message')}`;
  window.location.href = `mailto:${company.email}?subject=${encodeURIComponent('Upit za bazen — AquaTessera')}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-status')!.textContent =
    'Upit je pripremljen za vaš program za e-poštu. Ako se nije otvorio, pišite nam izravno na info@aquatessera.hr.';
});
