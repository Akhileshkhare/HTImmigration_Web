import React from 'react';

const OurAttorneysAndStaff: React.FC = () => (
  <div className="bg-white min-h-screen text-left flex flex-col items-center py-10 px-4 pt-20">
    <div className="max-w-7xl w-full px-0 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <img src="/logo.png" alt="HT Immigration Solutions Logo" className="w-40 h-40 md:w-56 md:h-56 object-contain" />
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0097b2] mb-4 leading-tight">Our Attorneys and Staff</h1>
          <p className="text-[21px] text-gray-700 mb-2">Our team consists of highly qualified attorneys and staff who are dedicated to providing exceptional legal services. We work collaboratively to ensure each case receives the attention and expertise it deserves.</p>
          <p className="text-[21px] text-gray-700 mb-2">Our attorneys are experienced in handling complex immigration matters and are committed to helping clients achieve their immigration goals.</p>
        </div>
      </div>
     <div className="bg-gray-50 border-l-4 border-[#0097b2] p-6 rounded mb-8 shadow">
        <h2 className="text-2xl font-bold text-[#0097b2] mb-2">Meet Our Team</h2>
        <ul className="pl-6 text-gray-800 space-y-1 text-[21px]">
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Experienced immigration attorneys</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Dedicated support staff</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Collaborative approach</li>
        </ul>
      </div>
    </div>
  </div>
);

export default OurAttorneysAndStaff;
