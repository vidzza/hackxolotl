import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alejandro Rodriguez | Cybersecurity Researcher & AI Engineer",
  description: "Building security tools, AI agents, and automation systems at the intersection of cybersecurity and machine learning. MS Computer Science student at UTEP.",
  keywords: ["cybersecurity", "AI", "machine learning", "penetration testing", "security research", "UTEP", "El Paso", "Texas"],
  authors: [{ name: "Alejandro Rodriguez" }],
  creator: "Alejandro Rodriguez",
  metadataBase: new URL("https://hackxolotl.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hackxolotl.com",
    siteName: "Alejandro Rodriguez - Portfolio",
    title: "Alejandro Rodriguez | Cybersecurity Researcher & AI Engineer",
    description: "Building security tools, AI agents, and automation systems at the intersection of cybersecurity and machine learning.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandro Rodriguez | Cybersecurity Researcher & AI Engineer",
    description: "Building security tools, AI agents, and automation systems at the intersection of cybersecurity and machine learning.",
    creator: "@hackxolotl",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0a0a0a] text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
