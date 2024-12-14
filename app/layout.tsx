import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/general/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Topsy - Find Your Next Career Opportunity",
  description: "Discover and apply to the best job opportunities in South Africa on Topsy.dev. Post jobs and find top talent.",
  icons: {
    icon: [
      {
        url: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%2325ba5d"/><rect x="20" y="20" width="60" height="60" fill="white" rx="10"/><rect x="35" y="35" width="20" height="20" fill="%2325ba5d"/></svg>`,
      }
    ],
    apple: [
      {
        url: "/images/logo.png",
        type: "image/png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased relative min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className="[mask-image:radial-gradient(900px_circle_at_center,white,transparent)] dark:fill-white/[0.03] dark:stroke-white/[0.03] fill-black/[0.03] stroke-black/[0.03]"
          />
          <div className="relative">
            {children}
            <Toaster closeButton richColors />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
// Modified on 2025-02-19 00:38:25
