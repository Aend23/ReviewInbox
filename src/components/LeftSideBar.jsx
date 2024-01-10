import React from "react";
import { FaPlus } from "react-icons/fa6";
import { data } from "../utils/data";
import Content from "./Content";

const LeftSiderBar = ({ handleView }) => {
  // console.log(data);
  return (
    <aside className="h-[100%] w-min-[270px] fixed top-0 ">
      <ul className="h-full flex flex-col sidebar">
        <div className="container">
          <FaPlus />
          <p>
            <span>New flow</span>
          </p>
        </div>
        {data.map((obj, id) => {
          return <Content obj={obj} key={id} handleView={handleView}/>;
        })}
      </ul>
    </aside>
  );
};

export default LeftSiderBar;
