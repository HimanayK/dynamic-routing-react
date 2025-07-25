// src/components/Home.jsx

import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data.js";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-10 text-blue-800">📰 All Blogs</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link key={blog.id} to={`/blog/${blog.id}`}>
            <div className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-md p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center text-blue-700">
                {blog.title}
              </h2>
              <p className="text-sm text-center text-gray-700 mt-2">
                {blog.subTitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
