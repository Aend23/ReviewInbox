import React from "react";
import { PiArrowElbowUpLeftBold } from "react-icons/pi";
import setTime from "../utils/setTime";

const Review = () => {
  const { formattedTime } = setTime();

  return (
    <section>
      <div className="text-[#83858b] flex justify-end py-[5px]">
        <p className="mr-[20px] fixed">{formattedTime}</p>
      </div>
      <div className="flex text-[#bbbdc1] gap-[10px] fixed">
        <PiArrowElbowUpLeftBold />
        <h1 className="text-7xl ">Review Inbox</h1>
      </div>
    </section>
  );
};

export default Review;
