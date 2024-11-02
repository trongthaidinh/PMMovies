import { axiosServer } from "@/config/axios";
import { responseJson } from "@/utils/response-json";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const country = searchParams.get("country") || "";
  const page = Number(searchParams.get("page")) || 1;
  const sort = searchParams.get("sort") || "";
  const type = searchParams.get("type") || "";
  const category = searchParams.get("category") || "";
  const year = searchParams.get("year") || "";

  const { data } = await axiosServer.get(`/quoc-gia/${country}`, {
    params: {
      page,
      sort,
      type,
      category,
      year,
    },
  });

  return Response.json(responseJson(data));
}
