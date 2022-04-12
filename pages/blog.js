import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";

// Step1: Collect all the files from the blogdata directory
// Step2: Iterate through them and display them
const Blog = (props) => {
  // console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(()=>{

  // }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          return (
            <div key={blogItem.title} className={styles.blogItem}>
              <Link href={`/blogpost/${blogItem.slug}`} passHref>
                <h2 className={styles.blogItemh2}>{blogItem.title}</h2>
              </Link>
              <p className={styles.blogItemp}>
                {blogItem.content.substr(0, 140)}...
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
