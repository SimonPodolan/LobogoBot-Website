import "./globals.css";
import ScrollEffects from "@/components/ScrollEffects";

export const metadata = {
  title: "Lobogo — Ticketmaster ticket helper",
  description:
    "Choose a Ticketmaster event, set your budget, and let Lobogo help prepare a cart. You review and pay on Ticketmaster.",
  metadataBase: new URL("https://lobogo-bot.vercel.app"),
  icons: {
    icon: "favicon.svg",
  },
  openGraph: {
    title: "Lobogo — Ticketmaster ticket helper",
    description: "Choose an event, set your budget, and get a private cart link. You complete checkout on Ticketmaster.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0b0d0c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* set before paint so reveal initial-states only hide when JS is on */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <ScrollEffects>{children}</ScrollEffects>
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
