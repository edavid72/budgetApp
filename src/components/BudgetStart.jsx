import React, { useState } from 'react';
import ErrorMsg from './ErrorMsg';

const BudgetStart = ({ setBudget, setRemaining, setShowBudgetStart }) => {
  const [initialAmount, setInitialAmount] = useState(0);

  //state for the error in case the form contains invalid values, such as (number <1 or isNaN)
  const [errorMsg, setErrorMsg] = useState(false);

  //*: Function to read the initial budget
  const handleChange = (e) => {
    setInitialAmount(parseInt(e.target.value));
  };

  //*:Submit to define the budget
  const handleSubmit = (e) => {
    e.preventDefault();

    //!Validate Submit
    if (initialAmount < 1 || isNaN(initialAmount)) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      setBudget(initialAmount);
      setRemaining(initialAmount);
      setShowBudgetStart(false);
    }
  };

  return (
    <div>
      <h2 className="subtitle text-center">What is your budget?</h2>

      {errorMsg ? <ErrorMsg message="The budget is wrong" /> : null}

      <form className="flex column" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter your budget"
          className="input-form"
          onChange={handleChange}
        />

        <input type="submit" value="Start Budget" className="button" />
      </form>
    </div>
  );
};

export default BudgetStart;
