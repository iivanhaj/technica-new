import React, { useState } from 'react'; // Import useState

const TrackCard = ({ title, icon, positionRight }) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const iconPosition = positionRight ? 'flex-row-reverse' : 'flex-row';
  const titleMarginClass = (title === 'TRACK 01' || title === 'TRACK 03') ? 'mr-4' : '';

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`bg-transparent rounded-lg p-4 flex items-center ${iconPosition} mb-6 shadow-md`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={icon}
        alt={title}
        className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mr-4 transition-transform ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      />
      <span
        className={`font-poppins text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ${titleMarginClass}`}
      >
        {title}
      </span>
    </div>
  );
};

export default TrackCard;
