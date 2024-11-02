import { axiosClient } from "@/config/axios";
import { IResponseJson } from "@/utils/response-json";
import { useQuery } from "@tanstack/react-query";

type Props = {
  keyword: string;
  page?: number;
};

const useSearchMovies = ({ keyword, page = 1 }: Props) => {
  const { data, status, isFetching, isLoading, isRefetching } = useQuery({
    queryKey: ["search_movies", keyword, page],
    queryFn: async () => {
      try {
        if (!keyword) return {};

        const { data, status } = await axiosClient.get<IResponseJson<any>>(
          "/search-movies",
          {
            params: {
              keyword,
              page,
            },
          },
        );

        return {
          data: data?.data?.items,
          status,
        };
      } catch (err) {
        throw new Error(err as any);
      }
    },
    enabled: !!keyword,
  });

  return {
    data,
    status,
    isLoading: isFetching || isLoading || isRefetching,
  };
};

export default useSearchMovies;
