const FLOW = [
  {
    n: "01",
    title: "Monitor zaznamená zmenu",
    text: "Server sleduje dostupnosť lístkov na podporovaných stránkach Ticketmaster a zmenu odošle ďalej.",
  },
  {
    n: "02",
    title: "Extension vyhodnotí task",
    text: "Chrome extension porovná udalosť s tvojou úlohou a jej filtrami. Pri podporovanej čakárni sa pokúsi prejsť dostupným queue flow.",
  },
  {
    n: "03",
    title: "Človek dokončí nákup",
    text: "Ak sa podarí vytvoriť košík, odkaz príde na tvoj vlastný Discord webhook. Platbu vždy potvrdíš ty na Ticketmasteri.",
  },
];

export default function Promo() {
  return (
    <section id="how" className="section how-section">
      <div className="container">
        <div className="section__head center">
          <span className="eyebrow" data-animate style={{ justifyContent: "center" }}>
            Ako to funguje
          </span>
          <h2 data-animate>Od signálu k ručne dokončenej platbe.</h2>
          <p data-animate>
            Lobogo pripraví košík v podporovanom Ticketmaster flow. Dostupnosť, miesto v rade ani úspešný nákup nie sú zaručené.
          </p>
        </div>
        <div className="flow-grid">
          {FLOW.map((step) => (
            <article className="flow-card" data-animate key={step.n}>
              <span className="flow-card__number">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className="flow-footnote" data-animate>
          <strong>Tri časti:</strong> monitor dostupnosti → Lobogo Agent vo Windowse → Chrome extension.
          Agent spája lokálnu extension so službou, pomáha s podporovanými OTP kódmi a spravuje aktualizácie.
        </div>
      </div>
    </section>
  );
}
