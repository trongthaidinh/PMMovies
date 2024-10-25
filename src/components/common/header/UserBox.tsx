"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserBox = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-full">
        <div className="hover:bg-primary/10 flex h-full max-w-[140px] cursor-pointer items-center justify-center rounded-lg border border-primary px-4 transition-colors duration-200">
          <p className="line-clamp-1 w-full uppercase">USERNAME</p>
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[200px] rounded-lg bg-dark-1 !outline-none"
        align="end"
      >
        <DropdownMenuItem>
          <Link href="/profile" className="block w-full border-none px-2 py-1">
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/logout" className="block w-full border-none px-2 py-1">
            Logout
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserBox;
