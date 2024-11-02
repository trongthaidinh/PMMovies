import { verifyToken, generateTokens } from "@/lib/auth";
import { responseJson } from "@/utils/response-json";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { refreshToken } = await req.json();

    if (!refreshToken) {
      return Response.json(
        responseJson({
          data: null,
          code: 401,
          message: "Refresh token không tồn tại",
        }),
      );
    }

    const decoded = verifyToken(refreshToken);
    if (!decoded) {
      return Response.json(
        responseJson({
          data: null,
          code: 401,
          message: "Refresh token không hợp lệ",
        }),
      );
    }

    const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
      generateTokens(decoded.userId);

    return Response.json(
      responseJson({
        data: {
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        },
        code: 200,
        message: "Token đã được làm mới",
      }),
    );
  } catch {
    return Response.json(
      responseJson({
        data: null,
        code: 500,
        message: "Có lỗi xảy ra khi làm mới token",
      }),
    );
  }
}
