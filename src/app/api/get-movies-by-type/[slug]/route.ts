import { axiosServer } from "@/config/axios";
import { responseJson } from "@/utils/response-json";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
  const { slug } = params;
  const searchParams = req.nextUrl.searchParams;
  const page = Number(searchParams.get("page")) || 1;
  const sort = searchParams.get("sort") || "";
  const type = searchParams.get("type") || "";
  const category = searchParams.get("category") || "";
  const country = searchParams.get("country") || "";
  const year = searchParams.get("year") || "";

  const { data } = await axiosServer.get(`/danh-sach/${slug}`, {
    params: {
      page,
      sort,
      type,
      category,
      country,
      year,
    },
  });

  return Response.json(responseJson(data));
}
