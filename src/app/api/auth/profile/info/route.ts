import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { verifyToken } from "@/lib/auth";
import { NextRequest } from "next/server";
import { responseJson } from "@/utils/response-json";
import { uploadImage } from "@/lib/upload";

export async function PUT(req: NextRequest) {
  try {
    await connectDB();
    const token = req.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
      return Response.json(
        responseJson({
          data: null,
          code: 401,
          message: "Không tìm thấy token",
        }),
      );
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return Response.json(
        responseJson({
          data: null,
          code: 401,
          message: "Token không hợp lệ",
        }),
      );
    }

    const formData = await req.formData();
    const username = formData.get("username") as string;
    const avatarFile = formData.get("avatar") as File | null;

    const user = await User.findById(decoded.userId);
    if (!user) {
      return Response.json(
        responseJson({
          data: null,
          code: 404,
          message: "Không tìm thấy người dùng",
        }),
      );
    }

    user.username = username;

    if (avatarFile) {
      try {
        const avatarUrl = await uploadImage(avatarFile);
        user.avatar = avatarUrl;
      } catch (uploadError) {
        console.error("Upload avatar error:", uploadError);
        return Response.json(
          responseJson({
            data: null,
            code: 500,
            message: "Có lỗi xảy ra khi tải lên ảnh đại diện",
          }),
        );
      }
    }

    await user.save();

    return Response.json(
      responseJson({
        data: {
          id: user._id,
          email: user.email,
          username: user.username,
          avatar: user.avatar,
        },
        code: 200,
        message: "Cập nhật thông tin thành công",
      }),
    );
  } catch (error) {
    console.error("Update profile error:", error);
    return Response.json(
      responseJson({
        data: null,
        code: 500,
        message: "Có lỗi xảy ra khi cập nhật thông tin",
      }),
    );
  }
}
