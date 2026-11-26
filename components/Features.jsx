import Icon from "./Icon";

const FEATS = [
  {
    icon: "target",
    t: "Choose your event",
    d: "Add a Ticketmaster event link and choose how many tickets you want. Lobogo supports primary and resale tickets in the EU, US, UK, and FR.",
  },
  {
    icon: "bell",
    t: "Get a cart link in Discord",
    d: "When matching tickets are available, Lobogo can prepare a cart and send you a private link.",
  },
  {
    icon: "shield",
    t: "You stay in control",
    d: "No proxy setup is needed. You review the order and complete payment on Ticketmaster.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section section--alt features-section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow" data-animate>Simple by design</span>
          <h2 data-animate>Set it up. Get the link. Finish checkout.</h2>
          <p data-animate>Choose what you want and let Lobogo help with the busy part.</p>
        </div>
        <div className="features">
          {FEATS.map((f) => (
            <div className="feature" data-animate key={f.t}>
              <span className="feature__icon"><Icon name={f.icon} size={26} /></span>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
