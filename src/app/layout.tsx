"use client";

import { useEffect } from "react";
import ThemeProvider from "@/theme/ThemeProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js");
      });
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
