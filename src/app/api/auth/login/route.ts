import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { comparePasswords, generateTokens } from "@/lib/auth";
import { NextRequest } from "next/server";
import { responseJson } from "@/utils/response-json";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return Response.json(
        responseJson({
          data: null,
          code: 400,
          message: "Vui lòng điền đầy đủ thông tin",
        }),
      );
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return Response.json(
        responseJson({
          data: null,
          code: 400,
          message: "Email không tồn tại",
        }),
      );
    }

    // Verify password
    const isValid = await comparePasswords(password, user.password);
    if (!isValid) {
      return Response.json(
        responseJson({
          data: null,
          code: 400,
          message: "Mật khẩu không đúng",
        }),
      );
    }

    // Generate tokens
    const { accessToken, refreshToken } = generateTokens(user._id.toString());

    return Response.json(
      responseJson({
        data: {
          user: {
            id: user._id,
            email: user.email,
            username: user.username,
            avatar: user.avatar,
          },
          accessToken,
          refreshToken,
        },
        code: 200,
        message: "Đăng nhập thành công",
      }),
    );
  } catch (error) {
    console.error("Login error:", error);
    return Response.json(
      responseJson({
        data: null,
        code: 500,
        message: "Có lỗi xảy ra khi đăng nhập",
      }),
    );
  }
}
