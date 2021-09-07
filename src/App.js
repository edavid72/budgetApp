import React, { useState } from 'react';
import BudgetStart from './components/BudgetStart';
import Form from './components/Form';
import './styles/grid.css';

function App() {
  //Todo: Principal State's
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);

  const [showBudgetStart, setShowBudgetStart] = useState(true);

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
              <Form />
            </div>

            <div className="section-app">Results</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
