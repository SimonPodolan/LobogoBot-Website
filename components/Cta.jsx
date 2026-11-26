import Icon from "./Icon";
import MagneticButton from "./MagneticButton";

const WHOP_URL = "https://whop.com/lobogobot/";

export default function Cta() {
  return (
    <section className="section" style={{ paddingTop: 20 }}>
      <div className="container">
        <div className="cta__card" data-animate>
          <div className="cta__inner">
            <h2>
              Set up for the next drop.
              <br />
              Start with the official guide.
            </h2>
            <p>Configure your event criteria, then let Lobogo prepare a cart when a supported offer matches.</p>
            <MagneticButton href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg" style={{ fontSize: 17 }}>
              Request access <Icon name="arrow" size={18} stroke={2.2} />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
