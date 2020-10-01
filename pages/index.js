import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>S.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/about">
        <a>About Us</a>
      </Link>
      <Link href="/contact">
        <a>Contact Me</a>
      </Link>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Haskett Portfolio Site
        </h1>

        <p className={styles.description}>
          Just a little landing page and description here
        </p>

        <div className={styles.grid}>
          <a href="project/1" className={styles.card}>
            <h3>Project 1</h3>
            <p>description of Project 1</p>
          </a>

          <a href="project/2" className={styles.card}>
            <h3>Project 2</h3>
            <p>description of Project 2</p>
          </a>

          <a href="project/3" className={styles.card}>
            <h3>Project 3</h3>
            <p>description of Project 3</p>
          </a>

          <a href="project/4" className={styles.card}>

          <h3>Project 4</h3>
            <p>description of Project 4</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        contact info
      </footer>
    </div>
  )
}
