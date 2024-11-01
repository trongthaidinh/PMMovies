import useSWR from "swr";
import { axiosClient } from "@/config/axios";
import { Comment } from "@/types/comment";

interface CommentResponse {
  data: {
    [key: string]: Comment;
  };
  code: number;
  message: string;
}

export const useComments = (movieSlug: string) => {
  const { data, error, mutate } = useSWR<CommentResponse>(
    `/comments?movieSlug=${movieSlug}`,
    async (url: string) => {
      const response = await axiosClient.get(url);
      return response.data;
    },
  );

  const addComment = async (content: string, parentId?: string) => {
    try {
      const response = await axiosClient.post<{ data: Comment }>("/comments", {
        movieSlug,
        content,
        parentId,
      });
      mutate();
      return response.data;
    } catch (err: any) {
      throw err;
    }
  };

  return {
    comments: data?.data ? Object.values(data.data) : [],
    isLoading: !error && !data,
    isError: error,
    addComment,
  };
};
