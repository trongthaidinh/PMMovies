import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { hashPassword, generateTokens } from "@/lib/auth";
import { NextRequest } from "next/server";
import { responseJson } from "@/utils/response-json";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { email, password, username } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ error: "Email đã được sử dụng" }, { status: 400 });
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    const token = generateTokens(user._id.toString());

    return Response.json(
      responseJson({
        data: {
          user: {
            id: user._id,
            email: user.email,
            username: user.username,
          },
          token,
        },
        code: 200,
        message: "Đăng ký thành công",
      }),
    );
  } catch (error) {
    console.error("Registration error:", error);
    return Response.json(
      { error: "Có lỗi xảy ra khi đăng ký" },
      { status: 500 },
    );
  }
}
