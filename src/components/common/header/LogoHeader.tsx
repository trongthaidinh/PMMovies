import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

const LogoHeader = ({ className }: Props) => {
  return (
    <Link href="/" className={className}>
      <Image
        src="/images/logo.png"
        alt="logo"
        width={60}
        height={60}
        priority
      />
    </Link>
  );
};

export default LogoHeader;
