import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import EvaluationForm from "./EvaluationForm"; // Adjust the import based on your file structure

const NAV_LINKS = [
  { label: "Home", to: "/" },
  {
    label: "Our Firm",
    submenu: [    
      { to: "/about_the_firm", label: "About the Firm" },
      { to: "/our_attorneys_and_staff", label: "Our Attorneys and Staff" },
      { to: "/why_choose_our_team", label: "Why Choose Our Team" },
    ],
  },
  {
    label: "Services",
    submenu: [
      { to: "/eb2_niw", label: "EB2-NIW (National Interest Waiver)" },
      { to: "/niw_for_entrepreneurs", label: "NIW for Entrepreneurs" },
      { to: "/eb1a", label: "EB1-A (Extraordinary Ability)" },
      { to: "/eb1b", label: "EB1-B (Outstanding Researcher)" },
      { to: "/perm", label: "PERM (Labor Certification)" },
      {
        label: "I-485 Green Card Application",
        submenu: [
          { to: "/i485_adjustment_of_status", label: "I-485 Adjustment of Status (Green Card)" },
          { to: "/i140_i485_concurrent", label: "I-140 and I-485 Concurrent Filing" },
        ],
      },
      { to: "/immigrant_visa_processing", label: "Immigrant Visa Processing" },
      {  label: "Non Immigration Visas", submenu: [ 
        { to: "/h1b_visa", label: "H1B Visa (Specialty Occupation Worker)" },
        { to: "/l1_visa", label: "L1 visa (Intra Company Transferee)" },
        { to: "/o1_o3_visa", label: "O1/O3 visa (Extraordinary Ability)" },
        { to: "/j1_visa_and_waiver", label: "J-1 Visa and Waiver (Exchange Scholar)" },
        { to: "/e1_e2_visa", label: "E1/E2 visa (Treaty Trader and Investor)" },
      ] },
     
    ],
  },
  {
    label: "Legal Fees",
    submenu: [
      { to: "/free_evaluation", label: "Free Evaluation" },
      { to: "/legal_fees_of_our_services", label: "Legal Fees of Our Services" },
    ],
  }, 
  // {
  //   label: "Knowledge Center",
  //   submenu: [
  //     { to: "/knowledge_center", label: "Knowledge Center" },
  //     { to: "/faq", label: "Frequently Asked Questions" },
  //     { to: "/latest_information", label: "Latest Information" },
  //     { to: "/current_visa_bulletin", label: "Current Visa Bulletin" },
  //   ],
  // },
  // {
  //   label: "Approvals",
  //   submenu: [
  //     { to: "/our_approvals", label: "Our Approvals" },
  //     { to: "/our_success_stories", label: "Our Success Stories" },
  //     { to: "/latest_niw_eb1_o1_approvals", label: "Latest NIW/EB-1/O-1 Approvals" },
  //     { to: "/client_testimonials", label: "Client Testimonials" },
  //   ],
  // },
   { label: "Contact Us", to: "/contact_us" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState<string | null>(null);
  const [showEvalModal, setShowEvalModal] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      setDropdownOpen(null);
      setNestedDropdownOpen(null);
    }
  }, [menuOpen]);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Top bar for right-aligned actions */}
        <div className="flex justify-between items-start pt-2">
          <div className="flex-shrink-0 flex flex-col items-center">
            <img className="h-20 w-auto" src="/logo.png" alt="Logo" />
            <span className="text-sm text-gray-50 px-2 bg-gray-600 font-semibold mt-1 tracking-wide" style={{ textShadow: '1px 1px 3px #000' }}>Empowering Your American Dream</span>
          </div>
          <div className="flex flex-col items-end gap-1">
           <div className="hidden md:flex flex-col items-left gap-2 mb-2">
             <button
              type="button"
              onClick={() => setShowEvalModal(true)}
              className="text-[#0096b1] hover:underline font-semibold text-xl flex items-center gap-1 focus:outline-none"
              aria-label="Open Free Evaluation Form"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>
              Click Here to Submit Free Evaluation Request
            </button>
            <div className="flex items-center gap-2 text-[#0096b1] text-xl font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.52l.3 1.2a2 2 0 01-1.45 2.45l-.96.24a11.05 11.05 0 005.52 5.52l.24-.96a2 2 0 012.45-1.45l1.2.3A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V9a2 2 0 012-2z" /></svg>
              <span>+1 (888) 666-096911</span>
            </div>
                  <div className="flex items-center gap-2 text-[#0096b1] text-xl font-semibold">
  <div className="bg-yellow-100 border border-yellow-300 rounded px-4 py-2 text-yellow-900 text-sm flex flex-col items-center">
    <span>If you want tax solutions,</span>
    <a
      href="https://www.httaxsolutions.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 underline font-semibold mt-1"
    >
      Click here to visit HT Tax Solutions
    </a>
  </div>
