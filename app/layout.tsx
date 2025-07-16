import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amr Fayez | Portfolio",
  description: "A showcase of my projects and skills",
  icons: {
    icon: "/imgs/brandOG.png",
    apple: "/imgs/brandOG.png",
    other: [
      {
        rel: "icon",
        url: "/imgs/brandOG.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
