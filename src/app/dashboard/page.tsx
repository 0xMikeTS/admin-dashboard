import React from "react";
import Card from "@/app/ui/dashboard/card/card";
import Chart from "@/app/ui/dashboard/chart/chart";
import Rightbar from "@/app/ui/dashboard/rightbar/rightbar";
import Transcations from "@/app/ui/dashboard/transcations/transcations";

const Dashboard = () => {
  return (
    <div className=" flex gap-5 mt-5">
      <div className=" flex flex-3 flex-col gap-5">
        {/* 用户卡片 */}
        <div className=" flex gap-5 justify-between">
          <Card />
          <Card />
          <Card />
        </div>

        <Transcations />
        <Chart />
      </div>

      {/* 右侧边栏 */}
      <div className=" flex-1">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
