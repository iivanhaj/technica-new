import React from 'react';
import styles from './style.js';
import bg_image from './bg.png';
import planet_1 from './planet_tr.png';
import planet_2 from './planet_bl.png';
import rover_image from './rover.png';
import scholar_image from './scholar.png';
import medical_image from './medical.png';
import education_image from './education.png';
import currency_image from './currency.png';
import TrackCard from './Trackcard.jsx';

const App = () => {
  return (
    <div className="relative min-h-screen bg-primary">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg_image})` }}>
        {/* Rover on Top Left */}
        <div className="z-10 absolute top-0 left-0 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64">
          <img src={rover_image} alt="Rover" className="w-full h-full object-cover object-center" />
        </div>

        {/* Planet on Top Right */}
        <div className="z-10 absolute top-0 right-0 w-16 sm:w-20 md:w-24 lg:w-32 xl:w-36">
          <img src={planet_1} alt="Planet1" className="w-full h-full object-cover object-center" />
        </div>

        {/* Planet on Bottom Left */}
        <div className="z-10 absolute bottom-0 left-0 w-16 sm:w-20 md:w-24 lg:w-32 xl:w-36">
          <img src={planet_2} alt="Planet2" className="w-full h-full object-cover object-center" />
        </div>
      </div>

      {/* Track Cards */}
      <div className="z-10 absolute top-1/2 right-1/4 -mt-40 sm:-ml-12 md:-ml-14 lg:-ml-16 xl:-ml-18">
        <TrackCard title="TRACK 01" icon={scholar_image} positionRight={true} />
        <TrackCard title="TRACK 02" icon={education_image} positionRight={false} />
        <TrackCard title="TRACK 03" icon={medical_image} positionRight={true} />
        <TrackCard title="TRACK 04" icon={currency_image} positionRight={false} />
      </div>
    </div>
  );
};

export default App;
