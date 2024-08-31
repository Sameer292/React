import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const [Color, setColor] = useState("#18181b");
  let colorforMessage
  function handlebtnInput(e)
  {
    setColor(e.target.innerHTML)
    const color = e.target.innerHTML.toLowerCase()
    colorforMessage = color || '#18181b'
    switch( color ){
      case 'red' || 'Red': setColor('#dc143c')   
      break;
      case 'pink': setColor('#e11584')   
      break;
      case 'blue': setColor('#007fff')   
      break;
      default : setColor(color)

    }

  }
  
  

  return (
    <div className=" h-screen duration-700" style={{ backgroundColor: Color || "#18181b" }}>
      <Header />
      <Button setState={handlebtnInput} />
    </div>
  );
}

export default App;
