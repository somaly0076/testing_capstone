import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Map , Mail , Target , Navigation } from "lucide-react";

const FooterLink = ({ href, children }) => (
  <Link to={href} className="hover:underline">
    {children}
  </Link>
);

const SocialIcon = ({ Icon }) => (
  <div className="w-8 h-8 rounded-full bg-[#87CEEB] flex items-center justify-center text-white">
    <Icon />
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#E6F3F9] text-gray-700 py-8 px-4 w-full mt-[64px] bottom-0">
      <section className="flex">

      <div className="container mx-auto">
        <div className="flex justify-between sm:flex-col">
          {/* Desktop: Left column, Mobile: Top section */}
          <div className="mb-8 md:mb-0">
            <h2 className="font-bold mb-2 underline">
              <FooterLink href="/universities">Universities</FooterLink>
            </h2>
            <h2 className="font-bold mb-2 underline">
              <FooterLink href="/scholarships">Scholarships</FooterLink>
            </h2>
            <div className="mb-4">
              <h2 className="font-bold mb-2 underline">
                <FooterLink href="/livelihood">Livelihood</FooterLink>
              </h2>
              <ul className="pl-4 text-sm">
                <li>
                  <FooterLink href="/part-time-job">Part Time Job</FooterLink>
                </li>
                <li>
                  <FooterLink href="/student-loan">Student Loan</FooterLink>
                </li>
                <li>
                  <FooterLink href="/accommodation">Accommodation</FooterLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop: Middle columns, Mobile: Middle section */}
          <div className="mb-8 md:mb-0 sm:hidden">
            <h2 className="font-bold mb-2 underline">
              <FooterLink href="/about-us">About Us</FooterLink>
            </h2>
            <ul className="text-sm">
              <li className="flex items-center">
                <span className="mr-2">
                  <Target size={20} />
                </span>
                <FooterLink href="/our-vision">Our Vision</FooterLink>
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <Navigation size={20} />
                </span>
                <FooterLink href="/our-mission">Our Mission</FooterLink>
              </li>
            </ul>
          </div>

          {/* Desktop: Right column, Mobile: Bottom section */}
          <div>
            <h2 className="font-bold mb-2 underline md:hidden">
              <FooterLink href="/contact-us">Contact Us</FooterLink>
            </h2>
            <h2 className="font-bold mb-2 underline hidden md:block">
              Contact Us
            </h2>
            <ul className="text-sm mb-4">
              <li className="flex items-center mb-1">
                <span className="mr-2">
                  <Mail size={20} />
                </span>
                <a href="mailto:where2@gmail.com" className="hover:underline">
                  where2@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <Map size={20} />
                </span>
                <span>Phnom Penh</span>
              </li>
            </ul>
            <div className="md:hidden"></div>
          </div>
          <div className="sm:flex lg:hidden sm:flex-row space-x-2 flex-col gap-5">
            <h2 className="sm:hidden font-bold mb-2">Our Social</h2>
            <SocialIcon Icon={FaTwitter} />
            <SocialIcon Icon={FaInstagram} />
            <SocialIcon Icon={FaFacebookF} />
          </div>

          {/* Desktop: Social icons column */}
          <div className="sm:hidden lg:flex flex-col">
            <h2 className="font-bold mb-2">Our Social</h2>
            <div className="sm:hidden flex-col flex gap-2">
              <SocialIcon Icon={FaTwitter} />
              <SocialIcon Icon={FaInstagram} />
              <SocialIcon Icon={FaFacebookF} />
            </div>
          </div>
        </div>


      </div>
      <div className="mb-8 md:mb-0 lg:hidden">
            <h2 className="font-bold mb-2 underline">
              <FooterLink href="/about-us">About Us</FooterLink>
            </h2>
            <ul className="text-sm">
              <li className="flex items-center">
                <span className="mr-2">
                  <Target size={20} />
                </span>
                <FooterLink href="/our-vision">Our Vision</FooterLink>
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <Navigation size={20} />
                </span>
                <FooterLink href="/our-mission">Our Mission</FooterLink>
              </li>
            </ul>
      </div>
      </section>
         <div className="mt-8 text-center text-sm">
          <p>COPYRIGHT © 2024 Where2. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
