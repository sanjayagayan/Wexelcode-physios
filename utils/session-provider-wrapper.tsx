"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import ENVIRONMENT from "@/config/environment";

type SessionProviderProps = {
  children: ReactNode;
};

export const SessionProviderWrapper = ({ children }: SessionProviderProps) => {
  return (
    <SessionProvider
      refetchOnWindowFocus
      refetchInterval={+ENVIRONMENT.SESSION_REFRESH_TIME}
    >
      {children}
    </SessionProvider>
  );
};
//
