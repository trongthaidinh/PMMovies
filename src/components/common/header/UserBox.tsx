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
        <div className="flex h-full max-w-[140px] cursor-pointer items-center justify-center rounded-lg border border-primary px-4 transition-colors duration-200 hover:bg-primary/10">
          <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap uppercase">
            USERNAME
          </p>
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
        <DropdownMenuItem>
          <Link href="/archived" className="block w-full border-none px-2 py-1">
            Archived
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
