import { useState } from "react";
function App() {
  const [Color, setColor] = useState("white");

  function changeCol(e) {
    setColor(e.target.innerHTML);
    e.target.style.cursor='pointer'
  }

  return (
    <div
      style={{ backgroundColor: Color }}
      className="main h-screen duration-200 flex items-center flex-col"
    >
      <div className="control   md:fixed  md:bottom-0 h-full flex items-center  md:h-1/5 rounded-xl ">
        <div className="colors flex   w-full  flex-wrap md:flex-nowrap">
          <div
            onClick={changeCol}
            style={{ backgroundColor: "red" }}
            className=" h-14 flex items-center justify-center md:h-2/5  text-2xl md:text-xl w-full md:w-36 p-1 m-1 rounded-lg border border-black shadow-lg  text-white"
          >
            Red
          </div>
          <div
            onClick={changeCol}
            style={{ backgroundColor: "orange" }}
            className=" h-14 flex items-center justify-center md:h-2/5  text-2xl md:text-xl w-full md:w-36 p-1 m-1 rounded-lg border border-black shadow-lg  text-white"
          >
            Orange
          </div>
          <div
            onClick={changeCol}
            style={{ backgroundColor: "yellow", color: "black" }}
            className=" h-14 flex items-center justify-center md:h-2/5  text-2xl md:text-xl w-full md:w-36 p-1 m-1 rounded-lg border border-black shadow-lg  text-white"
          >
            Yellow
          </div>
          <div
            onClick={changeCol}
            style={{ backgroundColor: "green", color: "white" }}
            className="h-14 flex items-center justify-center md:h-2/5  text-2xl md:text-xl w-full md:w-36 p-1 m-1 rounded-lg border border-black shadow-lg  text-white"
          >
            Green
          </div>
          <div
            onClick={changeCol}
            style={{ backgroundColor: "blue" }}
            className=" h-14 flex items-center justify-center md:h-2/5  text-2xl md:text-xl w-full md:w-36 p-1 m-1 rounded-lg border border-black shadow-lg  text-white"
          >
            Blue
          </div>
          <div
            onClick={changeCol}
            style={{ backgroundColor: "indigo" }}
            className="h-14 flex items-center justify-center md:h-2/5  text-2xl md:text-xl w-full md:w-36 p-1 m-1 rounded-lg border border-black shadow-lg  text-white"
          >
            Indigo
          </div>
          <div
            onClick={changeCol}
            style={{ backgroundColor: "violet" }}
            className="h-14 flex items-center justify-center md:h-2/5  text-2xl md:text-xl w-full md:w-36 p-1 m-1 rounded-lg border border-black shadow-lg  text-white"
          >
            Violet
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
