"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-muted-foreground mb-8">
        We apologize for the inconvenience. Please try again.
      </p>
      <Button onClick={reset}>
        Try again
      </Button>
    </div>
  );
} // Modified on 2025-02-19 00:38:33
// Modified on 2025-02-19 00:56:10
