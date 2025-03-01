import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "ImmerseGT 2025",
  description: "Participate in the 2025 XR Hackathon",
  openGraph: {
    title: "ImmerseGT 2025",
    description: "Participate in the 2025 XR Hackathon",
    type: "website",
  }
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
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
        </style>
      </head>
      <body className={`antialiased`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}