import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Chrome } from 'lucide-react';
import { NODE_ENV } from '../../constants';
import { Link } from 'react-router-dom';

function ScholarDetails({ image, description, title ,websiteLink,facebookLink, instagramLink, twitterLink, youtubeLink}) {
	const socialMediaIcons = [
		{ icon: Facebook, linkKey: facebookLink },
		{ icon: Twitter, linkKey: twitterLink },
		{ icon: Instagram, linkKey: instagramLink },
		{ icon: Youtube, linkKey: youtubeLink },
		{ icon: Chrome, linkKey: websiteLink, isExternal: true },
];
  return (
    <div
      className="flex flex-col items-center justify-center mx-auto my-24 p-5"
      style={{ maxWidth: '1040px' }}
    >
      <div className="w-full mb-6" style={{ height: '490px', maxWidth: '1040px' }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full  border"
        />
      </div>
      <div className="w-full mb-6">
        <h2 className="text-2xl mb-4">{title}</h2>
        <p className="text-base mb-4">{description}</p>
      </div>
			<div className="w-full social flex py-6  ml-0 gap-[15px]">
		
					{socialMediaIcons.map(({ icon: Icon, linkKey, isExternal }, index) => {
							if (NODE_ENV === 'development') {
									console.log(linkKey)
							}
							return linkKey ? (
									isExternal ? (
											<a  href={linkKey} key={index} target="_blank" rel="noopener noreferrer">
													<Icon />
											</a>
									) : (
											<Link to={linkKey} key={index}>
													<Icon />
											</Link>
									)
							) : null;
					})}

			</div>
      <div className="w-full">
        <div className="drop-shadow-md w-full bg-white sm:w-[350px] lg:w-[555px] h-auto p-4 ml-0">
          <h4 className="text-lg font-semibold border-b-2">
						Relevant Links
						</h4>
					<p className="mt-5">
						Requirement{/*  */}
					</p>
					{websiteLink && (
          <a
            className="text-sm mt-2"
            href={websiteLink}
            style={{ color: 'rgba(0,0,0,0.45)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {websiteLink}
          </a>
        )}
        </div>
      </div>
    </div>
  );
}

export default ScholarDetails;
