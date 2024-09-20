import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, selectCurrentPage, selectItemsPerPage, selectTotalItems } from '../../features/slices/paginationSlice';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

function PaginationComponent({ renderCard, filteredScholarships }) {
  const dispatch = useDispatch();

  // Get items from state
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const totalItems = filteredScholarships.length;

  // Calculate the indices for slicing
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredScholarships.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= Math.ceil(totalItems / itemsPerPage)) {
      dispatch(setCurrentPage(pageNumber));
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate pagination for a maximum of 5 pagination numbers
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPages = 5;

    if (totalPages > 1) {
      pageNumbers.push(1);
    }

    if (totalPages > maxPages) {
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (endPage - startPage + 1 < maxPages - 2) {
        if (currentPage < totalPages - 3) {
          startPage = Math.max(2, endPage - (maxPages - 3));
        }
        if (currentPage > 3) {
          endPage = Math.min(totalPages - 1, startPage + (maxPages - 3));
        }
      }

      if (startPage > 2) {
        pageNumbers.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }

      if (totalPages > 1 && !pageNumbers.includes(totalPages)) {
        pageNumbers.push(totalPages);
      }
    } else {
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
    <div>
      {/* Display paginated items */}
      {renderCard(currentItems)}
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
          onMouseOver={() => setIsHoveredLeft(true)}
          onMouseOut={() => setIsHoveredLeft(false)}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
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
