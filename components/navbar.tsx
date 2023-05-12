import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export default function Navbar() {
  return (
    <header
      className={`absolute w-full px-6 py-3 z-[100] bg-gradient-to-b via-neutral-50/30 from-neutral-50/60 to-transparent ${pacifico.className}`}>
      <nav>
        <ul className="flex flex-row items-center justify-center gap-12 text-lg font-medium list-none">
          <li>
            <Link href="/">RSVP</Link>
          </li>
          <li>
            <Link href="/">Registry</Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src={logo}
                className=""
                width={150}
                alt="Wedding Logo"
              />
            </Link>
          </li>
          <li>
            <Link href="/">Gallery</Link>
          </li>
          <li>
            <Link href="/">Messages</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
