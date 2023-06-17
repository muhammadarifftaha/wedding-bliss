import Navbar from "@/components/navbar";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

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
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
