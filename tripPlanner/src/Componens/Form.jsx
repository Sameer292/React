import React, { useState } from 'react'
import { useTripcontext } from '../Contexts/Context'


function Form() {
    const {setItemdetail} = useTripcontext()
    const [itemname,setitemname] = useState("")
    const [noOfItems,setnoofItems] = useState(1)

    const add = (e)=>{
        e.preventDefault()
        if(!itemname)
            return
        setItemdetail({name:itemname,striked:false,number:noOfItems})
        setitemname("")
    }

  return (
    <form onSubmit={add}>

    <div className="flex justify-center items-center flex-col ">
      <h1 className="text-4xl pt-2 text-center "> Trip planner </h1>
      <div className="flex items-center justify-center h-20  min-[1000px]:w-[480px] ">
        <input
          type="text"
          placeholder="Items for trip.."
          value={itemname}
          onChange={(e)=>setitemname(e.target.value)}
          className="h-12 p-3 rounded-lg text-slate-400 bg-slate-700 input  input-bordered w-full"
        />
        <select
          className="ml-3  bg-slate-700 h-4  rounded-lg min-w-fit select select-bordered  max-w-xs "
          defaultValue={noOfItems}
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

        <button
          className="btn ml-3 bg-green-800 hover:bg-green-700 text-slate-300" type='submit'
        >
          Add
        </button>
      </div>
      <div className="flex justify-between  w-5/6 min-[1000px]:w-[480px] items-center ">
        <h2 className="text-slate-300 text-2xl">Items</h2>
        <button  className="flex items-center bg-blue-700  disabled:bg-slate-700 h-10 p-3 rounded-lg hover:scale-105 active:scale-95 duration-150" disabled={true}>
          Sort
        </button>
      </div>

    </div>
    </form>
  )
}

export default Form