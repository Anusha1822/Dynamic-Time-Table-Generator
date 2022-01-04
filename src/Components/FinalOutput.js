import "./FinalOutput.module.css";
import { FormContext } from "./context";
import { useContext } from "react";
const FinalOutput = (props) => {
  const ctx = useContext(FormContext);

  const items = ["Gujarati", "English", "Science", "Maths"];
  let k = 0;

  const func = () => {
    let arr = [];
    for (let i = 1; i <= ctx.daysVal; i++) {
      arr.push(i);
    }

    return arr;
  };
  let array = func();

  const mainFunc = () => {
    let elements = [];
    let durationForEachSub = +ctx.totalVal / +ctx.daysVal / +ctx.subsVal;
    console.log(durationForEachSub);
    let val1 = props.val1;
    let val2 = props.val2;
    let val3 = props.val3;
    let val4 = props.val4;
    for (let i = 1; i <= ctx.totalVal; i++) {
      if (i % 4 === 0 && val4 > 0) {
        let str = props.subs[3] + " - " + durationForEachSub;
        val4 = val4 - durationForEachSub;
        elements.push(str);
      } else if (i % 2 === 0 && i % 4 !== 0 && val2 > 0) {
        let str = props.subs[1] + " - " + durationForEachSub;
        val2 = val2 - durationForEachSub;
        elements.push(str);
      } else if (i % 3 === 0 && val3 > 0) {
        let str = props.subs[2] + " - " + durationForEachSub;
        val3 = val3 - durationForEachSub;
        elements.push(str);
      } else if (val1 > 0) {
        let str = props.subs[0] + " - " + durationForEachSub;
        val1 = val1 - durationForEachSub;
        elements.push(str);
      }
    }

    return elements;
  };

  const main = mainFunc();
  console.log(main);
  const theadFunc = () => {
    let content = [];
    for (let i = 1; i <= ctx.daysVal; i++) {
      content.push(i);
    }
    return content;
  };

  const rowsFunc = () => {
    let cont = [];
    for (let i = 1; i <= ctx.subsVal; i++) {
      cont.push(i);
    }

    return cont;
  };

  const rows = rowsFunc();
  const columns = theadFunc();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            {columns.map((item) => (
              <th>Day{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => (
            <tr>
              <th scope="row">Subject{item}</th>
              {array.map((x) => (
                <td>{main[k++]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinalOutput;
