import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// Modified on 2025-02-19 00:38:39
// Modified on 2025-02-19 00:56:05
