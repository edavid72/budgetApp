export const checkBudget = (budget, remaining) => {
  let classRemaining;

  if (budget / 4 > remaining) {
    classRemaining = 'remaining alert-danger';
  } else if (budget / 2 > remaining) {
    classRemaining = 'remaining alert-warning';
  } else {
    classRemaining = 'remaining alert-success';
  }

  return classRemaining;
};
