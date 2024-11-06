"use client";

import MovieGrid from "@/components/MovieGrid";
import { useGetMovieByParams } from "@/hooks/api/useGetMovieByParams";
import { useRouter, useSearchParams } from "next/navigation";
import MovieFilter from "./_components/MovieFilter";
import { useCallback } from "react";

export default function CategoryPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = {
    category: searchParams?.get("category") || "",
    page: Number(searchParams?.get("page")) || 1,
    sort: searchParams?.get("sort") || "",
    type: searchParams?.get("type") || "",
    country: searchParams?.get("country") || "",
    year: searchParams?.get("year") || "",
  };

  const { data, isLoading, status } = useGetMovieByParams({
    params,
    path: `get-movies-by-categories`,
  });

  const handleFilterChange = useCallback(
    (newFilters: any) => {
      const params = new URLSearchParams(searchParams?.toString());
      Object.entries(newFilters).forEach(([key, value]) => {
        if (value) {
          params.set(key, String(value));
        } else {
          params.delete(key);
        }
      });
      params.set("page", "1");
      router.push(`/the-loai?${params.toString()}`);
    },
    [router, searchParams],
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      const params = new URLSearchParams(searchParams?.toString());
      params.set("page", String(newPage));
      router.push(`/the-loai?${params.toString()}`);
    },
    [router, searchParams],
  );

  if (status === "error") {
    return <div>Có lỗi xảy ra khi tải dữ liệu</div>;
  }

  return (
    <div className="container py-10">
      <h1 className="mb-6 text-2xl font-bold capitalize">
        Phim thể loại: {params.category.replace(/-/g, " ")}
      </h1>

      <MovieFilter
        currentCategory={params.category}
        onFilterChange={handleFilterChange}
      />

      <MovieGrid
        list={data?.data || []}
        isLoading={isLoading}
        pagination={{
          currentPage: params.page,
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
