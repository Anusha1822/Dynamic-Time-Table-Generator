import classes from "./Form2.module.css";
import { useState, useContext, useRef } from "react";
import FinalOutput from "./FinalOutput";
import { FormContext } from "./context";
const Form2 = (props) => {
  const subjects = ["Gujarati", "English", "Science", "Maths"];
  const [formVal, setFormVal] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
  });

  const cntx = useContext(FormContext);

  const val1InputRef = useRef();
  const val2InputRef = useRef();
  const val3InputRef = useRef();
  const val4InputRef = useRef();

  const validationHandler = (event) => {
    event.preventDefault();

    setFormVal({
      value1: val1InputRef.current.value,
      value2: val2InputRef.current.value,
      value3: val3InputRef.current.value,
      value4: val4InputRef.current.value,
    });
  };

  // props.onConfirm({
  //   val1: formVal.value1,
  //   val2: formVal.value2,
  //   val3: formVal.value3,
  //   val4: formVal.value4,
  // });

  const total =
    +formVal.value1 + +formVal.value2 + +formVal.value3 + +formVal.value4;

  return (
    <form>
      <div>
        <div>
          <span className={classes.span2}>{subjects[0]}</span>
          <span>
            <input type="number" className={classes.input} ref={val1InputRef} />
          </span>
        </div>
        <div>
          <span className={classes.span}>---------------</span>
          <span>----------</span>
        </div>
      </div>
      <div>
        <div>
          <span className={classes.span3}>{subjects[1]}</span>
          <span>
            <input type="number" className={classes.input} ref={val2InputRef} />
          </span>
        </div>
        <div>
          <span className={classes.span}>---------------</span>
          <span>----------</span>
        </div>
      </div>
      <div>
        <div>
          <span className={classes.span4}>{subjects[2]}</span>
          <span>
            <input type="number" className={classes.input} ref={val3InputRef} />
          </span>
        </div>
        <div>
          <span className={classes.span}>---------------</span>
          <span>----------</span>
        </div>
      </div>
      <div>
        <div>
          <span className={classes.span5}>{subjects[3]}</span>
          <span>
            <input type="number" className={classes.input} ref={val4InputRef} />
          </span>
        </div>
        <div>
          <span className={classes.span}>---------------</span>
          <span>----------</span>
        </div>
      </div>

      <div>
        <label className={classes.span6}>Total</label>
        <label>{total}</label>
      </div>

      <button
        type="button"
        className={classes.submit}
        onClick={validationHandler}
      >
        Generate
      </button>

      {total === cntx.totalVal ? (
        <FinalOutput
          val1={formVal.value1}
          val2={formVal.value2}
          val3={formVal.value3}
          val4={formVal.value4}
          total={total}
          subs={subjects}
        />
      ) : (
        "Totals hours not matched"
      )}
    </form>
  );
};

export default Form2;
