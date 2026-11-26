const PARTS = [
  { n: "01", title: "Cloud monitor", text: "Reads availability changes from supported Ticketmaster markets." },
  { n: "02", title: "Lobogo Agent", text: "Runs on Windows and supports the Chrome extension, OTP, and updates." },
  { n: "03", title: "Chrome extension", text: "Applies your task rules, handles supported cart and queue flows, and sends a cart link to Discord." },
];

export default function Stats() {
  return (
    <section className="section--alt" style={{ padding: 0 }} aria-label="Lobogo components">
      <div className="container stats">
        {PARTS.map((part) => (
          <div className="stat" key={part.n}>
            <div className="stat__n">{part.n}</div>
            <div className="stat__l">
              <strong>{part.title}</strong>
              <span>{part.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
