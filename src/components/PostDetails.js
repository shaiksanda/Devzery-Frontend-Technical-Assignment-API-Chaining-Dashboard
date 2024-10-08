import React from 'react';

const PostDetails = ({ createdPost }) => (
  <div className="mb-6">
    <h2 className="text-green-500 font-semibold mb-2">3. Post Created</h2>
    <p>Post ID: {createdPost.id}</p>
    <p>Title: {createdPost.title}</p>
    <p>Body: {createdPost.body}</p>
  </div>
);

export default PostDetails;
