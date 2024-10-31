"use client";

import MovieGrid from "@/components/MovieGrid";
import useSearchMovies from "@/hooks/api/useSearchMovies";

type Props = {
  keyword: string;
};

const SearchResults = ({ keyword }: Props) => {
  const { data, isLoading } = useSearchMovies({ keyword });
  const movies = data?.data || [];

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

  if (!isLoading && movies.length === 0) {
    return (
      <div className="text-center text-gray-400">
        Không tìm thấy kết quả nào cho &quot;{keyword}&quot;
      </div>
    );
  }

  return <MovieGrid list={movies} isLoading={isLoading} />;
};

export default SearchResults;
