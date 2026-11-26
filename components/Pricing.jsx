import Icon from "./Icon";
import MagneticButton from "./MagneticButton";

const WHOP_URL = "https://whop.com/lobogobot/";

export default function Pricing() {
  return (
    <section id="pricing" className="section section--alt">
      <div className="container">
        <div className="section__head center">
          <span className="eyebrow" data-animate style={{ justifyContent: "center" }}>
            One simple plan
          </span>
          <h2 data-animate>One Lobogo plan.</h2>
          <p data-animate>Request access on Whop to get started.</p>
        </div>
        <div className="pricing">
          <div className="plan plan--featured" data-animate>
            <span className="plan__tag">One plan</span>
            <div className="plan__name">Lobogo</div>
            <div className="plan__price"><b>TBA</b></div>
            <p className="plan__desc">Pricing to be announced.</p>
            <MagneticButton href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Request access <Icon name="arrow" size={18} stroke={2.2} />
            </MagneticButton>
            <div className="plan__feats">
              <div><Icon name="check" size={16} stroke={2.6} /><span>Lobogo Agent for Windows and Chrome extension</span></div>
              <div><Icon name="check" size={16} stroke={2.6} /><span>Choose an event, ticket quantity, and budget</span></div>
              <div><Icon name="check" size={16} stroke={2.6} /><span>EU, US, UK, and FR markets · primary and resale tickets</span></div>
              <div><Icon name="check" size={16} stroke={2.6} /><span>Cart links sent to your private Discord channel</span></div>
              <div><Icon name="check" size={16} stroke={2.6} /><span>No proxy setup required</span></div>
              <div><Icon name="check" size={16} stroke={2.6} /><span>You review the order and pay on Ticketmaster</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
