"use client";

import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
// import BackToTop from '../elements/BackToTop';
import Footer from "./footer";
import Header from "./header";
import Sidebar from "../ui/Sidebar.jsx";

const Layout = ({ children }: { children: any }) => {
  const [openClass, setOpenClass] = useState("");

  const handleOpen = () => {
    document.body.classList.add("mobile-menu-active");
    setOpenClass("sidebar-visible");
  };

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
    }
  };

  return (
    <>
      <Toaster />
      <div className="body-overlay-1" onClick={handleRemove} />
      <Header/>
      <Sidebar openClass={openClass} />
      <main className="main">{children}</main>
      <Footer />
      {/* <BackToTop /> */}
    </>
  );
};

export default Layout;
