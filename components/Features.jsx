import Icon from "./Icon";

const FEATS = [
	{
		icon: "target",
		t: "Task rules you control",
		d: "Choose an event, ticket quantity, maximum price, ticket type, and keywords for each task.",
	},
	{
		icon: "bell",
		t: "Private Discord cart alerts",
		d: "Send the checkout link to a webhook in your own Discord channel. Payment stays in your hands.",
	},
	{
		icon: "clock",
		t: "Queue support",
		d: "The extension handles supported waiting-room flows. A queue can still take time and does not guarantee a ticket.",
	},
	{
		icon: "globe",
		t: "Supported Ticketmaster markets",
		d: "The market is detected from the Ticketmaster event link. The exact supported domains depend on the current build.",
	},
	{
		icon: "shield",
		t: "Local OTP helper",
		d: "When a supported Ticketmaster flow asks for an email code, the Windows agent can read a fresh code from your IMAP mailbox.",
	},
	{
		icon: "radar",
		t: "Separate automatic updates",
		d: "The agent runtime and Chrome extension update separately. Chrome needs one manual Reload after an extension update.",
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
						What Lobogo does
					</span>
					<h2 data-animate>
						From availability signal to a human checkout.
					</h2>
					<p data-animate>
						Lobogo automates monitoring and cart preparation on supported flows.
						It does not complete the payment for you.
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
