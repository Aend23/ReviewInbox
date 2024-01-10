import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";

export default function Content({obj,handleView}) {
  return (
    <>
      {obj?.msg?.map((message, idx) => {
                return(
                <div className="container " onClick={()=>handleView(obj,idx)} key={idx}>
                {
                  obj.type === "Mail" ? (
                    <IoMailSharp />
                  ) : obj.type === "Messenger" ? (
                    <FaFacebookMessenger  className="text-blue-500"/>
                  ) : obj.type === "Twitter" ? (
                    <FaTwitter  className="text-blue-500"/>
                  ) : null
                }
                <p className=" details " key={idx}>
                  <span className="">{message.title}</span>
                 {message.sendBy}
                </p>
                
                </div>
                );
              })}
    </>
  )
}
