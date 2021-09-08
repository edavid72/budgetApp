import React, { useEffect, useState } from 'react';
import BudgetControl from './components/BudgetControl';
import BudgetStart from './components/BudgetStart';
import ExpenseList from './components/ExpenseList';
import Form from './components/Form';
import './styles/grid.css';

function App() {
  //Todo: Principal State's
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);
  //!UseState::Conditional rendering of components
  const [showBudgetStart, setShowBudgetStart] = useState(true);

  //*UseEffect::Bring the expenses of the form
  useEffect(() => {
    //Add new Budget
    if (createExpense) {
      setExpenses([...expenses, expense]);

      //subtract from current budget
      const remainingBudget = remaining - expense.amount;
      setRemaining(remainingBudget);

      setCreateExpense(false);
    }
  }, [expense, expenses, createExpense, remaining]);

  return (
    <div className="container flex column">
      <h1 className="text-center title">Budget App</h1>
      <div className="main-content">
        {/* //!::Conditional rendering of components */}
        {showBudgetStart ? (
          <BudgetStart
            setBudget={setBudget}
            setRemaining={setRemaining}
            setShowBudgetStart={setShowBudgetStart}
          />
        ) : (
          <div className="flex app">
            <div className="section-app">
              <Form
                setExpense={setExpense}
                setCreateExpense={setCreateExpense}
              />
            </div>

            <div className="section-app">
              <ExpenseList expenses={expenses} />

              <BudgetControl budget={budget} remaining={remaining} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
