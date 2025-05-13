import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevPort – Portfolio Platform",
  description: "Multi-user portfolio builder with FastAPI backend",
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
