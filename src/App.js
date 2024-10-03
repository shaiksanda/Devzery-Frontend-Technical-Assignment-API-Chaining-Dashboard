import React, { useState } from 'react';
import UserSelector from './components/UserSelector';
import CreatePost from './components/CreatePost';
import PostDetails from './components/PostDetails';
import Comments from './components/Comments';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [createdPost, setCreatedPost] = useState(null);
  const [comments, setComments] = useState([]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">API Chaining Dashboard</h1>
      
      <UserSelector setSelectedUser={setSelectedUser} />

      {selectedUser && (
        <CreatePost selectedUser={selectedUser} setCreatedPost={setCreatedPost} />
      )}

      {createdPost && (
        <PostDetails createdPost={createdPost} />
      )}

      {createdPost && (
        <Comments postId={createdPost.id} comments={comments} setComments={setComments} />
      )}
    </div>
  );
}

export default App;
