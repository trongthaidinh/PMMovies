import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { verifyToken } from "@/lib/auth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const token = req.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
      return Response.json({ error: "Không tìm thấy token" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return Response.json({ error: "Token không hợp lệ" }, { status: 401 });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return Response.json(
        { error: "Không tìm thấy người dùng" },
        { status: 404 },
      );
    }

    return Response.json({
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error("Auth error:", error);
    return Response.json(
      { error: "Có lỗi xảy ra khi xác thực" },
      { status: 500 },
    );
  }
}
