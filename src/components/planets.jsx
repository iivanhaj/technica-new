import React from 'react';
import styles from '../style.js';
import planet_1 from '../images/planet_tr.png'; 

const Planets = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient`}>
      <img src={planet_1} alt="Planet" className="w-full h-full object-cover rounded-full" />
    </div>
  );
};

export default Planets;
