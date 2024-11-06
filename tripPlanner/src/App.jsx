import { useState, useEffect } from "react";
// import NoOfItemsSelect from "../components/NoOfItemsSelect";
import Form from "./Componens/Form";
import { TripProvider } from "./Contexts/Context";
import Itemslist from "./Componens/Itemslist";

function App() {
  const [items, setItems] = useState([]);

  const setItemdetail = (item) => {
    setItems((prev) => [...prev, { id: Date.now(), ...item }]);
  };

  const editItemdetail = (item, id) => {
    setItems((prev) => prev.map((i) => (i.id === id ? item : i)));
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };
  const toggleStriked = (id) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, striked: !i.striked } : i))
    );
  };

  useEffect(() => {
    const itemsFromLocalstorage = JSON.parse(localStorage.getItem("items"));
    if (itemsFromLocalstorage && itemsFromLocalstorage.length) {
      setItems(itemsFromLocalstorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <TripProvider
    className=''
    value={{ items, setItemdetail, editItemdetail, deleteItem, toggleStriked }}
    >
      <Form />

      {/* <Itemslist/> */}

<div className="w-full flex  justify-center ">
      <div className=" mt-5 max-h-80  rounded-lg p-2 w-full min-h-80 min-[1000px]:w-[500px]  overflow-y-scroll">
      

      {items.map((item) => (
      <div  className="w-full" key={item.id}>
       
        <Itemslist item={item} /> 
       </div>  
      ))}


      </div>
      {/* <h1 className="mt-5">You have added {noOfItems} items.</h1> */}
    </div>





    </TripProvider>
  );
}

export default App;
