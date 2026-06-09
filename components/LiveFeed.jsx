"use client";

import { useState, useEffect, useRef } from "react";

const EVENTS = [
  ["Coldplay", "Wembley · London", "Ticketmaster US", "https://ticketmaster.com/coldplay"],
  ["Bad Bunny", "Bernabéu · Madrid", "Ticketmaster ES", "https://ticketmaster.es/badbunny"],
  ["Taylor Swift", "Stade de France · Paris", "Ticketmaster FR", "https://ticketmaster.fr/taylorswift"],
  ["Adele", "Ziggo Dome · Amsterdam", "Ticketmaster NL", "https://ticketmaster.nl/adele"],
  ["Karol G", "San Siro · Milan", "Ticketmaster IT", "https://ticketmaster.it/karolg"],
  ["The Weeknd", "Olympiastadion · Berlin", "Ticketmaster DE", "https://ticketmaster.de/theweeknd"],
  ["Dua Lipa", "3Arena · Dublin", "Ticketmaster IE", "https://ticketmaster.ie/dualipa"],
  ["Oasis", "Heaton Park · Manchester", "Ticketmaster UK", "https://ticketmaster.co.uk/oasis"],
];

const STAGES = [
  { label: "Getting event", color: "#3B82F6" },      // Blue
  { label: "Added to queue", color: "#06B6D4" },     // Cyan
  { label: "Getting checkout", color: "#3B82F6" },   // Blue
  { label: "Success", color: "#10B981", done: true },// Green
];

function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 3l14 9-14 9V3z" />
    </svg>
  );
}

function StopIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="12" height="12" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6l-2 14H7L5 6m5 0V4a2 2 0 012-2h2a2 2 0 012 2v2"></path>
    </svg>
  );
}

function Ext() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: 4, display: 'inline-block'}}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

let _id = 0;

