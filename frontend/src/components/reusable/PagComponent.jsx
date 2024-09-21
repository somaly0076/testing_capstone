import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, selectCurrentPage, selectItemsPerPage, selectTotalItems } from '../../features/slices/paginationSlice';
import Card from './CompanyCard';

import { scholarships } from '../scholarships';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import ScholarDetails from './ScholarshipsDetail';
function PaginationComponent() {
  const dispatch = useDispatch();

  // Get items from state
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const totalItems = useSelector(selectTotalItems);

  // Calculate the indices for slicing
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = scholarships.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= Math.ceil(totalItems / itemsPerPage)) {
      dispatch(setCurrentPage(pageNumber));
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  // Generate pagination logic for maximum of 5 pagination numbers
	const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPages = 5;

    // Always include the first page
    if (totalPages > 1) {
        pageNumbers.push(1);
    }

    // If there are more than 5 pages in total
    if (totalPages > maxPages) {
        // Determine the start and end of the page range
        let startPage = Math.max(2, currentPage - 1); // Start from page 2 or one before current page
        let endPage = Math.min(totalPages - 1, currentPage + 1); // Show one page after current page

        // Adjust the range to ensure a maximum of 5 items including ellipses
        if (endPage - startPage + 1 < maxPages - 2) {
            if (currentPage < totalPages - 3) {
                // Not enough pages before the current page
                startPage = Math.max(2, endPage - (maxPages - 3));
            }
            if (currentPage > 3) {
                // Not enough pages after the current page
                endPage = Math.min(totalPages - 1, startPage + (maxPages - 3));
            }
        }

        // Add ellipsis if there are skipped pages
        if (startPage > 2) {
            pageNumbers.push('...');
        }

        // Add the range of pages around the current page
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        // Add ellipsis if there are pages between the current page and the last page
        if (endPage < totalPages - 1) {
            pageNumbers.push('...');
        }

        // Always include the last page
        if (totalPages > 1 && !pageNumbers.includes(totalPages)) {
            pageNumbers.push(totalPages);
        }
    } else {
        // If total pages are 5 or less, show all pages
        for (let i = 2; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    }

    return pageNumbers;
};





  const pageNumbers = generatePageNumbers();

  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);

  return (
    <div >
      {/* Display paginated items */}
      <div className="flex flex-col items-center justify-center gap-6 mt-10 h-max">
        {currentItems.map((scholarships, index) => (
          <Card
            key={index}
            image={scholarships.image}
            imageAlt={scholarships.imageAlt}
            title={scholarships.title}
            description={scholarships.description}
            facebookLink={scholarships.facebookLink}
            instagramLink={scholarships.instagramLink}
            twitterLink={scholarships.twitterLink}
            youtubeLink={scholarships.youtubeLink}
            websiteLink={scholarships.websiteLink}
            location={scholarships.location}
            deadLine={scholarships.deadLine}
            timeOut={scholarships.timeOut}
          />
        ))}
      </div>
      {/* Pagination controls */}
      <div className='flex items-center justify-center my-16 px-1 gap-[18px]'>
        <button
          className={`cursor-pointer 
                      h-[24px] w-[24px] 
                      lg:h-[32px] lg:w-[32px] 
                      p-2 flex items-center
                      justify-center rounded 
                      border-2
            ${isHoveredLeft ? 'bg-[#ADB6B9]' : 'bg-transparent'}`}
          style={{ 
            borderRadius: '2px',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: '#ADB6B9',
            backgroundColor: currentPage <= 1 ? '#ADB6B9' : ''
          }}
          onMouseOver={() => setIsHoveredLeft(true)}//set background to display when hover
          onMouseOut={() => setIsHoveredLeft(false)}//set background to display:none when out
          onClick={() => handlePageChange(currentPage - 1)}//change pages when clicked
          disabled={currentPage <= 1}//function no longer work when current page equal
        >
          <MdOutlineKeyboardArrowLeft className={`  text-${currentPage <= 1 || isHoveredLeft ? 'white' : 'black'}`} />
        </button>

        <div className='flex gap-[18px]'>
          {pageNumbers.map((pageNumber, index) => (
            <span
              key={index}
              onClick={() => typeof pageNumber === 'number' && handlePageChange(pageNumber)}
              className={`cursor-pointer
                           text-[12px] 
                           h-[24px] w-[24px] 
                           lg:h-[32px] lg:w-[32px] 
                           p-2 flex items-center 
                           justify-center
              ${pageNumber === currentPage ? 'bg-[#32ADE6] text-white' : 'bg-transparent text-[#375761]'}`}
              style={{
                borderColor: pageNumber === currentPage ? '#32ADE6' : '#ADB6B9',
                borderRadius: '2px',
                borderStyle: 'solid',
                borderWidth: '1px'
              }}
            >
              {pageNumber}
            </span>
          ))}
        </div>

        <button
          className={`cursor-pointer 
                      h-[24px] w-[24px] 
                      lg:h-[32px] lg:w-[32px] 
                      p-2 flex items-center 
                      justify-center rounded 
                      border-2
            ${isHoveredRight ? 'bg-[#ADB6B9]' : 'bg-transparent'}`}
          style={{ 
            borderRadius: '2px',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: '#ADB6B9',
            backgroundColor: currentPage === totalPages ? '#ADB6B9' : ''
          }}
          onMouseOver={() => setIsHoveredRight(true)}
          onMouseOut={() => setIsHoveredRight(false)}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <MdOutlineKeyboardArrowRight className={`h-32 text-${currentPage === totalPages || isHoveredRight ? 'white' : 'black'}`} />
        </button>
      </div>
    </div>
  );
}

export default PaginationComponent;
