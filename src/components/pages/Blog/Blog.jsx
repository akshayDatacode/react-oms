import React, { useEffect } from 'react'
import BlogPost1 from './BlogPost1'

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <BlogPost1 />
    </>
  )
}

export default Blog