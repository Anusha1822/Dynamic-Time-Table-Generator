import "./App.css";
import Form1 from "./Components/Form1";
import { FormContext } from "./Components/context";
import { useContext } from "react";
import Form2 from "./Components/Form2";

function App() {
  const ctx = useContext(FormContext);
  let content = <Form1 />;
  if (ctx.hasSumitted) {
    content = <Form2 onComplete={ctx.total} />;
  }
  return content;
}

export default App;
