import { axiosServer } from "@/config/axios";
import { responseJson } from "@/utils/response-json";

export async function GET() {
  const { data } = await axiosServer.get("/the-loai");

  return Response.json(responseJson(data));
}
