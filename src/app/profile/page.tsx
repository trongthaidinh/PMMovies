"use client";

import { useAuth } from "@/contexts/AuthContext";
import ProfileInfoForm from "@/components/profile/ProfileInfoForm";
import ChangePasswordForm from "@/components/profile/ChangePasswordForm";
import { useState } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function ProfilePage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("info");

  if (!user) {
    return null;
  }

  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-2xl px-4 py-8">
        <h1 className="mb-6 text-center text-2xl font-bold">Thông tin cá nhân</h1>

        <div className="w-full">
          <div className="mb-4 grid w-full grid-cols-2">
            <button
              onClick={() => setActiveTab("info")}
              className={`p-2 ${
                activeTab === "info"
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-500"
              }`}
            >
              Thông tin cá nhân
            </button>
            <button
              onClick={() => setActiveTab("password")}
              className={`p-2 ${
                activeTab === "password"
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-500"
              }`}
            >
              Đổi mật khẩu
            </button>
          </div>

          {activeTab === "info" && (
            <div className="rounded-lg border border-dark-1 bg-dark-1/30 p-8">
              <ProfileInfoForm user={user} />
            </div>
          )}
          {activeTab === "password" && (
            <div className="rounded-lg border border-dark-1 bg-dark-1/30 p-8">
              <ChangePasswordForm />
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
