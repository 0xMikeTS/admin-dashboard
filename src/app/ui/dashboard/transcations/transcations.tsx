import Image from "next/image";
import React from "react";

const Transcations = () => {
  return (
    <div className=" bg-slate-800 p-5 rounded-lg">
      <h2 className=" font-extralight mb-5 text-xl text-gray-400">
        Latest Transcations
      </h2>
      <table className=" w-full">
        <thead>
          <tr>
            <td className=" p-2">Name</td>
            <td className=" p-2">Status</td>
            <td className=" p-2">Date</td>
            <td className=" p-2">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" p-2">
              <div className=" flex gap-2 items-center">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className=" object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className=" rounded-md p-1 text-sm text-white bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td className=" p-2">
              <div className=" flex gap-2 items-center">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className=" object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className=" rounded-md p-1 text-sm text-white bg-[#afd6ee75]">
                Done
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td className=" p-2">
              <div className=" flex gap-2 items-center">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className=" object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className=" rounded-md p-1 text-sm text-white bg-[#f7737375]">
                Cancelled
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td className=" p-2">
              <div className=" flex gap-2 items-center">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className=" object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className=" rounded-md p-1 text-sm text-white bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transcations;
