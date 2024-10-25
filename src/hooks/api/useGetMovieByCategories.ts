import { axiosClient } from "@/config/axios";
import { IResponseJson } from "@/utils/response-json";
import { useQuery } from "@tanstack/react-query";

type Params = {
  page?: number;
};

const useGetMovieByCategories = (slug: string, params?: Params) => {
  const { page = 1 } = params || {};

  const { data, status } = useQuery({
    queryKey: ["movie_by_categories", slug, page],
    queryFn: async () => {
      try {
        const { data, status } = await axiosClient.get<IResponseJson<any>>(
          `/get-movies-by-categories/${slug}`,
          {
            params: {
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
  });
  return {
    data,
    status,
  };
};

export default useGetMovieByCategories;
