import { Metadata } from "next";
import AuthWrapper from "utils/auth-warpper";
import { ReactNode } from "react";
import { Barlow } from "next/font/google";
import {UserLayout } from "@/components/layout/UserLayout";

const title = "WexelCode";
const description =
  "This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.";

export const metadata: Metadata = {
  title,
  description,
};

type AuthLayoutProps = {
  children: ReactNode;
};
const barlow = Barlow({ weight: "400", subsets: ["latin"] });
export default async function Layout({ children }: Readonly<AuthLayoutProps>) {
  return (
    <div className={barlow.className}>
      <AuthWrapper>
        <UserLayout>{children}</UserLayout>
      </AuthWrapper>
    </div>
  );
}




