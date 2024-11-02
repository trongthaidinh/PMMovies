"use client";

import { use } from "react";
import CountryPageClient from "../_components/CountryPageClient";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function CountryPage({ params }: Props) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  return (
    <div className="container py-[calc(var(--header-height))]">
      <CountryPageClient slug={slug} />
    </div>
  );
}
