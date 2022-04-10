import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

// Step1: Find the file corresponding to the slug
// Step2: Populate them inside the page
const slug = () => {
    const router  = useRouter();
    const {slug} = router.query
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>Title of the page {slug}</h1>
      <hr />
      <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi non nisi labore nihil molestias iste harum soluta, provident ea corrupti at, velit in.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia molestias</p> 
        <p>sequi inventore culpa eum repellat quo nulla temporibus vitae hic nisi iste odit necessitatibus quaerat consequuntur ratione voluptate labore, ea eos laboriosam, velit accusantium obcaecati molestiae. Ipsam magnam ut quidem, nobis cupiditate ratione velit
        </p>
      </div>
      </main>
    </div>
  )
};

export default slug