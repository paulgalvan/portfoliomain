import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "Paul Galvan – Mechanical Engineer & Robotics",
  description:
    "Portfolio of Paul Galvan, a Tufts ME senior building at the intersection of robotics, hardware, and human-centered design. Open to full-time roles starting Summer 2026.",
  authors: [{ name: "Paul Galvan" }],
  openGraph: {
    title: "Paul Galvan – Mechanical Engineer & Robotics",
    description:
      "Robotics builds, P&G manufacturing internship, university research - and an M.S. committed for Fall 2026. Open to full-time roles starting Summer 2026.",
    type: "website",
  },
  icons: {
    apple: "/favicon_io/apple-touch-icon.png",
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
