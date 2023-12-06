"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className=" flex justify-between items-center bg-slate-800 rounded-lg p-5">
      {/* 标题 */}
      <div className="text-gray-400 font-bold capitalize">
        {pathname.split("/").pop()}
      </div>

      {/* 菜单栏 */}
      <div className=" flex items-center gap-5">
        {/* 搜索框 */}
        <div className="flex items-center gap-2 bg-slate-700 p-2 rounded-lg">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className=" bg-transparent border-none text-gray-400 focus:outline-none"
          />
        </div>

        {/* ICON */}
        <div className="flex gap-5">
          <MdNotifications size={20} />
          <MdOutlineChat size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
