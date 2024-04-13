import React  from "react";
import Nav from "../components/Nav";
import Aside from "../components/Aside";

import Contact from "../components/Contact";
import Chat from "../components/Chat";


const Home = () => {


  return (
    <main className="">
      <Nav />
      <div className="flex">
        {/* Sidabar Section */}
        <Aside />

        {/*Contact Section */}
        <Contact />

        {/* Chat Section */}
        <Chat />
      </div>
    </main>
  );
};

export default Home;
