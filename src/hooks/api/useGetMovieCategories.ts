import { axiosClient } from "@/config/axios";
import { IResponseJson } from "@/utils/response-json";
import { useQuery } from "@tanstack/react-query";

const useGetMovieCategories = () => {
  const { data, status } = useQuery({
    queryKey: ["movie_categories"],
    queryFn: async () => {
      try {
        const { data, status } =
          await axiosClient.get<IResponseJson<any>>("/categories");

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

export default useGetMovieCategories;