export default function LiveFeed({ rows = 6 }) {
  const [items, setItems] = useState(() =>
    EVENTS.slice(0, rows).map((e, i) => ({ act: e[0], venue: e[1], siteName: e[2], url: e[3], id: ++_id, stage: i % 4, profileOffset: i }))
  );
  const next = useRef(rows % EVENTS.length);

  useEffect(() => {
    let alive = true;
    const t = setInterval(() => {
      if (!alive) return;
      setItems((prev) =>
        prev.map((r) => {
          if (r.stage >= STAGES.length - 1) {
            const e = EVENTS[next.current++ % EVENTS.length];
            return { act: e[0], venue: e[1], siteName: e[2], url: e[3], id: ++_id, stage: 0, profileOffset: r.profileOffset };
          }
          return { ...r, stage: r.stage + 1 };
        })
      );
    }, 1200);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, [rows]);

  return (
    <div className="bot-ui">
      <div className="bot-header">
        <div>
          <h2 className="bot-title">Ticketmaster</h2>
          <span className="bot-subtitle">10 Tasks</span>
        </div>
        <button className="bot-btn-create">Create Tasks +</button>
      </div>

      <div className="bot-toolbar">
        <div className="bot-toolbar-left">
          <button className="bot-tool-btn"><span className="text-green"><PlayIcon /></span> Start All</button>
          <button className="bot-tool-btn"><span className="text-red"><StopIcon /></span> Stop All</button>
          <button className="bot-tool-btn"><EditIcon /> Edit All</button>
          <button className="bot-tool-btn"><span className="text-red"><TrashIcon /></span> Delete All</button>
        </div>
        <div className="bot-toolbar-right">
          <button className="bot-tool-btn w-auto">dc (50) ⌵</button>
          <div className="bot-search">
             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
             Search Tasks
          </div>
        </div>
      </div>

      <div className="bot-table">
        <div className="bot-th">
          <div className="col-id">ID</div>
          <div className="col-site">SITE</div>
          <div className="col-profile">PROFILE</div>
          <div className="col-info">INFO</div>
          <div className="col-status">STATUS</div>
          <div className="col-actions"></div>
        </div>

        <div className="bot-tbody">
          {items.map((it, idx) => {
            const s = STAGES[it.stage];
            const pct = ((it.stage + 1) / STAGES.length) * 100;
            const profileNum = 4821 + it.profileOffset * 17;

            return (
              <div className="bot-tr" key={it.id}>
                <div className="col-id"><span className="id-badge">{idx + 1}</span></div>
                <div className="col-site">
                  <div className="text-main">{it.siteName}</div>
                  <div className="text-sub truncate">{it.url}</div>
                </div>
                <div className="col-profile">
                  <div className="text-main">LoboGo Bots</div>
                  <div className="text-sub flex items-center gap-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                    •••• {profileNum}
                  </div>
                </div>
                <div className="col-info">
                  <div className="text-main truncate">{it.act}</div>
                  <div className="text-sub truncate">{it.venue}</div>
                </div>
                <div className="col-status">
                  <div className="status-text" style={{ color: s.color }}>
                    {s.label}
                    {s.done && <Ext />}
                  </div>
                  <div className="status-bar-bg">
                    <div className="status-bar-fill" style={{ width: pct + "%", backgroundColor: s.color }} />
                  </div>
                </div>
                <div className="col-actions">
                  <button className="action-btn">{s.done ? <span className="text-green"><PlayIcon /></span> : <span className="text-red"><StopIcon /></span>}</button>
                  <button className="action-btn"><EditIcon /></button>
                  <button className="action-btn text-red"><TrashIcon /></button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .bot-ui {
          background-color: #0b0c0c;
          border: 1px solid #1f2020;
          border-radius: 12px;
          color: #e5e7eb;
          font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
          width: 100%;
          max-width: 1200px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          overflow-x: auto;
          font-size: 13px;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .col-site { display: none; }
          .col-profile { display: none; }
          .bot-toolbar { flex-direction: column; align-items: stretch; gap: 12px; }
          .bot-toolbar-left, .bot-toolbar-right { justify-content: space-between; }
        }
        
        .bot-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid #161717;
          background: #0b0c0c;
        }
        
        .bot-title {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
          color: #f3f4f6;
        }
        
        .bot-subtitle {
          font-size: 12px;
          color: #6b7280;
        }
        
        .bot-btn-create {
          background-color: #171717;
          border: 1px solid #262626;
          color: #e5e7eb;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 13px;
          cursor: pointer;
          font-weight: 500;
        }
        
        .bot-toolbar {
          display: flex;
          justify-content: space-between;
          padding: 12px 20px;
          border-bottom: 1px solid #161717;
          background: #0b0c0c;
        }
        
        .bot-toolbar-left, .bot-toolbar-right {
          display: flex;
          gap: 10px;
        }
        
        .bot-tool-btn {
          background-color: transparent;
          border: 1px solid #1f2020;
          color: #9ca3af;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          font-weight: 500;
        }
        
        .bot-search {
          background-color: transparent;
          border: 1px solid #1f2020;
          color: #6b7280;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          width: 150px;
        }
        
        .bot-table {
          width: 100%;
          background: #0b0c0c;
        }
        
        .bot-th, .bot-tr {
          display: flex;
          align-items: center;
        }
        
        .bot-th {
          padding: 12px 20px 8px;
          color: #6b7280;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.05em;
        }
        
        .bot-tr {
          padding: 10px 20px;
          border-bottom: 1px solid #161717;
        }
        
        .col-id { width: 40px; flex-shrink: 0; }
        .col-site { width: 140px; flex-shrink: 0; padding-right: 12px; }
        .col-profile { width: 120px; flex-shrink: 0; padding-right: 12px; }
        .col-info { flex-grow: 1; min-width: 0; padding-right: 20px; }
        .col-status { width: 150px; flex-shrink: 0; padding-right: 20px; }
        .col-actions { width: 100px; flex-shrink: 0; display: flex; gap: 6px; justify-content: flex-end; }
        
        .id-badge {
          background: #171717;
          color: #6b7280;
          border-radius: 4px;
          padding: 2px 8px;
          font-size: 11px;
          font-weight: 600;
          display: inline-block;
        }
        
        .text-main {
          color: #e5e7eb;
          font-weight: 500;
          margin-bottom: 3px;
          font-size: 13px;
        }
        
        .text-sub {
          color: #6b7280;
          font-size: 12px;
        }
        
        .truncate {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .flex { display: flex; }
        .items-center { align-items: center; }
        .gap-1 { gap: 4px; }
        
        .status-text {
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 8px;
        }
        
        .status-bar-bg {
          height: 2px;
          background: #1f2020;
          border-radius: 2px;
          width: 100%;
          overflow: hidden;
        }
        
        .status-bar-fill {
          height: 100%;
          transition: width 0.3s ease;
        }
        
        .action-btn {
          background: transparent;
          border: 1px solid #1f2020;
          color: #6b7280;
          width: 26px;
          height: 26px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        
        .text-green { color: #10B981; }
        .text-red { color: #EF4444; }
      `}</style>
    </div>
  );
}
