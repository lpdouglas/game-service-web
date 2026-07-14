"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type LoginoutButtonProps = {
  className?: string;
};

export function LoginoutButton({ className }: LoginoutButtonProps) {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(user));

  useEffect(() => {
    setIsLoggedIn(Boolean(user));
  }, [user]);

  const handleClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      router.refresh();
      router.push("/logout");
      return;
    }

    router.push("/login");
  };

  return (
    <div className={cn("absolute top-4 right-4 p-6", className)}>
      <Button onClick={handleClick} className={isLoggedIn ? "bg-chart-3" : undefined}>
        {isLoggedIn ? "Logout" : "Login"}
      </Button>
    </div>
  );
}