import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaEye, FaPlus } from 'react-icons/fa';
import API_BASE_URL from '../config/api';

interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  status?: string;
  contact?: string;
  address?: string;
  dob?: string;
}

const defaultUser: Partial<User> = {
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  role: 'client',
  status: 'active',
};

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalUser, setModalUser] = useState<Partial<User>>(defaultUser);
  const [modalMode, setModalMode] = useState<'create'|'edit'|'view'>('create');

  const fetchUsers = async () => {
    const res = await fetch(`${API_BASE_URL}/api/users`);
    const data = await res.json();
    setUsers(data.users || []);
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm('Delete this user?')) return;
    await fetch(`${API_BASE_URL}/api/users/${id}`, { method: 'DELETE' });
    fetchUsers();
  };

  const handleEdit = (user: User) => {
    setModalUser(user);
    setModalMode('edit');
    setShowModal(true);
  };

  const handleView = (user: User) => {
    setModalUser(user);
    setModalMode('view');
    setShowModal(true);
  };

  const handleCreate = () => {
    setModalUser(defaultUser);
    setModalMode('create');
    setShowModal(true);
  };

  const handleModalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setModalUser({ ...modalUser, [e.target.name]: e.target.value });
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (modalMode === 'create') {
      await fetch(`${API_BASE_URL}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(modalUser),
      });
    } else if (modalMode === 'edit' && modalUser.id) {
      await fetch(`${API_BASE_URL}/api/users/${modalUser.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(modalUser),
      });
    }
    setShowModal(false);
    fetchUsers();
  };

  const filteredUsers = users.filter(u =>
    u.username.toLowerCase().includes(filter.toLowerCase()) ||
    u.first_name.toLowerCase().includes(filter.toLowerCase()) ||
    u.last_name.toLowerCase().includes(filter.toLowerCase()) ||
    u.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <input
          className="border p-2 rounded w-1/3"
          placeholder="Filter by name, username, or email"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2" onClick={handleCreate}>
          <FaPlus /> Create User
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id} className="border-t">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.first_name}</td>
                <td className="px-4 py-2">{user.last_name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">{user.status}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button className="text-blue-600" onClick={() => handleView(user)} title="View"><FaEye /></button>
                  <button className="text-green-600" onClick={() => handleEdit(user)} title="Edit"><FaEdit /></button>
                  <button className="text-red-600" onClick={() => handleDelete(user.id)} title="Delete"><FaTrash /></button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr><td colSpan={8} className="text-center py-4">No users found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Modal for Create/Edit/View */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded text-left shadow-lg p-6 w-full max-w-md relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-red-600 text-2xl font-bold" onClick={() => setShowModal(false)}>&times;</button>
            <h2 className="text-xl font-bold mb-4">{modalMode === 'create' ? 'Create User' : modalMode === 'edit' ? 'Edit User' : 'View User'}</h2>
            <form onSubmit={handleModalSubmit}>
              <div className="mb-2">
                <label className="block font-semibold">Username</label>
                <input className="border p-2 rounded w-full" name="username" value={modalUser.username || ''} onChange={handleModalChange} disabled={modalMode === 'view'} required />
              </div>
              <div className="mb-2">
                <label className="block font-semibold">First Name</label>
                <input className="border p-2 rounded w-full" name="first_name" value={modalUser.first_name || ''} onChange={handleModalChange} disabled={modalMode === 'view'} required />
              </div>
              <div className="mb-2">
                <label className="block font-semibold">Last Name</label>
                <input className="border p-2 rounded w-full" name="last_name" value={modalUser.last_name || ''} onChange={handleModalChange} disabled={modalMode === 'view'} required />
              </div>
              <div className="mb-2">
                <label className="block font-semibold">Email</label>
                <input className="border p-2 rounded w-full" name="email" value={modalUser.email || ''} onChange={handleModalChange} disabled={modalMode === 'view'} required />
              </div>
              <div className="mb-2">
                <label className="block font-semibold">Role</label>
                <select className="border p-2 rounded w-full" name="role" value={modalUser.role || 'client'} onChange={handleModalChange} disabled={modalMode === 'view'} required>
                  <option value="admin">Admin</option>
                  <option value="operator">Operator</option>
                  <option value="client">Client</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block font-semibold">Status</label>
                <input className="border p-2 rounded w-full" name="status" value={modalUser.status || ''} onChange={handleModalChange} disabled={modalMode === 'view'} />
              </div>
              {modalMode !== 'view' && (
                <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4" type="submit">{modalMode === 'create' ? 'Create' : 'Update'}</button>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
