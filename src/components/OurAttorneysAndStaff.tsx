import React from 'react';

const OurAttorneysAndStaff: React.FC = () => (
  <div className="bg-white min-h-screen text-left flex flex-col items-center py-10 px-4 pt-20">
    <div className="max-w-7xl w-full px-0 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <img src="/logo.png" alt="HT Immigration Solutions Logo" className="w-40 h-40 md:w-56 md:h-56 object-contain" />
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0097b2] mb-4 leading-tight">Anurag Nayak, Attorney</h1>
          <p className="text-[21px] text-gray-700 mb-2">Our Attorney, Anurag Nayak, is uniquely qualified in understanding of immigration laws not only through education but also through personal living experiences. He first came to the USA as a PHD Student on F1 VISA. After completion of his PHD from Utah State University, he has worked on H1B VISA and then got his green card under EB1-B category.</p>
          <p className="text-[21px] text-gray-700 mb-2">Anurag Nayak has extensive research experience (publications, citations and international recognition) which enabled him in securing I-140 approvals under both NIW and EB1-B categories. He realized the legal challenges faced by the immigrants in the USA through his personal experiences as well as experiences of his family and friends. His journey to legal education and research originated from his personal needs but soon grew out to the desire to help his friends and the immigrant community at large. He started a tax preparation service, httaxsolutions.com, primarily focusing on various tax preparation needs of the immigrant community. Upon completion of his legal education, he started this Immigration Law Firm, the HTImmigrationSolutions.com, with focus on assisting individuals in navigating challenges of the immigration process in the USA.</p>
        </div>
      </div>
   
    </div>
  </div>
);

export default OurAttorneysAndStaff;
