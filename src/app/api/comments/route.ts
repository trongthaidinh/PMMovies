import { connectDB } from "@/lib/db";
import { Comment } from "@/models/Comment";
import { verifyToken } from "@/lib/auth";
import { NextRequest } from "next/server";
import { responseJson } from "@/utils/response-json";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const searchParams = req.nextUrl.searchParams;
    const movieSlug = searchParams.get("movieSlug");

    const comments = await Comment.find({ movieSlug })
      .populate("user", "username avatar")
      .sort({ createdAt: -1 });

    return Response.json(
      responseJson({
        data: comments,
        code: 200,
        message: "Lấy danh sách bình luận thành công",
      }),
    );
  } catch (error) {
    console.error("Get comments error:", error);
    return Response.json(
      responseJson({
        data: null,
        code: 500,
        message: "Có lỗi xảy ra khi lấy bình luận",
      }),
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const token = req.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
      return Response.json(
        responseJson({
          data: null,
          code: 401,
          message: "Vui lòng đăng nhập để bình luận",
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

    const { movieSlug, content, parentId } = await req.json();

    const comment = await Comment.create({
      user: decoded.userId,
      movieSlug,
      content,
      parentId,
    });

    const populatedComment = await Comment.findById(comment._id).populate(
      "user",
      "username avatar",
    );

    return Response.json(
      responseJson({
        data: populatedComment,
        code: 200,
        message: "Bình luận thành công",
      }),
    );
  } catch (error) {
    console.error("Create comment error:", error);
    return Response.json(
      responseJson({
        data: null,
        code: 500,
        message: "Có lỗi xảy ra khi tạo bình luận",
      }),
    );
  }
}
