import React, { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "mario",
      id: "1",
    },
    {
      title: "Welcome To the Party",
      body: "lorem ipsum...",
      author: "yoshi",
      id: "2",
    },
    {
      title: "Another Post",
      body: "lorem ipsum...",
      author: "mario",
      id: "3",
    },
  ]);

  return (
    <div className="Home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h1>{blog.title}</h1>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
