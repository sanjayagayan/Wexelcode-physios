import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { getSession } from "next-auth/react";

// Define your base query with custom headers
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: async (headers, { getState }) => {
    
    const session: any = await getSession(); // Replace with your actual access token retrieval logic

    if (session?.accessToken) {
      headers.set("Authorization", `Bearer ${session?.accessToken}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});
//
export { baseQuery };
