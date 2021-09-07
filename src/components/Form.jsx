import React, { useState } from 'react';
import ErrorMsg from './ErrorMsg';

const Form = () => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [error, setError] = useState(false);

  const handleChangeName = (e) => {
    setExpenseName(e.target.value);
  };

  const handleChangeAmount = (e) => {
    setExpenseAmount(parseInt(e.target.value));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    //!Validate
    if (
      expenseName.trim() === '' ||
      expenseAmount < 1 ||
      isNaN(expenseAmount)
    ) {
      setError(true);
      return;
    }
    setError(false);

    //!Build Expense Object

    //!Pass the expense object to the main component

    //!Reset the Form
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <h2 className="subtitle">Add your expense here</h2>
        {error ? <ErrorMsg message="Please check the data entered!" /> : null}

        <div className="fiel-form flex column">
          <label>Expense Name</label>
          <input
            type="text"
            placeholder="food, gasoline, books, etc."
            className="input-expense"
            onChange={handleChangeName}
          />
        </div>

        <div className="field-form flex column">
          <label>Expenditure Amount</label>
          <input
            type="number"
            placeholder="$ 1"
            className="input-expense"
            onChange={handleChangeAmount}
          />
        </div>

        <input type="submit" value="Add Expense" className="button-second" />
      </form>
    </>
  );
};

export default Form;
