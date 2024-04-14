import React, { useMemo, useState } from "react";
import Nav from "../components/Nav";
import Aside from "../components/Aside";

import Contact from "../components/Contact";
import Chat from "../components/Chat";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/api";
import { user_img } from "../images";



const useAllUser = ()=>{
return useQuery({
  queryKey: ["users"],
  queryFn: getUser,
})};



const Home = () => {
  const [input, setinput] = useState("");
  const [open, setopen] = useState(false);
  const [user, setuser] = useState(null);
const {data,isLoading} = useAllUser();


  const Onclick = (id) => {
    const user = data.find((e) => e.id === id);
    setuser(user);

    setopen(true);
  };
  const Onchange = (text) => {
    setinput(text);
    
  };

  // Filter the data based on the filterCriteria using useMemo
  const filteredData = useMemo(() => {
    if (!data) return []; // Return an empty array if data is not loaded yet
    if (!input) return data; // Return all data if no filter criteria is provided

    // Apply filter criteria to the data
    return data.filter(item => item.firstName.toLowerCase()===input.toLowerCase());
  }, [data, input]);


  return (
    <main>
      <Nav />
      <div className="flex">
        {/* Sidabar Section */}
        <Aside />

        {/*Contact Section */}
        <Contact
          data={filteredData}
          isLoading={isLoading}
          Onclick={Onclick}
          Onchange={Onchange}
        />

        {/* Chat Section */}
        {open ? (
          <Chat name={user.firstName} img={user.image} number={user.phone} />
        ) : (
          <Chat
            name={"MG_CHAT"}
            img={user_img}
            number={"This is Chat Application"}
          />
        )}
        {/* <Chat /> */}
      </div>
    </main>
  );
};

export default Home;
