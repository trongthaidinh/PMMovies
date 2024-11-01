"use client";

import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-var(--header-height))] max-w-md items-center px-4 py-8">
      <div className="w-full rounded-lg border border-dark-1 bg-dark-1/30 p-8 backdrop-blur">
        <h1 className="mb-6 text-center text-2xl font-bold">Đăng ký</h1>
        <RegisterForm />
        <p className="mt-4 text-center text-sm text-gray-400">
          Đã có tài khoản?{" "}
          <Link href="/auth/login" className="text-primary hover:underline">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
}
