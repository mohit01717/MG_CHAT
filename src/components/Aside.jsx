import React from "react";
import {
  bag_img,
  msg_img,
  phone_img,
  setting_img,
  star_img,
  status_img,
  user_img,
} from "../images";

const Aside = () => {
  return (
    <aside className="flex flex-col justify-between pl-1  h-[93vh] w-14 bg-gray-900">
      <div className="gap-3 ">
        <img className="h-[30px] m-1 mt-4 cursor-pointer hover:opacity-10" src={msg_img} alt="" />

        <img className="h-[30px] m-1 mt-4 cursor-pointer hover:opacity-10" src={phone_img} alt="" />
        <img className="h-[30px] m-1 mt-4 cursor-pointer hover:opacity-10" src={status_img} alt="" />
      </div>

      <div>
        <img className="h-[30px] m-1 mt-4 cursor-pointer hover:opacity-10" src={star_img} alt="" />
        <img className="h-[30px] m-1 mt-4 cursor-pointer hover:opacity-10" src={bag_img} alt="" />
        <img className="h-[30px] m-1 mt-4 cursor-pointer hover:opacity-10" src={setting_img} alt="" />
        <img className="h-[30px] m-1 mt-4 cursor-pointer hover:opacity-10" src={user_img} alt="" />
      </div>
    </aside>
  );
};

export default Aside;
