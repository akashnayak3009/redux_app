import React, { useState } from 'react';
import './Account.css'; // Import your CSS file

const Account = () => {
  const [account, setAccount] = useState({ amount: 0 });
  const [value, setValue] = useState(0);

  const increment = () => {
    setAccount({ amount: account.amount + 1 });
  };

  const decrement = () => {
    setAccount({ amount: account.amount - 1 });
  };

  const incrementByAmount = (value) => {
    setAccount({ amount: account.amount + value });
  };

  return (
    <div className='card'>
      <div className='container'>
        <h4>
          <b>Account Components</b>
        </h4>
        <h3>Amount: ${account.amount}</h3>
        <button className='increment-btn' onClick={increment}>
          Increment +
        </button>
        <button className='decrement-btn' onClick={decrement}>
          Decrement -
        </button>
        <input
          type='text'
          onChange={(e) => setValue(+e.target.value)}
          placeholder='Enter amount'
          className='amount-input'
        />
        <button
          className='increment-amount-btn'
          onClick={() => incrementByAmount(value)}
        >
          Increment by {value} +
        </button>
      </div>
    </div>
  );
};

export default Account;
 