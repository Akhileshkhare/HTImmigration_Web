import React from 'react';

const NIWForEntrepreneurs: React.FC = () => (
  <div className="bg-white min-h-screen text-left flex flex-col items-center py-10 px-4 pt-20">
    <div className="max-w-7xl w-full px-0 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0097b2] mb-4 leading-tight">NIW for Entrepreneurs</h1>

          <h2 className="text-2xl font-bold text-[#0097b2] mt-8 mb-2">National Interest Waiver (NIW) for Entrepreneurs</h2>
          <p className="text-[21px] text-gray-700 mb-2">With recent updates to the USCIS Policy Manual, entrepreneurs now have a viable opportunity to apply for the National Interest Waiver (NIW) and bypass traditional sponsorship requirements for U.S. immigration. Entrepreneurs can leverage the NIW to establish their businesses in the U.S. while contributing to the country’s economy, innovation, and public benefit.</p>

          <h2 className="text-2xl font-bold text-[#0097b2] mt-8 mb-2">Introduction: What is NIW for Entrepreneurs?</h2>
          <p className="text-[21px] text-gray-700 mb-2">The NIW allows individuals to self-petition for a green card if their work significantly benefits the United States. While often associated with academics, recent policy updates highlight its application to entrepreneurial endeavors. Entrepreneurs can qualify if they demonstrate that their proposed endeavor has substantial merit and national importance and that they are well-positioned to advance it.</p>

          <h2 className="text-2xl font-bold text-[#0097b2] mt-8 mb-2">Comparing NIW for Academia and Entrepreneurs</h2>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full text-[18px] text-gray-700 border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border">Focus of the Endeavor</th>
                  <th className="px-4 py-2 border">Academia</th>
                  <th className="px-4 py-2 border">Entrepreneurs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">Focus</td>
                  <td className="px-4 py-2 border">Research with national or global impact in a specific field</td>
                  <td className="px-4 py-2 border">Innovative business addressing critical U.S. needs</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Evidentiary Basis</td>
                  <td className="px-4 py-2 border">Peer-reviewed publications, citations, and academic awards</td>
                  <td className="px-4 py-2 border">Business plans, financial growth, investments, and innovation</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Evaluation Metrics</td>
                  <td className="px-4 py-2 border">Impact on the academic field and recognition by peers</td>
                  <td className="px-4 py-2 border">Job creation, economic contribution, and national impact</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Key Documents</td>
                  <td className="px-4 py-2 border">Publication list, recommendation letters, and research summary</td>
                  <td className="px-4 py-2 border">Business plan, financial records, IP, and letters of support</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Unique Considerations</td>
                  <td className="px-4 py-2 border">Proven track record of research excellence</td>
                  <td className="px-4 py-2 border">Active role in U.S. entity and demonstrated entrepreneurial success</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Third-Party Validation</td>
                  <td className="px-4 py-2 border">Academic endorsements, citations in scholarly work</td>
                  <td className="px-4 py-2 border">Industry endorsements, incubator/accelerator participation, and investor support</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#0097b2] mt-8 mb-2">Core Requirements for NIW Entrepreneurs</h2>
          <ol className="list-decimal ml-8 text-[21px] text-gray-700 mb-2">
            <li><b>Substantial Merit:</b> The business must have significant value in terms of economic, cultural, educational, or societal contributions. Examples include creating innovative technologies, addressing public health issues, or promoting sustainability.</li>
            <li><b>National Importance:</b> The business must go beyond local or regional impact, addressing broader national or global challenges such as job creation, innovation, or economic growth.</li>
            <li><b>Entrepreneur’s Positioning:</b> Entrepreneurs must demonstrate their qualifications and ability to execute the endeavor effectively, supported by a strong track record, relevant expertise, and necessary resources.</li>
          </ol>

          <h2 className="text-2xl font-bold text-[#0097b2] mt-8 mb-2">How Entrepreneurs Can Meet NIW Standards</h2>
          <h3 className="text-xl font-semibold text-[#0097b2] mt-6 mb-2">Substantial Merit</h3>
          <ul className="list-disc ml-8 text-[21px] text-gray-700 mb-2">
            <li>Provide a comprehensive business plan detailing objectives, market impact, and innovation.</li>
            <li>Include data or research demonstrating the business’s economic or societal value.</li>
            <li>Submit evidence of grants, awards, or endorsements supporting the endeavor.</li>
          </ul>
          <h3 className="text-xl font-semibold text-[#0097b2] mt-6 mb-2">National Importance</h3>
          <ul className="list-disc ml-8 text-[21px] text-gray-700 mb-2">
            <li>Demonstrate the business’s contribution to critical U.S. needs, such as job creation or public welfare.</li>
            <li>Provide evidence of national or global significance, such as addressing industry-wide challenges.</li>
          </ul>
          <h3 className="text-xl font-semibold text-[#0097b2] mt-6 mb-2">Entrepreneur’s Positioning</h3>
          <ul className="list-disc ml-8 text-[21px] text-gray-700 mb-2">
            <li>Highlight qualifications, such as education, experience, or prior business successes.</li>
            <li>Prove an active and central role in the business, such as founder, CEO, or key decision-maker.</li>
            <li>Provide evidence of support from investors, accelerators, or industry leaders.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0097b2] mt-8 mb-2">Specific Evidentiary Considerations for Entrepreneurs</h2>
          <ul className="list-disc ml-8 text-[21px] text-gray-700 mb-2">
            <li>Ownership and Role: Proof of active involvement in the U.S.-based entity.</li>
            <li>Investments: Evidence of secured funding from reputable sources.</li>
            <li>Incubator/Accelerator Participation: Documentation of participation in prestigious programs.</li>
            <li>Intellectual Property: Patents or trademarks demonstrating innovation.</li>
            <li>Media Recognition: Articles showcasing achievements and their significance.</li>
            <li>Revenue and Job Creation: Metrics highlighting financial growth and economic impact.</li>
            <li>Third-Party Validation: Letters from investors, industry experts, or policymakers.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0097b2] mt-8 mb-2">Key Documents for Entrepreneurs</h2>
          <ul className="list-disc ml-8 text-[21px] text-gray-700 mb-2">
            <li>Comprehensive business plan with financial projections.</li>
            <li>Investment agreements or funding documentation.</li>
            <li>Letters of support from industry leaders and investors.</li>
            <li>Media coverage and recognition.</li>
            <li>Intellectual property documents and awards.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0097b2] mt-8 mb-2">Conclusion: Why Choose NIW?</h2>
          <p className="text-[21px] text-gray-700 mb-2">Whether you’re an academic making groundbreaking discoveries or an entrepreneur driving innovation, the NIW offers a flexible pathway to U.S. residency. Entrepreneurs, in particular, now have a clear and viable route to establish businesses that contribute to the U.S. economy and society.</p>
          <p className="text-[21px] text-gray-700 mb-2">At WeGreened.com - North America Immigration Law Group, we specialize in creating strong, personalized NIW petitions for entrepreneurs and academics alike. With an approval rate exceeding 99% for cases under our "Approval or Refund®" service, we have the expertise to help you succeed.</p>

          <h2 className="text-2xl font-bold text-[#0097b2] mt-8 mb-2">More Information</h2>
          <ul className="list-disc ml-8 text-[21px] text-gray-700 mb-2">
            <li><a href="https://www.wegreened.com/niw/" className="text-[#0097b2] underline">EB2-NIW (National Interest Waiver)</a></li>
            <li><a href="https://www.wegreened.com/EB1A" className="text-[#0097b2] underline">EB1-A (Extraordinary Ability)</a></li>
            <li><a href="https://www.wegreened.com/EB1B-Outstanding-Professors-and-Researchers" className="text-[#0097b2] underline">EB1-B (Outstanding Researcher)</a></li>
            <li><a href="https://www.wegreened.com/PERM-Labor-Certification" className="text-[#0097b2] underline">PERM (Labor Certification)</a></li>
            <li><a href="https://www.wegreened.com/I-485-adjustment-of-status" className="text-[#0097b2] underline">I-485 Adjustment of Status (Green Card)</a></li>
            <li><a href="https://www.wegreened.com/I-140-and-I-485-concurrent-filing" className="text-[#0097b2] underline">I-140 and I-485 Concurrent Filing</a></li>
            <li><a href="https://www.wegreened.com/Immigrant-Visa-Processing" className="text-[#0097b2] underline">Immigrant Visa Processing</a></li>
            <li><a href="https://www.wegreened.com/H1B_visa-occupation-worker" className="text-[#0097b2] underline">H1B Visa (Specialty Occupation Worker)</a></li>
            <li><a href="https://www.wegreened.com/L-Visa-Intracompany-Transferee-Visa" className="text-[#0097b2] underline">L1 visa (Intra Company Transferee)</a></li>
            <li><a href="https://www.wegreened.com/o1-visa" className="text-[#0097b2] underline">O1/O3 visa (Extraordinary Ability)</a></li>
            <li><a href="https://www.wegreened.com/J1-Visa-Waiver" className="text-[#0097b2] underline">J-1 Visa and Waiver (Exchange Scholar)</a></li>
            <li><a href="https://www.wegreened.com/E1-E2-Treaty-Trader-Treaty-Investor-Visa" className="text-[#0097b2] underline">E1/E2 visa (Treaty Trader and Investor)</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default NIWForEntrepreneurs;