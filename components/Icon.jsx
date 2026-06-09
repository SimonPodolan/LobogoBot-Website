export default function Icon({ name, size = 20, stroke = 1.7, style, className }) {
  const paths = {
    crosshair: (
      <>
        <circle cx="12" cy="12" r="7.5" />
        <path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      </>
    ),
    bolt: <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13l0-8z" />,
    radar: (
      <>
        <path d="M12 12 19 5" />
        <path d="M21 12a9 9 0 1 1-4.5-7.8" />
        <path d="M16.5 12a4.5 4.5 0 1 1-2.3-3.9" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </>
    ),
    shield: <path d="M12 3 5 6v6c0 5 3.2 7.6 7 9 3.8-1.4 7-4 7-9V6l-7-3z" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 21.4 12 21c-2.5-.4-3.8-3.7-3.8-9S9.5 5.6 12 3z" />
      </>
    ),
    check: <path d="m4 12.5 5 5L20 6" />,
    play: <path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
  };
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      {paths[name]}
    </svg>
  );
}

export function Logo() {
  return (
    <a href="#top" className="logo" aria-label="LoboGo home">
      <span className="logo__mark">
        <Icon name="crosshair" size={20} stroke={2} />
      </span>
      <span className="logo__text">
        Lobo<b>Go</b>
      </span>
    </a>
  );
}
