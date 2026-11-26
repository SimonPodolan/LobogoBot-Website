import Icon from "./Icon";
import MagneticButton from "./MagneticButton";

const WHOP_URL = "https://whop.com/lobogobot/";

export default function Pricing() {
  return (
    <section id="pricing" className="section section--alt">
      <div className="container">
        <div className="section__head center">
          <span className="eyebrow" data-animate style={{ justifyContent: "center" }}>
            One plan
          </span>
          <h2 data-animate>One Lobogo plan.</h2>
          <p data-animate>Request access through the Lobogo product page on Whop.</p>
        </div>
        <div className="pricing">
          <div className="plan plan--featured" data-animate>
            <span className="plan__tag">Single tier</span>
            <div className="plan__name">Lobogo</div>
            <div className="plan__price"><b>$1,000</b><span>initial fee</span></div>
            <div className="plan__price plan__price--monthly"><b>$200</b><span>per month</span></div>
            <p className="plan__desc">Prices exclude VAT.</p>
            <MagneticButton href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Request access <Icon name="arrow" size={18} stroke={2.2} />
            </MagneticButton>
            <div className="plan__feats">
              <div><Icon name="check" size={16} stroke={2.6} /><span>Windows Lobogo Agent with bundled Python</span></div>
              <div><Icon name="check" size={16} stroke={2.6} /><span>Chrome extension for supported Ticketmaster markets</span></div>
              <div><Icon name="check" size={16} stroke={2.6} /><span>Configurable task filters and supported queue flows</span></div>
              <div><Icon name="check" size={16} stroke={2.6} /><span>Checkout link delivered to your own Discord webhook</span></div>
              <div><Icon name="check" size={16} stroke={2.6} /><span>You complete the checkout and payment yourself</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
