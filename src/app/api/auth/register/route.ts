import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { hashPassword, generateTokens } from "@/lib/auth";
import { NextRequest } from "next/server";
import { responseJson } from "@/utils/response-json";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { email, password, username } = await req.json();

    // Validate input
    if (!email || !password || !username) {
      return Response.json(
        responseJson({
          data: null,
          code: 400,
          message: "Vui lòng điền đầy đủ thông tin",
        }),
      );
    }

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json(
        responseJson({
          data: null,
          code: 400,
          message: "Email đã được sử dụng",
        }),
      );
    }

    // Hash password and create user
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    // Generate tokens
    const { accessToken, refreshToken } = generateTokens(user._id.toString());

    return Response.json(
      responseJson({
        data: {
          user: {
            id: user._id,
            email: user.email,
            username: user.username,
          },
          accessToken,
          refreshToken,
        },
        code: 200,
        message: "Đăng ký thành công",
      }),
    );
  } catch (error) {
    console.error("Registration error:", error);
    return Response.json(
      responseJson({
        data: null,
        code: 500,
        message: "Có lỗi xảy ra khi đăng ký",
      }),
    );
  }
}
