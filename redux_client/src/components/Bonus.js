import React, { useState } from 'react';
import './Bonus.css'; // Import your CSS file
import { useDispatch, useSelector } from 'react-redux';
import { incrementBonus } from '../actions';

const Bonus = () => {
    const points =  useSelector(state=>state.bonus.points);
   const dispatch = useDispatch()

  return (
    <div className='card1'>
      <div className='container1'>
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point: {points} </h3>
        <button className='increment-btn' onClick={()=>dispatch(incrementBonus())}>
          Increment +
        </button>
      </div>
    </div>
  );
};
 
export default Bonus;
