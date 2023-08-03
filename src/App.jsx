import React from 'react';
import styles from './style.js';
import bg_image from './bg.png';
import planet_1 from './planet_tr.png';
import planet_2 from './planet_bl.png';

const App = () => {
  return (
    <div className="relative min-h-screen bg-primary">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg_image})` }}
      ></div>

      {/* Image on Top Right */}
      <div className="z-10 absolute top-0 right-0 w-10rem h-10rem sm:w-15rem sm:h-15rem md:w-20rem md:h-20rem lg:w-24rem lg:h-24rem xl:w-30rem xl:h-30rem flex items-center justify-center">
        <img src={planet_1} alt="Planet1" className="w-full h-full" />
      </div>
      {/* Image on Bottom Left */}
      <div className="z-10 absolute bottom-0 left-0 w-10rem h-10rem sm:w-15rem sm:h-15rem md:w-20rem md:h-20rem lg:w-24rem lg:h-24rem xl:w-30rem xl:h-30rem flex items-center justify-center">
        <img src={planet_2} alt="Planet2" className="w-full h-full" />
      </div>

      <div className={`${styles.flexStart} z-10 p-4 sm:p-8 md:p-16 lg:p-20 xl:p-24`}>
        <div className={`${styles.boxWidth}`}>
          rover
          icons_tracks
        </div>
      </div>
    </div>
  );
};

export default App;
