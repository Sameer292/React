import React, { useContext, useState } from "react";
import { useTripcontext } from "../Contexts/Context";

function Itemslist({ item }) {
  const [isitemEditable, setisitemEditable] = useState(false);
  const [itemName, setitemname] = useState(item.name);
  const [noOfItems,setnoofItems] = useState(item.number)


  const { editItemdetail, deleteItem, toggleStriked } = useTripcontext();

  const updateItem = () => {
    editItemdetail({ ...item, name: itemName, number:noOfItems}, item.id);
    setisitemEditable(false);
  };

  return (
    <div className=" flex flex-col items-center w-full  justify-center ">
      <div className="p-1 flex border   border-slate-700 bg-slate-800 items-center ease-in-out duration-100 justify-between rounded-lg mt-2 w-full">
        <input
          type="checkbox"
          checked={item.striked}
          onChange={() => toggleStriked(item.id)}
          className="p-5 cursor-pointer"
        />
        <input
          type="text"
          defaultValue={itemName}
          disabled={!isitemEditable}
          onChange={(e) => setitemname(e.target.value)}
          className={`w-4/5 truncate ml-5 border-2 pl-2 bg-gray-800 ${ item.striked ? "line-through" : "none" } 
          ${ isitemEditable ? " outline-none border-2 border-slate-300 p-0 m-0 rounded-lg ": "border-transparent" }`}
        />
        <select
          className={`bg-slate-800 w-4/5 pl-5  truncate border-2 ${ isitemEditable ? " outline-none border-2 border-slate-300 p-0 m-0 rounded-lg ": "border-transparent" }`}  
            disabled={!isitemEditable}
          defaultValue={item.number}
          onChange={(e)=>setnoofItems(e.target.value)}
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
















        <div className="flex items-center">

        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
              if (item.striked) return;
              
              if (isitemEditable) {
                  updateItem();
                } else setisitemEditable((prev) => !prev);
            }}
            disabled={item.striked}
            >
          {isitemEditable ? "📁" : "✏️"}
        </button>

        <button
          onClick={() => deleteItem(item.id)}
          className="bg-red-800 rounded-lg p-2 ml-3 w-24 hover:scale-105 active:scale-95 duration-100"
          >
          Delete
        </button>
            </div>
      </div>
    </div>
  );
}

export default Itemslist;
