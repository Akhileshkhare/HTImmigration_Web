import React, { useEffect, useState } from 'react';
import API_BASE_URL from '../config/api';

interface ImmigrationEvaluation {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  immigration_category: string;
  created_at: string;
  degrees: any;
  degreesInProgress: any;
  documents?: Document[];
  // Add all fields used in the modal below:
  date_of_birth?: string;
  gender?: string;
  country_of_birth?: string;
  country_of_citizenship?: string;
  country_of_residence?: string;
  current_visa_status?: string;
  highest_degree?: string;
  major_field?: string;
  university?: string;
  graduation_year?: string;
  occupation?: string;
  employer?: string;
  years_experience?: string;
  job_duties?: string;
  us_relatives?: string;
  previous_visa_denials?: string;
  title?: string;
  title_other?: string;
  visa_status_other?: string;
  visa_expiration_date?: string;
  field_esi?: string;
  field_esi_other?: string;
  employment_status?: string;
  citation_profiles?: string;
  citation_number?: string;
  publication?: string;
  published_year?: string;
  no_publications?: boolean;
  review_number?: string;
  owns_patents?: string;
  patents?: string;
  funding_received?: string;
  fundingDetails?: string;
  ongoing_project?: string;
  ongoing_project_note?: string;
  related_field_work?: string;
  read_notice?: boolean;
  confirm_thank_you_email?: boolean;
  additional_comments?: string;
}

interface Document {
  id: number;
  file_name: string;
  file_path: string;
  uploaded_by: string;
  uploaded_at: string;
}

