"use client";

import Image from "next/image";
import landingBG from "@/assets/images/landing-bg.jpg";
import logo from "@/assets/images/logo.png";
import { useState } from "react";
import RSVP from "@/components/RSVP";
import Countdown from "@/components/countdown";
import { navLinks } from "@/data/links";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { inconsolata, playball } from "@/assets/fonts";
import PageTranstition from "@/components/PageTranstition";

export default function Home() {
  return (
    <main
      className={`relative w-full h-screen bg-center bg-cover ${playball.className}`}
      style={{ backgroundImage: "url('landing-bg.jpg')" }}>
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 bg-neutral-50/30">
        <h1 className="text-4xl text-center">
          Wedding of <br />
          <span className="font-medium text-8xl">Jonathan &amp; Samantha</span>
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 px-6 py-3 my-4 rounded-md bg-neutral-50/90">
          <p className="text-2xl">Save the date!</p>
          <h3 className="flex flex-col items-center justify-center text-4xl font-semibold">
            <p>
              1<sup>st</sup> August 2025
            </p>
            <p className={``}>19:00</p>
          </h3>
          <Countdown />
        </div>
        {/* <nav
            role="navigation"
            className="absolute bottom-0 w-full">
            <ul className="flex flex-row items-center justify-around w-full">
              {navLinks.map((link, i) => (
                <li
                  key={i}
                  className="basis-1/3">
                  <Link
                    href={link.href}
                    className="flex flex-col items-center justify-center w-full py-6 text-2xl transition-all duration-1000 ease-in-out bg-gradient-to-t from-pink-200 to-transparent hover:from-rose-300">
                    <FontAwesomeIcon icon={faChevronUp} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav> */}
      </div>
    </main>
  );
}
