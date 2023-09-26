import React, { useState } from 'react';
import './Account.css'; // Import your CSS file
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseByAmount, increment } from '../actions';

const Account = () => {
  const [value, setValue] = useState(0);

  const amount = useSelector(state=>state.account.amount);
  const points =  useSelector(state=>state.bonus.points);

  const dispatch =useDispatch();

  return (
    <div className='card'>
      <div className='container'>
        <h4>
          <b>Account Components</b>
        </h4>
        <h3>Amount:{amount} </h3>
        <button className='increment-btn' onClick={()=>dispatch(increment())} >
          Increment +
        </button>
        <button className='decrement-btn' onClick={()=>dispatch(decrement())}>
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
          onClick={() => dispatch(increaseByAmount(value))}
        >
          Increment by {value} +
        </button>
      </div>
    </div>
  );
};

export default Account;
 