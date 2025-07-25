// src/pages/BlogDetail.jsx


import React from 'react'
import { useParams } from 'react-router-dom'
import { blogs } from '../data.js'
import { Link } from 'react-router-dom'

const BlogDetail = () => {
  const { id } = useParams()
  const blog = blogs.find((b) => b.id === parseInt(id))

  return (

    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-pink-100 flex flex-col gap-8 items-center justify-center px-4">
      <Link to="/" className='font-bold text-blue-800 hover:text-lg'>🔙 Back to Blogs</Link>
      <div className="max-w-xl backdrop-blur-xl bg-white/30 border border-white/50 p-10 rounded-xl shadow-lg text-center">
        <img src={blog.image} alt={blog.title} className="w-20 h-20 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-blue-800 mb-4">{blog.title}</h2>
        <p className="text-blue-950 text-lg text-justify">{blog.description}</p>
      </div>
    </div>
  )
}

export default BlogDetail
