import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const WHOP_URL = "https://whop.com/lobogobot/";

function Screenshot({ src, alt }) {
  return (
    <figure className="guide-shot">
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size screenshot: ${alt}`}>
        <img src={src} alt={alt} loading="lazy" />
      </a>
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
                <li>Enter your Whop licence key if Lobogo Agent asks for it. The status panel should show <strong>License Valid</strong>.</li>
              </ol>
              <p className="guide-small">Keep your PC connected to the internet during installation and first launch.</p>
              <Screenshot src="/guide/windows-installer.png" alt="Lobogo Agent Windows installer welcome screen" />
              <div className="guide-example">
                <h3>Check the Lobogo Agent panel</h3>
                <p>Green indicators show the status at a glance: <strong>Server Online</strong>, <strong>Agent Running</strong>, <strong>Extension Active</strong>, <strong>Version up to date</strong>, and <strong>License Valid</strong>. Before setting up Chrome, confirm the Agent is running and the license is valid.</p>
                <p>Use <strong>Copy</strong> beside <strong>Extension folder</strong> to copy the folder path. You will paste it in Chrome in the next step.</p>
              </div>
              <Screenshot src="/guide/agent-status-redacted.png" alt="Lobogo Agent status panel with active app, extension and licence indicators" />
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
              <h2>Settings explained</h2>
              <p>Click the pinned Lobogo icon in Chrome, open <strong>Settings</strong>, and use this table to fill in the fields. For the first test, keep the timing values shown in the screenshots.</p>
              <div className="guide-table-wrap">
                <table className="guide-table guide-table--settings">
                  <thead><tr><th>Setting</th><th>What it does</th><th>What to enter or keep</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Licence key</strong></td><td>Connects Lobogo to the licence from Whop.</td><td>Enter your own key in Lobogo Agent when asked. If the extension’s <strong>Licence key</strong> field is empty, paste it there too. Keep it private. One licence is bound to one computer.</td></tr>
                    <tr><td><strong>CapSolver key</strong></td><td>Uses your CapSolver account when a supported captcha needs solving. The balance belongs to your CapSolver account.</td><td>Enter your own CapSolver API key. Do not use someone else’s key.</td></tr>
                    <tr><td><strong>IMAP email</strong></td><td>Mailbox used for email presale or queue codes. The screen says this mailbox connection stays on your machine.</td><td>Use the email inbox that receives the Ticketmaster code, if you want Lobogo to read those codes.</td></tr>
                    <tr><td><strong>IMAP password</strong></td><td>Allows Lobogo to read that inbox through IMAP.</td><td>Enter the mailbox’s IMAP password supplied or configured by your email provider. Do not put your Ticketmaster password here.</td></tr>
                    <tr><td><strong>Discord ping</strong></td><td>Optional Discord user or role ID to mention when a cart message is sent.</td><td>Leave empty if you do not want a ping. Otherwise enter the user or role ID you want mentioned.</td></tr>
                    <tr><td><strong>Your Discord webhook</strong></td><td>Optional link to your private Discord channel. The settings screen says the checkout link is sent only there.</td><td>Paste the webhook for your private channel. Keep it secret. Use <strong>Test webhooks</strong> to check it.</td></tr>
                    <tr><td><strong>Poll cadence</strong></td><td>Milliseconds between checks for each region. A smaller number means a shorter interval between checks.</td><td>Keep the screenshot values for the first test: <strong>UK 900 ms</strong> (0.9 sec), <strong>EU 1500 ms</strong> (1.5 sec), <strong>US 2000 ms</strong> (2 sec), and <strong>Default 1500 ms</strong> (1.5 sec).</td></tr>
                    <tr><td><strong>France: min. seconds between requests</strong></td><td>Minimum time between any two requests to <code>ticketmaster.fr</code>. The screen says never under 15.</td><td>The screenshot shows <strong>15 seconds</strong>. Keep it at 15; do not set a lower value.</td></tr>
                    <tr><td><strong>Restock empty checks</strong></td><td>Number used by the restock empty-check setting. The screen shows an allowed range of 1–10.</td><td>The screenshot shows <strong>3</strong>. Leave it at 3 for the first test.</td></tr>
                    <tr><td><strong>Task list / Shared list</strong></td><td>An empty Task list uses this profile’s own list. A Shared list with the same name in another profile uses the same tasks.</td><td>For a simple setup with one profile, leave <strong>Shared list</strong> empty.</td></tr>
                    <tr><td><strong>Save the daily log to Downloads automatically</strong></td><td>When checked, saves a daily log under <code>Downloads/Lobogo-logs</code>. When off, logs can be exported from <strong>Live log</strong>.</td><td>Optional. Leave unchecked unless you want automatic daily log files.</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="guide-shot-grid guide-shot-grid--settings">
                <Screenshot src="/guide/settings-top-redacted.png" alt="Lobogo settings for licence, captcha, email OTP, Discord and poll cadence, with private values hidden" />
                <Screenshot src="/guide/settings-bottom-redacted.png" alt="Lobogo settings for poll cadence, France minimum, restock checks, task lists, logs and save buttons, with private values hidden" />
              </div>
              <div className="guide-example">
                <h3>Finish settings</h3>
                <p>Click <strong>Save settings</strong>. The Settings screen says changes apply immediately and do not need a reload. Click <strong>Test webhooks</strong> to send a test message to Discord.</p>
                <p>Sign in to Ticketmaster in Chrome before starting. No proxy setup is needed. For an email code, Lobogo can read the configured mailbox when the Email OTP fields are filled in; follow Ticketmaster’s instructions if it asks you for a different sign-in check.</p>
              </div>
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
                    <tr><td><strong>Same max for any ticket</strong></td><td>Check this if you want one price limit for all ticket types. Leave it unchecked if you want different limits.</td><td>When unchecked, separate <strong>Floor / GA</strong> and <strong>Seated</strong> options appear. The screenshot uses separate limits.</td></tr>
                    <tr><td><strong>Floor / GA</strong></td><td>Keep checked to include standing / general admission tickets. Enter a price limit in the box beside it.</td><td>Uncheck it if you do not want standing / general admission.</td></tr>
                    <tr><td><strong>Seated</strong></td><td>Keep checked to include seated tickets. Enter a price limit in the box beside it.</td><td>Uncheck it if you do not want seated tickets.</td></tr>
                    <tr><td><strong>Keywords</strong></td><td>Type words separated by spaces. Use <code>-</code> before a word to exclude it, for example <code>-obstructed</code>. Use <code>+</code> for a word you want, for example <code>+standing</code>.</td><td>Helps Lobogo include or skip ticket descriptions. Leave blank if you do not need keyword filters.</td></tr>
                    <tr><td><strong>Auto-cart on match</strong></td><td>The screenshot shows this checked. Keep it checked if you want Lobogo to try to create a cart automatically when a match is found.</td><td>When an offer matches your choices, Lobogo tries to add it to a cart.</td></tr>
                    <tr><td><strong>Watch resale too</strong></td><td>The screenshot shows this checked. Keep it checked to include resale listings alongside primary tickets. Turn it off if you only want primary tickets.</td><td>Controls whether Lobogo also looks for resale listings.</td></tr>
                  </tbody>
                </table>
              </div>
              <Screenshot src="/guide/task-edit.png" alt="Lobogo task form showing the event, price, ticket type, keyword and cart options" />
              <div className="guide-example">
                <h3>Example from the task form</h3>
                <p>The screenshot shows <strong>Standard sale</strong>, quantity <strong>2–4</strong>, no overall max price, and <strong>Same max for any ticket</strong> turned off. Both ticket types are included, with a <strong>Floor / GA</strong> cap of 217 and a <strong>Seated</strong> cap of 172. <strong>Auto-cart on match</strong> and <strong>Watch resale too</strong> are checked.</p>
                <p>Use your own event link, currency, budget, and seat limits. These numbers only describe the example shown in the screenshot.</p>
              </div>
              <div className="guide-example">
                <h3>Check what each task is watching</h3>
                <p>In the Chrome popup, each task card shows the event name, Ticketmaster market, sale type, event ID, event date and time, ticket quantity, and price caps. The green dot shows the task is active. The <strong>ATC</strong> switch controls automatic cart attempts; the pause button pauses the task and <strong>×</strong> removes it.</p>
              </div>
              <Screenshot src="/guide/extension-popup-tasks.png" alt="Lobogo Chrome popup with event task cards showing market, event ID, ticket quantity, price caps and task controls" />
              <div className="guide-example">
                <h3>Find the same event in the Tasks dashboard</h3>
                <p><strong>ID</strong> on the far left is the task’s row number; it is different from the Ticketmaster event ID. <strong>SITE</strong> is the Ticketmaster market, <strong>PROFILE</strong> is the account profile, <strong>DATE</strong> is the event date and time, and <strong>INFO</strong> shows the event name and Ticketmaster event ID. <strong>STATUS</strong> shows whether it is monitoring and how many tickets are in stock. In the screenshot, the status is <strong>Monitoring · 0 in stock</strong>.</p>
                <p>To identify which event a task refers to, match the event name and ID in <strong>INFO</strong>, then confirm <strong>SITE</strong> and <strong>DATE</strong>. The profile email in the screenshot is hidden for privacy.</p>
                <p>The icons at the right of a row let you stop the task, edit it with the pencil, or delete it with the bin. The <strong>Live log</strong> menu shows recent activity. Use the search box to find a task by name.</p>
                <p>A task row tells you what Lobogo is watching. Cart results are in <strong>Carts</strong>; when a checkout link is created, Lobogo also sends it to your private Discord channel.</p>
              </div>
              <Screenshot src="/guide/tasks-dashboard-redacted.png" alt="Lobogo Tasks dashboard with profile email values hidden and event names, IDs, markets, dates and statuses visible" />
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
              <p>Use the <strong>Carts</strong> tab to see reserve outcomes. The screenshot shows <strong>Carts · 0</strong> and <strong>No carts yet</strong>, which means there is no cart result in the list at that moment. The screenshot is empty, so it does not show the details of a completed cart. To identify the task that led to a cart, match its event name and Ticketmaster ID in the Tasks dashboard. Open the private Discord message to review the checkout link.</p>
              <Screenshot src="/guide/carts-empty.png" alt="Lobogo Carts page showing zero cart outcomes and No carts yet" />
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
              <li>Your IMAP email details are saved if you want Lobogo to read email presale or queue codes.</li>
              <li>You are signed in to Ticketmaster in Chrome.</li>
              <li>Your task has the right event, ticket quantity, and budget.</li>
              <li>No proxy setup is needed.</li>
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
