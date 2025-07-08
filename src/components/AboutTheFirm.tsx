import React from 'react';

const AboutTheFirm: React.FC = () => (
  <div className="bg-white min-h-screen text-left flex flex-col items-center py-10 px-4 pt-20">
    <div className="max-w-7xl w-full px-0 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-1">
        <img src="/logo.png" alt="HT Immigration Solutions Logo" className="w-40 h-40 md:w-56 md:h-56 object-contain" />
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0097b2] mb-4 leading-tight">About the Firm</h1>
          <p className="text-[21px] text-gray-700 mb-2">HT Immigration Solutions is a leading U.S. immigration law firm with a focus on employment-based immigration petitions. Our attorneys have extensive experience and a deep understanding of USCIS adjudication trends, allowing us to provide strategic and effective representation for our clients.</p>
          <p className="text-[21px] text-gray-700 mb-2">We are committed to excellence, professionalism, and personalized service for every client.</p>
        </div>
        
      </div>
       <div>
         
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
     <div className="bg-gray-50 border-l-4 border-[#0097b2] p-6 rounded mb-8 shadow">
        <h2 className="text-2xl font-bold text-[#0097b2] mb-2">Our Values</h2>
        <ul className="pl-6 text-gray-800 space-y-1 text-[21px]">
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Client-focused solutions</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Strategic legal guidance</li>
          <li className="flex items-start gap-2"><span className="mt-1" style={{color:'#0097b2'}}>&#8594;</span>Commitment to excellence</li>
        </ul>
      </div>
    </div>
  </div>
);

export default AboutTheFirm;
