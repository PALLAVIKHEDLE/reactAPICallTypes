import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeletePost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            });
    }, []);

    const handleDelete = (postId) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(() => {
                setPosts(posts.filter(post => post.id !== postId));
                console.log(`Post with ID ${postId} deleted successfully`);
            })
            .catch(error => {
                console.error('Error deleting the post:', error);
            });
    };

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <button onClick={() => handleDelete(post.id)}>Delete Post</button>
                </div>
            ))}
        </div>
    );
};

export default DeletePost;