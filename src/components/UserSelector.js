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
      <h2 className="font-semibold mb-2 text-green-500" >1. Select a User</h2>
      {loading && <p className='text-center m-2 font-bold'>Loading users...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <select
        onChange={(e) => setSelectedUser(users.find(user => user.id === parseInt(e.target.value)))}
        className="text-white font-bold border p-2 rounded cursor-pointer focus:outline-none"
        style={{ background: "linear-gradient(to right, skyblue, dodgerblue)" }}
        onMouseOver={(e) =>
          (e.target.style.background = "linear-gradient(to right, dodgerblue, skyblue)")
        }
        onMouseOut={(e) =>
          (e.target.style.background = "linear-gradient(to right, skyblue, dodgerblue)")
        }
      >
        <option className='text-black font-bold' value="">Select User</option>
        {users.map((user) => (
          <option className='text-black font-bold'  key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelector;
