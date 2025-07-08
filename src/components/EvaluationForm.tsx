import React, { useState } from 'react';
import API_BASE_URL from '../config/api';

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
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    title: '',
    title_other: '',
    first_name: '',
    last_name: '',
    birth_country: '',
    email: '',
    phone: '',
    category: [] as string[],
    visa_status: '',
    visa_status_other: '',
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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};
    if (step === 1) {
      if (!form.title) newErrors.title = 'Salutation is required.';
      if (form.title === 'Other' && !form.title_other) newErrors.title_other = 'Please specify your salutation.';
      if (!form.first_name) newErrors.first_name = 'First name is required.';
      if (!form.last_name) newErrors.last_name = 'Last name is required.';
      if (!form.birth_country) newErrors.birth_country = 'Country of birth is required.';
      if (!form.category.length) newErrors.category = 'Select at least one petition category.';
      if (!form.visa_status) newErrors.visa_status = 'Visa status is required.';
      if (form.visa_status && form.visa_status !== 'Not in the U.S.' && !form.visa_expiration_date) newErrors.visa_expiration_date = 'Expiration date is required.';
      if (!form.field_esi) newErrors.field_esi = 'Field of study is required.';
      if (!form.email) newErrors.email = 'Email is required.';
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Invalid email address.';
      if (!form.phone) newErrors.phone = 'Phone is required.';
    } else if (step === 2) {
      if (!form.field_esi) newErrors.field_esi = 'Field of study is required.';
      form.degrees.forEach((deg, idx) => {
        if (!deg.type) newErrors[`degree_type_${idx}`] = 'Degree type is required.';
        if (!deg.major) newErrors[`degree_major_${idx}`] = 'Major is required.';
        if (!deg.university) newErrors[`degree_university_${idx}`] = 'University is required.';
        if (!deg.year) newErrors[`degree_year_${idx}`] = 'Year is required.';
        if (!deg.related) newErrors[`degree_related_${idx}`] = 'Relation is required.';
      });
      form.degreesInProgress.forEach((deg, idx) => {
        if (!deg.type) newErrors[`degree_prog_type_${idx}`] = 'Degree type is required.';
        if (!deg.major) newErrors[`degree_prog_major_${idx}`] = 'Major is required.';
        if (!deg.university) newErrors[`degree_prog_university_${idx}`] = 'University is required.';
        if (!deg.expected) newErrors[`degree_prog_expected_${idx}`] = 'Expected year is required.';
        if (!deg.related) newErrors[`degree_prog_related_${idx}`] = 'Relation is required.';
      });
      if (!form.employment_status) newErrors.employment_status = 'Employment status is required.';
      if (!form.citation_profiles) newErrors.citation_profiles = 'Citation profile link is required.';
      if (!form.citation_number) newErrors.citation_number = 'Number of citations is required.';
      if (!form.publication && !form.no_publications) newErrors.publication = 'Number of publications is required.';
      if (form.owns_patents === '') newErrors.owns_patents = 'Patent status is required.';
      if (form.owns_patents === '1' && !form.patents) newErrors.patents = 'Please list your patents.';
      if (form.funding_received === '') newErrors.funding_received = 'Funding status is required.';
      if (form.funding_received === '1' && !form.fundingDetails) newErrors.fundingDetails = 'Please provide funding details.';
    } else if (step === 3) {
      if (!form.ongoing_project) newErrors.ongoing_project = 'Please indicate if you continue to conduct research.';
      if (!form.related_field_work) newErrors.related_field_work = 'Please indicate if your planned work is aligned.';
    } else if (step === 4) {
      if (!form.attachment) newErrors.attachment = 'CV/Resume is required.';
      if (!form.read_notice) newErrors.read_notice = 'You must certify the authenticity of your information.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
    if (validateStep()) setStep((s) => Math.min(s + 1, 4));
  };
  const handleBack = (e: React.FormEvent) => {
    e.preventDefault();
    setStep((s) => Math.max(s - 1, 1));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      const formData = new FormData();
      const { attachment, ...dataToSend } = form;
      formData.append('data', JSON.stringify(dataToSend));
      if (attachment) {
        formData.append('attachment', attachment);
      }
      try {
        const res = await fetch(`${API_BASE_URL}/api/evaluation`, {
          method: 'POST',
          body: formData,
        });
        const result = await res.json();
        if (result.success) {
          setShowSuccess(true);
        } else {
          alert('Submission failed: ' + (result.error || 'Unknown error'));
        }
      } catch (err) {
        alert('Submission failed: ' + err);
      }
    }
  };

  return (
    <>
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Thank you!</h2>
            <p className="mb-6">Your evaluation form has been submitted successfully. We will review your information and contact you soon.</p>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  if (typeof (window as any).onEvaluationFormClose === 'function') {
                    (window as any).onEvaluationFormClose();
                  } else {
                    window.location.reload();
                  }
                }
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
      {!showSuccess && (
        <form onSubmit={step === 4 ? handleSubmit : handleNext} className="h-[90vh] text-left max-w-7xl mx-auto relative">
      <div className="bg-gray-50 mb-1 text-center relative">
        {/* Close button */}
        <button
          type="button"
          className="absolute top-2 right-4 text-gray-400 hover:text-red-600 text-2xl font-bold focus:outline-none"
          aria-label="Close"
          onClick={() => {
            if (typeof window !== 'undefined') {
              // Option 1: Hide the form (if you add a parent handler)
              if (typeof (window as any).onEvaluationFormClose === 'function') {
                (window as any).onEvaluationFormClose();
              } else {
                // Option 2: Reload or navigate away (fallback)
                window.location.reload();
              }
            }
          }}
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold pt-2">
          Evaluation Questionnaire</h2>
          ( <small className='mr-2 font-normal text-sm'> Complete the questionnaire below to expedite your case evaluation.</small>)
         <span className="font-semibold">
            {step === 1 && <div className=" px-4 py-2 bg-blue-900 text-white text-left">
            <h4 className="text-lg font-bold mb-2">Part 1: Background Information and Petition Category Interest</h4>
            <h5 className="mb-0 font-normal"><i>This section helps us understand your basic information and preferred petition category.</i></h5>
          </div>}
            {step === 2 && <div className=" px-4 py-2 bg-blue-900 text-white text-left">
            <h4 className="text-lg font-bold mb-2">Part 2: Academic and Professional Background</h4>
            <h5 className="mb-0"><i>This section allows us to evaluate your academic history, professional experience, and research contributions.</i></h5>
          </div>}
            {step === 3 &&   <div className=" px-4 py-2 bg-blue-900 text-white text-left">
            <h4 className="text-lg font-bold mb-2">Part 3: Future Plans and Research Continuity</h4>
            <h5 className="mb-0"><i>This section helps us determine your continued contributions and future directions.</i></h5>
          </div>}
            {step === 4 &&  <div className=" px-4 py-2 bg-blue-900 text-white text-left">
            <h4 className="text-lg font-bold mb-2">Part 4: Additional Information and Final Declarations</h4>
            <h5 className="mb-0"><i>This section includes final documents, feedback, and a confirmation regarding the authenticity of your information.</i></h5>
          </div>}
          </span>
      </div>
      <div className=' p-4 h-[64vh] overflow-y-auto'>

      
      {step === 1 && (
        <>
          
          <div className="mb-4">
            <label className="font-semibold text-blue-800">1. Name and Salutation</label>
            <div className="mb-2">Please select the appropriate salutation to address you in future correspondence.</div>
            <div className="flex flex-wrap gap-4 mb-2">
              {['Mr.', 'Ms.', 'Dr.', 'Other'].map((t) => (
                <label key={t} className="flex items-center gap-1">
                  <input type="radio" name="title" value={t} checked={form.title === t} onChange={handleRadioChange} /> {t}
                </label>
              ))}
              {errors.title && <div className="text-red-500 text-xs">{errors.title}</div>}
              {form.title === 'Other' && (
                <>
                  <input type="text" name="title_other" placeholder="Please specify" value={form.title_other} onChange={handleChange} className="border p-1 rounded ml-2" />
                  {errors.title_other && <div className="text-red-500 text-xs">{errors.title_other}</div>}
                </>
              )}
            </div>
            <div className="mb-1">Please enter your full legal name as shown in your passport or official documents.</div>
            <div className="flex flex-wrap gap-4">
              <div>
                <input type="text" name="first_name" placeholder="First Name" value={form.first_name} onChange={handleChange} className="border p-1 rounded" />
                {errors.first_name && <div className="text-red-500 text-xs">{errors.first_name}</div>}
              </div>
              <div>
                <input type="text" name="last_name" placeholder="Last Name" value={form.last_name} onChange={handleChange} className="border p-1 rounded" />
                {errors.last_name && <div className="text-red-500 text-xs">{errors.last_name}</div>}
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
            {errors.birth_country && <div className="text-red-500 text-xs">{errors.birth_country}</div>}
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">3. Petition Category</label>
            <div className="mb-1">Please select the type(s) of petition you are considering:</div>
            {petitionCategories.map((cat) => (
              <label key={cat.value} className="block">
                <input type="checkbox" name="category" value={cat.value} checked={form.category.includes(cat.value)} onChange={handleMultiCheckbox} /> {cat.label}
              </label>
            ))}
            {errors.category && <div className="text-red-500 text-xs">{errors.category}</div>}
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
              {errors.visa_status && <div className="text-red-500 text-xs">{errors.visa_status}</div>}
              {/* Expiration Date of Authorized Stay - show for all except Not in the U.S. */}
              {form.visa_status && form.visa_status !== 'Not in the U.S.' && (
                <div className="mt-4">
                  <div className="mb-1 font-semibold text-blue-800">Expiration Date of Authorized Stay</div>
                  <p className="text-muted mb-2">(From I-94, I-20, EAD, or DS-2019—not the visa stamp):</p>
                  {form.visa_status === 'Other' ? (
                     <input
                      type="date"
                      name="visa_expiration_date"
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
                  {errors.visa_expiration_date && <div className="text-red-500 text-xs">{errors.visa_expiration_date}</div>}
                  <p className="form-description text-gray-700 text-xs">
                    Please enter the expiration date of your authorized stay in the U.S. (not the visa stamp). Common sources: I-20 or EAD (F-1/OPT), I-94 (H-1B, O-1, other work visas), or DS-2019 (J-1). If your I-94 says “D/S”, use the date from I-20, EAD, or DS-2019.
                  </p>
                </div>
              )}
              {form.visa_status === 'Other' && (
                <div className="mt-2">
                  <input
                    type="text"
                    name="visa_status_other"
                    placeholder="Please specify your visa status"
                    value={form.visa_status_other || ''}
                    onChange={handleChange}
                    className="border p-1 rounded w-full mb-2"
                  />
                  {errors.visa_status_other && <div className="text-red-500 text-xs">{errors.visa_status_other}</div>}
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
            {errors.field_esi && <div className="text-red-500 text-xs">{errors.field_esi}</div>}
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">6. Contact Information</label>
            <div className="flex flex-wrap gap-4">
              <div className="w-full ">
              <div className="text-md text-gray-800">Please provide your personal email address. We primarily use email for communication.</div>
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-1 rounded w-full" />
                {errors.email && <div className="text-red-500 text-xs">{errors.email}</div>}
              </div>
              <div className="w-full ">
              <div className="text-md text-gray-800">Please enter your mobile phone number, including the country code. Only used for record lookup if you call us
</div>
                <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="border p-1 rounded w-full" />
                {errors.phone && <div className="text-red-500 text-xs">{errors.phone}</div>}
              </div>
            </div>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          
          <div className="mb-4">
            <label className="font-semibold text-blue-800">7. Field of Study <span className="text-red-500">*</span></label>
            <div className="mb-1">Please select the academic field/branch that matches your primary research or professional focus.</div>
            <select name="field_esi" value={form.field_esi} onChange={handleChange} className="border p-1 rounded w-full">
              <option value="">Select Field</option>
              {fieldList.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
            {errors.field_esi && <div className="text-red-500 text-xs">{errors.field_esi}</div>}
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
                  {errors[`degree_type_${idx}`] && <div className="text-red-500 text-xs">{errors[`degree_type_${idx}`]}</div>}
                  <input type="text" value={deg.major} onChange={e => handleDegreeChange(idx, 'major', e.target.value)} placeholder="Major (e.g. Electrical Engineering)" className="border p-1 rounded" />
                  {errors[`degree_major_${idx}`] && <div className="text-red-500 text-xs">{errors[`degree_major_${idx}`]}</div>}
                  <input type="text" value={deg.university} onChange={e => handleDegreeChange(idx, 'university', e.target.value)} placeholder="University Name" className="border p-1 rounded" />
                  {errors[`degree_university_${idx}`] && <div className="text-red-500 text-xs">{errors[`degree_university_${idx}`]}</div>}
                  <input type="text" value={deg.year} onChange={e => handleDegreeChange(idx, 'year', e.target.value)} placeholder="Year" className="border p-1 rounded w-20" />
                  {errors[`degree_year_${idx}`] && <div className="text-red-500 text-xs">{errors[`degree_year_${idx}`]}</div>}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span>Is this degree related to your proposed endeavor or future work in the U.S.?</span>
                  <label><input type="radio" checked={deg.related === 'Yes'} onChange={() => handleDegreeChange(idx, 'related', 'Yes')} /> Yes</label>
                  <label><input type="radio" checked={deg.related === 'No'} onChange={() => handleDegreeChange(idx, 'related', 'No')} /> No</label>
                  <label><input type="radio" checked={deg.related === 'Not Sure'} onChange={() => handleDegreeChange(idx, 'related', 'Not Sure')} /> Not Sure</label>
                  {errors[`degree_related_${idx}`] && <div className="text-red-500 text-xs">{errors[`degree_related_${idx}`]}</div>}
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
                  {errors[`degree_prog_type_${idx}`] && <div className="text-red-500 text-xs">{errors[`degree_prog_type_${idx}`]}</div>}
                  <input type="text" value={deg.major} onChange={e => handleDegreeInProgressChange(idx, 'major', e.target.value)} placeholder="Major (e.g. Electrical Engineering)" className="border p-1 rounded w-75" />
                  {errors[`degree_prog_major_${idx}`] && <div className="text-red-500 text-xs">{errors[`degree_prog_major_${idx}`]}</div>}
                  <input type="text" value={deg.university} onChange={e => handleDegreeInProgressChange(idx, 'university', e.target.value)} placeholder="University Name" className="border p-1 rounded" />
                  {errors[`degree_prog_university_${idx}`] && <div className="text-red-500 text-xs">{errors[`degree_prog_university_${idx}`]}</div>}
                  <input type="text" value={deg.expected} onChange={e => handleDegreeInProgressChange(idx, 'expected', e.target.value)} placeholder="Expected Graduation Year" className="border p-1 rounded w-55" />
                  {errors[`degree_prog_expected_${idx}`] && <div className="text-red-500 text-xs">{errors[`degree_prog_expected_${idx}`]}</div>}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span>Is this degree related to your proposed endeavor or future work in the U.S.?</span>
                  <label><input type="radio" checked={deg.related === 'Yes'} onChange={() => handleDegreeInProgressChange(idx, 'related', 'Yes')} /> Yes</label>
                  <label><input type="radio" checked={deg.related === 'No'} onChange={() => handleDegreeInProgressChange(idx, 'related', 'No')} /> No</label>
                  <label><input type="radio" checked={deg.related === 'Not Sure'} onChange={() => handleDegreeInProgressChange(idx, 'related', 'Not Sure')} /> Not Sure</label>
                  {errors[`degree_prog_related_${idx}`] && <div className="text-red-500 text-xs">{errors[`degree_prog_related_${idx}`]}</div>}
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
            {errors.employment_status && <div className="text-red-500 text-xs">{errors.employment_status}</div>}
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">10. Citation Profile Link <span className="text-red-500">*</span></label>
            <div className="mb-1">Please provide a link to your Google Scholar, ResearchGate, Impactio, or other citation database profile.</div>
            <input type="text" name="citation_profiles" placeholder="Paste your citation profile link here" value={form.citation_profiles} onChange={handleChange} className="border p-1 rounded w-full" />
            {errors.citation_profiles && <div className="text-red-500 text-xs">{errors.citation_profiles}</div>}
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">11. Number of Citations <span className="text-red-500">*</span></label>
            <div className="mb-1">Please enter the highest total count from the available databases. Enter 0 if you do not have any citations.</div>
            <input type="number" name="citation_number" placeholder="Number of Citations" value={form.citation_number} onChange={handleChange} className="border p-1 rounded w-full" />
            {errors.citation_number && <div className="text-red-500 text-xs">{errors.citation_number}</div>}
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">12. Number of Journal Articles / Publications <span className="text-red-500">*</span></label>
            <div className="mb-1">Please enter the total number of your academic publications. (Include peer-reviewed journal articles and conference papers with full proceedings. Do not include posters, abstracts, or unpublished drafts.)</div>
            <input type="number" name="publication" placeholder="Number of Publications" value={form.publication} onChange={handleChange} className="border p-1 rounded w-full" />
            {errors.publication && <div className="text-red-500 text-xs">{errors.publication}</div>}
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
            <select name="review_number" value={form.review_number} onChange={handleChange} className="border p-1 rounded w-full">
              <option value="">Select</option>
              <option value="0">0</option>
              <option value="1-4">1–4</option>
              <option value="5-9">5–9</option>
              <option value=">10">&gt;10</option>
            </select>
            {errors.review_number && <div className="text-red-500 text-xs">{errors.review_number}</div>}
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
            {errors.owns_patents && <div className="text-red-500 text-xs">{errors.owns_patents}</div>}
            {errors.patents && <div className="text-red-500 text-xs">{errors.patents}</div>}
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
            {errors.funding_received && <div className="text-red-500 text-xs">{errors.funding_received}</div>}
            {errors.fundingDetails && <div className="text-red-500 text-xs">{errors.fundingDetails}</div>}
          </div>
        </>
      )}
      {step === 3 && (
        <>
         
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
            {errors.ongoing_project && <div className="text-red-500 text-xs">{errors.ongoing_project}</div>}
          </div>
          <div className="mb-4">
            <label className="font-semibold text-blue-800">18. Is your planned work aligned with your prior education, publications, and citations? <span className="text-red-500">*</span></label>
            <div className="mb-1 text-gray-700 text-sm">Includes academic, research, commercial R&D, or any other value your work is directly related to your proposed contributions.</div>
            <div className="flex gap-4">
              <label><input type="radio" name="related_field_work" value="yes" onChange={handleRadioChange} checked={form.related_field_work === 'yes'} /> Yes</label>
              <label><input type="radio" name="related_field_work" value="no" onChange={handleRadioChange} checked={form.related_field_work === 'no'} /> No</label>
            </div>
            {errors.related_field_work && <div className="text-red-500 text-xs">{errors.related_field_work}</div>}
          </div>
        </>
      )}
      {step === 4 && (
        <>
         
          <div className="mb-4">
            <label className="font-semibold text-blue-800">19. Upload your most recent CV / Resume (in English) <span className="text-red-500">*</span></label>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
            <div className="text-xs text-gray-600 mt-1">Accepted formats: PDF, DOC, DOCX.</div>
            {errors.attachment && <div className="text-red-500 text-xs">{errors.attachment}</div>}
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
            {errors.read_notice && <div className="text-red-500 text-xs">{errors.read_notice}</div>}
          </div>
        </>
      )}
      </div>
      <div className="bg-gray-50 py-2 px-4 flex justify-between">
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
      )}
    </>
  );
}
