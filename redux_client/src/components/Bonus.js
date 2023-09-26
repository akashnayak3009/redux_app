import React, { useState } from 'react';
import './Bonus.css'; // Import your CSS file

const Bonus = () => {
  const [bonus, setBonus] = useState({ points: 0 });

  const increment = () => {
    setBonus({ points: bonus.points + 1 });
  };

  return (
    <div className='card1'>
      <div className='container1'>
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point: {bonus.points}</h3>
        <button className='increment-btn' onClick={increment}>
          Increment +
        </button>
      </div>
    </div>
  );
};

export default Bonus;
