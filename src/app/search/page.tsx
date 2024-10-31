"use client";

import { useSearchParams } from "next/navigation";
import SearchResults from "./_components/SearchResults";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams?.get("keyword") || "";

  return (
    <div className="container py-[calc(var(--header-height))]">
      <h1 className="mb-8 text-2xl font-bold">
        Kết quả tìm kiếm cho: {keyword}
      </h1>
      <SearchResults keyword={keyword} />
    </div>
  );
}
