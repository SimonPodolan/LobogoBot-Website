import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const WHOP_URL = "https://whop.com/lobogobot/";

function Screenshot({ src, alt }) {
  return (
    <figure className="guide-shot">
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}

export default function GuidePage() {
  return (
    <>
      <Nav />
      <main className="guide-page" lang="en">
        <div className="guide-hero container">
          <a className="guide-back" href="/">← Lobogo home</a>
          <span className="eyebrow">Simple setup guide · Windows</span>
          <h1>Get Lobogo ready in a few steps.</h1>
          <p>
            Install the app, add the Chrome extension, choose an event, and let Lobogo prepare a cart when matching tickets are available.
          </p>
          <div className="guide-hero__meta">
            <span>No proxy setup required</span>
            <a href={WHOP_URL} target="_blank" rel="noopener noreferrer">Get access on Whop ↗</a>
          </div>
        </div>

        <div className="container guide-content">
          <div className="guide-note">
            Lobogo supports primary and resale tickets in the EU, US, UK, and FR. It can send a checkout link to your private Discord channel; open it to review the order and finish payment on Ticketmaster.
          </div>

          <section className="guide-section" id="before-you-start">
            <div className="guide-section__number">01</div>
            <div className="guide-section__body">
              <h2>What you need</h2>
              <ul className="guide-checks">
                <li>A Windows PC and Google Chrome.</li>
                <li>A Lobogo account and licence from <a href={WHOP_URL} target="_blank" rel="noopener noreferrer">Whop</a>.</li>
                <li>Your Ticketmaster account, signed in to Chrome.</li>
                <li>Your CapSolver key and a private Discord channel for cart alerts.</li>
              </ul>
            </div>
          </section>

          <section className="guide-section">
            <div className="guide-section__number">02</div>
            <div className="guide-section__body">
              <h2>Download and install the Windows app</h2>
              <ol>
                <li>Open the LobogoBot page on Whop and sign in to the account that has access.</li>
                <li>Open <strong>Software</strong>, choose Lobogo, then open <strong>/download</strong>.</li>
                <li>Download the Windows installer and open the downloaded <strong>.exe</strong> file.</li>
                <li>Follow the installer prompts. You do not need to install any extra programs.</li>
                <li>When installation finishes, open <strong>Lobogo Agent</strong> from the Windows Start menu.</li>
              </ol>
              <p className="guide-small">Keep your PC connected to the internet during installation and first launch.</p>
              <Screenshot src="/guide/windows-installer.png" alt="Lobogo Agent Windows installer welcome screen" />
            </div>
          </section>

          <section className="guide-section">
            <div className="guide-section__number">03</div>
            <div className="guide-section__body">
              <h2>Add Lobogo to Chrome</h2>
              <ol>
                <li>In Lobogo Agent, find the extension folder path and click the copy button beside it.</li>
                <li>In Chrome, open <code>chrome://extensions</code>.</li>
                <li>Turn on <strong>Developer mode</strong> in the top-right corner. This lets Chrome load Lobogo from the folder on your PC.</li>
                <li>Click <strong>Load unpacked</strong>. In the folder window, paste the copied path into the address bar, press Enter, then click <strong>Select Folder</strong>.</li>
                <li>Click Chrome’s puzzle-piece icon and pin Lobogo so it stays visible beside the address bar.</li>
              </ol>
              <div className="guide-note guide-note--small">Choose the extension folder shown in Lobogo Agent, not the folder above it.</div>
              <Screenshot src="/guide/chrome-extension.png" alt="Chrome Extensions page with Lobogo loaded and enabled" />
            </div>
          </section>

          <section className="guide-section">
            <div className="guide-section__number">04</div>
            <div className="guide-section__body">
              <h2>Enter your details</h2>
              <p>Click the pinned Lobogo icon in Chrome, then open <strong>Settings</strong>.</p>
              <ol>
                <li>When Lobogo Agent first opens, enter the licence key from Whop. In extension <strong>Settings</strong>, check that it appears in <strong>Licence key</strong>; if the field is empty, enter the key there too.</li>
                <li>Enter your own CapSolver key in <strong>CapSolver key</strong>. Its balance is yours to manage.</li>
                <li>Add your private Discord webhook in <strong>Your Discord webhook</strong>. This is the link that lets Lobogo send messages to your channel. Ask your Discord admin for it if you do not have one.</li>
                <li>Click <strong>Save settings</strong>. Use <strong>Test webhooks</strong> to check that Discord receives a test message.</li>
              </ol>
              <p className="guide-small">Sign in to Ticketmaster in Chrome before starting. No proxy setup is needed. If Ticketmaster asks for an email code, check the email account linked to your Ticketmaster account.</p>
            </div>
          </section>

          <section className="guide-section">
            <div className="guide-section__number">05</div>
            <div className="guide-section__body">
              <h2>Create your first task</h2>
              <p>A task is one event plus the ticket details you want Lobogo to look for. Open <strong>Tasks</strong> → <strong>Create task</strong>, then fill in the fields:</p>
              <div className="guide-table-wrap">
                <table className="guide-table">
                  <thead><tr><th>Field</th><th>What to enter</th><th>What it does</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Event URL</strong></td><td>Paste the full Ticketmaster link for the event you want.</td><td>Tells Lobogo which event to watch. Make sure the link is for the right date and city.</td></tr>
                    <tr><td><strong>Sale type</strong></td><td>Leave <strong>Standard sale</strong> for a regular sale. Choose <strong>Presale / fan-club</strong> only if you have that event’s valid code.</td><td>Selects the kind of sale. Presale details appear only after choosing the presale option.</td></tr>
                    <tr><td><strong>Qty</strong></td><td>Enter one number, such as <code>2</code>, or a range, such as <code>2-4</code>.</td><td>For <code>2-4</code>, Lobogo tries for 4 tickets first, then 3, then 2.</td></tr>
                    <tr><td><strong>Max price</strong></td><td>Enter your maximum price per ticket, using the event’s currency. Leave it empty if any price is okay.</td><td>Stops Lobogo choosing tickets above your budget. The hint <strong>any</strong> means there is no price limit.</td></tr>
                    <tr><td><strong>Same max for any ticket</strong></td><td>Checked by default. Leave checked to use one price limit for every ticket type. Uncheck it for separate limits.</td><td>When unchecked, separate <strong>Floor / GA</strong> and <strong>Seated</strong> options appear.</td></tr>
                    <tr><td><strong>Floor / GA</strong></td><td>Keep checked to include standing / general admission tickets. Enter a price limit in the box beside it.</td><td>Uncheck it if you do not want standing / general admission.</td></tr>
                    <tr><td><strong>Seated</strong></td><td>Keep checked to include seated tickets. Enter a price limit in the box beside it.</td><td>Uncheck it if you do not want seated tickets.</td></tr>
                    <tr><td><strong>Keywords</strong></td><td>Type words separated by spaces. Use <code>-</code> before a word to exclude it, for example <code>-obstructed</code>. Use <code>+</code> for a word you want, for example <code>+standing</code>.</td><td>Helps Lobogo include or skip ticket descriptions. Leave blank if you do not need keyword filters.</td></tr>
                    <tr><td><strong>Auto-cart on match</strong></td><td>Checked by default. Leave checked for automatic cart attempts.</td><td>When an offer matches your choices, Lobogo tries to add it to a cart.</td></tr>
                    <tr><td><strong>Watch resale too</strong></td><td>Checked by default. Leave checked to include resale listings alongside primary tickets. Turn it off if you only want primary tickets.</td><td>Controls whether Lobogo also looks for resale listings.</td></tr>
                  </tbody>
                </table>
              </div>
              <Screenshot src="/guide/task-edit.png" alt="Lobogo task form showing the event, price, ticket type, keyword and cart options" />
              <div className="guide-example">
                <h3>Then start the task</h3>
                <p>For a new task, click <strong>Add event</strong>. When editing an existing task, the button says <strong>Save event</strong>. Back on the Tasks page, click the main <strong>Start</strong> button to begin watching.</p>
                <p className="guide-small">The market is picked from the Ticketmaster link; there is no separate market field. Check the event URL before saving.</p>
              </div>
            </div>
          </section>

          <section className="guide-section">
            <div className="guide-section__number">06</div>
            <div className="guide-section__body">
              <h2>When tickets appear</h2>
              <ol>
                <li>Lobogo checks for tickets that match your task.</li>
                <li>If it can prepare a cart, it sends a checkout link to your Discord channel.</li>
                <li>Open the link, review your order, and finish checkout and payment on Ticketmaster.</li>
              </ol>
              <p>Ticketmaster may place you in a waiting room. Keep Lobogo Agent and Chrome open while your task is running.</p>
            </div>
          </section>

          <section className="guide-section">
            <div className="guide-section__number">07</div>
            <div className="guide-section__body">
              <h2>Updates</h2>
              <p>Lobogo checks for updates automatically. If it says a new Chrome extension version is ready, open <code>chrome://extensions</code> and click <strong>Reload</strong> on the Lobogo card. You only need to do this when asked. Download a new Windows app installer from Whop if Lobogo announces an app update.</p>
            </div>
          </section>

          <section className="guide-section">
            <div className="guide-section__number">08</div>
            <div className="guide-section__body">
              <h2>Quick fixes</h2>
              <ul className="guide-checks">
                <li><strong>No cart?</strong> Check that Lobogo is started, Chrome is open, you are signed in to Ticketmaster, and your task has the right event and price.</li>
                <li><strong>Waiting room?</strong> Leave Lobogo Agent, Chrome, and the event page open and wait. Entry is controlled by Ticketmaster.</li>
                <li><strong>Access says it is in use?</strong> Close Lobogo and Chrome on your other PC. One licence works on one PC at a time. If you changed computers, ask the Lobogo owner for help.</li>
                <li><strong>Discord message missing?</strong> Check the webhook in Settings and click <strong>Test webhooks</strong>.</li>
                <li><strong>Old extension version?</strong> Open <code>chrome://extensions</code> and click <strong>Reload</strong> on Lobogo if an update is ready.</li>
              </ul>
            </div>
          </section>

          <section className="guide-checklist" id="quick-checklist">
            <span className="eyebrow">Ready to go?</span>
            <h2>Quick checklist</h2>
            <ul className="guide-checks guide-checks--final">
              <li>Lobogo Agent is open.</li>
              <li>Lobogo is added and pinned in Chrome.</li>
              <li>Your licence, CapSolver key, and private Discord webhook are saved.</li>
              <li>You are signed in to Ticketmaster in Chrome.</li>
              <li>Your task has the right event, ticket quantity, and budget.</li>
              <li>You clicked Start. You will complete payment yourself if a cart arrives.</li>
            </ul>
          </section>

          <p className="guide-security"><strong>Keep your details private:</strong> do not share your licence key, CapSolver key, Discord webhook, or checkout links.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
