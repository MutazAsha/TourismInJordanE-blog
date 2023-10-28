import React, { useState } from 'react';
import axios from 'axios';

function BlogForm() {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    city: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-api-url/create-blog', formData);
      console.log('Blog created:', response.data);
      // Optionally, you can redirect to the newly created blog or update the blogs list.
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  const handleCreateBlog = () => {
    // Execute the necessary actions when clicking the "Create Blog" button
    handleSubmit();
  };

  return (
    <div className="flex items-center justify-center h-screen">
    <div class="BlogForm"> 
      <h2>Create a New Blog</h2>
      <form class="bf" onSubmit={handleSubmit}>
        <div class="input">
          <label htmlFor="title">Blog Title:</label>
          <input
            type="text"
            id="input-blog"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="input-blog"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="input-blog"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="details">Blog Details:</label>
          <textarea
            id="input-blog"
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="button" // Change the button type to "button"
          onClick={handleCreateBlog} // Add the event when clicking the button
        >
          Create Blog
        </button>
      </form>
    </div></div>
  );
}

export default BlogForm;
