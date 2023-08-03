import React from 'react';
import styles from './style.js';
import bg_image from './bg.png';
import planet_1 from './planet_tr.png';
import planet_2 from './planet_bl.png';
import rover_image from './rover.png';
import scholar_image from './scholar.png';
import medical_image from './medical.png';

const App = () => {
  return (
    <div className="relative min-h-screen bg-primary">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg_image})` }}
      ></div>

      {/* Rover on Top Left */}
      <div className="z-10 absolute top-0 left-0 w-8rem h-8rem sm:w-12rem sm:h-12rem md:w-16rem md:h-16rem lg:w-20rem lg:h-20rem xl:w-24rem xl:h-24rem flex items-center justify-center max-w-full">
        <img src={rover_image} alt="Rover" className="w-full h-full object-cover object-center" />
      </div>

      {/* Planet on Top Right */}
      <div className="z-10 absolute top-0 right-0 w-8rem h-8rem sm:w-12rem sm:h-12rem md:w-16rem md:h-16rem lg:w-20rem lg:h-20rem xl:w-24rem xl:h-24rem flex items-center justify-center max-w-full">
        <img src={planet_1} alt="Planet1" className="w-full h-full object-cover object-center" />
      </div>

       {/* Scholar Image and Text */}
       <div className="z-10 absolute top-0 right-0 flex items-center mt-2">
        <img
          src={scholar_image}
          alt="Scholar"
          className="w-4rem h-4rem sm:w-6rem sm:h-6rem md:w-8rem md:h-8rem lg:w-10rem lg:h-10rem xl:w-12rem xl:h-12rem mr-2"
        />
        <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          TRACKS 01
        </span>
      </div>

      {/* Medical Image and "TRACK 02" text */}
      <div className="z-10 absolute bottom-0 right-0 flex flex-col items-end mt-2">
        <img
          src={medical_image}
          alt="Medical"
          className="w-4rem h-4rem sm:w-6rem sm:h-6rem md:w-8rem md:h-8rem lg:w-10rem lg:h-10rem xl:w-12rem xl:h-12rem mt-2"
        />
        <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2">
          TRACK 02
        </span>
      </div>

      {/* Planet on Bottom Left */}
      <div className="z-10 absolute bottom-0 left-0 w-8rem h-8rem sm:w-12rem sm:h-12rem md:w-16rem md:h-16rem lg:w-20rem lg:h-20rem xl:w-24rem xl:h-24rem flex items-center justify-center max-w-full">
        <img src={planet_2} alt="Planet2" className="w-full h-full object-cover object-center" />
      </div>
    </div>
  );
};

export default App;
