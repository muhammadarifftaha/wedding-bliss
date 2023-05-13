import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    pax: "",
    special: "",
    other: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generatePax = (lowerLimit = 1, upperLimit = 10) => {
    const noOfPax = [...Array(upperLimit - lowerLimit + 1).keys()].map(
      (i) => i + lowerLimit
    );
    return noOfPax.map((num, i) => {
      return (
        <option
          className="px-4 py-2"
          key={i}
          value={`${num}`}>
          {num} Pax
        </option>
      );
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen px-12 py-6 bg-rose-300">
      <div className="flex flex-col items-center justify-center w-1/2 px-8 py-4 border rounded shadow bg-neutral-50">
        <h2 className="my-6 text-4xl font-medium">RSVP</h2>
        <AnimatePresence>
          <motion.form className="flex flex-col w-full gap-6">
            <div className="rsvp-input-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="rsvp-input-group">
              <label htmlFor="pax">How many people are in your party?</label>
              <select
                name="pax"
                id="pax"
                className="w-full"
                value={form.pax}
                onChange={handleChange}>
                <option value={""}>Please Select</option>
                {generatePax(1, 6)}
              </select>
            </div>
            <div className="rsvp-input-group">
              <label htmlFor="special">
                Do you have any Dietary Requirements?
              </label>
              <div className="flex flex-row items-center w-full gap-4">
                <select
                  name="special"
                  id="special"
                  className={`${
                    form.special === "other" ? "basis-1/4" : "w-full"
                  }`}
                  value={form.special}
                  onChange={handleChange}>
                  <option value={""}>Please Select</option>
                  <option value={"vegan"}>Vegan</option>
                  <option value={"vegetarian"}>Vegetarian</option>
                  <option value={"no nuts"}>No Nuts</option>
                  <option value={"no seafood"}>No Seafood</option>
                  <option value={"other"}>Other</option>
                </select>
                <input
                  type="text"
                  name="other"
                  id="other"
                  placeholder="Please Specify"
                  className={`${
                    form.special === "other" ? "flex flex-grow" : "hidden"
                  }`}
                  disabled={form.special !== "other"}
                  value={form.other}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-4 py-2 rounded shadow bg-rose-100">
              Submit
            </button>
          </motion.form>
        </AnimatePresence>
      </div>
    </div>
  );
}
