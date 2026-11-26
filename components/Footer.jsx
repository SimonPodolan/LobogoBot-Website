import { Logo } from "./Icon";
import MagneticButton from "./MagneticButton";

const WHOP_URL = "https://whop.com/lobogobot/";

const NOTES = [
  "One machine per licence",
  "Checkout and payment are completed by the user",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <h2>Access starts on Whop.</h2>
            <p>
              The tester guide explains how to install the Windows app, load the
              Chrome extension, and configure a task.
            </p>
          </div>
          <div className="footer__action">
            <MagneticButton href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
              Request access
            </MagneticButton>
            <a className="btn btn--ghost" href="/guide">Read the tester guide (SK)</a>
          </div>
        </div>

        <div className="footer__base">
          <span>© 2026 LoboGo</span>
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
