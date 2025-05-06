"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function Providers({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        refetchOnWindowFocus: false, // Global setting
        cacheTime: 1000 * 60 * 10,
        keepPreviousData: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
