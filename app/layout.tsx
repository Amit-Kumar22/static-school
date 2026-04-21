import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Bright Future International School - Shaping Minds, Building Futures",
  description: "Premier international school in Patna, Bihar. Quality education with experienced faculty, smart classrooms, and modern facilities. Three branches: Kankarbagh, Boring Road, Danapur.",
  keywords: "international school, Patna, Bihar, education, CBSE, quality education, smart classrooms",
  authors: [{ name: "Bright Future International School" }],
  robots: "index, follow",
  openGraph: {
    title: "Bright Future International School",
    description: "Empowering Education with Excellence - Where every student discovers their potential",
    type: "website",
    locale: "en_IN",
    siteName: "Bright Future International School",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth`}
    >
      <body className={`${inter.className} min-h-full antialiased`}>{children}</body>
    </html>
  );
}
