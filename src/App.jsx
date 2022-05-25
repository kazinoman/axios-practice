import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";
import GetUser from "./components/getUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <GetUser />
      <Form />
    </div>
  );
}

export default App;
