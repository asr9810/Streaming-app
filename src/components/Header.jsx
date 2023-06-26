import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiUserCircle } from "react-icons/bi";
import { BsSearch } from 'react-icons/bs'
// import user from '../images/user.png'
import Logo from "../images/Logo.png";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "./utiles/sideBarSlice";


const Header = () => {
  const [searchInput, setSearchInput] = useState(" ");
  const [suggestionList, setSuggestionList] = useState([])

  // dispatch the action for toggling the sidebar menu
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(toggleSideBar());
  };

  useEffect(() => {
     
      const timer = setTimeout(()=>{
        getSuggestionData();
      },200)

      return ()=>{
        clearTimeout(timer)
      }
    
  }, [searchInput]);

  const getSuggestionData = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/?q=${encodeURIComponent(searchInput)}`
      );
      const data = await res.json();
      setSuggestionList(data[1])
      console.log(data[1]);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("render");

  return (
    <div className="p-0 m-0 justify-between flex shadow-lg">
      <div className="flex  p-4">
        <RxHamburgerMenu
          onClick={() => toggleMenu()}
          className="h-8 cursor-pointer"
        />
        <img className=" h-8 ml-2" src={Logo} alt="" />
      </div>
      <div className="flex my-2 w-5/12 rounded-full relative">
        <input
          className="pl-8 p-2  w-full border border-gray-400 rounded-l-full"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search"
        />
        <button className="cursor-pointer hover:bg-gray-400 border w-20 bg-gray-100 border-gray-400 p-2  rounded-r-full justify-center">
          <BsSearch className="mx-auto  " />
        </button>
        <div className="bg-white absolute left-[0px] top-[48px] w-[568px] flex flex-col rounded-2xl shadow-xl ">
          <ul>
            {suggestionList.map((item, index)=>(<li className="py-[7px] hover:bg-gray-200 flex " key={index}><BsSearch className="m-[6px] mr-[12px]"/>{item}</li>))}
          </ul>
        </div>
      
      </div>
      <div className="my-2 w-20 ">
        <BiUserCircle className="h-9 w-14 align-middle justify-center" />
      </div>
    </div>
  );
};

export default Header;
