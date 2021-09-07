import React from 'react';

const ErrorMsg = ({ message }) => {
  return (
    <>
      <p className="error-msg">{message}</p>
    </>
  );
};

export default ErrorMsg;
