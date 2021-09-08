import React, { useState } from 'react';
import ErrorMsg from './ErrorMsg';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Form = ({ setExpense, setCreateExpense }) => {
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
    const expense = {
      name: expenseName,
      amount: expenseAmount,
      id: shortid.generate(),
    };

    /* console.log(expense); */
    //!Pass the expense object to the main component
    setExpense(expense);
    setCreateExpense(true);

    //!Reset the Form
    setExpenseName('');
    setExpenseAmount(0);
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
            value={expenseName}
          />
        </div>

        <div className="field-form flex column">
          <label>Expenditure Amount</label>
          <input
            type="number"
            placeholder="$ 1"
            className="input-expense"
            onChange={handleChangeAmount}
            value={expenseAmount}
          />
        </div>

        <input type="submit" value="Add Expense" className="button-second" />
      </form>
    </>
  );
};

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setCreateExpense: PropTypes.func.isRequired,
};

export default Form;
