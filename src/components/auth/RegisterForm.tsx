"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const auth = useAuth();
  if (!auth) throw new Error("Auth context is undefined");
  const { register } = auth;
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Mật khẩu không khớp");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await register(formData.email, formData.password, formData.username);
      
      // Lưu token sau khi đăng ký thành công
      localStorage.setItem("access_token", response.data.accessToken);
      localStorage.setItem("refresh_token", response.data.refreshToken);
      
      toast.success("Đăng ký thành công");
      router.push("/");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Có lỗi xảy ra khi đăng ký");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded bg-dark-1 p-2"
          required
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

      <div>
        <label className="mb-1 block text-sm font-medium">Mật khẩu</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full rounded bg-dark-1 p-2"
          required
          minLength={6}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Xác nhận mật khẩu</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full rounded bg-dark-1 p-2"
          required
          minLength={6}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded bg-primary p-2 transition-colors hover:bg-primary/80 disabled:opacity-50"
      >
        {isSubmitting ? "Đang đăng ký..." : "Đăng ký"}
      </button>
    </form>
  );
}
