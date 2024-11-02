import { notFound } from "next/navigation";
import TypePageClient from "./_components/TypePageClient";
import { use } from "react";

const VALID_TYPES = {
  "phim-le": "Phim lẻ mới cập nhật",
  "phim-bo": "Phim bộ mới cập nhật",
  "phim-sap-chieu": "Phim sắp chiếu",
  "hoat-hinh": "Phim hoạt hình mới cập nhật",
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function TypePage({ params }: Props) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  if (!VALID_TYPES[slug as keyof typeof VALID_TYPES]) {
    notFound();
  }

  return (
    <TypePageClient
      type={slug}
      title={VALID_TYPES[slug as keyof typeof VALID_TYPES]}
    />
  );
}

export function generateStaticParams() {
  return Object.keys(VALID_TYPES).map((slug) => ({
    slug,
  }));
}
