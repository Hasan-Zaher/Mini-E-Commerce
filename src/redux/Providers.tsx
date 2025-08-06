"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { ReduxProvider } from "./store";

export const Providers = ({ children }: { children: ReactNode }) => {
  const [query] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={query}>
      <ReduxProvider>{children}</ReduxProvider>
    </QueryClientProvider>
  );
};
