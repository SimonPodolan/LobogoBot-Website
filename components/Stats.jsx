const STEPS = [
  { n: "01", title: "Choose", text: "Pick an event and set your ticket budget." },
  { n: "02", title: "Get your cart", text: "Lobogo looks for tickets that match your task." },
  { n: "03", title: "Check out", text: "Open your Discord link and pay on Ticketmaster." },
];

export default function Stats() {
  return (
    <section className="section--alt" style={{ padding: 0 }} aria-label="How Lobogo works">
      <div className="container stats">
        {STEPS.map((step) => (
          <div className="stat" key={step.n}>
            <div className="stat__n">{step.n}</div>
            <div className="stat__l">
              <strong>{step.title}</strong>
              <span>{step.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
