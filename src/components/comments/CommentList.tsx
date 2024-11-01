"use client";

import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import { UserCircle2 } from "lucide-react";
import { Comment } from "@/types/comment";
import Image from "next/image";

interface Props {
  comments: Comment[];
  isLoading: boolean;
}

export default function CommentList({ comments, isLoading }: Props) {
  const commentArray = Object.values(comments || {});

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-dark-1" />
              <div className="space-y-2">
                <div className="h-4 w-24 rounded bg-dark-1" />
                <div className="h-3 w-16 rounded bg-dark-1" />
              </div>
            </div>
            <div className="ml-12 h-16 rounded bg-dark-1" />
          </div>
        ))}
      </div>
    );
  }

  if (!commentArray || commentArray.length === 0) {
    return (
      <div className="rounded-lg border border-dark-1 p-6 text-center text-gray-500">
        Hãy là người đầu tiên bình luận
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {commentArray.map((comment) => (
        <div key={comment._id} className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="shrink-0">
              {comment.user.avatar ? (
                <div className="relative size-10 overflow-hidden rounded-full">
                  <Image
                    src={comment.user.avatar || "/default-avatar.png"}
                    alt={comment.user.username}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              ) : (
                <UserCircle2 className="size-10 text-gray-400" />
              )}
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{comment.user.username}</span>
                <span className="text-sm text-gray-500">
                  {formatDistanceToNow(new Date(comment.createdAt), {
                    addSuffix: true,
                    locale: vi,
                  })}
                </span>
              </div>
              <div className="rounded-lg bg-dark-1 p-4">
                <p className="text-sm leading-relaxed">{comment.content}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
