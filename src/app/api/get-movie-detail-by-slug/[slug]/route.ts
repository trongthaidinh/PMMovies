import { axiosServer } from "@/config/axios";
import { responseJson } from "@/utils/response-json";
import { NextRequest } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const { data } = await axiosServer.get(`/phim/${slug}`);
  return Response.json(responseJson(data));
}
