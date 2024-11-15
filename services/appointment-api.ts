// Import necessary modules and functions
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base"; // Assuming 'base' is your custom base query

// Create a Redux Toolkit Query API using createApi
export const appointmentApi = createApi({
  reducerPath: "appointmentApi", // Name of the reducer path for this API slice
  baseQuery: baseQuery, // Custom base query for making HTTP requests
  tagTypes: ["APPOINTMENT"],
  endpoints: (builder) => ({

    createAppointment: builder.mutation({
      query: ({ userId, body }) => ({
        url: `/users/${userId}/appointments`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["APPOINTMENT"],
    }),
  }),
});

// Export the generated query hooks for the defined endpoints
export const {
  useCreateAppointmentMutation
} = appointmentApi;
