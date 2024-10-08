import React, { useState } from 'react';

const Comments = ({ postId, comments, setComments }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      const data = await response.json();
      setComments(data);
      setError('');
    } catch (error) {
      setError('Error fetching comments.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-green-500 font-semibold mb-2">4. Fetch Comments</h2>
      <button onClick={fetchComments} className="bg-green-500 text-white p-2 rounded">
        {loading ? 'Fetching Comments...' : 'Get Comments for Post'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {comments.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Comments</h3>
          {comments.map((comment) => (
            <div key={comment.id} className="border p-4 mb-2 rounded">
              <p className="font-semibold">{comment.name}</p>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
