import React, { useState } from 'react';

const CreatePost = ({ selectedUser, setCreatedPost }) => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const createPost = async () => {
    if (!postTitle || !postBody) {
      setError('Please fill in all the fields.');
      return;
    }
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: postTitle,
          body: postBody,
          userId: selectedUser.id,
        }),
      });
      const data = await response.json();
      setCreatedPost(data);
      setError('');
    } catch (error) {
      setError('Error creating post.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">2. Create a Post</h2>
      <input
        type="text"
        placeholder="Post Title"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        className="border p-2 rounded mb-2 block w-full"
      />
      <textarea
        placeholder="Post Body"
        value={postBody}
        onChange={(e) => setPostBody(e.target.value)}
        className="border p-2 rounded mb-2 block w-full"
      ></textarea>
      <button onClick={createPost} className="bg-blue-500 text-white p-2 rounded">
        {loading ? 'Creating Post...' : 'Create Post'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default CreatePost;
