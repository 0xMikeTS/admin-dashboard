import React, { ReactNode } from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import Footer from "../ui/dashboard/footer/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" flex">
      <div className=" flex-1 bg-slate-800 p-5 min-h-screen">
        <Sidebar />
      </div>
      <div className=" flex-4 p-5">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
