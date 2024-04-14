import React from "react";
import Cards from "./Cards";
import { bar_img, notes_img, search_png } from "../images";

import { Circles } from "react-loader-spinner";
import Chat from "./Chat";
const Contact = ({ data, isLoading, Onclick, Onchange }) => {
  return (
    <div className=" w-[500px]  bg-gray-800 text-white border border-black rounded  ">
      <div className="  w-[400px] h-[92vh] p-2 ">
        <div className="sticky">
          <div className=" flex justify-between items-center px-10 ">
            <h1 className=" text-2xl">Chats</h1>
            <div className=" flex justify-center items-center gap-2">
              <img className="h-[24px]" src={notes_img} alt="" />
              <img className="h-[24px]" src={bar_img} alt="" />
            </div>
          </div>
          <div className=" flex  items-center gap-4 mt-4 ml-2 bg-gray-700  border-b-orange-300 border-b-2 w-[345px] p-1">
            <img className="h-[30px]" src={search_png} alt="" />
            <input
              type="text"
              className=" outline-none bg-gray-700  w-full"
              onChange={(e) => Onchange(e.target.value)}
              placeholder="Search or start a new chat"
            />
          </div>
        </div>
        <div className="flex flex-col h-full  p-2 overflow-x-auto">
          {isLoading && (
            <div className="flex justify-center items-center h-[40vh]">
              <Circles
                height="60"
                width="60"
                color="#8576FF"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          )}

          {data?.map((e) => {
            return (
              <Cards
                name={e.firstName + " " + e.lastName}
                img={e.image}
                chats={e.company.title}
                key={e.id}
                onclick={() => Onclick(e.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
