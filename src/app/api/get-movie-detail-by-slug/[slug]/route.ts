import { axiosServer } from "@/config/axios";
import { responseJson } from "@/utils/response-json";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;

  const { data } = await axiosServer.get(`/phim/${slug}`);

  return Response.json(responseJson(data));
}
