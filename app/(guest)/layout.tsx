"use client";

import { ReactNode } from "react";
import { Barlow } from "next/font/google";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};
const barlow = Barlow({ weight: "400", subsets: ["latin"] });
export default function Layout({ children }: Readonly<Props>) {
  const { status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    router.push("/dashboard");
  } else if (status === "unauthenticated") {
    return <div className={barlow.className}>{children}</div>;
  }
}


