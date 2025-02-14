import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose weights you need
  variable: "--font-outfit", // Define CSS variable
});

export const metadata: Metadata = {
  title: "📚 Bookstore Admin",
  description: "Manage your bookstore easily",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
