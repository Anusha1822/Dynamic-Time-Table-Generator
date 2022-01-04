import { useState, useContext, useRef, Fragment } from "react";
import { FormContext } from "./context";
import React from "react";
import classes from "./Form1.module.css";

const isEmpty = (value) => value.trim() === "";
const validationFunc1 = (value) => value >= 1 && value <= 8;
const validationFunc2 = (value) => value > 0 && value < 10;
const validationFunc3 = (value) => value > 0;

const Form1 = (props) => {
  const cntx = useContext(FormContext);

  const [formInputsValidity, setFormInputsValidity] = useState({
    val1: true,
    val2: true,
    val3: true,
    val4: true,
    total: 0,
  });

  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);

  const val1InputRef = useRef();
  const val2InputRef = useRef();
  const val3InputRef = useRef();
  const val4InputRef = useRef();

  const total1Handler = (event) => {
    event.preventDefault();
    setTotal1(val1InputRef.current.value);
  };

  const total2Handler = (event) => {
    event.preventDefault();
    setTotal2(val2InputRef.current.value);
  };

  const submitHandler = () => {
    cntx.submit();
  };

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredVal1 = val1InputRef.current.value;
    const enteredVal2 = val2InputRef.current.value;
    const enteredVal3 = val3InputRef.current.value;
    const enteredVal4 = val4InputRef.current.value;

    const enteredVal1IsVaid =
      !isEmpty(enteredVal1) && validationFunc1(enteredVal1);
    const enteredVal2IsVaid =
      !isEmpty(enteredVal2) && validationFunc2(enteredVal2);
    const enteredVal3IsVaid =
      !isEmpty(enteredVal3) && validationFunc3(enteredVal3);
    const enteredVal4IsVaid =
      !isEmpty(enteredVal4) && validationFunc3(enteredVal4);

    setFormInputsValidity({
      val1: enteredVal1IsVaid,
      val2: enteredVal2IsVaid,
      val3: enteredVal3IsVaid,
      val4: enteredVal4IsVaid,
      total: enteredVal1 * enteredVal2,
    });

    cntx.total(+enteredVal1 * +enteredVal2);
    cntx.totalSubs(+enteredVal4);
    cntx.totalDays(+enteredVal1);

    const formIsValid =
      enteredVal1IsVaid &&
      enteredVal2IsVaid &&
      enteredVal3IsVaid &&
      enteredVal4IsVaid;

    if (formIsValid) {
      submitHandler();
    }
  };

  return (
    <Fragment>
      <form onSubmit={confirmHandler}>
        <div className={classes.display}>
          <div>
            <label>No of working Days: </label>
            <input
              type="number"
              id="val1"
              ref={val1InputRef}
              onChange={total1Handler}
            />
            {!formInputsValidity.val1 && (
              <p className={classes.error}>
                Please enter a valid value between 1 and 8
              </p>
            )}
          </div>
          <div>
            <label>No of working hours per day: </label>
            <input
              type="number"
              id="val2"
              ref={val2InputRef}
              onChange={total2Handler}
            />
            {!formInputsValidity.val2 && (
              <p className={classes.error}>
                Please enter a positive number less than 10
              </p>
            )}
          </div>
          <div>
            <label>Total Subjects: </label>
            <input type="number" ref={val3InputRef} />
            {!formInputsValidity.val3 && (
              <p className={classes.error}>Please enter a positive number</p>
            )}
          </div>
          <div>
            <label>No of subjects per day: </label>
            <input type="number" ref={val4InputRef} />
            {!formInputsValidity.val4 && (
              <p className={classes.error}>Please enter a positive number</p>
            )}
          </div>
          <div className={classes.total}>
            <span>Total hours for week: </span>
            <span>{total1 * total2}</span>
          </div>
          <div>
            <button type="submit" className={classes.submit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Form1;
