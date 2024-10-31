"use client";

import MovieGrid from "@/components/MovieGrid";
import useSearchMovies from "@/hooks/api/useSearchMovies";

type Props = {
  keyword: string;
};

const SearchResults = ({ keyword }: Props) => {
  const { data, isLoading } = useSearchMovies({ keyword });
  const movies = data?.data || [];

  if (movies.length === 0) {
    return (
      <div className="text-center text-gray-400">
        Không tìm thấy kết quả nào cho &quot;{keyword}&quot;
      </div>
    );
  }

  return <MovieGrid list={movies} isLoading={isLoading} />;
};

export default SearchResults;
