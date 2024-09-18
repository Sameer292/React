import { useState, useEffect } from "react";
import NoOfItemsSelect from "../components/NoOfItemsSelect";

function App() {
  const [thingss, setthingss] = useState([]);
  const [newthings, setNewthings] = useState("");
  const [noItems, setNoItems] = useState([]);
  const [newNoitem, setNewnoItems] = useState(1);
  const [noOfItems, setnoOfItems] = useState(0);
  const [strikedArr, setStrikedArr] = useState([]);
  const [ischecked, setIschecked] = useState([]);
  const addthings = () => {
    if (newthings.trim()) {
      setthingss([...thingss, newthings]);
      setNewthings("");
      setNoItems([...noItems, newNoitem]);
      setNewnoItems(1);
      setStrikedArr([...strikedArr, false]);
      setIschecked([...ischecked, false]);
      setnoOfItems(noOfItems + 1);
    }
  };

  const removethings = (index) => {
    const updatedthingss = thingss.filter((things, i) => i !== index);
    const updatedlist = noItems.filter((item, i) => i !== index);
    const updatedstriked = strikedArr.filter((item, i) => i !== index);
    const updatechecked = ischecked.filter((item, i) => i !== index);
    setIschecked(updatechecked);
    setStrikedArr(updatedstriked);
    setthingss(updatedthingss);
    setNoItems(updatedlist);
    setnoOfItems(noOfItems - 1);
  };

  const updatestrikedarr = (index) => {
    const updatedStriked = strikedArr.map((item, i) => {
      if (i === index) item = !item;
      return item;
    });
    const updatedChecked = ischecked.map((item, i) => {
      if (i === index) {
        item = !item;
      }
      return item;
    });
    setIschecked(updatedChecked);
    setStrikedArr(updatedStriked);
  };

  return (
    <div className="flex justify-center items-center flex-col ">
      <h1 className="text-4xl pt-2 text-center "> Trip planner </h1>
      <div className="flex items-center justify-center h-20  min-[1000px]:w-[480px] ">
        <input
          type="text"
          placeholder="Items for trip.."
          className="h-12 p-3 rounded-lg text-slate-400 bg-slate-700 input  input-bordered w-full"
          value={newthings}
          onChange={(e) => {
            setNewthings(e.target.value);
          }}
        />
        <select
          className="ml-3  bg-slate-700 h-4  rounded-lg min-w-fit select select-bordered  max-w-xs "
          value={newNoitem}
          onChange={(itm) => {
            setNewnoItems(itm.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <button
          onClick={addthings}
          // className="ml-3 flex items-center bg-green-700 h-10 p-3 rounded-lg hover:scale-105 active:scale-95 duration-150"
          className="btn ml-3 bg-green-800 hover:bg-green-700 text-slate-300"
        >
          Add
        </button>
      </div>
      <div className="flex justify-between  w-5/6 min-[1000px]:w-[480px] items-center ">
        <h2 className="text-slate-300 text-2xl">Items</h2>
        <button disabled className="flex items-center bg-blue-700   h-10 p-3 rounded-lg hover:scale-105 active:scale-95 duration-150">
          Sort
        </button>
      </div>

      <div className=" mt-5 max-h-80  rounded-lg p-2 w-full min-h-80 min-[1000px]:w-[500px]  overflow-y-scroll">
        <ul className=" flex flex-col items-center w-full  justify-center ">
          {thingss.length > 0 ? (
            thingss.map((things, index) => (
              <li
                key={index}
                className="p-1 flex border   border-slate-700 bg-slate-800 items-center ease-in-out duration-100 justify-between rounded-lg mt-2 w-full"
              >
                <input
                  type="checkbox"
                  defaultChecked={ischecked[index]}
                  checked={ischecked[index]}
                  onChange={() => updatestrikedarr(index)}
                />
                <p
                  className={`w-4/5 truncate ml-5 ${
                    strikedArr[index] === true ? "line-through" : "none"
                  }`}
                >
                  {things}
                </p>
                <p className="w-4/5 truncate">{noItems[index]}</p>
                <button
                  onClick={() => removethings(index)}
                  className="bg-red-800 rounded-lg p-2 ml-3 w-24 hover:scale-105 active:scale-95 duration-100"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <h3 className="mt-5 text-slate-300">No items added</h3>
          )}
        </ul>
      </div>
      <h1 className="mt-5">You have added {noOfItems} items.</h1>
    </div>
  );
}

export default App;
