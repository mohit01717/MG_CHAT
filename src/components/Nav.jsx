import React from "react";
import { logo } from "../images";
const Nav = () => {
  return (
    <nav className=" h-[7vh] bg-slate-200 flex place-items-center ">
      <div>
        <img className=" h-[60px]" src={logo} alt="" />
      </div>
    </nav>
  );
};

export default Nav;
