import React, { useState } from "react";

export const FormContext = React.createContext({
  hasSumitted: false,
  submit: () => {},
  totalVal: 0,
  total: () => {},
  subsVal: 0,
  totalSubs: () => {},
  daysVal: 0,
  totalDays: () => {},
});

const ContextProvider = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalVal, setTotalVal] = useState(0);
  const [noOfsubs, setnoOfSubs] = useState(0);
  const [noOfDays, setnoOfDays] = useState(0);

  const subsHandler = (data) => {
    setnoOfSubs(data);
  };

  const submitHandler = () => {
    setIsSubmitted(true);
  };

  const totalHandler = (data) => {
    setTotalVal(data);
  };

  const daysHandler = (data) => {
    setnoOfDays(data);
  };

  return (
    <FormContext.Provider
      value={{
        hasSumitted: isSubmitted,
        submit: submitHandler,
        totalVal: totalVal,
        total: totalHandler,
        subsVal: noOfsubs,
        totalSubs: subsHandler,
        daysVal: noOfDays,
        totalDays: daysHandler,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default ContextProvider;
