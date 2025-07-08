import React from 'react';

const LegalFeesOfOurServices: React.FC = () => (
  <div className="bg-white min-h-screen text-left flex flex-col items-center py-10 px-4 pt-20">
    <div className="max-w-7xl w-full px-0 md:px-10">
      <h1 className="text-4xl font-extrabold text-[#0097b2] mb-6">Legal Fees of Our Services</h1>
      <h2 className="text-2xl font-bold text-[#0097b2] mb-2">What does the attorney fee cover?</h2>
      <ul className="list-disc pl-6 text-[20px] text-gray-800 mb-4">
        <li>Unlimited inquiries regarding your petition</li>
        <li>Detailed discussion regarding reference candidates</li>
        <li>Drafting all reference letters (if applicable) with a guaranteed timeline</li>
        <li>Drafting testimonial letters as needed</li>
        <li>Drafting a petition letter (guaranteed completion in 10 business days)</li>
        <li>Preparing the petition package and filing with USCIS</li>
        <li>Responding to RFE (Request for Evidence) or NOID (Notice of Intent to Deny) if applicable</li>
      </ul>
      <p className="text-[19px] text-gray-700 mb-6">We provide the most comprehensive service for NIW and EB-1 petitions, including drafting recommendation letters from scratch, petition letters, and responding to RFEs at no extra charge.</p>
      <h2 className="text-2xl font-bold text-[#0097b2] mb-2">Types of Service We Provide</h2>
      <ol className="list-decimal pl-6 text-[20px] text-gray-800 mb-4 space-y-2">
        <li><span className="font-bold text-[#0097b2]">Approval or Refund® Service:</span> For clients with strong objective credentials, we offer our Approval or Refund® service. If your case is denied, the attorney fee is refunded as specified in the retainer agreement.</li>
        <li><span className="font-bold text-[#0097b2]">Approval or Refund® Service with Conditions:</span> For clients with great potential but lacking certain credentials, we provide improvement guidelines and conditional refund policy. If the condition is met, the refund applies; otherwise, you may use our Standard or Approval or Refiling™ Service.</li>
        <li><span className="font-bold text-[#0097b2]">Standard Service:</span> For cases with a good chance of approval but not overwhelmingly strong credentials, we offer our Standard Service. If denied, the attorney fee is not refunded and a refile requires an additional fee.</li>
        <li><span className="font-bold text-[#0097b2]">Approval or Refiling™ Service:</span> For clients with good credentials but not qualifying for Approval or Refund®, we offer Approval or Refiling™. If denied, we will refile your case at no additional attorney fee.</li>
        <li><span className="font-bold text-[#0097b2]">Recommendation Letters Drafting Service:</span> For EB-1B and O1 cases where employers do not allow outside law firms to file, we can draft up to seven recommendation letters, help select experts, and revise letters to your satisfaction.</li>
      </ol>
      <div className="my-6">
        <a href="https://wenzo.wegreened.com/case_evaluation" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0097b2] text-white px-6 py-3 rounded shadow hover:bg-gray-700 font-semibold transition">Request a Free Evaluation</a>
      </div>
      <p className="text-[19px] text-gray-700 mb-4">For a detailed quote or to discuss which service is right for you, please <a href="/contact_us" className="text-[#0097b2] underline font-semibold">contact us</a>. We are committed to providing clear and fair pricing for all clients.</p>
      <p className="text-[18px] text-gray-600 mb-2">No legal advice is intended on this page. Please contact us for advice on your specific situation.</p>
    </div>
  </div>
);

export default LegalFeesOfOurServices;
