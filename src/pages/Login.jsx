import React, { useState } from "react";
import { logo } from "../images";
import { Link } from "react-router-dom";
let user_name;
const Login = () => {
  const [input, setinput] = useState();
  const sendUser = () => {
    user_name = document.getElementById("name").value;
    document.getElementById("name").value = "";
  };
  return (
    <div className=" h-screen  bg-slate-400 flex justify-center items-center ">
      <div className="h-[50vh] bg-slate-200 p-10 border rounded flex flex-col justify-center items-center">
        <img src={logo} className=" h-[250px]" alt="" />

        <div className="flex flex-col justify-center items-center gap-5">
          <input
            type="text"
            className=" p-2 w-[400px] outline-none bg-white border-gray-700 rounded shadow-xl"
            placeholder="Enter your name"
            onChange={(e) => setinput(e.target.value)}
            id="name"
          />
          <Link
            onClick={(e) => (!input ? e.preventDefault() : null)}
            onKeyDown={(e) => console.log(e)}
            to={"/chat"}
          >
            <button
              className=" bg-slate-300 px-10 py-3 hover:bg-slate-900 hover:text-white shadow-xl"
              onClick={sendUser}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
export { user_name };
