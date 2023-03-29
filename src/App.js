import { useState, useEffect } from "react";
import "./App.css";
import Users from "./Users/Users";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");
  const onClick = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);
  return (
    <div>
      <h1 data-testid="value-elem">{value}</h1>
      {toggle && <div data-testid="toggle-elem">TOGGLE</div>}
      {data && <div>qweqwe</div>}
      <h1>Hello world</h1>
      <button data-testid="toggle-btn" onClick={onClick}>click</button>
      <input type="text" placeholder="введите значение..."  
      onChange={e=>setValue(e.target.value)}/>
    </div>
  );
}

export default App;
