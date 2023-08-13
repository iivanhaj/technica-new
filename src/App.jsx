import React from 'react';
import './index.css';
import bg_image from './frame1.png';
import bg_image2 from './frame2.png'; // Make sure to import bg_image2
import scholar_image from './scholar.png';
import medical_image from './medical.png';
import education_image from './education.png';
import currency_image from './currency.png';
// Import the TrackCard component here
import TrackCard from './Trackcard.jsx';

const App = () => {
  return (
    <>
      <div className="h-screen bg-primary relative">
        {/* Background Image Container */}
        <div flex flex-col items-center justify-center h-screen relative min-h-screen bg-cover bg-center bg
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
          }}
        ></div>

        {/* Track Cards */}
        <div className="z-10 absolute top-40 right-40 p-4 space-y-4 md:right-16 lg:right-20 xl:right-24">
          <TrackCard title="TRACK 01" icon={scholar_image} />
          <TrackCard title="TRACK 02" icon={education_image} />
          <TrackCard title="TRACK 03" icon={medical_image} />
          <TrackCard title="TRACK 04" icon={currency_image} />
        </div>
      </div>

      <div className="h-screen bg-primary relative">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg_image2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', // Updated this to 'center'
          }}
        ></div>
      </div>
    </>
  );
};

export default App;