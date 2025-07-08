import React from 'react';

const ClientTestimonials: React.FC = () => (
  <div className="bg-white min-h-screen text-left flex flex-col items-center py-10 px-4 pt-20">
    <div className="max-w-7xl w-full px-0 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <img src="/logo.png" alt="HT Immigration Solutions Logo" className="w-40 h-40 md:w-56 md:h-56 object-contain" />
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0097b2] mb-4 leading-tight">Client Testimonials</h1>
          <p className="text-[21px] text-gray-700 mb-2">“The team at HT Immigration Solutions are very professional and responsive. My I-140 NIW EB-2 was approved recently and I truly appreciate all the patience and efforts that their team did for my case.”</p>
          <p className="text-[21px] text-gray-700 mb-2">“It was an incredible experience working with HT Immigration Solutions lawyers. I got my EB1A approved in 10 days. They were so perfect in their work and took care of every little detail necessary.”</p>
          <p className="text-[21px] text-gray-700 mb-2">Read more testimonials on our website to see how we've helped clients achieve their immigration goals.</p>
        </div>
      </div>
    </div>
  </div>
);

export default ClientTestimonials;
