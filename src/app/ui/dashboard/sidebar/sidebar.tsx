import React from "react";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menulink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Users",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className=" sticky bg-slate-800  top-10">
      {/* 用户信息 */}
      <div className=" flex items-center gap-5 mb-5">
        <Image
          src="/noavatar.png"
          alt=""
          width={50}
          height={50}
          className=" rounded-full object-cover"
        />
        <div className=" flex flex-col">
          <span className=" font-medium">John Joe</span>
          <span className=" text-sm text-gray-400">Administrator</span>
        </div>
      </div>

      {/* 菜单栏 */}
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className=" text-gray-400 font-bold text-sm my-3">
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className=" flex items-center p-5 my-1 gap-3 cursor-pointer rounded-lg border-none w-full hover:bg-slate-700 transition">
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
