import React from 'react';
import bg_image from './bg.png';
import planet_1 from './planet_tr.png';
import planet_2 from './planet_bl.png';
import planets from './Small_planets.png';
import rover_image from './rover.png';
import scholar_image from './scholar.png';
import medical_image from './medical.png';
import education_image from './education.png';
import currency_image from './currency.png';
import TrackCard from './Trackcard.jsx';

const App = () => {
  return (
    <div className="relative h-screen bg-primary">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        {/* Rover on Top Left */}
        <div 
          className="z-10 absolute top-0 left-0 w-full overflow-hidden">
          <img src={rover_image} alt="Rover" className="w-full h-full object-cover object-center" />
        </div>

        {/* Planet on Top Right */}
        <div
          className="z-10 absolute top-0 right-0 w-16 sm:w-20 md:w-24 lg:w-32 xl:w-36 overflow-hidden"
          style={{ height: '40%', marginTop: '-10%', right: 0 }}
        >
          <img src={planet_1} alt="Planet1" className="w-full h-full object-cover object-center" />
        </div>

        {/* Planet on Bottom Left */}
        <div className="z-10 absolute bottom-24 left-8 sm:left-10 md:left-12 lg:left-14 xl:left-16 w-16 sm:w-20 md:w-24 lg:w-32 xl:w-36">
          <img src={planet_2} alt="Planet2" className="w-full h-full object-cover object-center" />
        </div>

        {/* Small Planets */}
        <div className="z-10 absolute bottom-12 left-24 sm:left-26 md:left-28 lg:left-30 xl:left-32 w-18 sm:w-23 md:w-28 lg:w-32 xl:w-37">
          <img src={planets} alt="Planets" className="w-full h-full object-cover object-center" />
        </div>
      </div>

      {/* Track Cards */}
      <div className="z-10 absolute  top-1/2 -mt-72 sm:-mt-64 md:-mt-56 lg:-mt-48 xl:-mt-40 right-24 sm:right-25 md:right-26 lg:right-28 xl:right-29">
        <TrackCard title="TRACK 01" icon={scholar_image} positionRight={true} />
        <TrackCard title="TRACK 02" icon={education_image} positionRight={false} />
        <TrackCard title="TRACK 03" icon={medical_image} positionRight={true} />
        <TrackCard title="TRACK 04" icon={currency_image} positionRight={false} />
      </div>
    </div>
  );
};

export default App;
