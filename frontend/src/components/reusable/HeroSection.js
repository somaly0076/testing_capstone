import React from 'react';
import { Search } from 'lucide-react';
import HeroSectionImage from '../../assets/images/_18b5ae1d-efb8-46d8-974f-d5faab2df897.jpeg'

const HeroSection = ({
  title = "DISCOVER YOUR FUTURE.",
  subtitle = "Everything starts here.",
  searchPlaceholder = "Search University by name",
  backgroundGradient = "from-blue-100",
  titleColor = "text-blue-900",
  subtitleColor = "text-blue-600",
  mainImageSrc = "https://www.cambodianchildrensfund.org/imager/uploads/79423/SRP5623_bfebd3bb7357e8cc1407da2436215ce5.jpg",
  mainImageAlt = "University building",
  onSearch = () => {},
}) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.search.value;
    onSearch(searchTerm);
  };

  return (
    <section className="relative w-full sm:h-[517px] lg:h-[859px] z-[0] gap-5">
      <div className="relative w-full h-full bg-white text-center">
        <div 
          className={`inset-0 bg-gradient-to-b ${backgroundGradient} opacity-50`} 
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)' }}
        />
        
        <div className="absolute w-[526px] sm:w-full z-10 mx-auto lg:left-[calc(50%-263px)] top-[7%]">
          <h1 className={`text-4xl font-bold ${titleColor} mb-2`}>{title}</h1>
          <p className={`text-xl ${subtitleColor} mb-8`}>{subtitle}</p>
          
          <form onSubmit={handleSearch} className="relative mx-[20px]">
            <input 
              type="text" 
              name="search" 
              placeholder={searchPlaceholder} 
              className="w-full py-3 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-80"
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-gray-400 z-[0]" />
            </button>
          </form>
        </div>

        <div className="mt-12 flex justify-center items-end  w-full h-full">
          <img 
            src={mainImageSrc} 
            alt={mainImageAlt} 
            className="object-contain sm:object-cover w-full h-full" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;