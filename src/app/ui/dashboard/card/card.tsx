import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className=" bg-slate-800 p-5 rounded-lg flex cursor-pointer gap-5 w-full hover:bg-slate-700">
      <MdSupervisedUserCircle size={24} />
      <div className=" flex flex-col gap-5">
        <span>Total Users</span>
        <span className=" text-2xl font-bold">10.273</span>
        <span className=" text-sm font-normal">
          <span className=" text-lime-400">12% </span>
          more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
