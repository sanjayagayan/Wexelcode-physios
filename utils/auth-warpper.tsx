"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthWrapper({ children }: any) {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    return children;
  } else if (status === "unauthenticated") {
    router.push("/signin");
  }
}
