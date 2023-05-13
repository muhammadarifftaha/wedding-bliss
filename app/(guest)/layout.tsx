import React, { ReactNode } from "react";

export const metadata = {
  title: "Wedding Bliss - Admin",
  description:
    "Wedding Bliss Demo. A wedding management web-app by muhammadarifftaha",
};

export default function OtherLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
