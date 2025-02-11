import Link from "next/link";

import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { auth } from "@/app/utils/auth";
import { ThemeToggle } from "../ui/theme-toggle";
import { UserDropdown } from "./UserDropdown";
import Logo from "@/public/logo.png";

export async function Navbar() {
  const session = await auth();

  return (
    <nav className="flex justify-between items-center py-5 relative z-50">
      <Link href="/" className="flex items-center gap-2">
      <Image src={Logo} alt="Logo" className="size-10" />
        <h1 className="text-2xl font-bold">
          topsy<span className="text-primary">dev</span>
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-5">
        <ThemeToggle />
        {session?.user ? (
          <Link href="/post-job" className={buttonVariants({ size: "lg" })}>
            Post Job
          </Link>
        ) : (
          <Link href="/api/auth/signin" className={buttonVariants({ size: "lg" })}>
            Post Job
          </Link>
        )}
        {session?.user ? (
          <UserDropdown
            email={session.user.email as string}
            name={session.user.name as string}
            image={session.user.image as string}
          />
        ) : (
          <Link
            href="/api/auth/signin"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Sign In
          </Link>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-4">
        <ThemeToggle />
        {session?.user ? (
          <UserDropdown
            email={session.user.email as string}
            name={session.user.name as string}
            image={session.user.image as string}
          />
        ) : (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px]">
              <SheetHeader className="text-left">
                <SheetTitle>
                  topsy<span className="text-primary">dev</span>
                </SheetTitle>
                <SheetDescription>
                  Find or post your next job opportunity
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-4 mt-6">
                <Link
                  href="/"
                  className="text-lg px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors duration-200"
                >
                  Find New Job
                </Link>
                <Link
                  href="/api/auth/signin"
                  className="text-lg px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors duration-200"
                >
                  Post Job
                </Link>
                <Link
                  href="/api/auth/signin"
                  className="text-lg px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors duration-200"
                >
                  Sign In
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
}
