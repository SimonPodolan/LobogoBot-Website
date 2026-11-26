const STEPS = [
  { n: "01", title: "Pick an event", text: "Paste a Ticketmaster event link and choose your ticket quantity and budget." },
  { n: "02", title: "Let Lobogo watch", text: "Keep Lobogo Agent and Chrome open. Lobogo looks for tickets that fit your task." },
  { n: "03", title: "Complete your purchase", text: "If a cart is ready, Lobogo sends a private Discord link. You review the order and pay on Ticketmaster." },
];

export default function Promo() {
  return (
    <section id="how" className="section how-section">
      <div className="container">
        <div className="section__head center">
          <span className="eyebrow" data-animate style={{ justifyContent: "center" }}>How it works</span>
          <h2 data-animate>Three simple steps.</h2>
          <p data-animate>No technical setup or proxy is needed. Just choose an event and keep your app running.</p>
        </div>
        <div className="flow-grid">
          {STEPS.map((step) => (
            <article className="flow-card" data-animate key={step.n}>
              <span className="flow-card__number">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <p className="flow-footnote" data-animate>
          Ticket availability and queue times are controlled by Ticketmaster. A cart does not guarantee a ticket; you complete checkout and payment yourself.
        </p>
      </div>
    </section>
  );
}
