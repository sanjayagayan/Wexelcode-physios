"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
//import rtkQueryErrorLogger from "./middleware";
import { appointmentApi } from "services/appointment-api";
import rtkQueryErrorLogger from "./middleware";

// Combine all the reducers into one root reducer
const rootReducers = combineReducers({
  [appointmentApi.reducerPath]: appointmentApi.reducer,
});

// Define custom middlewares for the store
const apiMiddlewares = [
  appointmentApi.middleware,
]; // Middleware for Redux Toolkit Query
//const customMiddleWares = [rtkQueryErrorLogger]; // Custom middleware for handling errors

// Create the Redux store
export const store = configureStore({
  reducer: rootReducers, // Set the combined root reducer
  devTools: true, // Enable Redux DevTools extension for development
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddlewares).concat(rtkQueryErrorLogger), // Apply middlewares
});

// Setup listeners for Redux Toolkit Query to handle API requests
setupListeners(store.dispatch);

// Define types for RootState and AppDispatch for type safety
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
