import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function Accordion({ items,handlemodel,onUniversityFilterChange }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = <span>{isExpanded ? <GoChevronUp /> : <GoChevronDown />}</span>;

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 h-[80px] items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && Array.isArray(item.content) &&(
					<div className="md:w-[300] flex flex-col md:flex-row p-2 overflow-x-auto">
						{item.content.map((contentItem, contentIndex) => (
							<div key={contentIndex} className="p-5">
								<div onClick={() => {
                  console.log("Clicked:", contentItem);
                  handlemodel();
                  onUniversityFilterChange(contentItem);
                }} className="bg-[#A9EBFF] w-fit border rounded-full px-2 cursor-pointer drop-shadow-lg">
                  {contentItem}
                </div>        
							</div>
						))}
					</div>
				)
          
        }
      </div>
    );
  });

  return <div className="rounded">{renderItems}</div>;
}

export default Accordion;
// onClick={handlemodel}