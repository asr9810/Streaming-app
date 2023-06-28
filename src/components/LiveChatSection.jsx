import React, { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { AiOutlineSend } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addMsg } from "./utiles/chatSlice";
import { nameGenerator, randomMsgGenerator } from "./utiles/helper";



const LiveChatSection = () => {
  const dispatch = useDispatch()
  const liveMsgData = useSelector(store=>store.live_chat.message)
  const [myMsg, setMyMsg] = useState()
  
  

  useEffect(()=>{
    
    const i = setInterval(() => {
      getLiveMsgData()
    }, 2000);

    return ()=>{
      clearInterval(i)
    }
    
  })

  const getLiveMsgData = () => {
      //make api call to get live mgs data
      dispatch(addMsg({
        name: nameGenerator(),
        text : randomMsgGenerator(),
      }))
      console.log("api call")
  }

  return (
    <div className="my-10 mx-2 w-[450px] border border-gray-200 h-[520px] p-1 rounded-lg">
      <div className="ml-4 py-3 ">Live Chat</div>
      <hr></hr>
      <div className="h-[400px] bg-gray-100 flex flex-col-reverse overflow-y-scroll ">
        {
          liveMsgData.map((msg, index)=>(
            <LiveChatMessage key={index} name={msg.name} text={msg.text}/>
          ))
        }
      </div>
       
      <form className="flex mt-2" onSubmit={(e)=>{
        e.preventDefault()

        dispatch(addMsg({
          name: "Amit Rawat",
          text: myMsg,
        }))
        setMyMsg("")
      }}>
        <div className="w-[80%] border border-t-0 border-x-0 mx-4 border-b-gray-300">
          <input
            type="text"
            placeholder="Type your message..."
            value={myMsg}
            className="w-full border border-none outline-none mb-0 focus:border-none"
            onChange={(e)=>setMyMsg(e.target.value)}
          />
        </div>
        <button className="mx-auto">
          <AiOutlineSend className="w-5 h-5 text-gray-400" />
        </button>
      </form>
    </div>
  );
};

export default LiveChatSection;
