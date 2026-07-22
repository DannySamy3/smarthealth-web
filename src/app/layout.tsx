import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Smart Health | Secure Pharmaceutical Supply Chain & Compliance Platform",
  description: "Smart Health connects Manufacturers, Importers, Distributors, and Institutions in a secure, verified healthcare distribution network. Experience complete medicine traceability, verification, and compliance tracking.",
  keywords: ["pharmaceutical tracking", "medicine supply chain", "medical B2B SaaS", "healthcare logistics", "drug compliance", "smart health"],
  authors: [{ name: "Smart Health Platform" }],
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

