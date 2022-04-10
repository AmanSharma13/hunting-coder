import React,{ useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

// Step1: Collect all the files from the blogdata directory
// Step2: Iterate through them and display them
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      return a.json();})
      .then((parsed)=>{
        setBlogs(parsed)
      })
  }, [])
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          {blogs.map((blogItem)=>{
            return <div key={blogItem.title} className={styles.blogItem}>
            <Link href={`/blogpost/${blogItem.slug}`}>
            <h2 className={styles.blogItemh2}>{blogItem.title}</h2></Link>
            <p className={styles.blogItemp}>{blogItem.content.substr(0, 140)}...</p>
          </div>
          })}
          </main>
        </div>
  )
  
}

export default Blog