"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItem = {
  title: string;
  path: string;
  icon: JSX.Element;
};

interface MenuLinkProps {
  item: MenuItem;
}

const MenuLink: React.FC<MenuLinkProps> = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`p-5 flex items-center gap-3 hover:bg-slate-700 rounded-lg my-1 transition ${
        pathname === item.path ? "bg-slate-600" : ""
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
