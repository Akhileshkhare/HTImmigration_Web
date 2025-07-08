import React from 'react';

const ImmigrantVisaProcessing: React.FC = () => {
  return (
  <div className="max-w-7xl text-gray-900 text-left text-lg mx-auto px-10 pt-[100px] bg-white shadow-lg rounded-lg">
     
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Immigrant Visa Processing</h1>
      <p>The Immigration and Nationality Act (INA) offers an individual two primary paths to permanent resident status (a green card). An individual who is the beneficiary of an approved immigrant petition and has an immigrant visa number immediately available may apply at a U.S. Department of State consulate abroad for an immigrant visa in order to come to the United States and be admitted as a permanent resident. This pathway is referred to as “Immigration Visa Processing (IVP).”</p>
      <p><span className="bg-yellow-100 px-1 rounded">Adjustment of status</span> is an alternate process by which an eligible person, <span className="bg-yellow-100 px-1 rounded">who is already in the United States</span>, can apply for permanent resident status without having to return to his/her home country to complete processing.</p>
      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Steps for Immigrant Visa Processing:</h2>
      {/* Step 1 */}
      <div className="flex items-center mb-2 bg-gray-100 shadow">
        <div className="w-8 h-10 flex items-center justify-center bg-[#3a89c9] text-white font-bold  mr-0">1</div>
        <div className='blueNumberArrow mr-3'></div>
        <h3 className="text-lg  font-semibold text-gray-700">File the Employment-Based Immigrant Petition (I-140)</h3>
      </div>
      <p>If you are living outside the United States or living in the United States but choose to apply for your immigrant visa abroad, you will indicate on your I-140 that you will apply for a visa abroad. (See Form I-140, Part 4, 1.a.) This will alert the USCIS that you will be applying for your green card at a U.S. Department of State consulate abroad.</p>
      <p>If you have any dependents (spouse, children) who also wish to apply for a green card based on your approved I-140 you will indicate on your I-140 that they will also apply for a green card outside the U.S. (See Form I-140, Part 7, 1.h.) This will alert the USCIS that they will also be applying for their green card(s) at a U.S. Department of State consulate abroad.</p>
      {/* Step 2 */}
      <div className="flex items-center mt-6 mb-2 bg-gray-100 shadow">
        <div className="w-8 h-10 flex items-center justify-center bg-[#3a89c9] text-white font-bold  mr-0">2</div>
        <div className='blueNumberArrow mr-3'></div>
        <h3 className="text-lg  font-semibold text-gray-700">Wait for a Decision on Your Immigrant Petition</h3>
      </div>
      <p>USCIS notifies the petitioner of its decision. If the petition is approved and if you are the beneficiary of the petition and living outside the United States or living in the United States, but choose to apply for your immigrant visa abroad, USCIS will then send the approved petition to the Department of State’s National Visa Center (NVC), where it will remain until an immigrant visa number is available.</p>
      <p>You can find out whether or not an immigration visa number is available by checking the U.S. Department of State Visa Bulletin website.</p>
      <p>For <span className="bg-yellow-100 px-1 rounded">first preference employment-based immigrant visas</span> (i.e., EB1A, EB1B, and EB1C), all priority dates are generally current. Therefore, immigrant visa numbers are generally immediately available for beneficiaries of these types of petitions.</p>
      <p>For <span className="bg-yellow-100 px-1 rounded">second preference employment-based immigrant visas</span> (i.e., NIW, EB-2 PERM), priority dates are generally current for all beneficiaries except those born in India or China. Beneficiaries born in India or China must wait until their priority date is current before immigrant visa processing can begin.</p>
      <div className="flex items-center text-yellow-700 my-2"><i className="fa fa-exclamation-circle mr-2" /> <span>Please Note - The general rule for chargeability is in determining to which country’s quota the beneficiary’s visa gets charged to, the beneficiary is charged to the country of birth. The country of citizenship/nationality does not control. There are some exceptions to the general rule:</span></div>
      <ol className="list-upper-alpha ml-6 mt-2 space-y-1">
        <li>A child may be charged to the foreign state of either parent where accompanying or following to join;</li>
        <li>A spouse may be charged to the state of accompanying spouse;</li>
        <li>An alien born in a country where neither parent was born or resided may be charged to foreign state of either parent (no accompanying requirement).</li>
      </ol>
      <p>Therefore, for example, if the beneficiary of the I-140 was born in India or China but his/her spouse was not born in India or China, immigrant visa numbers may be immediately available based on the rule of <span className="bg-yellow-100 px-1 rounded">cross-chargeability</span>. Please contact our law firm if you think a cross-chargeability exception may apply to your case and we will discuss your options.</p>
      {/* Step 3 */}
      <div className="flex items-center mt-6 mb-2 bg-gray-100 shadow">
        <div className="w-8 h-10 flex items-center justify-center bg-[#3a89c9] text-white font-bold  mr-0">3</div>
        <div className='blueNumberArrow mr-3'></div>
        <h3 className="text-lg  font-semibold text-gray-700">Wait for Notification from the National Visa Center</h3>
      </div>
      <p>The National Visa Center, which is responsible for the collection of visa application fees and supporting documentation, will notify the petitioner and beneficiary when the visa petition is received and again when an immigrant visa number is about to become available. They will also notify the petitioner and beneficiary of when they must submit immigrant visa processing fees (commonly referred to as “fee bills”) and when supporting documentation must be submitted.</p>
      <p>First, you will get an “Immigrant Visa Application Processing Fee Bill Invoice” from the NVC for each person in your family that is doing IVP. The invoice will indicate the processing fee (“Amount Due”) and will provide payment instructions. Please follow the instructions very carefully.</p>
      <p>Once NVC receives the processing fees, you will be sent detailed instructions regarding documents that must be sent to NVC. Please follow the instructions very carefully and provide all the documents requested. <span className="bg-yellow-100 px-1 rounded">Do <b>not</b> submit documents unless they were requested by NVC.</span></p>
      {/* Step 4 */}
      <div className="flex items-center mt-6 mb-2 bg-gray-100 shadow">
        <div className="w-8 h-10 flex items-center justify-center bg-[#3a89c9] text-white font-bold  mr-0">4</div>
        <div className='blueNumberArrow mr-3'></div>
        <h3 className="text-lg  font-semibold text-gray-700">Prepare for your Interview</h3>
      </div>
      <p>Once the NVC receives all the requested documents, you will be notified that an interview has been scheduled. After you receive notification from NVC that your interview has been scheduled you must do the following to prepare for the interview:</p>
      <ol className="list-upper-alpha ml-6 mt-2 space-y-1">
        <li>Carefully review the information sent by the NVC noting the date, time, and location of your immigrant visa interview;</li>
        <li>Prepare for the <span className="bg-yellow-100 px-1 rounded">Medical Examination</span>;</li>
        <li>Ensure that all required original documents will be available at the time of the interview. Any documents that you submitted to the NVC will be transferred to the interviewing officer;</li>
        <li>Obtain the required photographs;</li>
        <li>Review the <a href="https://travel.state.gov/content/visas/en/immigrate/immigrant-process/interview.html" target="_blank" className="text-blue-700 underline">U.S. Embassy/Consulate General-specific Interview Guidelines</a>;</li>
        <li>Review the <a href="https://travel.state.gov/content/visas/en/immigrate/immigrant-process/interview/prepare/notices.html" target="_blank" className="text-blue-700 underline">Important Visa Interview Notices</a>;</li>
        <li>Review the <a href="https://travel.state.gov/content/visas/en/immigrate/immigrant-process/interview/prepare/appointment.html" target="_blank" className="text-blue-700 underline">Immigrant Visa Interview FAQs</a>;</li>
        <li>Review the questions and answers on all forms and documents submitted so far.</li>
      </ol>
      <p>For more information on interview preparation, please see the <a href="https://travel.state.gov/content/visas/en/immigrate/immigrant-process.html" target="_blank" className="text-blue-700 underline">U.S. Department of State website</a>.</p>
      {/* Step 5 */}
      <div className="flex items-center mt-6 mb-2 bg-gray-100 shadow">
        <div className="w-8 h-10 flex items-center justify-center bg-[#3a89c9] text-white font-bold  mr-0">5</div>
        <div className='blueNumberArrow mr-3'></div>
        <h3 className="text-lg  font-semibold text-gray-700">Go to Your Interview Appointment</h3>
      </div>
      <p>Be sure to dress neatly, professionally, and even conservatively. Due to security concerns and space limitations, interested parties such as friends, relatives, attorneys, or business contacts are not permitted to attend the interview. It is recommended that you do not arrive more than 15 minutes before your interview appointment time, but make sure that you are on time. You may have to wait beyond your scheduled appointment time due to the volume of applicants, so it is suggested that you bring books, crossword puzzles, etc.</p>
      <p>There may be only one case number for the primary applicant and his/her spouse and/or children. If so, you will all be called together. The primary applicant’s file will be prepared first, then they will move to the spouse’s file and then to the children (if any).</p>
      <div className="flex items-center text-yellow-700 my-2"><i className="fa fa-exclamation-circle mr-2" /> <span>Please Note – <span className="bg-yellow-100 px-1 rounded">If any of your children were born in the U.S., you must carry their U.S. passports with you</span>.</span></div>
      <p>Make sure that you answer all of the interview questions truthfully and consistently throughout. If you do not know the answer to a question, say so. Do not make up an answer. Any false statement or concealment of a material fact may result in your permanent exclusion from the U.S. At the end of the interview you will be asked to take an oath that everything said in the interview is correct and there is no fraud, etc. The officer will then have you sign the DS 230 Part II.</p>
      <p><span className="bg-yellow-100 px-1 rounded">Interviews are usually conducted in English.</span> If you are not comfortable speaking English you should check with the U.S. Consulate where your interview will take place to see what your options are for conducting the interview in another language or with a translator.</p>
      <p>You will not be fingerprinted at the interview. You will be fingerprinted at your port of entry in the United States.</p>
      <div className="flex items-center text-yellow-700 my-2"><i className="fa fa-exclamation-circle mr-2" /> <span>Please Note – <span className="bg-yellow-100 px-1 rounded">no assurances can be given in advance that a green card will be issued.</span> A consular officer can only make a decision on your green card application after your application and documents have been reviewed and you have been personally interviewed. <span className="bg-yellow-100 px-1 rounded">It is <b>strongly</b> advised that you do not make travel arrangements, dispose of property, or give up your job until your green card has been issued.</span></span></div>
      {/* Step 6 */}
      <div className="flex items-center mt-6 mb-2 bg-gray-100 shadow">
        <div className="w-8 h-10 flex items-center justify-center bg-[#3a89c9] text-white font-bold  mr-0">6</div>
        <div className='blueNumberArrow mr-3'></div>
        <h3 className="text-lg  font-semibold text-gray-700">Notify NVC of Any Changes</h3>
      </div>
      <p>You do not need to contact the National Visa Center about your petition, they will contact you for the information they need. You should, however, contact the NVC if there is a change in your personal situation or if you change your address. It is important to notify the NVC if you reach the age of 21 for a child or have a change in your marital status, as this may affect your eligibility or visa availability.</p>
      <p><span className="bg-yellow-100 px-1 rounded">E-mail is the NVC’s preferred method of communication.</span> The NVC’s e-mail address is <a href="mailto:NVCINQUIRY@state.gov" className="text-blue-700 underline">NVCINQUIRY@state.gov</a>.</p>
      <div className="flex items-center text-yellow-700 my-2"><i className="fa fa-exclamation-circle mr-2" /> <span>Please Note - <span className="bg-yellow-100 px-1 rounded">Use your personal e-mail account to contact the NVC.</span> If you click on the email address provided and your computer does not automatically connect to your personal email, copy and paste the above e-mail address into an e-mail using your personal e-mail account.</span></div>
      <p>In order to ensure a prompt response, please be sure to do the following:</p>
      <ol className="list-upper-alpha ml-6 mt-2 space-y-1">
        <li>Enter your NVC Case Number or USCIS Receipt Number in the Subject Line of the e-mail.</li>
        <li>Provide the applicant’s name and date of birth and the petitioner’s name and date of birth.</li>
        <li>If the petition is employment-based, include the employer's company/organization name.</li>
        <li>Provide the attorney of record’s name, law firm and address (if applicable).</li>
      </ol>
      <p>You can also contact NVC by phone – (603) 334-0700 (Hours: Monday through Friday from 7:00 AM to 12:00 AM (Eastern Time)). Customer Service Representatives are available to respond to case inquiries. You must provide the following information to receive a case specific response:</p>
      <ol className="list-upper-alpha ml-6 mt-2 space-y-1">
        <li>Your NVC Case Number or USCIS receipt number</li>
        <li>The applicant’s name and date of birth and the petitioner’s name and date of birth</li>
        <li>If you are an attorney, include the name of the law office requesting the information</li>
      </ol>
      <div className="flex items-center text-yellow-700 my-2"><i className="fa fa-exclamation-circle mr-2" /> <span>Please note - This service requires the use of a touch-tone telephone.</span></div>
      <p>Finally, you can contact the NVC by postal mail. Written questions about a case should be sent to:</p>
      <p className="mt-0 font-semibold">National Visa Center<br />Attn: WC<br />31 Rochester Ave. Suite 200<br />Portsmouth, NH 03801-2915</p>
      <p>Forms, documents, and photographs should be sent to:</p>
      <p className="mt-0 font-semibold">National Visa Center<br />Attn: DR<br />31 Rochester Ave. Suite 100<br />Portsmouth, NH 03801-2914</p>
      {/* Step 7 */}
      <div className="flex items-center mt-6 mb-2 bg-gray-100 shadow">
        <div className="w-8 h-10 flex items-center justify-center bg-[#3a89c9] text-white font-bold  mr-0">7</div>
        <div className='blueNumberArrow mr-3'></div>
        <h3 className="text-lg  font-semibold text-gray-700">After Your Green Card is Granted</h3>
      </div>
      <p>If you are granted an immigrant visa, the consular officer will give you a packet of information. This packet is known as a “Visa Packet.” You should <span className="bg-yellow-100 px-1 rounded">not</span> open this packet.</p>
      <p>Upon your arrival to the United States, you should give your Visa Packet to the Customs and Border Protection officer at the port of entry. You will also be fingerprinted at the port of entry. You will be inspected by a Customs and Border Protection officer and if found admissible, will be admitted as a permanent resident of the United States, which gives you the authority to live and work in the United States permanently.</p>
      <p>If your visa application is refused, you will be given a refusal sheet that will indicate the basis for your refusal. If applicable, it will tell you what actions you could take to overcome the refusal.</p>
      {/* Step 8 */}
      <div className="flex items-center mt-6 mb-2 bg-gray-100 shadow">
        <div className="w-8 h-10 flex items-center justify-center bg-[#3a89c9] text-white font-bold  mr-0">8</div>
        <div className='blueNumberArrow mr-3'></div>
        <h4 className="text-lg  font-semibold text-gray-700">Receive Your Green Card</h4>
      </div>
      <p>You will be mailed your green card. If you do not receive your green card within 30 days of your arrival, please call the USCIS National Customer Service Center at 1-800-375-5283 or visit your local USCIS office by making an InfoPass appointment.</p>
    </div>
  );
};

export default ImmigrantVisaProcessing;
