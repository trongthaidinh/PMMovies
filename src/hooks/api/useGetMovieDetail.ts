import { axiosClient } from "@/config/axios";
import { MovieDetailResponse } from "@/types/movie";
import { useQuery } from "@tanstack/react-query";

const useGetMovieDetail = (slug: string) => {
  const { data, status, isLoading } = useQuery({
    queryKey: ["movie_detail", slug],
    queryFn: async () => {
      try {
        if (!slug) return null;

        const { data } = await axiosClient.get<MovieDetailResponse>(
          `/get-movie-detail-by-slug/${slug}`,
        );

        return data;
      } catch (err) {
        throw new Error(err as any);
      }
    },
    enabled: !!slug,
  });

  return {
    data,
    status,
    isLoading,
  };
};

export default useGetMovieDetail;
