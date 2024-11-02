"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useBookmark } from "@/hooks/api/useBookmark";
import MovieGrid from "@/components/MovieGrid";

function FavouritesContent() {
  const searchParams = useSearchParams();
  const { bookmarks, isLoading } = useBookmark();
  const page = Number(searchParams?.get("page")) || 1;
  const itemsPerPage = 24;

  const paginatedBookmarks = bookmarks.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  return (
    <div className="container py-[calc(var(--header-height))]">
      <h1 className="mb-8 text-2xl font-bold">Phim yêu thích</h1>
      <MovieGrid
        list={paginatedBookmarks}
        isLoading={isLoading}
        pagination={{
          currentPage: page,
          totalPages: Math.ceil(bookmarks.length / itemsPerPage),
          onPageChange: (newPage) => {
            const url = new URL(window.location.href);
            url.searchParams.set("page", String(newPage));
            window.history.pushState({}, "", url);
          },
        }}
      />
    </div>
  );
}

export default function FavouritesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FavouritesContent />
    </Suspense>
  );
}
