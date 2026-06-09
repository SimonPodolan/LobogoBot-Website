import Icon from "./Icon";
import MagneticButton from "./MagneticButton";

const DISCORD_URL = "https://discord.gg/PYyWZ2RdDN";

const PLANS = [
  {
    name: "Scout",
    price: "€99",
    per: "per month",
    desc: "Try the feed and catch your first show.",
    feats: [
        "1 active account",
      "Push alerts",
      "Discord alerts"
    ],
    cta: "Start cheap",
    featured: false,
  },
  {
    name: "Sniper",
    price: "€299",
    per: "per month",
    desc: "For the fan who refuses to lose a drop.",
    feats: [
      "Unlimited targets",
      "Sub-second auto-reserve",
      "Auto-card",
      "Discord + Telegram alerts",
      "Queue auto-pilot",
      "Priority detection"
    ],
    cta: "Request access",
    featured: true,
  },
  {
    name: "Pack",
    price: "€199",
    per: "per month",
    desc: "Run multiple accounts side by side.",
    feats: ["Everything in Scout", "up to 5 active accounts", "Priority detection lane", "Dedicated support"],
    cta: "Choose Pack",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section section--alt">
      <div className="container">
        <div className="section__head center">
          <span className="eyebrow" data-animate style={{ justifyContent: "center" }}>
            Pricing
          </span>
          <h2 data-animate>Cheaper than one resale ticket.</h2>
          <p data-animate>Start cheap. Upgrade when you're ready. Cancel anytime — no lock-in.</p>
        </div>
        <div className="pricing">
          {PLANS.map((p) => (
            <div className={"plan" + (p.featured ? " plan--featured" : "")} data-animate key={p.name}>
              {p.featured && <span className="plan__tag">Most popular</span>}
              <div className="plan__name">{p.name}</div>
              <div className="plan__price">
                <b>{p.price}</b>
                <span>{p.per}</span>
              </div>
              <p className="plan__desc">{p.desc}</p>
              {p.featured ? (
                <MagneticButton href={DISCORD_URL} className="btn btn--primary">
                  {p.cta}
                </MagneticButton>
              ) : (
                <a className="btn btn--ghost" href={DISCORD_URL}>
                  {p.cta}
                </a>
              )}
              <div className="plan__feats">
                {p.feats.map((f) => (
                  <div key={f}>
                    <Icon name="check" size={16} stroke={2.6} style={{ color: "var(--accent)", flex: "none" }} />
                    <span style={{ opacity: p.featured ? 0.92 : 1 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
