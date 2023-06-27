import React from "react";
import { BiUserCircle } from "react-icons/bi";



const Comment = ({data}) => {
    const {name, text, reply} = data
    
  return (
    <div className="flex flex-row mt-2 rounded-md w-full bg-slate-200">
      <BiUserCircle className="text-4xl items-center justify-center mt-[5px]"/>
      <div className=" flex flex-col ml-3">
        <p className="font-bold text-sm">{name}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Comment;

