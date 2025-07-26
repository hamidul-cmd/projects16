import React from 'react'
import { useParams } from 'react-router-dom'
import { blog as blogData } from '../Data/blog';

function BlogDetail() {
  const {id} = useParams()
  const blogPost = blogData.find((p) => p.id.toString() === id);
  
  if (!blogPost) {
    return <div>Blog post not found</div>
  }

  return (
    <div>
      {id}
      <img src={blogPost.img} alt={blogPost.title || ''} />
    </div>
  )
}

export default BlogDetail
