import React from 'react';

const FreeEvaluation: React.FC = () => (
  <div className="bg-white min-h-screen text-left flex flex-col items-center py-10 px-4 pt-20">
    <div className="max-w-7xl w-full px-0 md:px-10">
      <h1 className="text-4xl font-extrabold text-[#0097b2] mb-6">Free Evaluation</h1>
      <p className="text-[21px] text-gray-700 mb-4">HT Immigration Solutions offers a free, comprehensive evaluation of your eligibility for U.S. permanent residency or non-immigrant visa petitions. Our attorneys will review your case and respond within 24 business hours.</p>
      <h2 className="text-2xl font-bold text-[#0097b2] mt-8 mb-2">Who will benefit from a free evaluation?</h2>
      <ul className="list-disc pl-6 text-[20px] text-gray-800 mb-4">
        <li>Anyone interested in a precise and comprehensive evaluation of their chance of obtaining U.S. permanent residency through employment-based petitions (EB-2, NIW, EB1-A, EB1-B).</li>
        <li>Anyone wondering if they are eligible for our Approval or Refund® Service Package.</li>
        <li>Anyone interested in knowing their chance of obtaining a petition-based non-immigrant visa (O-1).</li>
      </ul>
      <h2 className="text-2xl font-bold text-[#0097b2] mt-8 mb-2">How to request a free evaluation?</h2>
      <p className="text-[20px] text-gray-700 mb-2">Please submit your resume and basic information online. Click the button below to access our secure evaluation form:</p>
      <div className="my-4">
        <a href="https://wenzo.wegreened.com/case_evaluation" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0097b2] text-white px-6 py-3 rounded shadow hover:bg-gray-700 font-semibold transition">Submit Free Evaluation Request</a>
      </div>
      <p className="text-[19px] text-gray-700 mb-2">If you already have an approved I-140 and are seeking guidance on I-485 adjustment of status, Immigrant Visa Processing (IVP), or a J waiver, please email us at <a href="mailto:info@htimmigrationsolutions.com" className="text-[#0097b2] underline">info@htimmigrationsolutions.com</a>.</p>
      <h2 className="text-2xl font-bold text-[#0097b2] mt-8 mb-2">What information should you send us?</h2>
      <ul className="list-decimal pl-6 text-[20px] text-gray-800 mb-4">
        <li>Your most updated CV/resume.</li>
        <li>Your current field of specialization (e.g. Mechanical Engineering, Internal Medicine, etc.).</li>
        <li>Your current U.S. position (job title, employer/institution, worksite state, and whether you plan to change positions within 6 months).</li>
        <li>If in the U.S., your current visa status and expiration date.</li>
        <li>Your country of birth (and spouse's, if applicable).</li>
        <li>If a researcher: total citations, independent citations, and Google Scholar profile link (if available).</li>
        <li>Whether you will continue research and publish papers; any ongoing projects to be published soon.</li>
        <li>Any experience judging the work of others (e.g. peer review, editorial board, etc.).</li>
      </ul>
      <p className="text-[19px] text-gray-700 mb-4">The more detailed your information, the more precise our evaluation will be. Our attorneys will provide a free evaluation within 24 business hours. If you do not receive a response, please check your spam folder or email us again.</p>
      <h2 className="text-2xl font-bold text-[#0097b2] mt-8 mb-2">Please note:</h2>
      <ul className="list-disc pl-6 text-[19px] text-gray-800 mb-4">
        <li>An attorney-client relationship does not arise based on the free evaluation provided.</li>
        <li>We do not charge any fee for the free evaluation or to answer questions about your case.</li>
        <li>If you wish to discuss your case with our attorneys, we are happy to schedule a time to talk after we provide the evaluation and determine that we are able to take your case.</li>
      </ul>
      <div className="text-center mt-10">
        <a href="/contact_us" className="inline-block bg-[#0097b2] text-white px-6 py-3 rounded shadow hover:bg-gray-700 font-semibold transition">Contact Us</a>
        <span className="mx-2">or</span>
        <a href="/legal_fees_of_our_services" className="inline-block bg-white border border-[#0097b2] text-[#0097b2] px-6 py-3 rounded shadow hover:bg-gray-700 hover:text-white font-semibold transition">View Legal Fees</a>
      </div>
    </div>
  </div>
);

export default FreeEvaluation;