</div>
           </div>
         
                    <div className="hidden md:flex space-x-6">
            {NAV_LINKS.map((item) =>
              item.submenu ? (
                <div className="relative group" key={item.label}>
                  <button
                    onClick={() => setDropdownOpen(dropdownOpen === item.label ? null : item.label)}
                    className="text-gray-800 font-medium hover:text-green-700 flex items-center gap-1"
                  >
                    {item.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {dropdownOpen === item.label && (
                    <div className="absolute top-full text-left left-0 mt-2 bg-white border rounded shadow-lg z-50 w-max min-w-[220px]">
                      {item.submenu.map((sub) =>
                        sub.submenu ? (
                          <div className="relative group" key={sub.label}>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setNestedDropdownOpen(nestedDropdownOpen === sub.label ? null : sub.label);
                              }}
                              className="w-full text-left px-4 py-2 hover:bg-green-100 text-gray-800 flex items-center gap-1"
                            >
                              {sub.label}
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </button>
                            {nestedDropdownOpen === sub.label && (
                              <div className="absolute top-0 left-full ml-2 bg-white border rounded shadow-lg z-50 min-w-[220px]">
                                {sub.submenu.map((nested) => (
                                  <NavLink
                                    key={nested.to}
                                    to={nested.to}
                                    className={({ isActive }) =>
                                      `block px-4 py-2 hover:bg-green-100 text-gray-800 ${
                                        isActive ? "text-green-700 font-semibold" : ""
                                      }`
                                    }
                                    onClick={() => {
                                      setDropdownOpen(null);
                                      setNestedDropdownOpen(null);
                                      window.scrollTo(0, 0);
                                    }}
                                  >
                                    {nested.label}
                                  </NavLink>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <NavLink
                            key={sub.to}
                            to={sub.to}
                            className={({ isActive }) =>
                              `block px-4 py-2 hover:bg-green-100 text-gray-800 ${
                                isActive ? "text-green-700 font-semibold" : ""
                              }`
                            }
                            onClick={() => {
                              setDropdownOpen(null);
                              setNestedDropdownOpen(null);
                              window.scrollTo(0, 0);
                            }}
                          >
                            {sub.label}
                          </NavLink>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-gray-800 text-left hover:text-green-700 font-medium ${
                      isActive ? "text-green-700" : ""
                    }`
                  }
                  end={item.to === "/"}
                  onClick={() => {
                    setDropdownOpen(null);
                    setNestedDropdownOpen(null);
                    setMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
           </div>
        </div>

      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 space-y-2 shadow-md">
          {NAV_LINKS.map((item) =>
            item.submenu ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setDropdownOpen(dropdownOpen === item.label ? null : item.label)
                  }
                  className="w-full text-left font-medium flex justify-between items-center py-2"
                >
                  {item.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {dropdownOpen === item.label && (
                  <div className="ml-4 space-y-1">
                    {item.submenu.map((sub) =>
                      sub.submenu ? (
                        <div className="relative" key={sub.label}>
                          <button
                            onClick={() =>
                              setNestedDropdownOpen(nestedDropdownOpen === sub.label ? null : sub.label)
                            }
                            className="block px-2 py-1 text-gray-700 hover:text-green-700 w-full text-left flex justify-between items-center"
                          >
                            {sub.label}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                          </button>
                          {nestedDropdownOpen === sub.label && (
                            <div className="ml-4 space-y-1">
                              {sub.submenu.map((nested) => (
                                <NavLink
                                  key={nested.to}
                                  to={nested.to}
                                  className="block px-2 py-1 text-gray-700 hover:text-green-700"
                                  onClick={() => {
                                    setMenuOpen(false);
                                    setDropdownOpen(null);
                                    setNestedDropdownOpen(null);
                                    window.scrollTo(0, 0);
                                  }}
                                >
                                  {nested.label}
                                </NavLink>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <NavLink
                          key={sub.to}
                          to={sub.to}
                          className="block px-2 py-1 text-gray-700 hover:text-green-700"
                          onClick={() => {
                            setMenuOpen(false);
                            setDropdownOpen(null);
                            setNestedDropdownOpen(null);
                            window.scrollTo(0, 0);
                          }}
                        >
                          {sub.label}
                        </NavLink>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className="block py-2 text-gray-800 hover:text-green-700 font-medium"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdownOpen(null);
                  setNestedDropdownOpen(null);
                  window.scrollTo(0, 0);
                }}
              >
                {item.label}
              </NavLink>
            )
          )}
        </div>
      )}
      {showEvalModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-6xl w-full">
           
            <EvaluationForm />
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;

/*

Home, Navbar, and Footer have been moved to components/default and imports updated in App.tsx.

*/
