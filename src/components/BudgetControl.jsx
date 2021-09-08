import React from 'react';
import { checkBudget } from '../helpers/helpers';
import PropTypes from 'prop-types';

const BudgetControl = ({ budget, remaining }) => {
  return (
    <>
      <div className="budget-control">
        <div className="budget">
          <p>Budget:</p>
          <span>$ {budget}</span>
        </div>
        <div className={checkBudget(budget, remaining)}>
          <p>Remaining:</p>
          <span>$ {remaining}</span>
        </div>
      </div>
    </>
  );
};

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};
export default BudgetControl;
