import React, { useState } from "react";

interface EvaluationQuestionnaireProps {
  onClose?: () => void;
}

const initialDegree = {
  type: "PhD",
  major: "",
  university: "",
  year: "",
  related: "",
};
const initialDegreeInProgress = {
  type: "PhD (in progress)",
  major: "",
  university: "",
  expected: "",
  related: "",
};

const countryList = [
  "Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua and Barbuda","Arabian Peninsula","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Born on Board Ship","Bosnia and Herzegovina","Botswana","Brazil","British National Overseas","British Solomon Islands","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burma","Burundi","Cambodia","Cameroon","Campbell Island","Canada","Canary Islands","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Czechoslovakia","Democratic Republic of Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Federated States of Micronesia","Fiji","Finland","France","French Guiana","French Polynesia","French Southern and Antarctic","Gabon","Gambia","Gaza Strip","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guyana","Haiti","Honduras","Hong Kong SAR","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Issas","Italy","Ivory Coast","Jamaica","Japan","Jerusalem","Jordan","Kampuchea","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau SAR","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","North Korea","North Macedonia","North Vietnam","Northern Ireland","Northern Mariana Islands","Northern Yemen","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn Islands","Poland","Portugal","Principe and Sao Tome","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Martin","San Marino","Sanaa","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovak Republic","Slovenia","Solomons Islands","Somalia","South Africa","South Korea","South Sudan","South Vietnam","Spain","Spanish North Africa","Sri Lanka","St. Helena","St. Kitts","St. Lucia","St. Pierre Miquelon","St. Pierre and Miquelon","St. Vincent and the Grenadines","Stateless","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","The Kingdom of Eswatini (Eswatini)","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","U. S. Virgin Islands","US","USSR","Uganda","Ukraine","United Arab Emirates","United Arab Republic","United Kingdom","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Wallis and Futuna Islands","West Bank","Western Sahara","Western Samoa","Yemen","Yugoslavia","Zaire","Zambia","Zanzibar","Zimbabwe","Other"
];

const fieldList = [
  "Agricultural Sciences","Biology & Biochemistry","Chemistry","Clinical Medicine","Computer Science","Economics & Business","Engineering","Environment/Ecology","Geosciences","Immunology","Materials Science","Mathematics","Microbiology","Molecular Biology & Genetics","Neuroscience & Behavior","Pharmacology & Toxicology","Physics","Plant & Animal Science","Psychiatry/Psychology","Social Sciences, General","Space Science","Others"
];

const degreeTypes = ["PhD","Master","MD","MBBS","Bachelor","Other"];
const degreeInProgressTypes = ["PhD (in progress)","Master (in progress)","MD (in progress)","MBBS (in progress)","Bachelor (in progress)","Other"];

