import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const WHOP_URL = "https://whop.com/lobogobot/";

function Shot({ src, alt, caption, className = "" }) {
  return (
    <figure className={`guide-shot ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function Section({ number, title, children, id }) {
  return (
    <section className="guide-section" id={id}>
      <div className="guide-section__number">{String(number).padStart(2, "0")}</div>
      <div className="guide-section__body">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

const SETTINGS = [
  ["Licence key", "Extension → Settings → Monitor. Zadaj rovnaký kľúč ako do Lobogo Agent.", "Tvoj aktívny kľúč z Whop", "Povoľuje prístup k monitor serveru a viaže licenciu na zariadenie."],
  ["CapSolver key", "Extension → Settings → Captcha.", "Tvoj vlastný API kľúč CapSolver", "Je to tvoj účet a jeho zostatok. Používa sa pri podporovaných CAPTCHA krokoch."],
  ["IMAP email", "Extension → Settings → Email OTP.", "Schránka, do ktorej chodia Ticketmaster kódy", "Lokálny agent kontroluje túto schránku pre nové OTP kódy. V aktuálnom builde je predvolený Gmail IMAP; iný poskytovateľ: [OVERIŤ]."],
  ["IMAP password", "Vedľa IMAP email.", "Heslo aplikácie schránky, nie heslo Ticketmaster účtu", "Agent sa ním prihlási do schránky cez IMAP. Pri Gmaili použi app password."],
  ["Discord ping", "Extension → Settings → Email OTP.", "Nechaj prázdne, ak nechceš označenie osoby/roly", "Voliteľné Discord user/role ID, ktoré sa označí pri upozornení na košík."],
  ["Your Discord webhook", "Pod poľom Discord ping.", "Webhook do tvojho súkromného Discord kanála", "Voliteľné pole; odkaz na dokončenie objednávky sa posiela iba sem. Bez neho sa checkout link nedoručí do tvojho súkromného kanála."],
  ["Poll cadence — UK / EU / US / Default", "Extension → Settings → Poll cadence. Jednotkou sú milisekundy.", "900 / 1500 / 2000 / 1500 ms", "Predvolené intervaly medzi kontrolami. Na test ich ponechaj; neznižuj ich."],
  ["France: min. seconds between requests", "Extension → Settings → Poll cadence.", "30 sekúnd (predvolená hodnota 3.4.3; povolené 15–600)", "Rozostup požiadaviek na Ticketmaster France. Hodnotu nikdy nenastav pod 15."],
  ["Restock empty checks", "Vedľa France poľa.", "3 (predvolená hodnota)", "V rozhraní je označené ako watchdog v rozsahu 1–10; presný účinok pre testera: [OVERIŤ]. Ponechaj predvolenú hodnotu."],
  ["Shared list", "Extension → Settings → Task list.", "Prázdne", "Prázdne znamená vlastný zoznam úloh tohto Chrome profilu. Rovnaký názov v inom profile zdieľa ten istý zoznam; ak ho vyplníš, použi 1–40 písmen, číslic, pomlčku alebo podčiarkovník."],
  ["Save the daily log to Downloads automatically", "Extension → Settings → Logs.", "Vypnuté (predvolene)", "Ak zapneš, denné logy sa ukladajú do Downloads/Lobogo-logs. Inak ich môžeš exportovať z Live log."],
];

export default function GuidePage() {
  return (
    <>
      <Nav />
      <main lang="sk" className="guide-page">
        <div className="guide-hero container">
          <a className="guide-back" href="/">← Lobogo</a>
          <span className="eyebrow">Príručka pre testerov · Windows</span>
          <h1>Nastavenie a používanie Lobogo</h1>
          <p>
            Krok za krokom pre prvé spustenie Lobogo Agent a Chrome extension. Príručka je overená pre beta build extension 3.4.3.
          </p>
          <div className="guide-hero__meta">
            <span>Jazyk: slovenčina</span>
            <a href={WHOP_URL} target="_blank" rel="noopener noreferrer">Whop: LobogoBot ↗</a>
          </div>
        </div>

        <div className="container guide-content">
          <div className="guide-note">
            <strong>Poznámka k obrázkom:</strong> priložené zábery rozhrania sú z verzie 3.4.2. Používame ich ako orientačné ukážky; aktuálny beta build je 3.4.3, preto sa niektoré detaily môžu mierne líšiť. Citlivé hodnoty na obrázkoch sú prekryté.
          </div>

          <Section number={1} title="Čo je Lobogo a ako funguje">
            <p>Lobogo sleduje zmeny dostupnosti lístkov na podporovaných stránkach Ticketmaster a monitor prijíma zmeny cez WebSocket. Keď príde signál, bridge ho odovzdá Chrome extension, ktorá porovná ponuku s tvojimi pravidlami v taske. Ak ponuka vyhovuje, extension sa môže pokúsiť pripraviť košík a v podporovaných prípadoch prejsť čakárňou. Lobogo Agent je Windows aplikácia, ktorá spúšťa lokálneho agenta a prepája ho s Chrome extension. Lokálny agent pomáha s OTP z tvojej schránky, identifikáciou zariadenia a aktualizáciami. Po vytvorení košíka môže extension poslať checkout odkaz na tvoj Discord webhook; platbu vždy dokončuje človek.</p>
            <div className="guide-flow" aria-label="Tok Lobogo">
              <span>Ticketmaster</span><b>→</b><span>monitor / WebSocket</span><b>→</b><span>bridge</span><b>→</b><span>Chrome extension cez Lobogo Agent</span><b>→</b><span>košík</span><b>→</b><span>súkromný Discord</span><b>→</b><span>ručná platba</span>
            </div>
            <p className="guide-small"><strong>Tri časti:</strong> (a) Windows appka <strong>Lobogo Agent</strong> – úvodné nastavenie a stavové okno; (b) <strong>lokálny agent</strong> – beží na tvojom PC a obsluhuje lokálne úlohy; (c) <strong>Chrome extension</strong> – tasky, sledovanie, košík a logy. Agent a extension aktualizujú svoje súčasti oddelene.</p>
          </Section>

          <Section number={2} title="Čo potrebuješ pred začiatkom">
            <ul className="guide-checks">
              <li>PC s Windows. Minimálna podporovaná verzia Windows: <strong>[OVERIŤ]</strong>.</li>
              <li>Nainštalovaný Google Chrome.</li>
              <li>Účet Whop s prístupom k produktu LobogoBot a licenčný kľúč.</li>
              <li>Vlastný CapSolver API kľúč a kredit na účte CapSolver.</li>
              <li>Discord účet a súkromný kanál, do ktorého si vieš vytvoriť webhook.</li>
              <li>Prihlásený Ticketmaster účet v Chrome.</li>
              <li>Ak chceš automatické čítanie OTP: schránka, do ktorej chodia Ticketmaster kódy, a jej IMAP/app password.</li>
            </ul>
          </Section>

          <Section number={3} title="Stiahnutie z Whop">
            <ol>
              <li>Otvor <a href={WHOP_URL} target="_blank" rel="noopener noreferrer">Whop stránku LobogoBot</a> a prihlás sa do účtu Whop, ktorý má prístup.</li>
              <li>Ak ešte prístup nemáš, na stránke produktu klikni na možnosť požiadať o prístup (<strong>Request access</strong>).</li>
              <li>Po pridelení prístupu otvor v Whop aplikáciu <strong>Software</strong>, vyber <strong>Lobogo</strong> a prejdi na <strong>/download</strong>.</li>
              <li>Stiahni Windows inštalátor. Súbor je inštalačný program pre Windows (.exe); licenčný kľúč nájdeš v detailoch svojho prístupu/členstva vo Whop.</li>
            </ol>
            <p className="guide-small">Ak po pridelení prístupu nevidíš Software alebo download, obnov stránku Whop a skontroluj, že si prihlásený do správneho účtu. Zobrazenie v Whop sa môže meniť; presný názov tlačidla: [OVERIŤ].</p>
          </Section>

          <Section number={4} title="Inštalácia na Windows">
            <ol>
              <li>V Prieskumníkovi otvor <strong>Downloads / Stiahnuté súbory</strong> a spusti stiahnutý Lobogo Agent inštalátor.</li>
              <li>Prejdi kroky inštalátora a potvrď inštaláciu. Build je nastavený na inštaláciu pre aktuálneho používateľa Windows; nemal by vyžadovať samostatnú inštaláciu Pythonu.</li>
              <li>Inštalátor obsahuje zabalený Python runtime a potrebné súbory agenta. Tester nemusí sťahovať Python ani nič doinštalovať ručne.</li>
              <li>Ak v počítači chýba Microsoft WebView2, inštalátor sa pokúsi stiahnuť jeho bootstrap. Pri prvom spustení preto nechaj PC pripojený na internet.</li>
              <li>Po skončení otvor <strong>Lobogo Agent</strong> z ponuky Štart alebo zo zástupcu, ktorý vytvoril inštalátor.</li>
            </ol>
            <p className="guide-small">Inštalačný balík používa inštaláciu „current user“. Presnú cestu k rozšíreniu Agent zobrazí v svojom okne a pri nej ponúkne kopírovanie.</p>
            <div className="guide-placeholder">[SCREENSHOT: Windows inštalátor Lobogo Agent a jeho posledná obrazovka]</div>
          </Section>

          <Section number={5} title="Spustenie appky a stavový panel">
            <p>Pri prvom spustení sa zobrazí pole na licenčný kľúč. Po jeho uložení uvidíš stavové riadky appky. Presný stav kontroluj podľa textu a bodky pri riadku, nie iba podľa ikony aplikácie.</p>
            <div className="guide-table-wrap">
              <table className="guide-table">
                <thead><tr><th>Riadok / stav</th><th>Význam a ďalší krok</th></tr></thead>
                <tbody>
                  <tr><td><strong>Server / Bridge — Online</strong></td><td>Appka a lokálne prepojenie odpovedajú. Ak sú Offline, skontroluj internet a licenciu.</td></tr>
                  <tr><td><strong>Agent — Running</strong></td><td>Lokálny agent beží. Stav môže obsahovať aj lokálny port.</td></tr>
                  <tr><td><strong>Extension — Active / Idle / Not seen yet</strong></td><td>Active znamená, že extension sa nedávno ozvala; Idle, že sa dlhšie neozvala; Not seen yet, že sa ešte nepripojila. Otvor Chrome a extension.</td></tr>
                  <tr><td><strong>Version — up to date</strong></td><td>Nainštalovaná extension je aktuálna.</td></tr>
                  <tr><td><strong>update ready / reload to apply</strong></td><td>Nové súbory extension sú pripravené, no Chrome ich ešte nepoužíva. Raz klikni Reload podľa kroku 11.</td></tr>
                  <tr><td><strong>running — update check unavailable</strong></td><td>Agent beží, ale kontrola aktualizácie sa nepodarila. Nechaj ho otvorený; kontrolu zopakuje.</td></tr>
                  <tr><td><strong>stopped / Agent stopped</strong></td><td>Agent nebeží. Znovu otvor Lobogo Agent. Ak ide o terminálový panel, zatvorenie cez Ctrl+C agenta zastaví.</td></tr>
                  <tr><td><strong>License — In use on another device</strong></td><td>Kľúč je aktívny na inom zariadení. Postup je v kroku 7 a v riešení problémov.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="guide-small">Agentový panel tiež môže uvádzať <strong>running — extension up to date</strong>, <strong>running — update ready</strong> alebo <strong>update check unavailable — will retry</strong>. Zelený terč je značka Lobogo; stav služby vyjadrujú stavové riadky.</p>
            <div className="guide-placeholder">[SCREENSHOT: okno Lobogo Agent s riadkami Server, Bridge, Agent, Extension, Version a License]</div>
          </Section>

          <Section number={6} title="Načítanie extension v Chrome">
            <ol>
              <li>Nechaj otvorené okno <strong>Lobogo Agent</strong>. V ňom nájdi riadok s cestou k extension a klikni na tlačidlo na skopírovanie cesty.</li>
              <li>Otvor Chrome a do adresného riadka napíš <code>chrome://extensions</code>, potom stlač Enter.</li>
              <li>Vpravo hore zapni <strong>Developer mode</strong> (Režim pre vývojárov).</li>
              <li>Klikni na <strong>Load unpacked</strong> (Načítať rozbalené) a vyber presne priečinok extension z cesty skopírovanej v Agentovi. Nevyberaj nadradený priečinok Lobogo Agent.</li>
              <li>Po načítaní klikni v Chrome na ikonu skladačky (Extensions), pri Lobogo stlač pripináčik. Ikona Lobogo potom zostane na paneli nástrojov.</li>
              <li>Vráť sa do Lobogo Agent a skontroluj, že riadok Extension už hlási Active.</li>
            </ol>
            <div className="guide-shot-grid">
              <Shot src="/guide/popup-tasks-v342.png" alt="Zoznam taskov v Lobogo Chrome extension" caption="Ukážka extension popupu; v zábere je viditeľná verzia 3.4.2." />
              <Shot src="/guide/dashboard-redacted-v342.png" alt="Lobogo dashboard s taskami, profilové údaje sú prekryté" caption="Dashboard taskov; profilové údaje sú prekryté. Ukážka UI 3.4.2." />
            </div>
          </Section>

          <Section number={7} title="Aktivácia a licencia">
            <ol>
              <li>Pri prvom otvorení Lobogo Agent vlož licenčný kľúč z Whop do poľa v úvodnej obrazovke a ulož ho.</li>
              <li>V Chrome otvor Lobogo dashboard → <strong>Settings</strong> → <strong>Monitor</strong>. Skontroluj, že pole <strong>Licence key</strong> obsahuje tvoj licenčný kľúč; ak je prázdne, vlož ho a klikni <strong>Save settings</strong>.</li>
              <li>Licencia sa viaže na prvé zariadenie, ktoré ju aktivuje: <strong>jedna licencia = jedno zariadenie</strong>. Viac Chrome profilov na tom istom počítači môže používať to isté zariadenie.</li>
              <li>Pri presune licencie na nový počítač musí reset zariadenia vykonať majiteľ licencie cez <code>/admin</code>. Ak sa zobrazí „In use on another device“, vypni Lobogo Agent aj Chrome na starom PC, počkaj približne 3 minúty a skús znova. Ak sa stav nezmení, kontaktuj majiteľa s požiadavkou na reset.</li>
            </ol>
          </Section>

          <Section number={8} title="Nastavenia, ktoré má tester skontrolovať">
            <p>Otvor Chrome extension → <strong>Settings</strong>. Po úprave klikni <strong>Save settings</strong>; uložené nastavenia sa použijú hneď, extension netreba kvôli nim obnovovať.</p>
            <div className="guide-table-wrap">
              <table className="guide-table guide-table--settings">
                <thead><tr><th>Nastavenie</th><th>Kam zadať</th><th>Odporúčaná hodnota</th><th>Prečo</th></tr></thead>
                <tbody>{SETTINGS.map(([name, where, value, why]) => <tr key={name}><td><strong>{name}</strong></td><td>{where}</td><td>{value}</td><td>{why}</td></tr>)}</tbody>
              </table>
            </div>
            <p><strong>Proxy:</strong> beta rozhranie Lobogo nemá pole na proxy; modul Accounts/proxies je z beta buildu odstránený. Pre tento build proxy nenastavuj.</p>
            <p><strong>Test webhookov:</strong> stlač <strong>Test webhooks</strong>, aby si overil doručovanie testovacej správy. Checkout link sa posiela iba na vlastný webhook uvedený vyššie.</p>
            <p className="guide-small">Polia s kľúčmi a heslom sú citlivé. V tomto rozhraní sa uložené hodnoty môžu zobraziť priamo; nezdieľaj screenshoty Settings.</p>
            <div className="guide-shot-grid guide-shot-grid--settings">
              <Shot src="/guide/settings-top-redacted-v342.png" alt="Horná časť settings, citlivé hodnoty sú prekryté" caption="Settings: licenčné, CapSolver a e-mailové polia. Citlivé hodnoty sú prekryté; UI 3.4.2." />
              <Shot src="/guide/settings-fields-redacted-v342.png" alt="Nastavenia Lobogo s prekrytými prihlasovacími hodnotami" caption="Ukážka celých citlivých polí a polling nastavení; UI 3.4.2." />
              <Shot src="/guide/settings-lower-redacted-v342.png" alt="Spodná časť nastavení s prekrytým Discord webhookom" caption="Polling, zoznam taskov a logy; Discord údaje sú prekryté. UI 3.4.2." />
            </div>
          </Section>

          <Section number={9} title="Vytvorenie tasku">
            <p>V dashboarde otvor <strong>Tasks</strong> → <strong>Create task</strong>. Trh sa určí z Ticketmaster URL; samostatné pole Market v tomto formulári nie je.</p>
            <div className="guide-table-wrap">
              <table className="guide-table">
                <thead><tr><th>Pole v okne Create task</th><th>Čo znamená a ako ho vyplniť</th></tr></thead>
                <tbody>
                  <tr><td><strong>Event URL</strong></td><td>Celý odkaz na Ticketmaster udalosť. Pri France použi presný odkaz na konkrétnu performance (s identifikátormi predstavenia). Trh sa z URL rozpozná automaticky.</td></tr>
                  <tr><td><strong>Sale type</strong></td><td>Predvolené je <strong>Standard sale</strong> pre bežný predaj. <strong>Presale / fan-club (US, CA, FR)</strong> zobrazí polia pre predpredajový kód.</td></tr>
                  <tr><td><strong>Presale / fan-club code</strong></td><td>Predvolene prázdne; kód zadaj iba pre príslušný predpredaj. Je to citlivý údaj, nezdieľaj ho.</td></tr>
                  <tr><td><strong>Membership type</strong></td><td>Iba France; predvolené <strong>FCM</strong>. Meň len vtedy, keď to vyžadujú údaje konkrétneho členstva.</td></tr>
                  <tr><td><strong>Qty</strong></td><td>Predvyplnené je <code>2</code>. Môžeš zadať jedno číslo alebo rozsah, napríklad <code>2-4</code>. Rozsah skúša od najvyššieho počtu nadol až po minimum; samotné <code>4</code> je horný limit do 4.</td></tr>
                  <tr><td><strong>Max price</strong></td><td>Najvyššia cena v spoločnom režime. Nechaj prázdne pre ľubovoľnú cenu. Použi menu trhu danej Ticketmaster stránky.</td></tr>
                  <tr><td><strong>Same max for any ticket</strong></td><td>Predvolene zapnuté: jeden Max price platí pre všetky typy. Po vypnutí sa zobrazia samostatné limity pre Floor/GA a Seated.</td></tr>
                  <tr><td><strong>Floor / GA, Seated</strong></td><td>Po vypnutí spoločného stropu sa oba typy najprv predvolene zaškrtnú. Nezaškrtnutý typ sa vylúči. Každý zaškrtnutý typ môže mať vlastný cenový strop; prázdny strop znamená bez limitu pre tento typ. Pri France rozdelenie typov nemusí byť dostupné.</td></tr>
                  <tr><td><strong>Keywords</strong></td><td>Slová oddeľ medzerami. <code>+</code> označí požadované slová, <code>-</code> vylúčené. Napríklad <code>+standing -obstructed</code>. Pri bežných trhoch sa kladné slová vyhodnocujú spolu; francúzske tarifné názvy majú osobitné správanie.</td></tr>
                  <tr><td><strong>Auto-cart on match</strong></td><td>Predvolene zapnuté. Pri zhode pravidiel sa extension pokúsi pripraviť košík. Vypni, ak chceš iba sledovať a nekartovať automaticky.</td></tr>
                  <tr><td><strong>Watch resale too</strong></td><td>Predvolene zapnuté. Sleduje aj resale ponuky. Pri France a presale je táto voľba vypnutá/ignorovaná.</td></tr>
                  <tr><td><strong>Add event</strong></td><td>Tlačidlo v okne Create task uloží udalosť a spustí AutoQueue pre task. Celkové sledovanie musí byť zapnuté aj cez horné <strong>Start</strong> v dashboarde alebo extension popupe.</td></tr>
                </tbody>
              </table>
            </div>
            <div className="guide-example">
              <h3>Príklad tasku</h3>
              <p><strong>Event URL:</strong> vlož URL vybranej udalosti · <strong>Sale type:</strong> Standard sale · <strong>Qty:</strong> 2-4 · <strong>Max price:</strong> 150 (iba ukážková suma) · <strong>Same max for any ticket:</strong> zapnuté · <strong>Keywords:</strong> +standing -obstructed · <strong>Auto-cart on match:</strong> zapnuté · <strong>Watch resale too:</strong> zapnuté.</p>
              <p className="guide-small">Suma 150 je iba príklad formátu, nie odporúčaná cena. Pred uložením skontroluj menu a rozpočet konkrétnej udalosti.</p>
            </div>
            <p><strong>Queue / auto-pass:</strong> nie je to samostatné políčko tasku. Extension automaticky obslúži podporovaný waiting-room flow, keď je potrebný. To, že sa AutoQueue spustí, nezaručuje vstup do fronty ani lístky.</p>
          </Section>

          <Section number={10} title="Ako to beží naživo">
            <ol>
              <li>V dashboarde skontroluj, že task je uložený, extension má stav Active a globálne sledovanie je spustené cez <strong>Start</strong>.</li>
              <li>Po zmene dostupnosti príde signál. Extension vyhodnotí množstvo, cenu, typ lístka a keywords.</li>
              <li>Pri zhode a zapnutom Auto-cart sa pokúsi o košík. Ak Ticketmaster vyžaduje podporovanú čakáreň alebo kód, extension/agent vykoná podporovaný queue/OTP postup. Čakanie ani úspešný nákup nie sú garantované.</li>
              <li>Po vytvorení košíka odkaz na checkout pošle vlastný Discord webhook. Otvor odkaz a nákup si skontroluj a zaplať na Ticketmasteri.</li>
            </ol>
            <p><strong>Live log</strong> zobrazuje kontroly, zhody, košíky, varovania a chyby. V <strong>Carts</strong> uvidíš výsledky pokusov vrátane nepotvrdených alebo neúspešných. Za úspešný košík považuj až stav s dostupným checkout odkazom; samotný záznam o zhode ešte košík nepotvrdzuje.</p>
            <p>V US/CA presale môže byť potrebný oprávnený Ticketmaster účet a otvorená stránka udalosti pre queue. Pri upozornení na čakáreň môže dashboard ponúknuť <strong>Open waiting room</strong>; použi ju, aby sa otvorila príslušná karta.</p>
            <div className="guide-shot-grid guide-shot-grid--single">
              <Shot src="/guide/carts-empty-v342.png" alt="Prázdna stránka Carts v Lobogo dashboarde" caption="Carts: prázdny zoznam pred prvým zachyteným výsledkom. Ukážka UI 3.4.2." />
            </div>
          </Section>

          <Section number={11} title="Self-update">
            <ol>
              <li><strong>Lokálny agent/runtime:</strong> kontroluje aktualizácie a môže sa aktualizovať/reštartovať automaticky. Ak sa aktualizačná kontrola nedá vykonať, stav oznámi opakovanie.</li>
              <li><strong>Chrome extension:</strong> nová verzia sa stiahne automaticky. Agent alebo dashboard môže zobraziť „update ready“ alebo „reload to apply“.</li>
              <li>Vtedy otvor <code>chrome://extensions</code> a pri karte Lobogo klikni raz na <strong>Reload</strong> (Obnoviť/Znova načítať). To je jediný bežný manuálny krok po automatickom update extension.</li>
              <li>Ak stav hlási <strong>up to date</strong>, ďalší Reload netreba. Samotná Windows aplikácia Lobogo Agent sa pri vydaní novej verzie distribuuje cez aktuálny download vo Whop; nový inštalátor stiahni z Whop, ak dostaneš pokyn na update appky.</li>
            </ol>
            <div className="guide-placeholder">[SCREENSHOT: chrome://extensions s kartou Lobogo a tlačidlom Reload]</div>
          </Section>

          <Section number={12} title="Riešenie problémov">
            <div className="guide-table-wrap">
              <table className="guide-table">
                <thead><tr><th>Problém</th><th>Možná príčina</th><th>Čo spraviť</th></tr></thead>
                <tbody>
                  <tr><td><strong>Task nekartuje</strong></td><td>Globálne sledovanie je vypnuté, task/filtre nesedia, extension nie je Active, v ponuke nie je vhodný lístok alebo chýba služba CAPTCHA.</td><td>Skontroluj Start, stav Active, URL, Qty, max ceny, typy a keywords. Pozri Live log a CapSolver balance; použi Test webhooks na doručovanie. Neznížuj intervaly kontrol.</td></tr>
                  <tr><td><strong>Queue / čakáreň čaká</strong></td><td>Ticketmaster drží vstup vo fronte; automatický prechod podporuje iba príslušné flow.</td><td>Nechaj Chrome, Lobogo Agent a potrebnú stránku udalosti otvorené. V US/CA presale používaj eligible účet. Počkaj; poradie ani lístok nie sú garantované.</td></tr>
                  <tr><td><strong>403 alebo blok</strong></td><td>Ticketmaster odmietol požiadavku alebo obmedzil prístup.</td><td>Pozastav task, skontroluj prihlásenie a stav účtu Ticketmaster, nechaj predvolené intervaly a chvíľu počkaj pred ďalším pokusom. Opakované rýchle pokusy nepomôžu.</td></tr>
                  <tr><td><strong>License in use on another device</strong></td><td>Licencia je stále aktívna na inom PC.</td><td>Na starom počítači zavri Lobogo Agent aj Chrome, počkaj približne 3 minúty a skús znova. Trvalý prenos vyžaduje reset majiteľa v <code>/admin</code>.</td></tr>
                  <tr><td><strong>OTP neprišlo</strong></td><td>Nesprávna IMAP schránka/app password, IMAP nie je dostupný alebo Ticketmaster kód neposlal.</td><td>Over, že ide o schránku, do ktorej kód chodí; pri Gmaili použi app password a skontroluj IMAP. Pozri Spam, znovu požiadaj Ticketmaster o čerstvý kód a skontroluj údaje v Settings. Agent hľadá nový šesťmiestny kód až po vyžiadaní.</td></tr>
                  <tr><td><strong>Extension má starú verziu</strong></td><td>Chrome ešte nenačítal automaticky stiahnuté súbory.</td><td>Počkaj na dokončenie downloadu; potom v <code>chrome://extensions</code> klikni Reload pri Lobogo. Ak je „Update failed“, nechaj aktuálnu verziu a skontroluj internet/Agent.</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section number={13} title="Bezpečnosť">
            <ul className="guide-checks">
              <li>Nikdy neposielaj ani nezverejňuj licenčný kľúč, CapSolver kľúč, IMAP app password, presale kód ani Discord webhook.</li>
              <li>Checkout/cart odkazy považuj za súkromné: môžu otvoriť tvoj košík. Neposielaj ich do verejných kanálov.</li>
              <li>Platbu a finálne potvrdenie objednávky vždy vykoná človek na Ticketmasteri.</li>
              <li>Ak sa tajný údaj omylom dostane do screenshotu alebo správy, zneplatni ho a vytvor nový u príslušnej služby.</li>
            </ul>
          </Section>

          <section className="guide-checklist" id="rychly-checklist">
            <span className="eyebrow">Pred prvým taskom</span>
            <h2>Rýchly checklist</h2>
            <ul className="guide-checks guide-checks--final">
              <li>Lobogo Agent je nainštalovaný a otvorený.</li>
              <li>Licenčný kľúč je uložený v Agentovi a v extension → Settings → Monitor.</li>
              <li>Chrome extension je načítaná z cesty v Agentovi, pripnutá a hlási Active.</li>
              <li>Ticketmaster účet je prihlásený v Chrome.</li>
              <li>CapSolver kľúč je zadaný a má dostatočný zostatok na vlastnom účte.</li>
              <li>Discord webhook smeruje do súkromného kanála; Test webhooks prešiel.</li>
              <li>Ak treba OTP: správny IMAP email a app password sú uložené.</li>
              <li>Intervaly kontrol zostali na predvolených hodnotách.</li>
              <li>Task má správny event URL, typ predaja, množstvo, cenu, typy a keywords.</li>
              <li>Je zapnuté Auto-cart (ak ho chceš) a globálne sledovanie cez Start.</li>
              <li>Vieš, že košík nie je potvrdený nákup a platbu dokončuješ sám/sama.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
