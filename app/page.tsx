"use client";

import Image from "next/image";
import landingBG from "@/assets/images/landing-bg.jpg";
import logo from "@/assets/images/logo.png";
import Countdown from "@/components/countdown";
import { Inconsolata } from "next/font/google";
import { useState } from "react";

const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["500"] });

export default function Home() {
  const [RSVPFrom, setRSVPFrom] = useState({ name: "", pax: "", special: "" });
  return (
    <main>
      <div
        className="relative w-full h-screen bg-center bg-cover"
        style={{ backgroundImage: "url('landing-bg.jpg')" }}>
        <div className="absolute flex flex-col items-center justify-center w-full h-full gap-8 bg-neutral-50/50">
          <h1 className="text-4xl text-center">
            Wedding of <br />
            <span className="font-medium text-8xl">
              Jonathan &amp; Samantha
            </span>
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
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-screen px-12 py-6 bg-rose-300">
        <h2 className="text-4xl font-medium">RSVP</h2>
        <div className="flex flex-col items-center justify-center px-8 py-4 border rounded shadow bg-neutral-50">
          <form action="">
            <div className="flex flex-row gap-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={RSVPFrom.name}
              />
            </div>
            {/* <div className="flex flex-row gap-4">
              <label htmlFor="pax">No of Pax</label>
              <select
                type="text"
                name="pax"
                id="pax"
                value={RSVPFrom.name}>
                  <op
                </select>
            </div> */}
            <div className="flex flex-row gap-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={RSVPFrom.name}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 rounded shadow bg-rose-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
