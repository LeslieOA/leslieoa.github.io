"use client";

import { ReactNode } from "react";
import AnimatedTransition from "@/components/AnimatedTransition";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <AnimatedTransition className="flex flex-grow items-center">
      {children}
    </AnimatedTransition>
  );
}
