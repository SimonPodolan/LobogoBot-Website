import Icon from "./Icon";

const FEATS = [
	{
		icon: "bolt",
		t: "Sub-second reserve",
		d: "Detection-to-reserve in under a fifth of a second on supported sites.",
	},
	{
		icon: "bell",
		t: "Multi-channel alerts",
		d: "Push, SMS, email and Telegram — pick how loud you want to be woken up.",
	},
	{
		icon: "radar",
		t: "Silent-restock catcher",
		d: "Catches dropped holds and quiet restocks that never hit the homepage.",
	},
	{
		icon: "target",
		t: "Precise targeting",
		d: "Lock onto a specific event, section or price ceiling.",
	},
	{
		icon: "shield",
		t: "Stealth sessions",
		d: "Rotating, human-like sessions keep your account looking like you.",
	},
	{
		icon: "clock",
		t: "Queue auto-pilot",
		d: "Holds your place in line and fills checkout the moment it's your turn.",
	},
];

export default function Features() {
	return (
		<section
			id="features"
			className="section section--alt features-section"
		>
			<div className="container">
				<div className="section__head">
					<span className="eyebrow" data-animate>
						Features
					</span>
					<h2 data-animate>
						Everything you need to win the drop.
					</h2>
					<p data-animate>
						Built for people who are tired of losing tickets to bots — so we built
						you a faster one.
					</p>
				</div>
				<div className="features">
					{FEATS.map((f) => (
						<div className="feature" data-animate key={f.t}>
							<span className="feature__icon">
								<Icon name={f.icon} size={26} />
							</span>
							<h3>{f.t}</h3>
							<p>{f.d}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
