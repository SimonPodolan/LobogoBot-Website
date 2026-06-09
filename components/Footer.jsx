import { Logo } from "./Icon";
import MagneticButton from "./MagneticButton";

const DISCORD_URL = "https://discord.gg/PYyWZ2RdDN";

const LEGAL = [
  "Independent monitoring tool",
  "Invite-only access through Discord",
  "Users must follow each marketplace's terms",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <h2>Access runs through Discord.</h2>
            <p>
              Setup details, availability, and support are handled in one place.
            </p>
          </div>
          <div className="footer__action">
            <MagneticButton href={DISCORD_URL} className="btn btn--primary btn--lg">
              Join Discord
            </MagneticButton>
            <p>Only place to get access and more info.</p>
          </div>
        </div>

        <div className="footer__base">
          <span>© 2026 LoboGo</span>
          <div className="footer__legal" aria-label="Legal notes">
            {LEGAL.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
