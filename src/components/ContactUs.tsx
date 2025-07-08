import React from 'react';

const ContactUs: React.FC = () => (
  <div className="bg-white min-h-screen text-left flex flex-col items-center py-10 px-4 pt-20">
    <div className="max-w-7xl w-full px-0 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <img src="/logo.png" alt="HT Immigration Solutions Logo" className="w-40 h-40 md:w-56 md:h-56 object-contain" />
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0097b2] mb-4 leading-tight">Contact Us</h1>
          <p className="text-[21px] text-gray-700 mb-2">For a comprehensive list of our office locations, phone numbers, and email addresses, please see below. We are committed to providing prompt and helpful responses to all inquiries.</p>
        </div>
      </div>
     <div className="bg-gray-50 border-l-4 border-[#0097b2] p-6 rounded mb-8 shadow">
        <h2 className="text-2xl font-bold text-[#0097b2] mb-2">Our Offices</h2>
        <ul className="pl-6 text-gray-800 space-y-1 text-[21px]">
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Ann Arbor (Principal Office): 2723 South State St., Suite 150, Ann Arbor, MI, 48104</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Cambridge: Harvard Square, One Mifflin Pl Suite 400, Cambridge, MA 02138</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Pasadena: 100 W Walnut St., 6th Floor, Pasadena, CA 91124-0001</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Austin: 9442 N Capital of Texas Hwy, Suite 500, Austin, TX 78759</li>
        </ul>
        <div className="mt-6 text-[21px] text-gray-700">
          <p>Phone: <a href="tel:8886660969" className="text-[#0097b2] underline">888.666.0969</a> (Toll Free)</p>
          <p>Email: <a href="mailto:law@wegreened.com" className="text-[#0097b2] underline">law@wegreened.com</a></p>
          <p>Office Hours: Monday ~ Friday: 9:30 AM to 5:30 PM Eastern Time Zone.</p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;
