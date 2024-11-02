"use client";

import { useState } from "react";
import { axiosClient } from "@/config/axios";
import { toast } from "react-hot-toast";

export default function ChangePasswordForm() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Mật khẩu mới không khớp");
      return;
    }

    try {
      setIsSubmitting(true);

      const token = localStorage.getItem("access_token");
      if (!token) {
        toast.error("Vui lòng đăng nhập lại");
        return;
      }

      const response = await axiosClient.put(
        "/auth/profile/password",
        {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.data.code === 200) {
        toast.success(response.data.message || "Đổi mật khẩu thành công");
        setFormData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        toast.error(response.data.message || "Có lỗi xảy ra khi đổi mật khẩu");
      }
    } catch (error: any) {
      console.error("Change password error:", error);
      toast.error(
        error.response?.data?.message || "Có lỗi xảy ra khi đổi mật khẩu",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium">
          Mật khẩu hiện tại
        </label>
        <input
          type="password"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
          className="w-full rounded bg-dark-1 p-2"
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Mật khẩu mới</label>
        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          className="w-full rounded bg-dark-1 p-2"
          required
          minLength={6}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Xác nhận mật khẩu mới
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full rounded bg-dark-1 p-2"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded bg-primary p-2 transition-colors hover:bg-primary/80 disabled:opacity-50"
      >
        {isSubmitting ? "Đang cập nhật..." : "Đổi mật khẩu"}
      </button>
    </form>
  );
}
