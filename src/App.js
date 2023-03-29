import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const onClick = (e) => {
    setToggle(!toggle);
  };
  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);
  return (
    <div className="App">
      {toggle && <div data-testid="toggle-elem">TOGGLE</div>}
      {data && <div>qweqwe</div>}
      <h1>Hello world</h1>
      <button data-testid="toggle-btn" onClick={onClick}>click</button>
      <input type="text" placeholder="введите значение..." />
    </div>
  );
}

export default App;
