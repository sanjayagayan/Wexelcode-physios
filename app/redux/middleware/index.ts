"use client";

import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { signOut } from "next-auth/react";
import { toast } from "react-toastify";

/**
 * Middleware to log and handle rejected actions from RTK Query
 */
const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    // Check if the action is rejected with a value
    if (isRejectedWithValue(action)) {
      const status = (action?.payload as any).status;
      if (status === 401) {
        toast.error("Session expired");
        signOut();
      }
    }
    return next(action);
  };
//
export default rtkQueryErrorLogger;
