import React, { useEffect, useState } from "react";
import { IoMailSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { MdKeyboardCommandKey } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Map from "./Map";
import Avaiable from "./Availabel";

const ContentCard = ({ body, id=1,handleDelete,handleAction }) => {
  const [details,setDetails] = useState();
  console.log(body.msg[id]);
  useEffect(()=>{
    setDetails(body.msg[id]);
  },[]);
  console.log(id);
  return (
    <div className=" flex justify-center items-center  w-full">
    <div className="rounded-2xl overflow-hidden w-[520px] z-20" id="popup">
      <div className="bg-yellow-400">
        <div className="bg-[#f2f2f3] flex justify-between items-center py-[10px] px-[40px]">
          <div className="flex items-center gap-[20px]">
            {body?.type === "Mail" ? (
              <IoMailSharp />
            ) : body?.type === "Messenger" ? (
              <FaFacebookMessenger  className="text-blue-500"/>
            ) : body?.type === "Twitter" ? (
              <FaTwitter  className="text-blue-500"/>
            ) : null}
            <p className="text-[#2A2A2A] font-semibold flex items-center">
              {details?.title}
              <span className="text-[#909090] flex items-center">
                <BsDot />
                {console.log(body.type)}
                {body.type} from {details?.sendBy}
              </span>
            </p>
          </div>
          <FaMicrophone className="text-[#909090]" />
        </div>
        <div className="bg-[#F9F9F9] px-[40px] py-[20px] flex flex-col gap-[10px]">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl text-[#4b4b4b]">{body?.sendBy}</h4>
            <p className="text-[#d6d6d6] font-bold">Just Now</p>
          </div>
          <h2 className="font-bold text-3xl">{details?.title}</h2>
          <div className="flex flex-col gap-[20px] mt-[20px] text-[#696868]">
            <p className="">Hey {details?.to},</p>
            <div className=" text-wrap">
              <p>{details?.body}</p>
            </div>
            <span>{details?.sendBy.split(" ")[0]}</span>
            <div>
              <hr />
              <div className="flex gap-[10px] py-[10px] font-semibold">
                <button className="bg-[#f2f2f3] py-[7px] px-[20px] rounded-xl">
                  Reply
                </button>
                <button className="bg-[#f2f2f3] py-[7px] px-[20px] rounded-xl">
                  Forward
                </button>
                <button className="bg-[#f2f2f3] py-[7px] px-[20px] rounded-xl" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center font-semibold gap-[10px] text-[#909296]">
            <MdKeyboardCommandKey />
            <button onClick={handleAction}>More actions</button>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
};

export default ContentCard;
