"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

interface Props {
  onSubmit: (content: string) => Promise<void>;
  placeholder?: string;
}

export default function CommentForm({
  onSubmit,
  placeholder = "Viết bình luận...",
}: Props) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || isSubmitting) return;

    try {
      setIsSubmitting(true);
      await onSubmit(content);
      setContent("");
    } catch (error) {
      console.error("Submit comment error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="text-center text-sm text-gray-500">
        Vui lòng đăng nhập để bình luận
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg bg-dark-1 p-3 text-sm"
        rows={3}
      />
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded bg-primary px-4 py-2 text-sm disabled:opacity-50"
        >
          {isSubmitting ? "Đang gửi..." : "Gửi bình luận"}
        </button>
      </div>
    </form>
  );
}
