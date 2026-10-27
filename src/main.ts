import './styles/main.css';
import { company } from './content/company';

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('Nedostaje glavni element stranice.');

app.innerHTML = `
  <header class="shell header">
    <a href="#main" aria-label="AquaTessera — početna"><img class="logo" src="/brand/aquatessera-logo.svg" alt="AquaTessera" width="2048" height="2048" /></a>
    <a href="#kontakt">Razgovarajmo o projektu <span aria-hidden="true">↗</span></a>
  </header>
  <main id="main" class="shell">
    <section class="intro" aria-labelledby="title">
      <p class="eyebrow">Keramika · Mozaik · Bazenski sustavi</p>
      <h1 id="title" lang="en">Surfaces shaped<br />by water.</h1>
      <p class="lead">Mjesto susreta vode, arhitekture i materijala.</p>
      <a class="button" href="mailto:${company.email}">Pošaljite upit <span aria-hidden="true">↗</span></a>
    </section>
    <section id="kontakt" class="contact" aria-labelledby="contact-title">
      <div><p class="eyebrow">AquaTessera</p><h2 id="contact-title">Vaš projekt počinje razgovorom.</h2></div>
      <address>
        <a href="mailto:${company.email}">${company.email}</a>
        <a href="tel:${company.phoneHref}">${company.phone}</a>
        <p>${company.name}<br />${company.address}</p>
      </address>
    </section>
  </main>
  <footer class="shell footer"><span>© ${new Date().getFullYear()} ${company.name}</span><span>OIB: ${company.oib} · PDV ID: ${company.vatId}</span></footer>
`;
