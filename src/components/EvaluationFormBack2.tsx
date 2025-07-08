import React, { useState } from 'react';

const countryList = [
  "Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua and Barbuda","Arabian Peninsula","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Born on Board Ship","Bosnia and Herzegovina","Botswana","Brazil","British National Overseas","British Solomon Islands","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burma","Burundi","Cambodia","Cameroon","Campbell Island","Canada","Canary Islands","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Czechoslovakia","Democratic Republic of Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Federated States of Micronesia","Fiji","Finland","France","French Guiana","French Polynesia","French Southern and Antarctic","Gabon","Gambia","Gaza Strip","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guyana","Haiti","Honduras","Hong Kong SAR","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Issas","Italy","Ivory Coast","Jamaica","Japan","Jerusalem","Jordan","Kampuchea","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau SAR","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","North Korea","North Macedonia","North Vietnam","Northern Ireland","Northern Mariana Islands","Northern Yemen","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn Islands","Poland","Portugal","Principe and Sao Tome","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Martin","San Marino","Sanaa","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovak Republic","Slovenia","Solomons Islands","Somalia","South Africa","South Korea","South Sudan","South Vietnam","Spain","Spanish North Africa","Sri Lanka","St. Helena","St. Kitts","St. Lucia","St. Pierre Miquelon","St. Pierre and Miquelon","St. Vincent and the Grenadines","Stateless","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","The Kingdom of Eswatini (Eswatini)","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","U. S. Virgin Islands","US","USSR","Uganda","Ukraine","United Arab Emirates","United Arab Republic","United Kingdom","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Wallis and Futuna Islands","West Bank","Western Sahara","Western Samoa","Yemen","Yugoslavia","Zaire","Zambia","Zanzibar","Zimbabwe","Other"
];

const fieldList = [
  "Agricultural Sciences","Biology & Biochemistry","Chemistry","Clinical Medicine","Computer Science","Economics & Business","Engineering","Environment/Ecology","Geosciences","Immunology","Materials Science","Mathematics","Microbiology","Molecular Biology & Genetics","Neuroscience & Behavior","Pharmacology & Toxicology","Physics","Plant & Animal Science","Psychiatry/Psychology","Social Sciences, General","Space Science","Others"
];

const degreeTypes = ["PhD","Master","MD","MBBS","Bachelor","Other"];
const degreeInProgressTypes = ["PhD (in progress)","Master (in progress)","MD (in progress)","MBBS (in progress)","Bachelor (in progress)","Other"];

const petitionCategories = [
  { value: "NIW", label: "EB-2 NIW (National Interest Waiver – self-petitioned)" },
  { value: "EB1A", label: "EB-1A (Alien of Extraordinary Ability – self-petitioned)" },
  { value: "EB1B", label: "EB-1B (Outstanding Researcher/Professor – employer-sponsored)" },
  { value: "O1", label: "O-1A (Extraordinary Ability – employer-sponsored)" },
  { value: "NotSure", label: "I'm not sure. Please recommend based on my credentials." },
];

const hearsFormOptions = [
  "Google Search",
  "Immigration Forum",
  "Immigration Facebook Group",
  "Telegram",
  "Referral",
  "Other"
];

