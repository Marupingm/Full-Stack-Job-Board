"use client";

import Link from "next/link";
import { Card, CardHeader } from "../ui/card";
import { MapPin, User2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { formatCurrency } from "@/app/utils/formatCurrency";
import Image from "next/image";
import { formatRelativeTime } from "@/app/utils/formatRelativeTime";

interface iAppProps {
  job: {
    id: string;
    jobTitle: string;
    salaryFrom: number;
    salaryTo: number;
    employmentType: string;
    location: string;
    createdAt: Date;
    company: {
      logo: string | null;
      name: string;
      about: string;
      location: string;
    };
  };
}

export function JobCard({ job }: iAppProps) {
  return (
    <Link href={`/job/${job.id}`}>
      <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary relative">
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4">
            {job.company.logo ? (
              <Image
                src={job.company.logo}
                alt={job.company.name}
                width={48}
                height={48}
                className="size-12 rounded-lg object-contain bg-white p-1"
              />
            ) : (
              <div className="bg-red-500 size-12 rounded-lg flex items-center justify-center">
                <User2 className="size-6 text-white" />
              </div>
            )}
            <div className="flex flex-col flex-grow gap-2">
              <h1 className="text-lg md:text-2xl font-bold">{job.jobTitle}</h1>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <p className="text-muted-foreground">
                  {job.company.name}
                </p>
                <span className="hidden md:inline text-muted-foreground">•</span>
                <Badge className="rounded-full text-xs md:text-sm" variant="secondary">
                  {job.employmentType}
                </Badge>
                <span className="hidden md:inline text-muted-foreground">•</span>
                <Badge className="rounded-full text-xs md:text-sm">{job.location}</Badge>
                <span className="hidden md:inline text-muted-foreground">•</span>
                <p className="text-muted-foreground whitespace-nowrap">
                  {formatCurrency(job.salaryFrom)} - {formatCurrency(job.salaryTo)}
                </p>
              </div>
            </div>

            <div className="md:ml-auto mt-2 md:mt-0">
              <div className="flex items-center gap-2">
                <MapPin className="size-4" />
                <h1 className="text-sm md:text-lg font-semibold whitespace-nowrap">
                  {job.location}
                </h1>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground md:text-right">
                {formatRelativeTime(job.createdAt)}
              </p>
            </div>
          </div>
          <div className="!mt-4">
            <p className="text-sm md:text-base text-muted-foreground line-clamp-2">
              {job.company.about}
            </p>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
