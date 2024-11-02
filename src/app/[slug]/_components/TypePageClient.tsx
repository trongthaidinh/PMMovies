"use client";

import MovieGrid from "@/components/MovieGrid";
import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetMovieByParams } from "@/hooks/api/useGetMovieByParams";
import MovieFilter from "./MovieFilter";

interface Props {
  type: string;
  title: string;
}

export default function TypePageClient({ type, title }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    page: Number(searchParams?.get("page")) || 1,
    sort: searchParams?.get("sort") || "",
    category: searchParams?.get("category") || "",
    country: searchParams?.get("country") || "",
    year: searchParams?.get("year") || "",
  });

  const { data, isLoading, status } = useGetMovieByParams({
    params: filters,
    path: `get-movies-by-type/${type}`,
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
        if (value) {
          params.set(key, String(value));
        }
      });
      params.set("page", "1");
      router.push(`/${type}?${params.toString()}`);
    },
    [router, type],
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      setFilters((prev) => ({
        ...prev,
        page: newPage,
      }));

      const params = new URLSearchParams(searchParams?.toString());
      params.set("page", String(newPage));
      router.push(`/${type}?${params.toString()}`);
    },
    [router, searchParams, type],
  );

  if (status === "error") {
    return <div>Có lỗi xảy ra khi tải dữ liệu</div>;
  }

  return (
    <div className="container py-[calc(var(--header-height))]">
      <h1 className="mb-6 text-2xl font-bold capitalize">{title}</h1>

      <MovieFilter onFilterChange={handleFilterChange} />

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
