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
    <div >
      {variant === 'small' ? ( 
        <>
<div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
<div class="p-6">
    <div
      class="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
      &nbsp;
    </div>
    <div
      class="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
      &nbsp;
    </div>
  </div>
  <div
    class="relative grid h-56 mt-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
    <img src={cardItems.image} className='object-cover'/>
  </div>
</div>
        </>
      ) : (
        <>
<div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:opacity-25 hover:animate-pulse">
  <div
    class="relative grid h-56 mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
    <img src={cardItems.image} className='object-cover'/>
  </div>
  <div class="p-6">
    <div
      class="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
      &nbsp;
    </div>
    <div
      class="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
      &nbsp;
    </div>
  </div>
</div>
        </>
      )}
    </div>
  );
};

export default HomePageCard;