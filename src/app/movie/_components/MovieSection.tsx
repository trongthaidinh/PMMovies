"use client";

import MovieSwiper from "@/components/MovieSwiper";
import useGetMovieByCategories from "@/hooks/api/useGetMovieByCategories";

type Props = {
  slug: string;
  path?: string;
};

const MovieSection = ({ slug, path }: Props) => {
  const { data: list } = useGetMovieByCategories({ slug, path });

  return (
    <div className="mt-8">
      <MovieSwiper list={list?.data} />
    </div>
  );
};

export default MovieSection;
