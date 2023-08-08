import React from 'react';
import bg_image from './frame1.png';
import bg_image2 from './frame2.png';
import scholar_image from './scholar.png';
import medical_image from './medical.png';
import education_image from './education.png';
import currency_image from './currency.png';
import TrackCard from './Trackcard.jsx';

const App = () => {
  return (
    <>
      <div className="h-screen bg-primary relative">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 z-0 bg-cover"
          style={{
            backgroundImage: `url(${bg_image})`,
          }}
        ></div>

        {/* Track Cards */}
        <div className="z-10 absolute top-40 right-40 mr-4 sm:mr-8 md:mr-12 lg:mr-16 xl:mr-20 flex flex-col space-y-4 items-end sm:items-center">
          <TrackCard title="TRACK 01" icon={scholar_image} positionRight={true} />
          <TrackCard title="TRACK 02" icon={education_image} positionRight={true} />
          <TrackCard title="TRACK 03" icon={medical_image} positionRight={true} />
          <TrackCard title="TRACK 04" icon={currency_image} positionRight={true} />
        </div>
      </div>
      <div className="h-screen bg-primary relative">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 z-0 bg-cover"
          style={{
            backgroundImage: `url(${bg_image2})`,
          }}
        ></div>
      </div>
    </>
  );
};

export default App;

