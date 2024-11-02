"use client";

import Link from "next/link";

type Props = {
  isMobile?: boolean;
};

const AuthButtons = ({ isMobile }: Props) => {
  if (isMobile) {
    return (
      <Link
        href="/auth/login"
        className="rounded-lg bg-primary px-2 py-2 text-sm transition-colors hover:bg-primary/80"
      >
        Sign in
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Link
        href="/auth/login"
        className="text-sm transition-colors hover:text-primary"
      >
        Đăng nhập
      </Link>
      <Link
        href="/auth/register"
        className="rounded-lg bg-primary px-4 py-2 text-sm transition-colors hover:bg-primary/80"
      >
        Đăng ký
      </Link>
    </div>
  );
};

export default AuthButtons;
