import "server-only";
import { redirect } from "next/navigation";
import { auth } from "@/app/utils/auth";
import { prisma } from "./db";

export async function requireUser() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return session.user;
}

export async function requireCompany() {
  const session = await requireUser();
  const company = await prisma.company.findUnique({
    where: {
      userId: session?.id as string,
    },
    select: {
      id: true,
    },
  });

  if (!company) {
    redirect("/");
  }

  return company;
}
// Modified on 2025-02-19 00:38:37
// Modified on 2025-02-19 00:56:04
