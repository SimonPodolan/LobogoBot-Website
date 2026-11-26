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
              Be ready for the next drop.
              <br />
              Start with the simple setup guide.
            </h2>
            <p>Choose an event and a budget. Lobogo can prepare a cart and send you a private Discord link.</p>
            <MagneticButton href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg" style={{ fontSize: 17 }}>
              Request access <Icon name="arrow" size={18} stroke={2.2} />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
