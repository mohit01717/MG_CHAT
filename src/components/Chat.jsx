import React from "react";
import {
  attachment_img,
  mic_img,
  phone_img,
  search_png,
  stickers_img,
  video_img,
} from "../images";

const Chat = ({ img, name, number }) => {


  return (
    <div className="  w-screen rounded relative">
      <nav className=" h-[8vh] bg-slate-700  flex justify-start gap-4 items-center p-2 text-white absolute top-0 w-full">
        <img src={img} className="h-[40px]" alt="" />
        <div className=" flex flex-col w-[60vw]">
          <h3>{name}</h3>
          <p className=" text-gray-300 font-semibold text-[14px]">{number}</p>
        </div>
        <div className="flex gap-4">
          <img className="h-[30px]" src={phone_img} alt="" />

          <img className="h-[30px]" src={video_img} alt="" />
        </div>
        <img src={search_png} className="h-[30px]" alt="" />
      </nav>
      <section className=" h-[87vh] bg-gray-400 text-white">
        <div className=" flex justify-center items-center ">
          <div className="h-[30px] w-[100px] bg-blue-400 p-1 m-10  ">
            <h6 className="text-[15px] font-mono bg-blue-500 p-1 m-10 h-[30px] w-[100px] ">
              12/02/2019
            </h6>
          </div>
        </div>
        <div>
          <div className=" flex justify-around">
            <div className=" bg-slate-900 w-[30%] rounded p-2">
              <p className="w-[100%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                aspernatur quo deleniti, modi reiciendis facere ex alias quidem
                obcaecati facilis sapiente odit voluptates sit animi unde minima
                dolorum beatae, molestiae dicta magni.
              </p>
            </div>

            <div className=" bg-slate-800 w-[30%] rounded p-2">
              <p className="w-[100%]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt minima nihil aperiam iusto quis ipsum odio, ipsam,
                facere totam nobis ea perferendis rerum! Possimus optio
                reiciendis, odio est in atque.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className=" h-[6vh] flex  items-center bg-slate-700 p-1 gap-4 text-white absolute bottom-0 w-screen">
        <img className="h-[30px]" src={stickers_img} alt="" />
        <img className="h-[30px]" src={attachment_img} alt="" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Type a message"
          className="w-full p-1 outline-none bg-slate-700"
        />
        <img className="h-[30px]" src={mic_img} alt="" />
      </footer>
    </div>
  );
};

export default Chat;
