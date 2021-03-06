import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Page within</h1>
      <nav>
        <ul>
          <li>
          <Link href="/">
              <a>Back Home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
