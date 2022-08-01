import { useState } from "react";
import "./styles.css";

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Click {count} times</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
