import { LoginForm } from "@/components/forms/LoginForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo.png";

const LoginPage = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center">
          <Image src={Logo} alt="Logo" className="size-10" />
          <span className="text-4xl font-bold">
            topsy<span className="text-primary">dev</span>
          </span>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
// Modified on 2025-02-19 00:38:31
