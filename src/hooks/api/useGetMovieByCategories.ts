/* eslint-disable react-hooks/rules-of-hooks */
import { axiosClient } from "@/config/axios";
import { IResponseJson } from "@/utils/response-json";
import { useQuery } from "@tanstack/react-query";

type Params = {
  page?: number;
};

type Props = {
  slug: string;
  params?: Params;
  path?: string;
};

const useGetMovieByCategories = ({
  slug,
  params,
  path = "get-movies-by-categories",
}: Props) => {
  const { page = 1 } = params || {};

  const { data, status, isFetching, isLoading, isRefetching } = useQuery({
    queryKey: [path, slug, page],
    queryFn: async () => {
      try {
        if (!slug) return {};

        const { data, status } = await axiosClient.get<IResponseJson<any>>(
          `/${path}/${slug}`,
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
    isLoading: isFetching || isLoading || isRefetching,
  };
};

export default useGetMovieByCategories;
