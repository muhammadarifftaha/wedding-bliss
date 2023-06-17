import { Transition } from "@headlessui/react";
import React from "react";

export default function PageTranstition({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <Transition
      as="main"
      show={true}
      enter="transition-opacity duration-200 ease-in-out"
      leave="transition-opacity duration-200 ease-in-out"
      enterTo="opacity-0"
      enterfrom="opacity-100"
      leaveto="opacity-100"
      leaveFrom="opacity-0"
      className={className}
      style={style}>
      {children}
    </Transition>
  );
}
