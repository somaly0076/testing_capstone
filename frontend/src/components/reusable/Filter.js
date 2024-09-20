import React from "react";

import { useState } from "react";
import { BsArrowDownUp } from "react-icons/bs";
import { LuX } from "react-icons/lu";
import Accordion from "./Accordion";
// import { items } from "./data";
function FilterComponent ({items,onUniversityFilterChange}){
	const  [openFilter,setOpenFilter] = useState(false)

	const handleModel = () => {
		setOpenFilter(!openFilter);
		
};
	return(
		<div className=" lg:w-[890px] mx-auto pt-1.5">
			<div className="w-[103px] h-[51px] bg-white border flex items-center justify-center cursor-pointer rounded-md text-lg z-10  border-[#7CD1EB]"
			onClick={handleModel}
			>
			<BsArrowDownUp className="pr-0.5"/>
			Filter
			</div>	
			{/* modal filter  */}
			{openFilter && (
				<div className="pt-4 fixed z-50">
				<div className="md:w-[890px] border border-[#7cd1eb] h-full bg-white rounded-md drop-shadow-md relative">
					<div className="pt-5 mx-12 ">
						<div className="flex justify-end items-end">
							<LuX onClick={handleModel} className="w-[24px] h-[24px] cursor-pointer"/>
						</div>
						<div className="flex justify-between items-center">
							<h3 className="font-bold text-[#7cd1eb] text-[]">
								Filter By
							</h3>
						</div>
						<Accordion 
						items={items} 
						handlemodel={handleModel} 
						onUniversityFilterChange={onUniversityFilterChange} />
					</div>
				</div>
			</div>
			)}
		</div>
	)
}
export default FilterComponent