import React from 'react';

const TrackCard = ({ title, icon, positionRight }) => {
  const iconPosition = positionRight ? 'flex-row-reverse' : 'flex-row'; // Adjust icon position based on prop

  return (
    <div className={`bg-white rounded-lg p-4 flex items-center ${iconPosition} mb-6 shadow-md`}>
      <img src={icon} alt={title} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mr-4" />
      <span className="font-poppins text-lg sm:text-xl">{title}</span>
    </div>
  );
};

export default TrackCard;
