import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const WHOP_URL = "https://whop.com/lobogobot/";

function Screenshot({ src, alt, caption }) {
  return (
    <figure className="guide-shot">
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>{caption}</figcaption>
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
            <strong>Before you start:</strong> Lobogo can prepare a cart, but it does not pay for tickets. You open the checkout link and finish the purchase yourself on Ticketmaster. A cart or place in a queue does not guarantee tickets.
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
              <div className="guide-shot-grid">
                <Screenshot src="/guide/popup-tasks-v342.png" alt="Lobogo tasks shown in the Chrome extension" caption="The Lobogo extension in Chrome. This example screenshot is from version 3.4.2." />
                <Screenshot src="/guide/dashboard-redacted-v342.png" alt="Lobogo task dashboard with profile details covered" caption="Task dashboard. Profile details have been covered. Example screenshot from version 3.4.2." />
              </div>
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
              <p className="guide-small">For a basic setup, leave the other settings as they are.</p>
              <p className="guide-small">Sign in to Ticketmaster in Chrome before starting. No proxy setup is needed for this version of Lobogo. If Ticketmaster asks for an email code, check the email account linked to your Ticketmaster account.</p>
              <Screenshot src="/guide/settings-fields-redacted-v342.png" alt="Lobogo settings with private values covered" caption="Settings example. Private values are covered; screenshot from version 3.4.2." />
            </div>
          </section>

          <section className="guide-section">
            <div className="guide-section__number">05</div>
            <div className="guide-section__body">
              <h2>Create your first task</h2>
              <p>A task is simply one event and the ticket preferences you want Lobogo to follow.</p>
              <ol>
                <li>Open <strong>Tasks</strong> and click <strong>Create task</strong>.</li>
                <li>Paste the Ticketmaster event link into <strong>Event URL</strong>.</li>
                <li>Choose how many tickets you want in <strong>Qty</strong>. A range such as <code>2-4</code> lets Lobogo try up to four tickets, then fewer if needed.</li>
                <li>Set <strong>Max price</strong> if you have a limit. Use the event’s currency. Leave it empty if you do not want to set one.</li>
                <li>Leave <strong>Auto-cart on match</strong> and <strong>Watch resale too</strong> turned on if you want Lobogo to prepare matching carts, including resale tickets where supported.</li>
                <li>Click <strong>Add event</strong>. Then click the main <strong>Start</strong> button to begin monitoring.</li>
              </ol>
              <div className="guide-example">
                <h3>Simple example</h3>
                <p><strong>Event URL:</strong> your Ticketmaster event link · <strong>Qty:</strong> 2 · <strong>Max price:</strong> your budget · <strong>Auto-cart:</strong> on.</p>
                <p className="guide-small">Double-check the event and your price limit before you start.</p>
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
              <p>Ticketmaster may place you in a waiting room. Waiting time varies, and a queue or cart cannot guarantee tickets.</p>
              <Screenshot src="/guide/carts-empty-v342.png" alt="Lobogo carts page before a cart has been created" caption="The Carts page shows cart results. This example is empty and from version 3.4.2." />
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
