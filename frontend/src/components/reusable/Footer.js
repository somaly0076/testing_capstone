import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

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
    <footer className="bg-[#E6F3F9] text-gray-700 py-8 px-4 w-full bottom-0 mt-[64px]">
      <div className="container mx-auto">
        <div className="md:flex md:justify-between">
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
          <div className="mb-8 md:mb-0">
            <h2 className="font-bold mb-2 underline">
              <FooterLink href="/about-us">About Us</FooterLink>
            </h2>
            <ul className="pl-4 text-sm">
              <li className="flex items-center">
                <span className="mr-2">◎</span>
                <FooterLink href="/our-vision">Our Vision</FooterLink>
              </li>
              <li className="flex items-center">
                <span className="mr-2">⚒</span>
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
                <span className="mr-2">✉</span>
                <a href="mailto:where2@gmail.com" className="hover:underline">
                  where2@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">◉</span>
                <span>Phnom Penh</span>
              </li>
            </ul>
            <div className="md:hidden">
              <h2 className="font-bold mb-2">Our Social</h2>
              <div className="flex space-x-2">
                <SocialIcon Icon={FaTwitter} />
                <SocialIcon Icon={FaInstagram} />
                <SocialIcon Icon={FaFacebookF} />
              </div>
            </div>
          </div>

          {/* Desktop: Social icons column */}
          <div className="hidden md:block">
            <h2 className="font-bold mb-2">Our Social</h2>
            <div className="space-y-2">
              <SocialIcon Icon={FaTwitter} />
              <SocialIcon Icon={FaInstagram} />
              <SocialIcon Icon={FaFacebookF} />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          <p>COPYRIGHT © 2024 Where2. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
