"use client";

import Image from "next/image";
import landingBG from "@/assets/images/landing-bg.jpg";
import logo from "@/assets/images/logo.png";
import Countdown from "@/components/countdown";
import { Inconsolata } from "next/font/google";
import { useState } from "react";
import RSVP from "@/components/RSVP";
import Landing from "@/components/landing";

const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["500"] });

export default function Home() {
  return (
    <main>
      <Landing />
      <RSVP />
    </main>
  );
}
