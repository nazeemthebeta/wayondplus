import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const freeSans = localFont({
  src: [
    {
      path: "../public/fonts/FreeSans.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FreeSansOblique.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/FreeSansBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/FreeSansBoldOblique.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-freesans",
});

export const metadata: Metadata = {
  title: "Wayond Plus",
  description: "Strategies and tools used by institutions and Forex traders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${freeSans.className} ${freeSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
