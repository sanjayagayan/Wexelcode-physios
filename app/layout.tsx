// These styles apply to every route in the application
import "swiper/css";
import "swiper/css/navigation";
import "../public/assets/css/style.css";
import "node_modules/react-modal-video/scss/modal-video.scss";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { SessionProviderWrapper } from "utils/session-provider-wrapper";
import { ReduxProvider } from "./redux/provider";
import './globals.css';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProviderWrapper>
      <ReduxProvider>
        <html lang="en">
          <body className=" font-siliguri">
            <ToastContainer theme="colored" />
            {children}
          </body>
        </html>
      </ReduxProvider>
    </SessionProviderWrapper>
  );
}