const Immigrations: React.FC = () => {
  const [evaluations, setEvaluations] = useState<ImmigrationEvaluation[]>([]);
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState<ImmigrationEvaluation|null>(null);
  const [showModal, setShowModal] = useState(false);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [activeTab, setActiveTab] = useState<'details'|'documents'>('details');

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/evaluation/all`).then(r => r.json()).then(data => setEvaluations(data.evaluations || []));
  }, []);

  const handleView = (ev: ImmigrationEvaluation) => {
    setSelected(ev);
    setShowModal(true);
    setActiveTab('details');
    // Always fetch documents for this evaluation
    fetch(`${API_BASE_URL}/api/evaluation/documents/${ev.id}`)
      .then(r => r.json())
      .then(data => setDocuments(data.documents || []));
  };

  const filtered = evaluations.filter(ev =>
    ev.full_name.toLowerCase().includes(filter.toLowerCase()) ||
    ev.email.toLowerCase().includes(filter.toLowerCase()) ||
    ev.phone.toLowerCase().includes(filter.toLowerCase()) ||
    (ev.immigration_category || '').toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <input
          className="border p-2 rounded w-1/3"
          placeholder="Filter by name, email, phone, or category"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Submitted</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(ev => (
              <tr key={ev.id} className="border-t">
                <td className="px-4 py-2">{ev.id}</td>
                <td className="px-4 py-2">{ev.full_name}</td>
                <td className="px-4 py-2">{ev.email}</td>
                <td className="px-4 py-2">{ev.phone}</td>
                <td className="px-4 py-2">{ev.immigration_category}</td>
                <td className="px-4 py-2">{ev.created_at && new Date(ev.created_at).toLocaleString()}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 underline" onClick={() => handleView(ev)}>View</button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={7} className="text-center py-4">No records found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Modal for viewing immigration form and documents */}
      {showModal && selected && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-red-600 text-2xl font-bold" onClick={() => setShowModal(false)}>&times;</button>
            <h2 className="text-xl font-bold mb-2">Immigration Evaluation</h2>
            <div className="mb-4 border-b flex space-x-4">
              <button className={`py-2 px-4 ${activeTab==='details'?'border-b-2 border-blue-600 font-bold':''}`} onClick={()=>setActiveTab('details')}>Details</button>
              <button className={`py-2 px-4 ${activeTab==='documents'?'border-b-2 border-blue-600 font-bold':''}`} onClick={()=>setActiveTab('documents')}>Documents</button>
            </div>
            {activeTab==='details' && (
              <div className="mb-4 max-h-[60vh] overflow-y-auto border p-2 rounded bg-gray-50 text-sm">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-left">
                  <div><span className="font-semibold">Name:</span> {selected.full_name}</div>
                  <div><span className="font-semibold">Email:</span> {selected.email}</div>
                  <div><span className="font-semibold">Phone:</span> {selected.phone}</div>
                  <div><span className="font-semibold">Category:</span> {selected.immigration_category}</div>
                  <div><span className="font-semibold">Submitted:</span> {selected.created_at && new Date(selected.created_at).toLocaleString()}</div>
                  <div><span className="font-semibold">Date of Birth:</span> {selected.date_of_birth || '-'}</div>
                  <div><span className="font-semibold">Gender:</span> {selected.gender || '-'}</div>
                  <div><span className="font-semibold">Country of Birth:</span> {selected.country_of_birth || '-'}</div>
                  <div><span className="font-semibold">Country of Citizenship:</span> {selected.country_of_citizenship || '-'}</div>
                  <div><span className="font-semibold">Country of Residence:</span> {selected.country_of_residence || '-'}</div>
                  <div><span className="font-semibold">Current Visa Status:</span> {selected.current_visa_status || '-'}</div>
                  <div><span className="font-semibold">Highest Degree:</span> {selected.highest_degree || '-'}</div>
                  <div><span className="font-semibold">Major Field:</span> {selected.major_field || '-'}</div>
                  <div><span className="font-semibold">University:</span> {selected.university || '-'}</div>
                  <div><span className="font-semibold">Graduation Year:</span> {selected.graduation_year || '-'}</div>
                  <div><span className="font-semibold">Occupation:</span> {selected.occupation || '-'}</div>
                  <div><span className="font-semibold">Employer:</span> {selected.employer || '-'}</div>
                  <div><span className="font-semibold">Years Experience:</span> {selected.years_experience || '-'}</div>
                  <div><span className="font-semibold">Job Duties:</span> {selected.job_duties || '-'}</div>
                  <div><span className="font-semibold">US Relatives:</span> {selected.us_relatives || '-'}</div>
                  <div><span className="font-semibold">Previous Visa Denials:</span> {selected.previous_visa_denials || '-'}</div>
                  <div><span className="font-semibold">Title:</span> {selected.title || '-'}</div>
                  <div><span className="font-semibold">Other Title:</span> {selected.title_other || '-'}</div>
                  <div><span className="font-semibold">Visa Status Other:</span> {selected.visa_status_other || '-'}</div>
                  <div><span className="font-semibold">Visa Expiration Date:</span> {selected.visa_expiration_date || '-'}</div>
                  <div><span className="font-semibold">Field ESI:</span> {selected.field_esi || '-'}</div>
                  <div><span className="font-semibold">Field ESI Other:</span> {selected.field_esi_other || '-'}</div>
                  <div><span className="font-semibold">Employment Status:</span> {selected.employment_status || '-'}</div>
                  <div><span className="font-semibold">Citation Profiles:</span> {selected.citation_profiles || '-'}</div>
                  <div><span className="font-semibold">Citation Number:</span> {selected.citation_number || '-'}</div>
                  <div><span className="font-semibold">Publication:</span> {selected.publication || '-'}</div>
                  <div><span className="font-semibold">Published Year:</span> {selected.published_year || '-'}</div>
                  <div><span className="font-semibold">No Publications:</span> {selected.no_publications ? 'Yes' : 'No'}</div>
                  <div><span className="font-semibold">Review Number:</span> {selected.review_number || '-'}</div>
                  <div><span className="font-semibold">Owns Patents:</span> {selected.owns_patents || '-'}</div>
                  <div><span className="font-semibold">Patents:</span> {selected.patents || '-'}</div>
                  <div><span className="font-semibold">Funding Received:</span> {selected.funding_received || '-'}</div>
                  <div><span className="font-semibold">Funding Details:</span> {selected.fundingDetails || '-'}</div>
                  <div><span className="font-semibold">Ongoing Project:</span> {selected.ongoing_project || '-'}</div>
                  <div><span className="font-semibold">Ongoing Project Note:</span> {selected.ongoing_project_note || '-'}</div>
                  <div><span className="font-semibold">Related Field Work:</span> {selected.related_field_work || '-'}</div>
                  <div><span className="font-semibold">Read Notice:</span> {selected.read_notice ? 'Yes' : 'No'}</div>
                  <div><span className="font-semibold">Confirm Thank You Email:</span> {selected.confirm_thank_you_email ? 'Yes' : 'No'}</div>
                  <div><span className="font-semibold">Additional Comments:</span> {selected.additional_comments || '-'}</div>
                </div>
                <div className="mt-4 text-left">
                  <span className="font-semibold">Degrees:</span>
                  {(() => {
                    let degreesArr: any[] = [];
                    if (Array.isArray(selected.degrees)) {
                      degreesArr = selected.degrees;
                    } else if (typeof selected.degrees === 'string') {
                      try {
                        degreesArr = JSON.parse(selected.degrees);
                      } catch { degreesArr = []; }
                    }
                    if (degreesArr.length === 0) return <div className="text-gray-500">None</div>;
                    return (
                      <ul className="list-disc pl-6">
                        {degreesArr.map((deg, idx) => (
                          <li key={idx}>
                            <span className="font-semibold">{deg.type || '-'}:</span> {deg.major || '-'} at {deg.university || '-'} ({deg.year || deg.expected || '-'}) {deg.related ? `- Related: ${deg.related}` : ''}
                          </li>
                        ))}
                      </ul>
                    );
                  })()}
                </div>
                <div className="mt-2 text-left">
                  <span className="font-semibold">Degrees In Progress:</span>
                  {(() => {
                    let degreesArr: any[] = [];
                    if (Array.isArray(selected.degreesInProgress)) {
                      degreesArr = selected.degreesInProgress;
                    } else if (typeof selected.degreesInProgress === 'string') {
                      try {
                        degreesArr = JSON.parse(selected.degreesInProgress);
                      } catch { degreesArr = []; }
                    }
                    if (degreesArr.length === 0) return <div className="text-gray-500">None</div>;
                    return (
                      <ul className="list-disc pl-6">
                        {degreesArr.map((deg, idx) => (
                          <li key={idx}>
                            <span className="font-semibold">{deg.type || '-'}:</span> {deg.major || '-'} at {deg.university || '-'} (Expected: {deg.year || deg.expected || '-'}) {deg.related ? `- Related: ${deg.related}` : ''}
                          </li>
                        ))}
                      </ul>
                    );
                  })()}
                </div>
                {/* Add more sections for other fields as needed */}
              </div>
            )}
            {activeTab==='documents' && (
              <div>
                <h3 className="font-semibold mb-2">Documents</h3>
                {documents.length > 0 ? (
                  <ul>
                    {documents.map(doc => (
                      <li key={doc.id}>
                        <a href={`${API_BASE_URL}${doc.file_path}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{doc.file_name}</a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-gray-500">No documents uploaded for this evaluation.<br/>If you expect documents, check that they were uploaded after the evaluation and that the backend is saving <b>evaluation_id</b> correctly.</div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Immigrations;
