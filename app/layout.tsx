import Navbar from "@/components/navbar";
import "./globals.css";

import { Pacifico, Great_Vibes, Playball } from "next/font/google";

const greatVibes = Playball({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata = {
  title: "Wedding Bliss",
  description:
    "Wedding Bliss Demo. A wedding page/registry by muhammadarifftaha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${greatVibes.className}`}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