const EvaluationQuestionnaire: React.FC<EvaluationQuestionnaireProps> = ({ onClose }) => {
  const [form, setForm] = useState({
    title: "",
    first_name: "",
    last_name: "",
    birth_country: "",
    email: "",
    phone: "",
    country_code: '+1',
    category: [] as string[],
    current_visa_status: "",
    visa_status: "",
    field_esi: "",
    field_other: "",
    degrees: [ { ...initialDegree } ],
    degreesInProgress: [ { ...initialDegreeInProgress } ],
    employment_status: "",
    citation_profiles: "",
    citation_number: "",
    publication: "0",
    published_year: "",
    no_publications: false,
    review_number: "",
    confirm_thank_you_email: false,
    owns_patents: "",
    funding_received: "",
    ongoing_project: "",
    ongoing_project_note: "",
    related_field_work: "",
    attachment: null as File | null,
    hears_form: [] as string[],
    read_notice: false,
    additional_comments: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [step, setStep] = useState(1);

  const countryCodes = [
    { code: '+1', label: 'US/Canada (+1)' },
    { code: '+44', label: 'UK (+44)' },
    { code: '+91', label: 'India (+91)' },
    { code: '+61', label: 'Australia (+61)' },
    { code: '+81', label: 'Japan (+81)' },
    { code: '+49', label: 'Germany (+49)' },
    { code: '+86', label: 'China (+86)' },
    { code: '+33', label: 'France (+33)' },
    { code: '+39', label: 'Italy (+39)' },
    { code: '+7', label: 'Russia (+7)' },
    { code: '+34', label: 'Spain (+34)' },
    { code: '+971', label: 'UAE (+971)' },
    { code: '+82', label: 'South Korea (+82)' },
    { code: '+55', label: 'Brazil (+55)' },
    { code: '+27', label: 'South Africa (+27)' },
    { code: '+20', label: 'Egypt (+20)' },
    { code: '+880', label: 'Bangladesh (+880)' },
    { code: '+92', label: 'Pakistan (+92)' },
    { code: '+234', label: 'Nigeria (+234)' },
    { code: '+62', label: 'Indonesia (+62)' },
    // ...add more as needed...
  ];

  // Form field change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm({ ...form, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Step validation (expanded for all fields)
  const validateStep = () => {
    const newErrors: any = {};
    if (step === 1) {
      if (!form.first_name) newErrors.first_name = 'First name is required.';
      if (!form.last_name) newErrors.last_name = 'Last name is required.';
      if (!form.email) newErrors.email = 'Email is required.';
      if (!form.birth_country) newErrors.birth_country = 'Country of birth is required.';
      if (!form.phone) newErrors.phone = 'Phone is required.';
      if (!form.category || form.category.length === 0) newErrors.category = 'Please select at least one petition category.';
      if (!form.current_visa_status) newErrors.current_visa_status = 'Please select your current visa status.';
    }
    if (step === 2) {
      if (!form.field_esi && !form.field_other) newErrors.field_esi = 'Field of expertise is required.';
      if (!form.employment_status) newErrors.employment_status = 'Current U.S. Position is required.';
      if (!form.visa_status) newErrors.visa_status = 'Current Visa Status is required.';
      if (!form.citation_profiles) newErrors.citation_profiles = 'Citation profile is required.';
      if (!form.citation_number) newErrors.citation_number = 'Total citations is required.';
      if (!form.publication) newErrors.publication = 'Number of publications is required.';
      if (!form.published_year) newErrors.published_year = 'Year of first publication is required.';
      if (!form.review_number) newErrors.review_number = 'Number of peer reviews is required.';
      if (!form.owns_patents) newErrors.owns_patents = 'Please indicate if you have patents.';
      if (!form.funding_received) newErrors.funding_received = 'Please indicate if you have received funding.';
      if (!form.ongoing_project) newErrors.ongoing_project = 'Ongoing projects is required.';
      if (!form.ongoing_project_note) newErrors.ongoing_project_note = 'Ongoing project notes is required.';
      if (!form.related_field_work) newErrors.related_field_work = 'Related field work is required.';
    }
    if (step === 3) {
      if (!form.degrees[0].type) newErrors.degree_type = 'Degree type is required.';
      if (!form.degrees[0].major) newErrors.degree_major = 'Degree major is required.';
      if (!form.degrees[0].university) newErrors.degree_university = 'Degree university is required.';
      if (!form.degrees[0].year) newErrors.degree_year = 'Degree year is required.';
      if (!form.degrees[0].related) newErrors.degree_related = 'Degree related field is required.';
      if (!form.degreesInProgress[0].type) newErrors.degree_in_progress_type = 'Degree in progress type is required.';
      if (!form.degreesInProgress[0].major) newErrors.degree_in_progress_major = 'Degree in progress major is required.';
      if (!form.degreesInProgress[0].university) newErrors.degree_in_progress_university = 'Degree in progress university is required.';
      if (!form.degreesInProgress[0].expected) newErrors.degree_in_progress_expected = 'Expected year is required.';
      if (!form.degreesInProgress[0].related) newErrors.degree_in_progress_related = 'Degree in progress related field is required.';
    }
    if (step === 4) {
      if (!form.hears_form) newErrors.hears_form = 'This field is required.';
      if (!form.attachment) newErrors.attachment = 'Attachment is required.';
      if (!form.additional_comments) newErrors.additional_comments = 'Additional comments are required.';
      if (!form.read_notice) newErrors.read_notice = 'You must agree to the notice.';
    }
    return newErrors;
  };

  // File input handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, attachment: e.target.files && e.target.files[0] });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateStep();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setStep((s) => Math.min(s + 1, 5));
    }
  };

  const handleBack = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateStep();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      const fullPhone = `${form.country_code} ${form.phone}`;
      // Use fullPhone for submission or display
      alert('Form submitted! Phone: ' + fullPhone);
      if (onClose) onClose();
    }
  };

  return (
    <div className="relative w-full max-w-6xl p-4 mx-auto">
      {/* Fixed header */}
      <div className="sticky top-0 z-10 bg-white flex items-center justify-between border-b pb-2 mb-2">
        <h2 className="text-2xl font-bold">Evaluation Questionnaire</h2>
        {onClose && (
          <button
            type="button"
            className="text-gray-500 hover:text-red-500 text-2xl font-bold focus:outline-none"
            onClick={onClose}
            aria-label="Close Evaluation Form"
          >
            &times;
          </button>
        )}
      </div>
      {/* Scrollable form content */}
      <form onSubmit={handleSubmit} className="overflow-y-auto text-left max-h-[60vh] px-1">
        {step === 1 && (
          <>
            <h3 className="text-lg font-semibold mt-2 mb-2">Part 1: Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold">First Name <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Please enter your full legal name as shown in your passport or official documents.</div>
                <input name="first_name" value={form.first_name} onChange={handleChange} className="w-full border p-2 rounded" />
                {errors.first_name && <div className="text-red-500 text-xs">{errors.first_name}</div>}
              </div>
              <div>
                <label className="block font-semibold">Last Name <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Please enter your full legal surname as shown in your passport or official documents.</div>
                <input name="last_name" value={form.last_name} onChange={handleChange} className="w-full border p-2 rounded" />
                {errors.last_name && <div className="text-red-500 text-xs">{errors.last_name}</div>}
              </div>
              <div>
                <label className="block font-semibold">Email <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Please enter a valid email address for correspondence.</div>
                <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" />
                {errors.email && <div className="text-red-500 text-xs">{errors.email}</div>}
              </div>
              <div>
                <label className="block font-semibold">Phone <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Please enter your contact phone number including country code.</div>
                <div className="flex gap-2">
                  <select
                    name="country_code"
                    value={form.country_code}
                    onChange={handleChange}
                    className="border p-2 rounded w-28 bg-white"
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>{c.label}</option>
                    ))}
                  </select>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    placeholder="Phone number"
                  />
                </div>
                {errors.phone && <div className="text-red-500 text-xs">{errors.phone}</div>}
              </div>
              <div>
                <label className="block font-semibold">Country of Birth <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Select your country of birth as shown in your passport.</div>
                <select name="birth_country" value={form.birth_country} onChange={handleChange} className="w-full border p-2 rounded">
                  <option value="">Select Country</option>
                  {countryList.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {errors.birth_country && <div className="text-red-500 text-xs">{errors.birth_country}</div>}
              </div>

              {/* Petition Category */}
              <div className="md:col-span-2">
                <label className="block font-semibold">Petition Category <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Please select the type(s) of petition you are considering:</div>
                <div className="flex flex-col gap-1">
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="category" value="EB-2 NIW" checked={form.category?.includes('EB-2 NIW')} onChange={e => {
                      const value = e.target.value;
                      setForm({
                        ...form,
                        category: form.category.includes(value)
                          ? form.category.filter((c: string) => c !== value)
                          : [...form.category, value],
                      });
                    }} className="mr-2" />
                    EB-2 NIW (National Interest Waiver – self-petitioned)
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="category" value="EB-1A" checked={form.category?.includes('EB-1A')} onChange={e => {
                      const value = e.target.value;
                      setForm({
                        ...form,
                        category: form.category.includes(value)
                          ? form.category.filter((c: string) => c !== value)
                          : [...form.category, value],
                      });
                    }} className="mr-2" />
                    EB-1A (Alien of Extraordinary Ability – self-petitioned)
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="category" value="EB-1B" checked={form.category?.includes('EB-1B')} onChange={e => {
                      const value = e.target.value;
                      setForm({
                        ...form,
                        category: form.category.includes(value)
                          ? form.category.filter((c: string) => c !== value)
                          : [...form.category, value],
                      });
                    }} className="mr-2" />
                    EB-1B (Outstanding Researcher/Professor – employer-sponsored)
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="category" value="O-1A" checked={form.category?.includes('O-1A')} onChange={e => {
                      const value = e.target.value;
                      setForm({
                        ...form,
                        category: form.category.includes(value)
                          ? form.category.filter((c: string) => c !== value)
                          : [...form.category, value],
                      });
                    }} className="mr-2" />
                    O-1A (Extraordinary Ability – employer-sponsored)
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="category" value="Recommend" checked={form.category?.includes('Recommend')} onChange={e => {
                      const value = e.target.value;
                      setForm({
                        ...form,
                        category: form.category.includes(value)
                          ? form.category.filter((c: string) => c !== value)
                          : [...form.category, value],
                      });
                    }} className="mr-2" />
                    I'm not sure. Please recommend based on my credentials.
                  </label>
                </div>
                {errors.category && <div className="text-red-500 text-xs">{errors.category}</div>}
              </div>

              {/* Current Visa Status */}
              <div className="md:col-span-2">
                <label className="block font-semibold">Current Visa Status <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Please select your current visa status, if applicable. If you are not currently in the U.S. or do not hold a valid U.S. visa, please select "Not in the U.S."</div>
                <div className="flex flex-col gap-1">
                  <label className="inline-flex items-center">
                    <input type="radio" name="current_visa_status" value="F-1" checked={form.current_visa_status === 'F-1'} onChange={handleChange} className="mr-2" /> F-1
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="current_visa_status" value="OPT" checked={form.current_visa_status === 'OPT'} onChange={handleChange} className="mr-2" /> OPT
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="current_visa_status" value="H-1B" checked={form.current_visa_status === 'H-1B'} onChange={handleChange} className="mr-2" /> H-1B
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="current_visa_status" value="J-1" checked={form.current_visa_status === 'J-1'} onChange={handleChange} className="mr-2" /> J-1
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="current_visa_status" value="O-1" checked={form.current_visa_status === 'O-1'} onChange={handleChange} className="mr-2" /> O-1
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="current_visa_status" value="Not in the U.S." checked={form.current_visa_status === 'Not in the U.S.'} onChange={handleChange} className="mr-2" /> Not in the U.S.
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="current_visa_status" value="Other" checked={form.current_visa_status === 'Other'} onChange={handleChange} className="mr-2" /> Other
                  </label>
                </div>
                {errors.current_visa_status && <div className="text-red-500 text-xs">{errors.current_visa_status}</div>}
              </div>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <h3 className="text-lg font-semibold mt-2 mb-2">Part 2: Academic and Professional Background</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Field of Study */}
              <div className="md:col-span-2">
                <label className="block font-semibold">Field of Study <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Select your primary academic or professional field. If not listed, select "Other" and specify.</div>
                <div className="flex gap-2 items-center">
                  <select
                    name="field_esi"
                    value={form.field_esi}
                    onChange={handleChange}
                    className="border p-2 rounded w-full md:w-2/3 bg-white"
                  >
                    <option value="">Select Field</option>
                    {fieldList.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                  {form.field_esi === 'Other' && (
                    <input
                      name="field_other"
                      value={form.field_other}
                      onChange={handleChange}
                      placeholder="Other (please specify)"
                      className="border p-2 rounded w-full md:w-1/2"
                    />
                  )}
                </div>
                {errors.field_esi && <div className="text-red-500 text-xs">{errors.field_esi}</div>}
              </div>

              {/* Repeatable Completed Degrees */}
              <div className="md:col-span-2">
                <label className="block font-semibold">Completed Degrees <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">List all completed degrees. Click "+" to add more or "-" to remove.</div>
                {form.degrees.map((deg, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-2 mb-2 items-center border p-2 rounded bg-gray-50">
                    <select
                      name={`degree_type_${idx}`}
                      value={deg.type}
                      onChange={e => {
                        const newDegrees = [...form.degrees];
                        newDegrees[idx].type = e.target.value;
                        setForm({ ...form, degrees: newDegrees });
                      }}
                      className="border p-2 rounded w-full md:w-1/5"
                    >
                      <option value="">Type</option>
                      {degreeTypes.map((d) => <option key={d} value={d}>{d}</option>)}
                      <option value="Other">Other</option>
                    </select>
                    {deg.type === 'Other' && (
                      <input
                        name={`degree_type_other_${idx}`}
                        value={deg.major}
                        onChange={e => {
                          const newDegrees = [...form.degrees];
                          newDegrees[idx].major = e.target.value;
                          setForm({ ...form, degrees: newDegrees });
                        }}
                        placeholder="Specify degree type"
                        className="border p-2 rounded w-full md:w-1/5"
                      />
                    )}
                    <input
                      name={`degree_major_${idx}`}
                      value={deg.major}
                      onChange={e => {
                        const newDegrees = [...form.degrees];
                        newDegrees[idx].major = e.target.value;
                        setForm({ ...form, degrees: newDegrees });
                      }}
                      placeholder="Major/Field of Study"
                      className="border p-2 rounded w-full md:w-1/5"
                    />
                    <input
                      name={`degree_university_${idx}`}
                      value={deg.university}
                      onChange={e => {
                        const newDegrees = [...form.degrees];
                        newDegrees[idx].university = e.target.value;
                        setForm({ ...form, degrees: newDegrees });
                      }}
                      placeholder="University/Institution"
                      className="border p-2 rounded w-full md:w-1/5"
                    />
                    <input
                      name={`degree_year_${idx}`}
                      value={deg.year}
                      onChange={e => {
                        const newDegrees = [...form.degrees];
                        newDegrees[idx].year = e.target.value;
                        setForm({ ...form, degrees: newDegrees });
                      }}
                      placeholder="Year of Completion"
                      className="border p-2 rounded w-full md:w-1/5"
                    />
                    <input
                      name={`degree_related_${idx}`}
                      value={deg.related}
                      onChange={e => {
                        const newDegrees = [...form.degrees];
                        newDegrees[idx].related = e.target.value;
                        setForm({ ...form, degrees: newDegrees });
                      }}
                      placeholder="Related Field/Industry"
                      className="border p-2 rounded w-full md:w-1/5"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newDegrees = [...form.degrees];
                        newDegrees.splice(idx, 1);
                        setForm({ ...form, degrees: newDegrees });
                      }}
                      className="text-red-500 hover:text-red-700"
                      aria-label="Remove Degree"
                    >
                      &ndash;
                    </button>
                  </div>
                ))}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, degrees: [...form.degrees, { ...initialDegree }] })}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    aria-label="Add Degree"
                  >
                    +
                  </button>
                </div>
                {errors.degree_type && <div className="text-red-500 text-xs">{errors.degree_type}</div>}
                {errors.degree_major && <div className="text-red-500 text-xs">{errors.degree_major}</div>}
                {errors.degree_university && <div className="text-red-500 text-xs">{errors.degree_university}</div>}
                {errors.degree_year && <div className="text-red-500 text-xs">{errors.degree_year}</div>}
                {errors.degree_related && <div className="text-red-500 text-xs">{errors.degree_related}</div>}
              </div>

              {/* Repeatable Degrees In Progress */}
              <div className="md:col-span-2">
                <label className="block font-semibold">Degrees In Progress</label>
                <div className="text-xs text-gray-500 mb-1">List any degrees you are currently pursuing. Click "+" to add more or "-" to remove.</div>
                {form.degreesInProgress.map((deg, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-2 mb-2 items-center border p-2 rounded bg-gray-50">
                    <select
                      name={`degree_in_progress_type_${idx}`}
                      value={deg.type}
                      onChange={e => {
                        const newDegreesInProgress = [...form.degreesInProgress];
                        newDegreesInProgress[idx].type = e.target.value;
                        setForm({ ...form, degreesInProgress: newDegreesInProgress });
                      }}
                      className="border p-2 rounded w-full md:w-1/5"
                    >
                      <option value="">Type</option>
                      {degreeInProgressTypes.map((d) => <option key={d} value={d}>{d}</option>)}
                      <option value="Other">Other</option>
                    </select>
                    {deg.type === 'Other' && (
                      <input
                        name={`degree_in_progress_type_other_${idx}`}
                        value={deg.major}
                        onChange={e => {
                          const newDegreesInProgress = [...form.degreesInProgress];
                          newDegreesInProgress[idx].major = e.target.value;
                          setForm({ ...form, degreesInProgress: newDegreesInProgress });
                        }}
                        placeholder="Specify degree type"
                        className="border p-2 rounded w-full md:w-1/5"
                      />
                    )}
                    <input
                      name={`degree_in_progress_major_${idx}`}
                      value={deg.major}
                      onChange={e => {
                        const newDegreesInProgress = [...form.degreesInProgress];
                        newDegreesInProgress[idx].major = e.target.value;
                        setForm({ ...form, degreesInProgress: newDegreesInProgress });
                      }}
                      placeholder="Major/Field of Study"
                      className="border p-2 rounded w-full md:w-1/5"
                    />
                    <input
                      name={`degree_in_progress_university_${idx}`}
                      value={deg.university}
                      onChange={e => {
                        const newDegreesInProgress = [...form.degreesInProgress];
                        newDegreesInProgress[idx].university = e.target.value;
                        setForm({ ...form, degreesInProgress: newDegreesInProgress });
                      }}
                      placeholder="University/Institution"
                      className="border p-2 rounded w-full md:w-1/5"
                    />
                    <input
                      name={`degree_in_progress_expected_${idx}`}
                      value={deg.expected}
                      onChange={e => {
                        const newDegreesInProgress = [...form.degreesInProgress];
                        newDegreesInProgress[idx].expected = e.target.value;
                        setForm({ ...form, degreesInProgress: newDegreesInProgress });
                      }}
                      placeholder="Expected Year of Completion"
                      className="border p-2 rounded w-full md:w-1/5"
                    />
                    <input
                      name={`degree_in_progress_related_${idx}`}
                      value={deg.related}
                      onChange={e => {
                        const newDegreesInProgress = [...form.degreesInProgress];
                        newDegreesInProgress[idx].related = e.target.value;
                        setForm({ ...form, degreesInProgress: newDegreesInProgress });
                      }}
                      placeholder="Related Field/Industry"
                      className="border p-2 rounded w-full md:w-1/5"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newDegreesInProgress = [...form.degreesInProgress];
                        newDegreesInProgress.splice(idx, 1);
                        setForm({ ...form, degreesInProgress: newDegreesInProgress });
                      }}
                      className="text-red-500 hover:text-red-700"
                      aria-label="Remove Degree In Progress"
                    >
                      &ndash;
                    </button>
                  </div>
                ))}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, degreesInProgress: [...form.degreesInProgress, { ...initialDegreeInProgress }] })}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    aria-label="Add Degree In Progress"
                  >
                    +
                  </button>
                </div>
                {errors.degree_in_progress_type && <div className="text-red-500 text-xs">{errors.degree_in_progress_type}</div>}
                {errors.degree_in_progress_major && <div className="text-red-500 text-xs">{errors.degree_in_progress_major}</div>}
                {errors.degree_in_progress_university && <div className="text-red-500 text-xs">{errors.degree_in_progress_university}</div>}
                {errors.degree_in_progress_expected && <div className="text-red-500 text-xs">{errors.degree_in_progress_expected}</div>}
                {errors.degree_in_progress_related && <div className="text-red-500 text-xs">{errors.degree_in_progress_related}</div>}
              </div>

              {/* Employment Status */}
              <div className="md:col-span-2">
                <label className="block font-semibold">Current U.S. Position <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Please specify your current position or job title in the U.S.</div>
                <input
                  name="employment_status"
                  value={form.employment_status}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="e.g., Postdoctoral Fellow"
                />
                {errors.employment_status && <div className="text-red-500 text-xs">{errors.employment_status}</div>}
              </div>

              {/* Visa Status */}
              <div className="md:col-span-2">
                <label className="block font-semibold">Current Visa Status <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Select your current visa status from the list.</div>
                <select
                  name="visa_status"
                  value={form.visa_status}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option value="">Select Visa Status</option>
                  <option value="Citizen">U.S. Citizen</option>
                  <option value="Permanent Resident">Permanent Resident</option>
                  <option value="Visa Holder">Visa Holder</option>
                  <option value="Other">Other</option>
                </select>
                {errors.visa_status && <div className="text-red-500 text-xs">{errors.visa_status}</div>}
              </div>

              {/* Citation Profile */}
              <div className="md:col-span-2">
                <label className="block font-semibold">Citation Profile <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Please provide the link to your citation profile (e.g., Google Scholar, ResearchGate).</div>
                <input
                  name="citation_profiles"
                  value={form.citation_profiles}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="e.g., https://scholar.google.com/citations?user=XXXXXX"
                />
                {errors.citation_profiles && <div className="text-red-500 text-xs">{errors.citation_profiles}</div>}
              </div>
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold">Total Citations <span className="text-red-500">*</span></label>
                  <div className="text-xs text-gray-500 mb-1">Enter the total number of citations from all your publications.</div>
                  <input
                    name="citation_number"
                    type="number"
                    value={form.citation_number}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    placeholder="e.g., 150"
                  />
                  {errors.citation_number && <div className="text-red-500 text-xs">{errors.citation_number}</div>}
                </div>
                <div>
                  <label className="block font-semibold">Number of Publications <span className="text-red-500">*</span></label>
                  <div className="text-xs text-gray-500 mb-1">Enter the total number of your publications.</div>
                  <input
                    name="publication"
                    type="number"
                    value={form.publication}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    placeholder="e.g., 10"
                  />
                  {errors.publication && <div className="text-red-500 text-xs">{errors.publication}</div>}
                </div>
              </div>
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold">Year of First Publication <span className="text-red-500">*</span></label>
                  <div className="text-xs text-gray-500 mb-1">Enter the year when your first publication was released.</div>
                  <input
                    name="published_year"
                    type="number"
                    value={form.published_year}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    placeholder="e.g., 2015"
                  />
                  {errors.published_year && <div className="text-red-500 text-xs">{errors.published_year}</div>}
                </div>
                <div>
                  <label className="block font-semibold">Number of Peer Reviews <span className="text-red-500">*</span></label>
                  <div className="text-xs text-gray-500 mb-1">Enter the total number of peer reviews you have conducted.</div>
                  <input
                    name="review_number"
                    type="number"
                    value={form.review_number}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    placeholder="e.g., 5"
                  />
                  {errors.review_number && <div className="text-red-500 text-xs">{errors.review_number}</div>}
                </div>
              </div>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <h3 className="text-lg font-semibold mt-2 mb-2">Part 3: Research and Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Ongoing Projects */}
              <div className="md:col-span-2">
                <label className="block font-semibold">Ongoing Projects <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Please provide details about your ongoing projects.</div>
                <textarea
                  name="ongoing_project"
                  value={form.ongoing_project}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  rows={4}
                  placeholder="Describe your ongoing projects"
                />
                {errors.ongoing_project && <div className="text-red-500 text-xs">{errors.ongoing_project}</div>}
              </div>
              <div className="md:col-span-2">
                <label className="block font-semibold">Ongoing Project Notes <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Additional notes or descriptions for your ongoing projects.</div>
                <textarea
                  name="ongoing_project_note"
                  value={form.ongoing_project_note}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  rows={4}
                  placeholder="Additional notes for ongoing projects"
                />
                {errors.ongoing_project_note && <div className="text-red-500 text-xs">{errors.ongoing_project_note}</div>}
              </div>

              {/* Related Field Work */}
              <div className="md:col-span-2">
                <label className="block font-semibold">Related Field Work <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Describe any related field work you have done.</div>
                <textarea
                  name="related_field_work"
                  value={form.related_field_work}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  rows={4}
                  placeholder="Describe your related field work"
                />
                {errors.related_field_work && <div className="text-red-500 text-xs">{errors.related_field_work}</div>}
              </div>
            </div>
          </>
        )}
        {step === 4 && (
          <>
            <h3 className="text-lg font-semibold mt-2 mb-2">Part 4: Additional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* How did you hear about this form? */}
              <div className="md:col-span-2">
                <label className="block font-semibold">How did you hear about this form? <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Please select all that apply.</div>
                <div className="flex gap-4 flex-wrap">
                  {["Email", "Website", "Social Media", "Referral", "Other"].map((source) => (
                    <label key={source} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="hears_form"
                        value={source}
                        checked={form.hears_form.includes(source)}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">{source}</span>
                    </label>
                  ))}
                </div>
                {errors.hears_form && <div className="text-red-500 text-xs">{errors.hears_form}</div>}
              </div>

              {/* File Attachment */}
              <div className="md:col-span-2">
                <label className="block font-semibold">File Attachment <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Please attach any relevant files or documents.</div>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="border p-2 rounded w-full"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                {errors.attachment && <div className="text-red-500 text-xs">{errors.attachment}</div>}
              </div>

              {/* Additional Comments */}
              <div className="md:col-span-2">
                <label className="block font-semibold">Additional Comments <span className="text-red-500">*</span></label>
                <div className="text-xs text-gray-500 mb-1">Any other information you would like to provide.</div>
                <textarea
                  name="additional_comments"
                  value={form.additional_comments}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  rows={4}
                  placeholder="Enter any additional comments here"
                />
                {errors.additional_comments && <div className="text-red-500 text-xs">{errors.additional_comments}</div>}
              </div>

              {/* Agreement to Terms */}
              <div className="md:col-span-2 flex items-center">
                <input
                  type="checkbox"
                  name="read_notice"
                  checked={form.read_notice}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <label className="ml-2 text-gray-700 text-sm">
                  I have read and agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
              {errors.read_notice && <div className="text-red-500 text-xs md:col-span-2">{errors.read_notice}</div>}
            </div>
          </>
        )}
        {step === 5 && (
          <div className="md:col-span-2 text-center py-4">
            <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
            <p className="text-gray-700 mb-4">Your responses have been recorded. We appreciate your time and effort.</p>
            <button
              type="button"
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              aria-label="Close"
            >
              Close
            </button>
          </div>
        )}
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
          {step < 5 && (
            <button
              type="submit"
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              aria-label="Next"
            >
              Next &rarr;
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EvaluationQuestionnaire;
