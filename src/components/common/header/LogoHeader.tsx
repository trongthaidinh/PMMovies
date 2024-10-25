import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

const LogoHeader = ({ className }: Props) => {
  return (
    <Link href="/" className={className}>
      {/* <Image src="" alt="logo" /> */}
      LOGO
    </Link>
  );
};

export default LogoHeader;
