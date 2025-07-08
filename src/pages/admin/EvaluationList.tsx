import React, { useEffect, useState } from 'react';
import API_BASE_URL from '../../config/api';

type Evaluation = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  immigration_category: string;
  created_at?: string;
  // add other fields if needed
};

const EvaluationList = () => {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchEvaluations = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/evaluation/all`);
      const data = await res.json();
      setEvaluations(data.evaluations || []);
    } catch (err) {
      setError('Failed to fetch evaluations');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEvaluations();
  }, []);

  const handleDelete = async (id: any) => {
    if (!window.confirm('Are you sure you want to delete this evaluation?')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/api/evaluation/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setEvaluations(evaluations.filter(e => e.id !== id));
      } else {
        alert('Delete failed: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      alert('Delete failed: ' + err);
    }
  };

interface HandleViewInfo extends Evaluation {}

const handleView = (info: HandleViewInfo) => {
    alert(JSON.stringify(info, null, 2));
};

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Evaluation Submissions</h2>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Phone</th>
            <th className="border px-2 py-1">Category</th>
            <th className="border px-2 py-1">Created At</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {evaluations.map(ev => (
            <tr key={ev.id}>
              <td className="border px-2 py-1">{ev.id}</td>
              <td className="border px-2 py-1">{ev.full_name}</td>
              <td className="border px-2 py-1">{ev.email}</td>
              <td className="border px-2 py-1">{ev.phone}</td>
              <td className="border px-2 py-1">{ev.immigration_category}</td>
              <td className="border px-2 py-1">{ev.created_at?.slice(0,10)}</td>
              <td className="border px-2 py-1">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2" onClick={() => handleView(ev)}>View</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(ev.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EvaluationList;
