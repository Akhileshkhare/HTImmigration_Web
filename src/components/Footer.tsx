import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-[rgb(10,119,138)] pt-10 pb-0 text-white text-sm mt-0 border-t border-gray-800 relative">
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="absolute right-6 -top-6 bg-[#38bdf8] hover:bg-[#0ea5e9] text-white rounded-full p-2 shadow-lg transition duration-200"
      aria-label="Go to top"
      style={{ zIndex: 10 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
    <div className="max-w-5xl text-left text-[16px] mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
      <div className="footerBox mb-8 md:mb-0">
        <p className="font-bold text-2xl mb-2 border-b border-[#38bdf8] pb-1">Our Firm</p>
        <div className="flex flex-col gap-2">
          <Link to="/about_the_firm" className="text-white hover:text-gray-800 hover:bg-white">About the Firm</Link>
          <Link to="/our_attorneys_and_staff" className="text-white hover:text-gray-800 hover:bg-white">Our Attorneys and Staff</Link>
          <Link to="/why_choose_our_team" className="text-white hover:text-gray-800 hover:bg-white">Why Choose Our Team</Link>
          <Link to="/contact_us" className="text-white hover:text-gray-800 hover:bg-white">Contact Us</Link>
          <Link to="/free_evaluation" className="text-white hover:text-gray-800 hover:bg-white">Free Evaluation</Link>
          <Link to="/legal_fees_of_our_services" className="text-white hover:text-gray-800 hover:bg-white">Legal Fees of Our Services</Link>
          <Link to="/our_attorneys_and_staff" className="text-white hover:text-gray-800 hover:bg-white">Our Clients Served</Link>
        </div>
      </div>
      <div className="footerBox mb-8 md:mb-0">
        <p className="font-bold text-2xl mb-2 border-b border-[#38bdf8] pb-1">Services</p>
        <div className="flex flex-col gap-2">
          <Link to="/eb2_niw" className="text-white hover:text-gray-800 hover:bg-white">EB2-NIW (National Interest Waiver)</Link>
          <Link to="/niw_for_entrepreneurs" className="text-white hover:text-gray-800 hover:bg-white">NIW for Entrepreneurs</Link>
          <Link to="/eb1a" className="text-white hover:text-gray-800 hover:bg-white">EB1-A (Extraordinary Ability)</Link>
          <Link to="/eb1b" className="text-white hover:text-gray-800 hover:bg-white">EB1-B (Outstanding Researcher)</Link>
          <Link to="/perm" className="text-white hover:text-gray-800 hover:bg-white">PERM (Labor Certification)</Link>
          <Link to="/i485_adjustment_of_status" className="text-white hover:text-gray-800 hover:bg-white">I-485 Adjustment of Status (Green Card)</Link>
          <Link to="/i140_i485_concurrent" className="text-white hover:text-gray-800 hover:bg-white">I-140 and I-485 Concurrent Filing</Link>
        </div>
      </div>
      <div className="footerBox mb-8 md:mb-0">
        <p className="font-bold text-2xl mb-2 border-b border-[#38bdf8] pb-1 invisible md:visible">&nbsp;</p>
        <div className="flex flex-col gap-2">
          <Link to="/immigrant_visa_processing" className="text-white hover:text-gray-800 hover:bg-white">Immigrant Visa Processing</Link>
          <Link to="/h1b_visa" className="text-white hover:text-gray-800 hover:bg-white">H1B Visa (Specialty Occupation Worker)</Link>
          <Link to="/l1_visa" className="text-white hover:text-gray-800 hover:bg-white">L1 visa (Intra Company Transferee)</Link>
          <Link to="/o1_o3_visa" className="text-white hover:text-gray-800 hover:bg-white">O1/O3 visa (Extraordinary Ability)</Link>
          <Link to="/j1_visa_and_waiver" className="text-white hover:text-gray-800 hover:bg-white">J-1 Visa and Waiver (Exchange Scholar)</Link>
          <Link to="/e1_e2_visa" className="text-white hover:text-gray-800 hover:bg-white">E1/E2 visa (Treaty Trader and Investor)</Link>
        </div>
      </div>
    </div>
    <div className="max-w-full mx-auto p-4 mt-8 text-[#bae6fd] text-xs bg-gray-800">
      <p className="italic mb-2">
        Disclaimer: The information provided on this website is for general informational purposes only and does not constitute legal advice. Immigration laws and policies change frequently, and the content here may not reflect the latest updates. For guidance specific to your situation, please consult a qualified immigration attorney.
      </p>
      <p id="copyright" className="text-center">Copyright © HT Immigration Solutions, All Rights Reserved.</p>
    </div>
  </footer>
);

// Home, Navbar, and Footer have been moved to components/default and imports updated in App.tsx.

export default Footer;
