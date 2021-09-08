import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({ expense }) => {
  return (
    <li className="expense">
      <p className="expense-name"> {expense.name}</p>
      <span className="expense-amount">$ {expense.amount}</span>
    </li>
  );
};

Expense.propTypes = {
  expense: PropTypes.object.isRequired,
};

export default Expense;
