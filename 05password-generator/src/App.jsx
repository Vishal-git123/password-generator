import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length,setlength] = useState(8)
  const [numberallowed,setnumberallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false);
  const[password,setpassword] = useState("")

const passwordgenerator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberallowed)str+= "0123456789"
  if(charallowed)str += "!@#$%^&*-_+=[]{}~`";
  for(let i = 0; i<length;i++){
    let char = Math.floor(Math.random()*str.length);
    pass+= str.charAt(char)
  }
  setpassword(pass)

  


},[length,numberallowed,charallowed,setpassword])

  return (
    <>
      <h1>password generator</h1>
      <input type="text" value={password} readOnly placeholder="Password" />

      <br />
      <br />

      <input
        type="range"
        min="6"
        max="20"
        value={length}
        onChange={(e) => setlength(e.target.value)}
      />
      <span> Length: {length}</span>

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          checked={numberallowed}
          onChange={() => setnumberallowed(!numberallowed)}
        />
        Numbers
      </label>

      <label>
        <input
          type="checkbox"
          checked={charallowed}
          onChange={() => setcharallowed(!charallowed)}
        />
        Symbols
      </label>

      <br />
      <br />

      <button onClick={passwordgenerator}>Generate Password</button>
    </>
  );
}

export default App
