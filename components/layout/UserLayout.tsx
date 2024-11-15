"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import Image from "next/image";
import {
  NotificationsOutlined as BellIcon,
  LogoutOutlined as LogoutIcon,
  PersonOutlined as UserIcon,
  HomeOutlined as HomeIcon,
  ListOutlined as ListIcon,
  ChatOutlined as ChatIcon,
} from "@mui/icons-material";
import Link from "next/link";

const drawerWidth = "w-64 sm:w-72";

type DashboardLayoutProps = {
  children: ReactNode;
};

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <HomeIcon className="w-4 h-4" />,
  },
  {
    label: "Physios Profile",
    href: "/physios",
    icon: <ChatIcon className="w-4 h-4" />,
  },
  {
    label: "My Appointments",
    href: "/appointments",
    icon: <ListIcon className="w-4 h-4" />,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: <UserIcon className="w-4 h-4" />,
  },
];

export const UserLayout = ({ children }: DashboardLayoutProps) => {
  const [open, setOpen] = useState(true);
  const [label, setLabel] = useState(menuItems[0].label);
  const [language, setLanguage] = useState("EN");
  const pathname = usePathname();

  useEffect(() => {
    
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const path = usePathname();
  if (path.includes("/video-call")) {
    return children;
  }

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };

  const handleSignout = () => signOut({ callbackUrl: "/signin" });
  const handleOnClick = () => {};

  return (
    <div className=" z-50">
      {/* AppBar */}
      <div
        className={`fixed top-0 justify-between w-full  ${
          open ? "w-full lg:w-[calc(100%)] md:w-[calc(100%)]" : "w-full"
        } transition-all duration-300 bg-white`}
      >
        <div className="flex items-center justify-between py-4 px-4 sm:px-6 md:px-10 ">
          {/* Title */}
          <div className="flex items-center space-x-4 md:space-x-6 ml-[70px] md:ml-[300px]">
            <h1 className="text-[18px] sm:text-xl md:text-2xl font-bold">
              Hi, Stevan dux
            </h1>
          </div>
          <div className="flex items-center space-x-3 md:space-x-6">
            {/* Language Selector */}
            <select
              value={language}
              onChange={handleLanguageChange}
              className="hidden md:flex border border-gray-300 rounded p-1 sm:p-2 text-sm"
            >
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="CH">CH</option>
              <option value="IN">IN</option>
            </select>

            {/* Notifications */}
            <button className="relative">
              <BellIcon className="w-5 sm:w-6 h-5 sm:h-6" />
              <span className="absolute top-0 right-0 h-2 sm:h-3 w-2 sm:w-3 bg-primary-color rounded-full"></span>
            </button>

            {/* Profile Avatar */}
            <button>
              <Image
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                src="https://i.pravatar.cc/300"
                alt="User Avatar"
                width={40}
                height={40}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`flex flex-col fixed top-0 left-0 h-full z-30 bg-white border-r transition-all duration-300 ${
          open ? drawerWidth : "w-[60px] md:w-20"
        }`}
      >
        <div className="flex items-center justify-center px-[10px] pt-8 pb-2 sm:px-[16px]">
          <Image src="/images/logo.png" alt="logo" width={120} height={80} />
        </div>

        {/* Menu items */}
        <ul className="flex flex-col space-y-4 py-4 justify-center">
            {menuItems.map((item) => {
            // Check if the current path matches the item's href
            const isActive = pathname === item.href;

            return (
              <li key={item.label}>
                <Link href={item.href}>
                  <button
                    className={`rounded-sm font-medium flex items-start justify-center md:justify-start transform ${
                      isActive
                        ? 'rotate-x-[180] border-l-4 border-primary-color '
                        : 'hover:rotate-x-[180] hover:border-l-4 hover:border-primary-color '
                    } transition-transform duration-300 w-full `}
                  >
                    <p
                      
                      onClick={handleOnClick}
                      className={`flex items-center space-x-3 mx-9 py-[10px] sm:py-[9px] px-3 md:px-10 ${
                        isActive
                          ? 'font-bold text-[15px] text-primary-color bg-primary-color/10'
                          : 'hover:font-bold hover:text-[15px] text-gray-700 hover:text-primary-color'
                      } sm:hover:bg-primary-color/10 hover:bg-transparent rounded-md w-full `}
                    >
                      {item.icon}
                      {open && <span>{item.label}</span>}
                    </p>
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Logout */}
        <button
          onClick={handleSignout}
          className="mt-[80%] flex items-start justify-center rounded-sm transform hover:rotate-x-[180] hover:border-l-4 hover:border-gray-400 transition-transform duration-300 w-full"
        >
          <a className="flex items-center font-medium space-x-3 mx-10  py-[10px] sm:py-[9px] px-3 md:px-10 hover:font-bold hover:text-[15px] text-gray-700 hover:bg-gray-400/10 hover:text-gray-700 rounded-md w-full">
            <LogoutIcon className="w-5 h-5" />
            {open && <span className="ml-2">Logout</span>}
          </a>
        </button>
      </div>

      {/* Main Content */}
      <main
        className={`${
          open ? "ml-[300px]" : "ml-[50px] sm:ml-[70px]"
        }  overflow-x-hidden mt-[50px]  py-[35px] sm:py-[50px] min:h-screen bg-primary-color/5`}
      >
        {children}
      </main>
    </div>
  );
};
