import useCountdown from "@/hooks/useCountdown";
import React from "react";
import { Inconsolata } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";

const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["500"] });

export default function Countdown() {
  const countdown = useCountdown(new Date(2023, 7, 1, 19, 0, 0, 0));
  return (
    <div className={`flex flex-row items-center justify-center gap-6`}>
      {Object.keys(countdown).map((key) => {
        return (
          <div
            className="flex flex-col items-center justify-center gap-4"
            key={countdown[key]}>
            <p className="text-xl font-medium">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </p>
            <div className="px-4 py-2 border rounded">
              <AnimatePresence>
                <motion.p
                  key={countdown[key]}
                  // initial={{ y: -20, opacity: 0, position: "static" }}
                  // animate={{ y: 0, opacity: 1 }}
                  // exit={{ y: 50, opacity: 0, position: "absolute" }}
                  // transition={{ duration: 1, ease: "easeOut" }}
                  className={`text-2xl font-bold ${inconsolata.className}`}>
                  {("00" + countdown[key]).slice(-2)}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
}
