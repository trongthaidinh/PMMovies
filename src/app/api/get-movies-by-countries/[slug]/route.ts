import { axiosServer } from "@/config/axios";
import { responseJson } from "@/utils/response-json";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
  const { slug } = params;
  const page = Number(req.nextUrl.searchParams.get("page"));

  const { data } = await axiosServer.get(`/quoc-gia/${slug}?page=${page}`);

  return Response.json(responseJson(data));
}
