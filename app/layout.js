import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Klaev | launching fall 2025",
  description:
    "Discover a new era of minimalist fashion. Our exclusive Fall 2025 collection blends refined silhouettes with timeless elegance. Join the waitlist today for a 10% discount on your firt order!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-main`}>
        {children}
        <Toaster richColors position={"top-center"} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
