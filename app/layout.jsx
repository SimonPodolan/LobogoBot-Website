import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "Lobogo — Ticketmaster availability monitoring",
  description:
    "Ticketmaster availability monitoring with a Windows agent and Chrome extension. The user completes checkout and payment.",
  metadataBase: new URL("https://lobogo-bot.vercel.app"),
  icons: {
    icon: "favicon.svg",
  },
  openGraph: {
    title: "Lobogo — Ticketmaster availability monitoring",
    description: "A Windows agent and Chrome extension for supported Ticketmaster task flows.",
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
        <SmoothScroll>{children}</SmoothScroll>
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
