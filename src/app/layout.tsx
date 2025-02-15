import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// Font setup
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

// Metadata
export const metadata: Metadata = {
  title: "Login",
  description: "Manage your bookstore easily",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
