import { axiosServer } from "@/config/axios";
import { responseJson } from "@/utils/response-json";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const category = searchParams.get("category") || "";
  const page = Number(searchParams.get("page")) || 1;
  const sort = searchParams.get("sort") || "";
  const type = searchParams.get("type") || "";
  const country = searchParams.get("country") || "";
  const year = searchParams.get("year") || "";

  const { data } = await axiosServer.get(`/the-loai/${category}`, {
    params: {
      page,
      sort,
      type,
      country,
      year,
    },
  });

  return Response.json(responseJson(data));
}
