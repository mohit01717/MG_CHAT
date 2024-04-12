import React from "react";
import Nav from "../components/Nav";
import Aside from "../components/Aside";
import {
  attachment_img,
  bar_img,
  mic_img,
  notes_img,
  phone_img,
  search_png,
  stickers_img,
  user_img,
  video_img,
} from "../images";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <main className="">
      <Nav />
      <div className="flex">
        {/* Sidabar Section */}
        <Aside />
        {/*Contact Section */}
        <div className=" w-[400px]  bg-gray-800 text-white border border-black rounded ">
          <div className="  w-[400px] h-[92vh] p-2 border-r border-black">
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
                name=""
                id=""
                placeholder="Search or start a new chat"
              />
            </div>
            <div className="flex flex-col  p-2">
              <Cards />
              <Cards />
              <Cards /> <Cards /> <Cards /> <Cards /> <Cards /> <Cards />{" "}
              <Cards /> <Cards /> <Cards />
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="w-screen rounded">
          <nav className=" bg-slate-700 h-[7vh] flex justify-start gap-4 items-center p-4 text-white ">
            <img src={user_img} className="h-[40px]" alt="" />
            <div className=" flex flex-col w-[60vw]">
              <h3>Mohit Gagneaj</h3>
              <p className=" text-gray-300 font-semibold text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                iusto?
              </p>
            </div>
            <div className="flex gap-4">
              <img className="h-[30px]" src={phone_img} alt="" />

              <img className="h-[30px]" src={video_img} alt="" />
            </div>
            <img src={search_png} className="h-[30px]" alt="" />
          </nav>
          <section className="h-[81vh] bg-gray-400 text-white">
            <div className=" flex justify-center items-center ">
           
            <div className="h-[30px] w-[100px] bg-blue-400 p-1 m-10">
              <h6 className="text-[15px] font-mono">12/02/2019</h6>
            </div>
           
            </div>
            <div>
            <div className=" bg-black">
              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt minima nihil aperiam iusto quis ipsum odio, ipsam, facere totam nobis ea perferendis rerum! Possimus optio reiciendis, odio est in atque.
              </p>
            </div>
            
            </div>
          </section>
          <footer className="flex h-[5vh] items-center bg-slate-700 p-4 gap-4 text-white">
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
      </div>
    </main>
  );
};

export default Home;
