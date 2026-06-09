import Icon from "./Icon";
import MagneticButton from "./MagneticButton";

const DISCORD_URL = "https://discord.gg/PYyWZ2RdDN";

export default function Cta() {
  return (
    <section className="section" style={{ paddingTop: 20 }}>
      <div className="container">
        <div className="cta__card" data-animate>
          <div className="cta__inner">
            <h2>
              The next drop is coming.
              <br />
              Be the one who's ready.
            </h2>
            <p>Set up your first target in under a minute. Free to start.</p>
            <MagneticButton href={DISCORD_URL} className="btn btn--primary btn--lg" style={{ fontSize: 17 }}>
              Request access <Icon name="arrow" size={18} stroke={2.2} />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
