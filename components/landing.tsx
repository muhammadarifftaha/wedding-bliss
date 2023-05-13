import React from "react";
import { Playball } from "next/font/google";
import Countdown from "./countdown";

const playball = Playball({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export default function Landing() {
  return (
    <div
      className={`relative w-full h-screen bg-center bg-cover ${playball.className}`}
      style={{ backgroundImage: "url('landing-bg.jpg')" }}>
      <div className="absolute flex flex-col items-center justify-center w-full h-full gap-8 bg-neutral-50/50">
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
      </div>
    </div>
  );
}
