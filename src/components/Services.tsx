import React from 'react';

const Services: React.FC = () => (
  <div className="bg-white min-h-screen text-left flex flex-col items-center py-10 px-4 pt-20">
    <div className="max-w-7xl w-full px-0 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <img src="/logo.png" alt="HT Immigration Solutions Logo" className="w-40 h-40 md:w-56 md:h-56 object-contain" />
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0097b2] mb-4 leading-tight">Services</h1>
          <p className="text-[21px] text-gray-700 mb-2">We provide comprehensive legal services for employment-based immigration and related matters. Our experienced attorneys guide clients through every step of the process.</p>
        </div>
      </div>
     <div className="bg-gray-50 border-l-4 border-[#0097b2] p-6 rounded mb-8 shadow">
        <h2 className="text-2xl font-bold text-[#0097b2] mb-2">Our Practice Areas</h2>
        <ul className="pl-6 text-gray-800 space-y-1 text-[21px]">
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>EB2-NIW (National Interest Waiver)</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>NIW for Entrepreneurs</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>EB1-A (Extraordinary Ability)</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>EB1-B (Outstanding Researcher)</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>PERM (Labor Certification)</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>I-485 Green Card Application</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>I-485 Adjustment of Status (Green Card)</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>I-140 and I-485 Concurrent Filing</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Immigrant Visa Processing</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Non Immigration Visas</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>H1B Visa (Specialty Occupation Worker)</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>L1 visa (Intra Company Transferee)</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>O1/O3 visa (Extraordinary Ability)</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>J-1 Visa and Waiver (Exchange Scholar)</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>E1/E2 visa (Treaty Trader and Investor)</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Services;
