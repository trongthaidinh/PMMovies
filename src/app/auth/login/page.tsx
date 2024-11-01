"use client";

import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-var(--header-height))] max-w-md items-center px-4 py-8">
      <div className="w-full rounded-lg border border-dark-1 bg-dark-1/30 p-8 backdrop-blur">
        <h1 className="mb-6 text-center text-2xl font-bold">Đăng nhập</h1>
        <LoginForm />
        <p className="mt-4 text-center text-sm text-gray-400">
          Chưa có tài khoản?{" "}
          <Link href="/auth/register" className="text-primary hover:underline">
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  );
}
