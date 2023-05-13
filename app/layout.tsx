import Navbar from "@/components/navbar";
import "./globals.css";

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
      <body className={""}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
