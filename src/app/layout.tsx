import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "ImmerseGT 2026",
  description: "Participate in the 2026 XR Hackathon",
  openGraph: {
    title: "ImmerseGT 2026",
    description: "Participate in the 2026 XR Hackathon",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className="antialiased font-body">
        {/* Very subtle scanlines only — grain is applied selectively */}
        <div className="scanlines-global" aria-hidden="true" />

        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
