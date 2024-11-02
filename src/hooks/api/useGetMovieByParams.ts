import { axiosClient } from "@/config/axios";
import { IResponseJson } from "@/utils/response-json";
import { useQuery } from "@tanstack/react-query";

type Props = {
  params: {
    category?: string;
    page?: number;
    sort?: string;
    type?: string;
    country?: string;
    year?: string;
  };
  path: string;
};

export const useGetMovieByParams = ({ params, path }: Props) => {
  const queryParams = new URLSearchParams(
    Object.fromEntries(
      Object.entries(params)
        .filter(([, value]) => value !== undefined && value !== "")
        .map(([key, value]) => [key, String(value)]),
    ),
  ).toString();

  const { data, status, isFetching, isLoading, isRefetching } = useQuery({
    queryKey: [path, queryParams],
    queryFn: async () => {
      try {
        const { data, status } = await axiosClient.get<IResponseJson<any>>(
          `/${path}?${queryParams}`,
        );

        const pagination = data?.data?.params?.pagination;
        const totalPages = pagination
          ? Math.ceil(pagination.totalItems / pagination.totalItemsPerPage)
          : 1;

        return {
          data: data?.data?.items,
          pagination: {
            currentPage: pagination?.currentPage || 1,
            totalPages,
            totalItems: pagination?.totalItems || 0,
            totalItemsPerPage: pagination?.totalItemsPerPage || 24,
          },
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
