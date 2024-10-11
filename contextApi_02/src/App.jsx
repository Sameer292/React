import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import ThemeBtn from "./Components/Themeswitcher";
import { ThemeProvider } from "./Contexts/Theme";
function App() {
  const [themeMode, setthemeMode] = useState('light');
  const lightTheme = () => {
    setthemeMode('light')
  }
  const darkTheme = () => {
    setthemeMode('dark')
  }

  useEffect(() => {
  document.querySelector("html").classList.remove('dark','light')
  document.querySelector("html").classList.add(themeMode)  
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}} >
      <div className="flex flex-wrap min-h-screen items-center  ">
        <div className="w-full ">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />

          </div>
          <div className="w-full max-w-sm mx-auto">
          <Card />

          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
