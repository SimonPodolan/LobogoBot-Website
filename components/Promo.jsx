export default function Promo() {
  return (
    <section id="how" className="promo-section">
      <div className="promo-sticky">
        <div className="promo-bg" aria-hidden>
          <div className="promo-bg__glow g1" />
          <div className="promo-bg__glow g2" />
        </div>

        <div className="container promo-container">
          <div className="section__head center promo-head">
            <span className="eyebrow" data-animate>
              See it in action
            </span>
            <h2 data-animate>How LoboGo works.</h2>
          </div>

          <div className="promo" data-animate>
            <iframe
              src="public/promo.html"
              title="LoboGo demo"
              loading="lazy"
              allow="autoplay; fullscreen"
              allowtransparency="true"
              tabIndex={-1}
            />
            <div className="promo__scroll-shield" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
