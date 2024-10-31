import { axiosServer } from "@/config/axios";
import { responseJson } from "@/utils/response-json";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const keyword = searchParams.get("keyword") || "";
  const page = Number(searchParams.get("page")) || 1;

  const { data } = await axiosServer.get(`/tim-kiem`, {
    params: {
      keyword,
      page,
    },
  });

  return Response.json(responseJson(data));
}
