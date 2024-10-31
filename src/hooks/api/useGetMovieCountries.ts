import { axiosClient } from "@/config/axios";
import { IResponseJson } from "@/utils/response-json";
import { useQuery } from "@tanstack/react-query";

const useGetMovieCountries = () => {
  const { data, status } = useQuery({
    queryKey: ["movie_countries"],
    queryFn: async () => {
      try {
        const { data, status } =
          await axiosClient.get<IResponseJson<any>>("/countries");

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

export default useGetMovieCountries;
