import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "LoboGo — Never miss the drop",
  description:
    "Real-time Ticketmaster monitoring that reserves your tickets the instant they go live. Across every region.",
  metadataBase: new URL("https://lobogo.app"),
  icons: {
    icon: "favicon.svg",
  },
  openGraph: {
    title: "LoboGo — Never miss the drop",
    description: "Real-time ticket monitoring & instant reserve.",
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
