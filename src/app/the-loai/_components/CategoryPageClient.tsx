"use client";

import MovieGrid from "@/components/MovieGrid";
import { useCallback, useState } from "react";
import MovieFilter from "./MovieFilter";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetMovieByParams } from "@/hooks/api/useGetMovieByParams";

interface Props {
  slug: string;
}

export default function CategoryPageClient({ slug }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    category: slug,
    page: Number(searchParams?.get("page")) || 1,
    sort: searchParams?.get("sort") || "",
    type: searchParams?.get("type") || "",
    country: searchParams?.get("country") || "",
    year: searchParams?.get("year") || "",
  });

  const { data, isLoading, status } = useGetMovieByParams({
    params: filters,
    path: "get-movies-by-categories",
  });

  const handleFilterChange = useCallback(
    (newFilters: any) => {
      setFilters((prev) => ({
        ...prev,
        ...newFilters,
        page: 1,
      }));

      const params = new URLSearchParams();
      Object.entries(newFilters).forEach(([key, value]) => {
        if (value && key !== "category") {
          params.set(key, String(value));
        }
      });
      params.set("page", "1");
      router.push(`/the-loai/${slug}?${params.toString()}`);
    },
    [router, slug],
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      setFilters((prev) => ({
        ...prev,
        page: newPage,
      }));

      const params = new URLSearchParams(searchParams?.toString());
      params.set("page", String(newPage));
      router.push(`/the-loai/${slug}?${params.toString()}`);
    },
    [router, searchParams, slug],
  );

  if (status === "error") {
    return <div>Có lỗi xảy ra khi tải dữ liệu</div>;
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold capitalize">
        Phim thể loại: {data?.data[0]?.category[0]?.name}
      </h1>
      <MovieFilter onFilterChange={handleFilterChange} currentCategory={slug} />

      <MovieGrid
        list={data?.data || []}
        isLoading={isLoading}
        pagination={{
          currentPage: filters.page,
          totalPages: Math.ceil(
            (data?.pagination?.totalItems || 0) /
              (data?.pagination?.totalItemsPerPage || 24),
          ),
          onPageChange: handlePageChange,
        }}
      />
    </div>
  );
}
