import React from "react";
import { FcAbout, FcBusinessman } from "react-icons/fc";
import { FaLaptopCode } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { IoPersonCircle, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { MdClose } from "react-icons/md";

function Navigat() {
  const [init, setinit] = useState(false);
  console.log(init);

  return (
    <div className="rounded-md w-[80px] h-[380px] bg-white/0 lg:bg-white/70  absolute top-[90px] right-0 lg:relative md:pr-0  sm:pr-6 lg:top-0 flex flex-col items-center ">
      <div className="lg:hidden mr-4 mt-3">
        <button onClick={() => setinit(!init)}>
          {init ? <MdClose size={38} /> : <IoMenu size={38} />}
        </button>
      </div>

      <nav
        className={`${ init ? "block" : "hidden"}
        flex-col justify-evenly items-center h-[100%] lg:flex md:bg-transparent`}
      >
        <Link to="/">
          <li className="p-2 flex flex-col items-center transition-all duration-150  text-[14px] font-semibold hover:bg-white/50 rounded-md hover:scale-105">
            <IoPersonCircle className="" size={30} />
            About{" "}
          </li>
        </Link>
        <Link to="/educacion">
          <li className="p-2 flex flex-col items-center transition-all duration-150 text-[13px] font-semibold hover:bg-white/50 rounded-md hover:scale-105">
            <GrCertificate size={30} /> Estident
          </li>
        </Link>
        <Link to="/proyectos">
          <li className="p-2 flex flex-col items-center transition-all duration-150 text-[13px] font-semibold hover:bg-white/50 rounded-md hover:scale-105">
            <FaLaptopCode size={30} />
            Proyect
          </li>
        </Link>
        <Link to="/contacto">
          <li className="p-2 flex flex-col items-center transition-all duration-150 text-[13px] font-semibold hover:bg-white/50 rounded-md hover:scale-105">
            <RiContactsBook2Fill color="" size={30} />
            Contact
          </li>
        </Link>
      </nav>
    </div>
  );
}

export default Navigat;
