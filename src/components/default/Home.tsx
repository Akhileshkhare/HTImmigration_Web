import React from 'react';

// Home, Navbar, and Footer have been moved to components/default and imports updated in App.tsx.

const Home: React.FC = () => (
  <div className="bg-white min-h-screen text-left flex flex-col items-center py-10 px-4 pt-[100px] pb-20">
    <div className="max-w-7xl w-full px-0 md:px-10 ">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <img src="/home-page.png" alt="HT Immigration Solutions Logo" className="object-contain" />
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0097b2] mb-4 leading-tight">
            HTImmigrationSolutions
          </h1>
          <p className="text-[22px] text-gray-700 mb-4">
            HTImmigrationSolutions is a U.S. immigration law firm with a focus on representing individuals, research institutions, and corporations across all 50 states in employment-based immigration petitions.
          </p>
          <p className="text-[22px] text-gray-700 mb-4">
            Our Attorney, Anurag Nayak, himself being an immigrant who first came to the USA as a PHD student on F1 visa then worked on H1B visa and finally got his Green Card under EB-1B category. With personal experience, we understand the challenges faced by immigrants and offer unparalleled insight into how USCIS evaluates various immigration petitions. We especially specialize in talent-based immigration categories such as:
          </p>
          <ul className="list-disc pl-6 text-[21px] text-gray-800 mb-4">
            <li>EB-2 NIW (National Interest Waiver)</li>
            <li>EB-1A (Individuals of Extraordinary Ability)</li>
            <li>EB-1B (Outstanding Researchers/Professors)</li>
            <li>EB-1C (Foreign Executives and Managers)</li>
            <li>O-1 (Individuals of Extraordinary Ability)</li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-[#e6fafd] border-l-4 border-[#0097b2] p-6 rounded shadow">
          <h2 className="text-xl font-bold text-[#0097b2] mb-2">Attorney-Led, Individually Tailored Petitions</h2>
          <p className="text-gray-700 text-[19px]">Our attorney directly consults with the client and every case is individually crafted to highlight the individual's qualification according to the immigration laws and the latest adjudication trends.</p>
        </div>
        <div className="bg-[#e6fafd] border-l-4 border-[#0097b2] p-6 rounded shadow">
          <h2 className="text-xl font-bold text-[#0097b2] mb-2">Approval or Refund®</h2>
          <p className="text-gray-700 text-[19px]">After evaluation, we provide Approval or Refund service for the eligible cases. If an Approval or Refund service eligible case is not approved, we will refund our attorney fee in full. This offer reflects our confidence in immigration laws and commitment to the success of your immigration petition.</p>
        </div>
        {/* <div className="bg-[#e6fafd] border-l-4 border-[#0097b2] p-6 rounded shadow">
          <h2 className="text-xl font-bold text-[#0097b2] mb-2">Trusted by Thousands</h2>
          <p className="text-gray-700 text-[19px]">We are trusted by professionals from top universities, national laboratories, Fortune 500 companies, startups, and leading medical institutions. Most of our clients come to us through personal referrals.</p>
        </div> */}
      </div>
      {/* <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#0097b2] mb-6">Client Testimonials</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex bg-white border rounded shadow p-6 w-full md:w-1/2 flex-col relative">
            <div className="flex-1 flex flex-col justify-between h-full">
              <p className="text-left text-[20px] text-gray-700 mb-4">“It is with great pleasure that I express my highest gratitude and respect for HT Immigration Solutions. Their team diligently worked on my application and provided me with the best advice and expertise regarding my I-140 case. My process was approved within the standard processing time. I am now, undoubtedly, working with them again to apply for the I-485. Highly recommended!”</p>
              <div className="text-right font-semibold text-[#0097b2]">— L. O., Senior Applications Engineer</div>
            </div>
          </div>
          <div className="flex bg-white border rounded shadow p-6 w-full md:w-1/2 flex-col relative">
            <div className="flex-1 flex flex-col justify-between h-full">
              <p className="text-left text-[20px] text-gray-700 mb-4">“My I-140 petition under NIW category got approved. I have a PhD in mechanical engineering and was a postdoctoral fellow at the time of submitting my petition. I am impressed by their professionalism, timely responses, and dedication in emphasizing every aspect of my work and research. I highly recommend HT Immigration Solutions.”</p>
              <div className="text-right font-semibold text-[#0097b2]">— V. V.</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <div className="flex bg-white border rounded shadow p-6 w-full md:w-1/2 flex-col relative">
            <div className="flex-1 flex flex-col justify-between h-full">
              <p className="text-left text-[20px] text-gray-700 mb-4">“The efforts put forth by HT Immigration Solutions have been instrumental in obtaining the approvals for my O1-A and EB-1B (I-140) petitions. The logical constructs and inferences laid down by my team of lawyers to construct the reasoning as to why I may be a suitable candidate is outstanding. Very well done!”</p>
              <div className="text-right font-semibold text-[#0097b2]">— P. D., Senior Research Scientist</div>
            </div>
          </div>
          <div className="flex bg-white border rounded shadow p-6 w-full md:w-1/2 flex-col relative">
            <div className="flex-1 flex flex-col justify-between h-full">
              <p className="text-left text-[20px] text-gray-700 mb-4">“The team at HT Immigration Solutions are very professional and responsive. My I-140 NIW EB-2 was approved recently and I truly appreciate all the patience and efforts that their team did for my case. Good luck everyone!”</p>
              <div className="text-right font-semibold text-[#0097b2]">— A. S., Teaching/Research Assistant</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <div className="flex bg-white border rounded shadow p-6 w-full md:w-1/2 flex-col relative">
            <div className="flex-1 flex flex-col justify-between h-full">
              <p className="text-left text-[20px] text-gray-700 mb-4">“It has been a pleasure working with the HT Immigration Solutions Team. I always received prompt, courteous and professional responses from them throughout the EB1A filing process. They guided me in developing the material for the reference letters, drafted the letters in a timely manner and prepared a strong case which eventually led to success. I am really grateful to them for all their help.”</p>
              <div className="text-right font-semibold text-[#0097b2]">— V. J., Senior Engineer</div>
            </div>
          </div>
          <div className="flex bg-white border rounded shadow p-6 w-full md:w-1/2 flex-col relative">
            <div className="flex-1 flex flex-col justify-between h-full">
              <p className="text-left text-[20px] text-gray-700 mb-4">“The folks at HT Immigration Solutions know what they are doing and did a fantastic job. They are extremely knowledgeable and helped me throughout the application process. Their letters were of top quality and I would recommend them any day for any immigration related matters. Kudos to the team!”</p>
              <div className="text-right font-semibold text-[#0097b2]">— A. S., Principal Consultant</div>
            </div>
          </div>
        </div>
        <div className="text-right mt-4">
          <a href="/client_testimonials" className="text-[#0097b2] underline font-semibold">Read More Testimonials &rarr;</a>
        </div>
      </div> */}
      {/* <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#0097b2] mb-2">Latest Information</h2>
        <ul className="pl-6 text-gray-800 space-y-1 text-[21px]">
          <li><a href="#" className="text-[#0097b2] hover:underline">895 Approvals in March 2025 and 2,623 Approvals in 2025 for I-140 EB1A, EB1B, EB-2 NIW and O1 Petitions (2025-06-06)</a></li>
          <li><a href="#" className="text-[#0097b2] hover:underline">Q&amp;A on New Visa Policy Affecting Mainland Chinese and Hong Kong applicants (2025-06-06)</a></li>
          <li><a href="#" className="text-[#0097b2] hover:underline">NIW Appeal Sustained by AAO After Denial by TSC Officer XM1698 (2025-05-22)</a></li>
          <li><a href="#" className="text-[#0097b2] hover:underline">Overcoming Denial – A Strategic Appeal Secured Our Client’s NIW Approval and Reinstalled the Priority Date (2025-05-20)</a></li>
          <li><a href="#" className="text-[#0097b2] hover:underline">I-485 Filing Eligibility (2025-05-14)</a></li>
        </ul>
        <div className="text-right mt-2">
          <a href="/latest_information" className="text-[#0097b2] underline font-semibold">Read More &rarr;</a>
        </div>
      </div> */}
      {/* <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#0097b2] mb-2">Our Mission</h2>
        <div className='p-8'>
          <p className="text-gray-700 text-[21px] mb-2">With more than 61,000 EB-1A, EB-1B, EB-2 NIW and O-1 cases approved, we have first-hand information on the manner in which the USCIS adjudicates I-140 cases. Our firm’s huge database of successful cases gives you unprecedented insight into USCIS adjudication trends. We carefully analyze the data for all of our cases and apply the results of our analyses toward giving our clients up-to-date advice and adapting our strategies such that we remain on par with the ever-shifting landscape of immigration law in the U.S.</p>
          <p className="text-gray-700 text-[21px]">Our clients are usually impressed with how well we understand their research and work. Our insight and understanding stems from the fact that we have handled many cases with elements similar to yours already, and this helps us devise the best strategies for each individual petition.</p>
        </div>
      </div>
      <div className="text-center mt-10">
        <a href="/contact_us" className="inline-block bg-[#0097b2] text-white px-6 py-3 rounded shadow hover:bg-gray-700 font-semibold transition">Contact Us</a>
        <span className="mx-2">or</span>
        <a href="/free_evaluation" className="inline-block bg-white border border-[#0097b2] text-[#0097b2] px-6 py-3 rounded shadow hover:bg-gray-700 hover:text-white font-semibold transition">Free Evaluation</a>
      </div> */}
    </div>
  </div>
);

export default Home;
