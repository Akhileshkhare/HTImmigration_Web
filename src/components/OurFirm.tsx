import React from 'react';

const OurFirm: React.FC = () => (
  <div className="bg-white min-h-screen text-left flex flex-col items-center py-10 px-4 pt-20">
    <div className="max-w-7xl w-full px-0 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0097b2] mb-4 leading-tight">
            Our Firm
          </h1>
          <p className="text-[21px] text-gray-700 mb-2">
            HT Immigration Solutions is dedicated to representing corporations, research institutions, entrepreneurs, and individuals in I-140 immigration petitions. We specialize in employment-based immigration and have a proven record of high success rates in EB2-NIW, EB1-A, EB1-B, and O-1 categories.
          </p>
          <p className="text-[21px] text-gray-700 mb-2">
            Our team provides up-to-date advice and adapts strategies to the ever-changing landscape of U.S. immigration law. We have helped thousands of clients with diverse backgrounds and credentials, ensuring each case receives personalized attention and the highest level of expertise.
          </p>
          <p className="text-[21px] text-gray-700 mb-2">
            Our reputation is built on referrals and positive client experiences. We strive to provide a green card application experience that clients are happy to share with friends and colleagues.
          </p>
        </div>
      </div>
     <div className="bg-gray-50 border-l-4 border-[#0097b2] p-6 rounded mb-8 shadow">
        <h2 className="text-2xl font-bold text-[#0097b2] mb-2">Why Choose HT Immigration Solutions?</h2>
        <ul className="pl-6 text-gray-800 space-y-1 text-[21px]">
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Proven track record with over 58,000 approved cases</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Personalized strategies for every client</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Expertise in complex employment-based immigration</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Trusted by clients nationwide</li>
        </ul>
      </div>
    </div>
  </div>
);

export default OurFirm;
