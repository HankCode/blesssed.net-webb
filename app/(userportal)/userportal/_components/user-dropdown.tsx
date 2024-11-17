"use client";

import { createClient } from "@/utils/supabase/client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { User2, ChevronUp } from "lucide-react";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";

const UserDropdown = () => {
  const supabase = createClient();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton>
          <User2 /> Username
          <ChevronUp className="ml-auto" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
        <DropdownMenuItem onSelect={() => navigateTo("/userportal/account")}>
          <span>Account</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Billing</span>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={handleLogout}>
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
