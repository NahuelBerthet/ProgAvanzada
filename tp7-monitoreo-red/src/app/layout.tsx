import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark bg-neutral-950 text-gray-100">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
