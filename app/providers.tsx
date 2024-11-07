"use client";

import { ReactNode } from "react";
import { ConvexClientProvider } from "./lib/convex";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ConvexClientProvider>
      {children}
    </ConvexClientProvider>
  );
}