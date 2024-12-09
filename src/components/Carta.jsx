import {
  FaBeer,
  FaFacebook,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";
import Des from "../assets/Des.png";

function Carta() {
  return (
    <div className=" bg-white/70 rounded-md w-auto flex flex-row justify-center items-center max-h-[630px] lg:flex-col lg:w-80">
      <div className="flex flex-col p-4 lg:p-0">
        <div className="text-center flex flex-col items-center justify-center">
          <article className=" rounded-md h-40 w-40 bg-white/60 mt-[-80px] lg:mt-[-100px]">
            <img src={Des} alt="" className="rounded-md w-full" />
          </article>
          <h1 className="font-bold text-3xl mt-4 mb-2">Luis Daniel 1</h1>
          <p className="font-semibold text-md mb-6 ">Desarrollador Web</p>
        </div>

        <div className="flex justify-center gap-4 mt-0 [&>article]:bg-white/60 [&>article:hover]:bg-transparent transition [&>article]:ease-in-out [&>article]:delay-150 [&>article]:duration-150  [&>article:hover]:-translate-y-2 [&>article:hover]:scale-110 [&>article]:cursor-pointer">
          <article className="p-2 rounded-md">
            <FaFacebook color="#0866FF" size={27} />
          </article>
          <article className="p-2 rounded-md">
            <FaLinkedinIn color="#0866FF" size={27} />
          </article>
          <article className="p-2 rounded-md">
            <FaSquareWhatsapp color="#25d366" size={27} />
          </article>
        </div>

        <div className="mt-8  bg-white/60 py-5 px-6 rounded-md hidden lg:block">
          <h2 className="text-center font-medium text-lg pb-3">Contacto</h2>
          <div className="flex flex-col gap-y-8 mt-3 font-semibold">
            <article>
              <p className="flex gap-2 items-center">
                <IoIosMail size={25} color="#fbbc05" />
                Devluisjim@gmail.com
              </p>
            </article>
            <article>
              <p className="flex gap-2 items-center">
                <MdOutlinePhoneIphone size={25} color="#1976d2" />- 324 286 7103
              </p>
            </article>
            <article>
              <p className="flex gap-2 items-center">
                <FaMapMarkerAlt size={25} color="#388e3c" />
                Barranquilla
              </p>
            </article>
          </div>
        </div>

        <div>
          <a href="/Hv_Luis_Jimenez.pdf" target='_blank'>
            <button className="flex m-auto gap-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg mt-8 text-white hover:animate-pulse512">
              <FaCloudDownloadAlt size={25} /> Descargar cv
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carta;
