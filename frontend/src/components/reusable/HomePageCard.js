import React from 'react';

const HomePageCard = ({ cardItems, variant = 'large', className = '' }) => {
  const TextDiv = () => (
    <div className={textClasses}>
      <h2 className='text-lg text-[#13188C] font-semibold mb-2'>{cardItems.title}</h2>
      {cardItems.description ? (
          <p className='text-sm text-[#255BAB]'>{cardItems.description}</p>
      ) : null}
    </div>
  );

  const baseStyle = "flex justify-between overflow-hidden rounded-[14px] border-[2px] shadow-xl";
  const variants = {
    large: "w-[400px] h-[480px] sm:w-[320px] sm:h-[491px] flex-col",
    small: "w-[200px] h-[340px] flex-col-reverse"
  };
  
  const imageClasses = variant === 'large' 
    ? 'object-cover rounded-b-[14px] h-full w-full'
    : 'object-cover rounded-t-[14px] h-full w-full';
  
  const textClasses = variant === 'large' 
    ? 'h-1/4 p-4 ' 
    : 'h-fit p-4 flex flex-col justify-center';

  const cardClasses = `${baseStyle} ${variants[variant]} ${className}`.trim();

  return (
    <div className={cardClasses}>
      {variant === 'small' ? ( 
        <>
          <TextDiv />
          <div className='w-full h-full'>
            <img 
              className={imageClasses}
              src={cardItems.image} 
              alt={cardItems.title || 'Card image'}
              draggable={false}
            />
          </div>
        </>
      ) : (
        <>
          <TextDiv />
          <div 
            className={`relative w-full flex-grow bg-cover bg-center rounded-b-[14px] hover:contrast-[0.5] hover:text-white `}
            style={{ backgroundImage: `url(${cardItems.image})`}}
            >
            <h1 className='absolute top-[50%] left-[25%]'>FIND  YOUR JOB</h1>
            </div>
        </>
      )}
    </div>
  );
};

export default HomePageCard;