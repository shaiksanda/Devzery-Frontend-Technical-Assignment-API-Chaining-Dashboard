import React, { useState, useEffect } from 'react';

const UserSelector = ({ setSelectedUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError('Error fetching users.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">1. Select a User</h2>
      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <select
        onChange={(e) => setSelectedUser(users.find(user => user.id === parseInt(e.target.value)))}
        className="border p-2 rounded"
      >
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelector;
