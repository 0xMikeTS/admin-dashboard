import Image from "next/image";
import React from "react";
import { MdPlayCircleFilled } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className=" fixed pr-5">
      {/* 1 */}
      <div className=" relative bg-gradient-to-t from-[#182237] to-[#253352] p-5 rounded-lg mb-6">
        <div className=" absolute bottom-0 right-0 w-1/2 h-1/2">
          <Image
            src="/astronaut.png"
            alt=""
            fill
            className=" bg-contain opacity-20"
          />
        </div>
        <div className=" flex flex-col gap-4">
          <span className=" font-bold">🔥 Avaliable Now</span>
          <h3>How to use the new version fo the admin dashboard?</h3>
          <span className=" font-medium text-xs text-gray-400">
            Takes 4 minutes to learn
          </span>
          <p className=" font-medium text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            nesciunt nostrum obcaecati sed nulla quae ullam repudiandae vitae
            quis tempore! Quas iste officiis veritatis recusandae maxime eveniet
            libero animi inventore.
          </p>
          <button className=" flex p-2 items-center gap-2 bg-[#5d57c9] text-white border-none rounded-md w-max">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      {/* 2 */}
      <div className=" relative bg-gradient-to-t from-[#182237] to-[#253352] p-5 rounded-lg mb-6">
        <div className=" flex flex-col gap-4">
          <span className=" font-bold">🔥 Avaliable Now</span>
          <h3>How to use the new version fo the admin dashboard?</h3>
          <span className=" font-medium text-xs text-gray-400">
            Takes 4 minutes to learn
          </span>
          <p className=" font-medium text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            nesciunt nostrum obcaecati sed nulla quae ullam repudiandae vitae
            quis tempore! Quas iste officiis veritatis recusandae maxime eveniet
            libero animi inventore.
          </p>
          <button className=" flex p-2 items-center gap-2 bg-[#5d57c9] text-white border-none rounded-md w-max">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
