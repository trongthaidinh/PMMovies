"use client";

import MovieGrid from "@/components/MovieGrid";
import { useBookmark } from "@/hooks/api/useBookmark";

export default function FavouritesPage() {
  const { bookmarks, isLoading } = useBookmark();

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <div className="aspect-[2/3] animate-pulse rounded-lg bg-dark-1" />
            <div className="space-y-2">
              <div className="h-5 w-3/4 animate-pulse rounded bg-dark-1" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-dark-1" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="container py-[calc(var(--header-height))]">
      <h1 className="mb-8 text-2xl font-bold">Phim yêu thích</h1>

      {bookmarks.length === 0 ? (
        <div className="text-center text-gray-400">
          Chưa có phim nào được lưu
        </div>
      ) : (
        <MovieGrid list={bookmarks} isLoading={false} />
      )}
    </div>
  );
}
