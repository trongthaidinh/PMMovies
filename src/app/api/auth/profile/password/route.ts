import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { verifyToken, comparePasswords, hashPassword } from "@/lib/auth";
import { NextRequest } from "next/server";
import { responseJson } from "@/utils/response-json";

export async function PUT(req: NextRequest) {
  try {
    await connectDB();
    const token = req.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
      return new Response(
        JSON.stringify(
          responseJson({
            data: null,
            code: 401,
            message: "Không tìm thấy token xác thực",
          }),
        ),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return new Response(
        JSON.stringify(
          responseJson({
            data: null,
            code: 401,
            message: "Token không hợp lệ",
          }),
        ),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const { currentPassword, newPassword } = await req.json();
    const user = await User.findById(decoded.userId);

    if (!user) {
      return new Response(
        JSON.stringify(
          responseJson({
            data: null,
            code: 404,
            message: "Không tìm thấy người dùng",
          }),
        ),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const isValid = await comparePasswords(currentPassword, user.password);
    if (!isValid) {
      return new Response(
        JSON.stringify(
          responseJson({
            data: null,
            code: 400,
            message: "Mật khẩu hiện tại không đúng",
          }),
        ),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const hashedPassword = await hashPassword(newPassword);
    user.password = hashedPassword;
    await user.save();

    return new Response(
      JSON.stringify(
        responseJson({
          data: null,
          code: 200,
          message: "Đổi mật khẩu thành công",
        }),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Password change error:", error);
    return new Response(
      JSON.stringify(
        responseJson({
          data: null,
          code: 500,
          message: "Có lỗi xảy ra khi đổi mật khẩu",
        }),
      ),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
