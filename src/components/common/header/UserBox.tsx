"use client";

import { useAuth } from "@/contexts/AuthContext";
import { LogOut, User, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const UserBox = () => {
  const { user, logout } = useAuth();

  return (
    <div className="group relative">
      <div className="flex cursor-pointer items-center gap-2">
        <div className="relative size-8 overflow-hidden rounded-full bg-dark-1">
          {user?.avatar ? (
            <Image
              src={user.avatar}
              alt="Avatar"
              fill
              className="object-cover"
              sizes="32px"
            />
          ) : (
            <User className="size-full p-1.5" />
          )}
        </div>
        <span className="hidden text-sm lg:block">{user?.username}</span>
      </div>

      <div className="absolute right-0 top-full hidden pt-2 group-hover:block">
        <div className="min-w-[200px] overflow-hidden rounded-lg bg-dark-1 shadow-lg">
          <Link
            href="/profile"
            className="hover:bg-dark-2 flex items-center gap-2 px-4 py-2 transition-colors"
          >
            <User className="size-4" />
            Thông tin cá nhân
          </Link>
          <Link
            href="/favourites"
            className="hover:bg-dark-2 flex items-center gap-2 px-4 py-2 transition-colors"
          >
            <Heart className="size-4" />
            Phim yêu thích
          </Link>
          <button
            onClick={logout}
            className="hover:bg-dark-2 flex w-full items-center gap-2 px-4 py-2 text-red-500 transition-colors"
          >
            <LogOut className="size-4" />
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserBox;
