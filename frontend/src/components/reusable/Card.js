import { Facebook, Instagram, Twitter, Youtube, Chrome } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { cardBody, cardGrid, cardTitle, cardButton, cardDescribtion } from './tailwindClassComponents/card'
import Map from '../../assets/svg/map.svg'
import BookMark from '../../assets/svg/bookmark.svg'
const Card = ({ image, imageAlt, title, describtion, facebookLink, instagramLink, twitterLink, youtubeLink, websiteLink }) => {
    const companyUrl = title.toLowerCase().replace(/\s+/g, '-');
    const changeColor = () => {
        
    }
    return (
        <div className="flex justify-center items-center min-h-screen  ">
            <div className="max-w-[720px] min-h-[520px] mx-auto ">

                <div className={cardBody}>
                    <div
                        className={cardGrid}>
                        <img
                            src={image}
                            alt={imageAlt}
                        />
                    </div>
                    <div>
                        <div class="p-6">
                            <h5 className={cardTitle}>
                                {title}
                            </h5>
                            <div className='text-ellipsis max-h-5'>
                            <p className={cardDescribtion}>
                                {describtion}
                            </p>
                            </div>
                        </div>
                        <div className="p-6 pt-0 flex-reverse ">
                            <div className="social flex py-6 justify-around max-w-[200px]">
                                <Link to={facebookLink} alt="noopener noreferrer">
                                    <Facebook />
                                </Link>
                                <Link to={instagramLink} alt="noopener noreferrer">
                                    <Instagram />
                                </Link>
                                <Link to={twitterLink} alt="noopener noreferrer">
                                    <Twitter />
                                </Link>
                                <Link to={websiteLink}>
                                    <Chrome />
                                </Link>
                                {youtubeLink ? (<Link to={youtubeLink}>
                                    <Youtube />
                                </Link>) : (null)}
                            </div>
                            <Link to={`/company${companyUrl}`} className="text-blue-500 hover:underline">
                                <button
                                    class={cardButton}
                                    type="button">
                                    Read More
                                </button>
                            </Link>
                            <Link to = ''>
                                <img src={Map} />
                            </Link>
                            <div onClick={changeColor}>
                                <img src={BookMark} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
