import { FormContext } from "./context";
import { useContext } from "react";

const TheadFunc = () => {
  const ctx = useContext(FormContext);
  let content = [];
  for (let i = 1; i <= ctx.totalDays; i++) {
    content.push(<th>{"Day" + (i + 1)}</th>);
  }

  return content;
};

export default TheadFunc;
