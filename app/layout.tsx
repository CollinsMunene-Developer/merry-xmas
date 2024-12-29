import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";



const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "collins munene",
  description: "Wishing you merry christmas and a happy new year",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
