import { Logo } from "./Icon";
import MagneticButton from "./MagneticButton";

const WHOP_URL = "https://whop.com/lobogobot/";

const NOTES = [
  "No proxy setup required",
  "You complete payment on Ticketmaster",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <h2>Ready to get started?</h2>
            <p>
              Follow the simple setup guide, choose an event, and let Lobogo help prepare your cart.
            </p>
          </div>
          <div className="footer__action">
            <MagneticButton href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
              Request access
            </MagneticButton>
            <a className="btn btn--ghost" href="/guide">Read the setup guide</a>
          </div>
        </div>

        <div className="footer__base">
          <span>© 2026 Lobogo</span>
          <div className="footer__legal" aria-label="Product notes">
            {NOTES.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
