"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { axiosClient } from "@/config/axios";
import toast from "react-hot-toast";
import { User } from "@/types/auth";

interface Props {
  user: User;
}

export default function ProfileInfoForm({ user }: Props) {
  const auth = useAuth();
  if (!auth) throw new Error("Auth context is undefined");
  const { setUser } = auth;
  const [formData, setFormData] = useState({
    username: user.username,
    avatar: user.avatar || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(user.avatar || "");

  useEffect(() => {
    setPreviewUrl(user.avatar || "");
  }, [user.avatar]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("username", formData.username || "");

    const fileInput = document.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;
    if (fileInput.files?.[0]) {
      formDataToSend.append("avatar", fileInput.files[0]);
    }

    try {
      setIsSubmitting(true);
      const response = await axiosClient.put(
        "/auth/profile/info",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (response.data.code === 200) {
        const updatedUser = response.data.data;
        setUser(updatedUser);
        setPreviewUrl(updatedUser.avatar || "");
        toast.success(response.data.message);
      } else {
        throw new Error(response.data.message);
      }
    } catch (err: any) {
      console.error("Update profile error:", err);
      toast.error(
        err.response?.data?.message || "Có lỗi xảy ra khi cập nhật thông tin",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative h-24 w-24">
          <img
            src={previewUrl || "/default-avatar.png"}
            alt="Avatar"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          id="avatar-input"
        />
        <label
          htmlFor="avatar-input"
          className="cursor-pointer rounded bg-primary px-4 py-2 text-sm hover:bg-primary/80"
        >
          Chọn ảnh
        </label>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Tên người dùng</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
          className="w-full rounded bg-dark-1 p-2"
          required
          minLength={3}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded bg-primary p-2 transition-colors hover:bg-primary/80 disabled:opacity-50"
      >
        {isSubmitting ? "Đang cập nhật..." : "Cập nhật"}
      </button>
    </form>
  );
}