export default function EvaluationForm() {
  const [step, setStep] = useState(1);  const [form, setForm] = useState({
    title: '',
    title_other: '',
    first_name: '',
    last_name: '',
    birth_country: '',
    email: '',
    phone: '',
    category: [] as string[],
    visa_status: '',
    visa_expiration_date: '',
    field_esi: '',
    field_esi_other: '',
    degrees: [{ type: '', major: '', university: '', year: '', related: '' }],
    degreesInProgress: [{ type: '', major: '', university: '', expected: '', related: '' }],
    employment_status: '',
    citation_profiles: '',
    citation_number: '',
    publication: '0',
    published_year: '',
    no_publications: false,
    review_number: '',
    confirm_thank_you_email: false,
    owns_patents: '',
    patents: '',
    funding_received: '',
    fundingDetails: '',
    ongoing_project: '',
    ongoing_project_note: '',
    related_field_work: '',
    attachment: null as File | null,
    hears_form: [] as string[],
    read_notice: false,
    additional_comments: '',
  });

  // Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm({ ...form, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMultiCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setForm((prev) => {
      const arr = prev[name as keyof typeof prev] as string[];
      return {
        ...prev,
        [name]: checked ? [...arr, value] : arr.filter((v) => v !== value),
      };
    });
  };

  const handleDegreeChange = (idx: number, field: string, value: string) => {
    const newDegrees = [...form.degrees];
    newDegrees[idx] = { ...newDegrees[idx], [field]: value };
    setForm({ ...form, degrees: newDegrees });
  };
  const handleDegreeInProgressChange = (idx: number, field: string, value: string) => {
    const newDegrees = [...form.degreesInProgress];
    newDegrees[idx] = { ...newDegrees[idx], [field]: value };
    setForm({ ...form, degreesInProgress: newDegrees });
  };
  const addDegree = () => setForm({ ...form, degrees: [...form.degrees, { type: '', major: '', university: '', year: '', related: '' }] });
  const removeDegree = (idx: number) => setForm({ ...form, degrees: form.degrees.filter((_, i) => i !== idx) });
  const addDegreeInProgress = () => setForm({ ...form, degreesInProgress: [...form.degreesInProgress, { type: '', major: '', university: '', expected: '', related: '' }] });
  const removeDegreeInProgress = (idx: number) => setForm({ ...form, degreesInProgress: form.degreesInProgress.filter((_, i) => i !== idx) });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, attachment: e.target.files && e.target.files[0] });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep((s) => Math.min(s + 1, 4));
  };
  const handleBack = (e: React.FormEvent) => {
    e.preventDefault();
    setStep((s) => Math.max(s - 1, 1));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', form);
    alert('Form submitted!');
  };

  return (
    <form onSubmit={step === 4 ? handleSubmit : handleNext} className="space-y-6 p-4 h-[90vh] text-left max-w-6xl mx-auto">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Evaluation Questionnaire</h2>
        <div className="mb-2"><small>Complete the questionnaire below to expedite your case evaluation.</small></div>
        {/* <div className="mb-2"><small>We will respond regarding your case within 24 hours during business days!</small></div>
        <div className="mb-0"><small>The evaluation process is entirely free of charge, and at no point will our firm request any payment or financial information via email, phone, social media or any other form of communication.</small></div> */}
      </div>
      <div className='h-[65vh] overflow-y-auto'>

      
      {step === 1 && (
        <>
          <div className="bg-blue-900 text-white p-4 rounded mb-4">
            <h4 className="text-lg font-bold mb-2">Part 1: Background Information and Petition Category Interest</h4>
            <h5 className="mb-0"><i>This section helps us understand your basic information and preferred petition category.</i></h5>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">1. Name and Salutation</label>
            <div className="mb-2">Please select the appropriate salutation to address you in future correspondence.</div>
            <div className="flex flex-wrap gap-4 mb-2">
              {['Mr.', 'Ms.', 'Dr.', 'Other'].map((t) => (
                <label key={t} className="flex items-center gap-1">
                  <input type="radio" name="title" value={t} checked={form.title === t} onChange={handleRadioChange} /> {t}
                </label>
              ))}
              {form.title === 'Other' && (
                <input type="text" name="title_other" placeholder="Please specify" value={form.title_other} onChange={handleChange} className="border p-1 rounded ml-2" />
              )}
            </div>
            <div className="mb-1">Please enter your full legal name as shown in your passport or official documents.</div>
            <div className="flex flex-wrap gap-4">
              <div>
                <input type="text" name="first_name" placeholder="First Name" value={form.first_name} onChange={handleChange} className="border p-1 rounded" />
                <div className="text-xs text-gray-500">First Name</div>
              </div>
              <div>
                <input type="text" name="last_name" placeholder="Last Name" value={form.last_name} onChange={handleChange} className="border p-1 rounded" />
                <div className="text-xs text-gray-500">Last Name</div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">2. Country of Birth</label>
            <div className="mb-1">As shown on your birth certificate or passport</div>
            <select name="birth_country" value={form.birth_country} onChange={handleChange} className="border p-1 rounded w-full">
              <option value="">Select Country</option>
              {countryList.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">3. Petition Category</label>
            <div className="mb-1">Please select the type(s) of petition you are considering:</div>
            {petitionCategories.map((cat) => (
              <label key={cat.value} className="block">
                <input type="checkbox" name="category" value={cat.value} checked={form.category.includes(cat.value)} onChange={handleMultiCheckbox} /> {cat.label}
              </label>
            ))}
          </div>
          <div className="mb-4">
            <fieldset className="form-group group-list mb-1 required">
              <legend className="font-semibold text-blue-800">4. Current Visa Status</legend>
              <div className="mb-1">Please select your current visa status, if applicable.</div>
              <p className="text-muted mb-2">If you are not currently in the U.S. or do not hold a valid U.S. visa, please select "Not in the U.S."</p>
              <div className="flex flex-wrap gap-4">
                {['F-1', 'OPT', 'H-1B', 'J-1', 'O-1', 'Not in the U.S.', 'Other'].map((status, idx) => (
                  <label key={status} className="custom-control custom-control-inline custom-radio">
                    <input
                      id={`evlVisaStatus_BV_option_${idx}`}
                      type="radio"
                      name="visa_status"
                      className="custom-control-input mr-2"
                      value={status}
                      checked={form.visa_status === status}
                      onChange={handleRadioChange}
                    />
                    <span className="custom-control-label">{status}</span>
                  </label>
                ))}
              </div>
              {/* Expiration Date of Authorized Stay - show for all except Not in the U.S. */}
              {form.visa_status && form.visa_status !== 'Not in the U.S.' && (
                <div className="mt-4">
                  <div className="mb-1 font-semibold text-blue-800">Expiration Date of Authorized Stay</div>
                  <p className="text-muted mb-2">(From I-94, I-20, EAD, or DS-2019—not the visa stamp):</p>
                  {form.visa_status === 'Other' ? (
                    <input
                      type="text"
                      name="visa_expiration_date"
                      placeholder="Enter expiration date (MM/DD/YYYY or description)"
                      value={form.visa_expiration_date || ''}
                      onChange={handleChange}
                      className="border p-1 rounded w-full mb-2"
                    />
                  ) : (
                    <input
                      type="date"
                      name="visa_expiration_date"
                      value={form.visa_expiration_date || ''}
                      onChange={handleChange}
                      className="border p-1 rounded w-full mb-2"
                    />
                  )}
                  <p className="form-description text-gray-700 text-xs">
                    Please enter the expiration date of your authorized stay in the U.S. (not the visa stamp). Common sources: I-20 or EAD (F-1/OPT), I-94 (H-1B, O-1, other work visas), or DS-2019 (J-1). If your I-94 says “D/S”, use the date from I-20, EAD, or DS-2019.
                  </p>
                </div>
              )}
            </fieldset>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">5. Field of Study/Expertise</label>
            <div className="mb-1">Your primary field of study or expertise.</div>
            <select name="field_esi" value={form.field_esi} onChange={handleChange} className="border p-1 rounded w-full">
              <option value="">Select Field</option>
              {fieldList.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">6. Contact Information</label>
            <div className="flex flex-wrap gap-4">
              <div className="w-full ">
              <div className="text-md text-gray-800">Please provide your personal email address. We primarily use email for communication.</div>
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-1 rounded w-full" />
                
              </div>
              <div className="w-full ">
              <div className="text-md text-gray-800">Please enter your mobile phone number, including the country code. Only used for record lookup if you call us
</div>
                <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="border p-1 rounded w-full" />
                
              </div>
            </div>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className="bg-blue-900 text-white p-4 rounded mb-4">
            <h4 className="text-lg font-bold mb-2">Part 2: Academic and Professional Background</h4>
            <h5 className="mb-0"><i>This section allows us to evaluate your academic history, professional experience, and research contributions.</i></h5>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">7. Field of Study <span className="text-red-500">*</span></label>
            <div className="mb-1">Please select the academic field/branch that matches your primary research or professional focus.</div>
            <select name="field_esi" value={form.field_esi} onChange={handleChange} className="border p-1 rounded w-full">
              <option value="">Select Field</option>
              {fieldList.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
            {form.field_esi === 'Others' && (
              <input type="text" name="field_esi_other" placeholder="Please specify your exact field" value={form.field_esi_other} onChange={handleChange} className="border p-1 rounded w-full mt-2" />
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">8. Academic Degree(s)</label>
            <div className="mb-1">a. Please list all degrees you have earned (Click “Add” to enter additional degrees.)</div>
            {form.degrees.map((deg, idx) => (
              <div key={idx} className="border p-2 rounded mb-2 bg-gray-50">
                <div className="flex flex-wrap gap-2 mb-1">
                  <select value={deg.type} onChange={e => handleDegreeChange(idx, 'type', e.target.value)} className="border p-1 rounded">
                    <option value="">Degree Type</option>
                    {degreeTypes.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <input type="text" value={deg.major} onChange={e => handleDegreeChange(idx, 'major', e.target.value)} placeholder="Major (e.g. Electrical Engineering)" className="border p-1 rounded" />
                  <input type="text" value={deg.university} onChange={e => handleDegreeChange(idx, 'university', e.target.value)} placeholder="University Name" className="border p-1 rounded" />
                  <input type="text" value={deg.year} onChange={e => handleDegreeChange(idx, 'year', e.target.value)} placeholder="Year" className="border p-1 rounded w-20" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span>Is this degree related to your proposed endeavor or future work in the U.S.?</span>
                  <label><input type="radio" checked={deg.related === 'Yes'} onChange={() => handleDegreeChange(idx, 'related', 'Yes')} /> Yes</label>
                  <label><input type="radio" checked={deg.related === 'No'} onChange={() => handleDegreeChange(idx, 'related', 'No')} /> No</label>
                </div>
                {form.degrees.length > 1 && <button type="button" className="text-red-500 text-xs" onClick={() => removeDegree(idx)}>Remove</button>}
              </div>
            ))}
            <button type="button" className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs" onClick={addDegree}>+ Add Additional Degree</button>
            <div className="mb-1 mt-4">b. Please indicate if you are currently enrolled in an advanced degree program (Click “Add” for extra degrees in progress.)</div>
            {form.degreesInProgress.map((deg, idx) => (
              <div key={idx} className="border p-2 rounded mb-2 bg-gray-50">
                <div className="flex flex-wrap gap-2 mb-1">
                  <select value={deg.type} onChange={e => handleDegreeInProgressChange(idx, 'type', e.target.value)} className="border p-1 rounded">
                    <option value="">Degree Type</option>
                    {degreeInProgressTypes.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <input type="text" value={deg.major} onChange={e => handleDegreeInProgressChange(idx, 'major', e.target.value)} placeholder="Major (e.g. Electrical Engineering)" className="border p-1 rounded" />
                  <input type="text" value={deg.university} onChange={e => handleDegreeInProgressChange(idx, 'university', e.target.value)} placeholder="University Name" className="border p-1 rounded" />
                  <input type="text" value={deg.expected} onChange={e => handleDegreeInProgressChange(idx, 'expected', e.target.value)} placeholder="Expected Graduation Year" className="border p-1 rounded w-32" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span>Is this degree related to your proposed endeavor or future work in the U.S.?</span>
                  <label><input type="radio" checked={deg.related === 'Yes'} onChange={() => handleDegreeInProgressChange(idx, 'related', 'Yes')} /> Yes</label>
                  <label><input type="radio" checked={deg.related === 'No'} onChange={() => handleDegreeInProgressChange(idx, 'related', 'No')} /> No</label>
                </div>
                {form.degreesInProgress.length > 1 && <button type="button" className="text-red-500 text-xs" onClick={() => removeDegreeInProgress(idx)}>Remove</button>}
              </div>
            ))}
            <button type="button" className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs" onClick={addDegreeInProgress}>+ Add Additional Degree In Progress</button>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">9. Are you currently employed? <span className="text-red-500">*</span></label>
            <div className="flex gap-4">
              <label><input type="radio" name="employment_status" value="Yes" checked={form.employment_status === 'Yes'} onChange={handleRadioChange} /> Yes</label>
              <label><input type="radio" name="employment_status" value="No" checked={form.employment_status === 'No'} onChange={handleRadioChange} /> No</label>
            </div>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">10. Citation Profile Link <span className="text-red-500">*</span></label>
            <div className="mb-1">Please provide a link to your Google Scholar, ResearchGate, Impactio, or other citation database profile.</div>
            <input type="text" name="citation_profiles" placeholder="Paste your citation profile link here" value={form.citation_profiles} onChange={handleChange} className="border p-1 rounded w-full" />
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">11. Number of Citations <span className="text-red-500">*</span></label>
            <div className="mb-1">Please enter the highest total count from the available databases. Enter 0 if you do not have any citations.</div>
            <input type="number" name="citation_number" placeholder="Number of Citations" value={form.citation_number} onChange={handleChange} className="border p-1 rounded w-full" />
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">12. Number of Journal Articles / Publications <span className="text-red-500">*</span></label>
            <div className="mb-1">Please enter the total number of your academic publications. (Include peer-reviewed journal articles and conference papers with full proceedings. Do not include posters, abstracts, or unpublished drafts.)</div>
            <input type="number" name="publication" placeholder="Number of Publications" value={form.publication} onChange={handleChange} className="border p-1 rounded w-full" />
            <div className="mt-1">
              <label><input type="checkbox" name="no_publications" onChange={handleChange} checked={form.no_publications} /> I do not have any publications</label>
            </div>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">13. Your Most Recent Research Article</label>
            <div className="mb-1">Please share the year and/or month your most recent reviewed research article was published or accepted for publication.</div>
            <input type="text" name="published_year" placeholder="e.g. 2024-05 or 2024" value={form.published_year} onChange={handleChange} className="border p-1 rounded w-full" />
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">14. Number of Papers Reviewed</label>
            <div className="mb-1">Please enter the number of journal or conference papers you have reviewed as an invited peer reviewer. (We encourage you to list this if you are interested in EB-1A or O-1A visa.)</div>
            <input type="number" name="review_number" placeholder="Number of Papers Reviewed" value={form.review_number} onChange={handleChange} className="border p-1 rounded w-full" />
            <div className="mt-1">
              <label><input type="checkbox" name="confirm_thank_you_email" onChange={handleChange} checked={form.confirm_thank_you_email} /> I confirm the above count can be supported by evidence (e.g. thank you emails, editorial system logs).</label>
            </div>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">15. Do you have any granted or pending patents? <span className="text-red-500">*</span></label>
            <div className="flex gap-4">
              <label><input type="radio" name="owns_patents" value="1" checked={form.owns_patents === '1'} onChange={handleRadioChange} /> Yes</label>
              <label><input type="radio" name="owns_patents" value="2" checked={form.owns_patents === '2'} onChange={handleRadioChange} /> No</label>
            </div>
            {form.owns_patents === '1' && (
              <input type="text" name="patents" placeholder="List Patents" value={form.patents || ''} onChange={handleChange} className="border p-1 rounded w-full mt-1" />
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">16. Have you received any funding for your work? <span className="text-red-500">*</span></label>
            <div className="flex gap-4">
              <label><input type="radio" name="funding_received" value="1" checked={form.funding_received === '1'} onChange={handleRadioChange} /> Yes</label>
              <label><input type="radio" name="funding_received" value="2" checked={form.funding_received === '2'} onChange={handleRadioChange} /> No</label>
            </div>
            {form.funding_received === '1' && (
              <input type="text" name="fundingDetails" placeholder="Source & Scope (e.g. NIH, NSF, national agencies, etc.)" value={form.fundingDetails || ''} onChange={handleChange} className="border p-1 rounded w-full mt-1" />
            )}
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <div className="bg-blue-900 text-white p-4 rounded mb-4">
            <h4 className="text-lg font-bold mb-2">Part 3: Future Plans and Research Continuity</h4>
            <h5 className="mb-0"><i>This section helps us determine your continued contributions and future directions.</i></h5>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">17. Do you continue to conduct research and publish papers that are aligned with your proposed endeavor?</label>
            <div className="mb-1 text-gray-700 text-sm">Ongoing contributions—such as research, publications, patents, or industry leadership—may help demonstrate that your work is important and valued in your field.</div>
            <div className="flex gap-4 mb-2">
              <label><input type="radio" name="ongoing_project" value="yes" onChange={handleRadioChange} checked={form.ongoing_project === 'yes'} /> Yes</label>
              <label><input type="radio" name="ongoing_project" value="no" onChange={handleRadioChange} checked={form.ongoing_project === 'no'} /> No</label>
            </div>
            {form.ongoing_project === 'yes' && (
              <input type="text" name="ongoing_project_note" placeholder="I expect to publish another paper in... (MM/YYYY)" value={form.ongoing_project_note} onChange={handleChange} className="border p-1 rounded w-full" />
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">18. Is your planned work aligned with your prior education, publications, and citations? <span className="text-red-500">*</span></label>
            <div className="mb-1 text-gray-700 text-sm">Includes academic, research, commercial R&D, or any other value your work is directly related to your proposed contributions.</div>
            <div className="flex gap-4">
              <label><input type="radio" name="related_field_work" value="yes" onChange={handleRadioChange} checked={form.related_field_work === 'yes'} /> Yes</label>
              <label><input type="radio" name="related_field_work" value="no" onChange={handleRadioChange} checked={form.related_field_work === 'no'} /> No</label>
            </div>
          </div>
        </>
      )}
      {step === 4 && (
        <>
          <div className="bg-blue-900 text-white p-4 rounded mb-4">
            <h4 className="text-lg font-bold mb-2">Part 4: Additional Information and Final Declarations</h4>
            <h5 className="mb-0"><i>This section includes final documents, feedback, and a confirmation regarding the authenticity of your information.</i></h5>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">19. Upload your most recent CV / Resume (in English) <span className="text-red-500">*</span></label>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
            <div className="text-xs text-gray-600 mt-1">Accepted formats: PDF, DOC, DOCX.</div>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">20. How did you hear about us? (Select all that apply)</label>
            <fieldset className="border rounded p-2">
              {hearsFormOptions.map((source) => (
                <label key={source} className="block">
                  <input type="checkbox" value={source} name="hears_form" onChange={handleMultiCheckbox} checked={form.hears_form.includes(source)} /> {source}
                </label>
              ))}
            </fieldset>
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-blue-800">21. Additional Comments</label>
            <textarea name="additional_comments" value={form.additional_comments} onChange={handleChange} className="border p-1 rounded w-full" rows={3} placeholder="Please share any additional information, questions, or comments."></textarea>
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-blue-800">22. Declaration of Authenticity <span className="text-red-500">*</span></label>
            <div className="flex items-center">
              <input type="checkbox" name="read_notice" onChange={handleChange} checked={form.read_notice} required className="mr-2" />
              <span>I certify all information and materials I have provided are true, complete, and to the best of my knowledge. I understand that any misrepresentation may lead to refusal of services, contract termination, or legal consequences, including denial of any refund.</span>
            </div>
          </div>
        </>
      )}
      </div>
      <div className="flex justify-between mt-4">
        {step > 1 && (
          <button
            type="button"
            onClick={handleBack}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            aria-label="Back"
          >
            &larr; Back
          </button>
        )}
        {step < 4 && (
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            aria-label="Next"
          >
            Next &rarr;
          </button>
        )}
        {step === 4 && (
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        )}
      </div>
    </form>
  );
}
