import React from 'react';

const AboutTheFirm: React.FC = () => (
  <div className="bg-white min-h-screen text-left flex flex-col items-center py-10 px-4 pt-20">
    <div className="max-w-7xl w-full px-0 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-1">
        <img src="/logo.png" alt="HT Immigration Solutions Logo" className="w-40 h-40 md:w-56 md:h-56 object-contain" />
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0097b2] mb-4 leading-tight">About the Firm</h1>
          <p className="text-[21px] text-gray-700 mb-2">HTImmigrationSolutions is a U.S. immigration law firm with a focus on representing individuals, research institutions, and corporations across all 50 states in employment-based immigration petitions. We understand the challenges faced by immigrants and offer unparalleled insight into how USCIS evaluates various immigration petitions. We especially specialize in talent-based immigration categories such as EB1-A, EB1-B, EB1-C and EB2-NIW, and O-1 categories.</p>
        </div>
      </div>
      <div>
        <p className="text-[21px] text-gray-700 mb-2">Our team provides up-to-date advice and adapts strategies to the ever-changing landscape of U.S. immigration law. We ensure that each case receives personalized attention from our attorney.</p>
        <p className="text-[21px] text-gray-700 mb-2">Our reputation is built on referrals and positive client experiences. We strive to provide a green card application experience that clients are happy to share with friends and colleagues.</p>
      </div>
           <div className="bg-gray-50 border-l-4 border-[#0097b2] p-6 rounded mb-8 shadow">
        <h2 className="text-2xl font-bold text-[#0097b2] mb-2">Our Values</h2>
        <ul className="pl-6 text-gray-800 space-y-1 text-[21px]">
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Attorney supervision to each case </li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Dedicated support staff</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Collaborative approach</li>
        </ul>
      </div>
     {/* <div className="bg-gray-50 border-l-4 border-[#0097b2] p-6 rounded mb-8 shadow">
        <h2 className="text-2xl font-bold text-[#0097b2] mb-2">Our Values</h2>
        <ul className="pl-6 text-gray-800 space-y-1 text-[21px]">
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Client-focused solutions</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Strategic legal guidance</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Commitment to excellence</li>
        </ul>
      </div> */}
    </div>
  </div>
);

export default AboutTheFirm;
