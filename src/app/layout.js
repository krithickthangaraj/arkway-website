import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arkway EdServ – Smart Education Solutions",
  description: "Official website of Arkway EdServ, providing smarter, scalable education services.",
  keywords: "Arkway, EdServ, education, India, smart learning",
  openGraph: {
    title: "Arkway EdServ",
    description: "Smarter, scalable education solutions",
    url: "https://arkwayedserv.com",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
