import React from 'react';

const WhyChooseOurTeam: React.FC = () => (
  <div className="bg-white min-h-screen text-left flex flex-col items-center py-10 px-4 pt-20">
    <div className="max-w-7xl w-full px-0 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <img src="/logo.png" alt="HT Immigration Solutions Logo" className="w-40 h-40 md:w-56 md:h-56 object-contain" />
        <div>
          {/* <h1 className="text-4xl md:text-5xl font-extrabold text-[#0097b2] mb-4 leading-tight">Reasons to Choose HTImmigrationSolutions</h1> */}
          <p className="text-[22px] text-gray-700 mb-4">Discover the key reasons why you should select the HTImmigrationSolutions as your trusted choice for employment-based immigration petitions in the USA.</p>
          {/* <h2 className="text-2xl font-bold text-[#0097b2] mb-4">7 Reasons to Choose HT Immigration Solutions</h2> */}
        </div>
      </div>
      <div className="bg-gray-50 border-l-4 border-[#0097b2] p-6 rounded mb-8 shadow">
        <h2 className="text-2xl font-bold text-[#0097b2] mb-4">Reasons to Choose HTImmigrationSolutions</h2>
        <ol className="list-decimal pl-6 text-gray-800 space-y-4 text-[21px]">
          <li>
            <span className="font-bold text-[#0097b2]">Case Approval or Full Refund Policy:</span> For eligible NIW/EB1A/EB1B cases, we promise approval or a full refund of our attorney fee. Our confidence is backed by proven strategies and thousands of successful outcomes.
          </li>
          <li>
            <span className="font-bold text-[#0097b2]">We Draft All Letters for You:</span> We save you significant time by drafting all reference, testimonial, and petition letters for your case. Our team studies your technical materials and crafts comprehensive, high-quality documents—no templates or generic drafts.
          </li>
          <li>
            <span className="font-bold text-[#0097b2]">Attorney-Led, Fast Turnaround:</span> Every case is handled or supervised by our attorneys from start to finish. We promise a 10-business-day turnaround for document preparation and strive to respond to client requests within 24 hours on business days.
          </li>
        </ol>
      </div>
      {/* <div className="bg-white border-l-4 border-[#0097b2] p-6 rounded shadow mb-8">
        <h2 className="text-2xl font-bold text-[#0097b2] mb-2">Our Commitment</h2>
        <p className="text-[21px] text-gray-700 mb-2">At HT Immigration Solutions, we are dedicated to providing personalized, effective, and timely legal services. Our reputation is built on transparency, expertise, and a genuine commitment to your success.</p>
        <p className="text-[21px] text-gray-700">Most of our clients come from referrals, reflecting our reputation for excellence and client satisfaction. <a href="/client_testimonials" className="text-[#0097b2] underline font-semibold">Read our client testimonials &rarr;</a></p>
      </div> */}
      {/* <div className="text-center mt-10">
        <a href="/contact_us" className="inline-block bg-[#0097b2] text-white px-6 py-3 rounded shadow hover:bg-gray-700 font-semibold transition">Contact Us</a>
        <span className="mx-2">or</span>
        <a href="/free_evaluation" className="inline-block bg-white border border-[#0097b2] text-[#0097b2] px-6 py-3 rounded shadow hover:bg-gray-700 hover:text-white font-semibold transition">Free Evaluation</a>
      </div> */}
    </div>
  </div>
);

export default WhyChooseOurTeam;
