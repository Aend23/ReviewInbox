import React, { useState } from "react";
import ContentCard from "./ContentCard";
import Available from "./Availabel";
import Map from "./Map";
import { data } from "../utils/data";

export default function Slide({body,id}) {
//   const [body, setBody] = useState(data[0]);
  const [show, setShow] = useState(false);
  const handleAction = () => {
    setShow(true);
  };
  console.log(body);
  return (
    <div className="flex whitespace-nowrap overflow-x-scroll scrollbar-hide relative gap-10 top-20 pl-80 max-md:pl-40">
      <div>
        <ContentCard body={body} id={id} handleAction={handleAction}/>
      </div>
      {show ? <><div> <Available/> </div> <Map/></>: null}
    </div>
  );
}
