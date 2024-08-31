import React, { useState } from "react";
import Message from "./Message";

function Button({ setState }) {
  const [msg,btnTomsg] = useState("")
  function changeCol(e) {
    setState(e);
    btnTomsg(e.target.innerHTML.toLowerCase())    
  }
  return (
    <>
  <Message toMessage={msg}/>

      <div className="fixed bottom-0 w-full flex justify-center  items-center   h-2/4 md:h-1/5 ">
        <div className="md:h-4/6 h-full w-4/5 bg-transparent max-lg::bg-slate-700  flex items-center justify-center md:rounded-full border-white">
          <div className="control   md:fixed   flex items-center  md:h-1/5 w-full rounded-xl ">
            <div className="colors flex scale-90 mb-10  md:scale-100 items-center justify-center  p-10  w-full  flex-wrap md:flex-nowrap">
              <div
                onClick={changeCol}
                style={{ backgroundColor: "#dc143c" }}
                className=" border-4   font-semibold  border-white h-14 flex hover:scale-105 hover:cursor-pointer active:scale-95 ease-in-out duration-150 items-center justify-center md:h-2/5  text-2xl md:text-xl w-full md:w-36 p-1 m-1 rounded-lg shadow-lg  text-white"
              >
                Red
              </div>
              <div
                onClick={changeCol}
                style={{ backgroundColor: "#e11584" }}
                className=" border-4  font-semibold  border-white h-14 flex hover:scale-105 hover:cursor-pointer active:scale-95 ease-in-out duration-150 items-center justify-center md:h-2/5  text-2xl md:text-xl w-full md:w-36 p-1 m-1 rounded-lg shadow-lg  text-white"
              >
                Pink
              </div>
              <div
                onClick={changeCol}
                style={{ backgroundColor: "#800080" }}
                className=" border-4  font-semibold  border-white h-14 flex hover:scale-105 hover:cursor-pointer active:scale-95 ease-in-out duration-150 items-center justify-center md:h-2/5  text-2xl md:text-xl w-full md:w-36 p-1 m-1 rounded-lg shadow-lg  text-white"
              >
                Purple
              </div>
              <div
                onClick={changeCol}
                style={{ backgroundColor: "#007fff", color: "white" }}
                className="border-4  font-semibold  border-white h-14 flex hover:scale-105 hover:cursor-pointer active:scale-95 ease-in-out duration-150 items-center justify-center md:h-2/5  text-2xl md:text-xl w-full md:w-36 p-1 m-1 rounded-lg shadow-lg  text-white"
              >
                Blue
              </div>
              <div
                onClick={changeCol}
                style={{ backgroundColor: "#008000" }}
                className=" border-4  font-semibold  border-white h-14 flex hover:scale-105 hover:cursor-pointer active:scale-95 ease-in-out duration-150 items-center justify-center md:h-2/5  text-2xl md:text-xl w-full md:w-36 p-1 m-1 rounded-lg shadow-lg  text-white"
              >
                Green
              </div>
              <div
                onClick={changeCol}
                style={{ backgroundColor: "#ffa500" }}
                className="border-4  font-semibold  border-white h-14 flex hover:scale-105 hover:cursor-pointer active:scale-95 ease-in-out duration-150 items-center justify-center md:h-2/5  text-2xl md:text-xl w-full md:w-36 p-1 m-1 rounded-lg shadow-lg  text-white"
              >
                Orange
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
