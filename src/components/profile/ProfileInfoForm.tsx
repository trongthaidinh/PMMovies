"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { axiosClient } from "@/config/axios";
import Image from "next/image";
import toast from "react-hot-toast";

interface Props {
  user: {
    id: string;
    email: string;
    username: string;
    avatar?: string;
  };
}

export default function ProfileInfoForm({ user }: Props) {
  const { setUser } = useAuth();
  const [formData, setFormData] = useState({
    username: user.username,
    avatar: user.avatar || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(user.avatar || "");

  useEffect(() => {
    setPreviewUrl(user.avatar || "");
  }, [user.avatar]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
    formDataToSend.append("username", formData.username);

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
        setUser(response.data.data);
        toast.success(response.data.message);
      }
    } catch (err: any) {
      toast.error(
        err.response?.data?.message || "Có lỗi xảy ra khi cập nhật thông tin",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col items-center gap-4">
        <div className="relative size-24">
          <Image
            src={previewUrl || "/default-avatar.png"}
            alt="Avatar"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full cursor-pointer rounded bg-dark-1 p-2 text-sm"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Email</label>
        <input
          type="email"
          value={user.email}
          disabled
          className="bg-dark-2 w-full rounded p-2 opacity-70"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Tên người dùng</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
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
        {isSubmitting ? "Đang cập nhật..." : "Cập nhật thông tin"}
      </button>
    </form>
  );
}
