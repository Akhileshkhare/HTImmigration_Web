import React from 'react';

const ContactUs: React.FC = () => (
  <div className="bg-white min-h-screen text-left flex flex-col items-center py-10 px-4 pt-20">
    <div className="max-w-7xl w-full px-0 md:px-10">

            <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <img src="/home-page.png" alt="HT Immigration Solutions Logo" className="object-contain" />
        <div className='p-4 flex flex-col items-start justify-center'>
         
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0097b2] mb-4 leading-tight">Contact Us</h1>
          <h2 className="text-2xl font-bold text-[#0097b2] mb-2">Our Office</h2>
          <div className="text-[21px] text-gray-700 mb-2">
            <div>3216 N 169th Ave, Omaha NE 68116</div>
            <div>Phone: <a href="tel:2083406630" className="text-[#0097b2]">208-340-6630</a></div>
            <div>Email: <a href="mailto:htimmigrationsolutions@gmail.com" className="text-[#0097b2]">htimmigrationsolutions@gmail.com</a> or <a href="mailto:info@htimmigraionsolutions.com" className="text-[#0097b2]">info@htimmigraionsolutions.com</a></div>
          </div>
       
        </div>
      </div>
   
    </div>
  </div>
);

export default ContactUs;
