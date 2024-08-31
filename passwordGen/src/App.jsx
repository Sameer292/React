import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [isNumber, setIsnumber] = useState(true);
  const [isSpecialchars, setIsspecialchars] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = '1234567890'
    const specialChars = '!@#$%^&*()-=_+{}[]":;,.<>/?~'

    isNumber ? (str += numbers) : str;
    isSpecialchars ? (str += specialChars) : str;

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, isNumber, isSpecialchars, setPassword]);
  useEffect(passwordGenerator, [
    length,
    isNumber,
    isSpecialchars,
    passwordGenerator,
  ]);

  const passwordCopier = () => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md select-none selection:bg-orange-700 selection:text-white bg-gray-700 rounded-lg  text-orange-500 my-8 px-4 py-3 text-center">
        <h1 className="text-white my-3 text-center">Password Generator</h1>
        <div className="flex shadow-2xl rounded-lg  mb-4">
          <input
            type="text"
            value={password}
            className="outline-none rounded-lg w-full py-1 px-3 content-center"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={passwordCopier}
            className="bg-orange-700 hover:scale-110 duration-200 active:scale-95  text-white rounded-md ml-3 px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={25}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label> Length: {length}</label>
          </div>
          <label className="flex items-center gap-x-1 ml-2 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked={isNumber}
              onChange={() => {
                setIsnumber(!isNumber);
              }}
            />
            Numbers
          </label>
          <label className="flex items-center gap-x-1 ml-2 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked={isSpecialchars}
              onChange={() => {
                setIsspecialchars(!isSpecialchars);
              }}
            />
            Special chars
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
